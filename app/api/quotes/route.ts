import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  quantity: z.string().min(1, "Please enter the required quantity"),
  message: z.string().optional(),
  productId: z.string()
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = quoteFormSchema.parse(body)

    // Add the quote request to Firebase
    const quoteRef = await addDoc(collection(db, 'quote_requests'), {
      ...validatedData,
      status: 'pending',
      createdAt: serverTimestamp(),
    })

    // TODO: Implement email notification with Resend
    // const emailResponse = await resend.emails.send({
    //   from: 'ChemLab Synthesis <quotes@chemlab.com>',
    //   to: [validatedData.email],
    //   subject: 'Quote Request Received - ChemLab Synthesis',
    //   html: `Thank you for your quote request. We'll get back to you shortly.`
    // });

    return NextResponse.json(
      { 
        message: 'Quote request submitted successfully',
        quoteId: quoteRef.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Quote Request Error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request data', errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
} 