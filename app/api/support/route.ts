import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const supportFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  productId: z.string()
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = supportFormSchema.parse(body)

    // Add the support request to Firebase
    const supportRef = await addDoc(collection(db, 'support_requests'), {
      ...validatedData,
      status: 'open',
      createdAt: serverTimestamp(),
    })

    // TODO: Implement email notification with Resend
    // const emailResponse = await resend.emails.send({
    //   from: 'ChemLab Synthesis <support@chemlab.com>',
    //   to: [validatedData.email],
    //   subject: 'Support Request Received - ChemLab Synthesis',
    //   html: `Thank you for contacting our support team. We'll get back to you shortly.`
    // });

    return NextResponse.json(
      { 
        message: 'Support request submitted successfully',
        supportId: supportRef.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Support Request Error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request data', errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: 'Failed to submit support request' },
      { status: 500 }
    )
  }
} 