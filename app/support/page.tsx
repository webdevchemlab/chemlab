import { Container } from "@/components/ui/container";
import { Mail, Phone, Clock, FileText, MessagesSquare, Headphones } from "lucide-react";
import Link from "next/link";
import { SupportForm } from "@/components/forms/support-form";

export const metadata = {
  title: "Technical Support",
  description: "Get technical support and assistance for chemical products and laboratory equipment.",
};

export default function TechnicalSupport() {
  return (
    <Container>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Technical Support</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Our technical support team is here to help you with product information, usage guidelines, and safety protocols.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Support */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold">Email Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Send us your technical queries and receive detailed assistance within 24 hours.
              </p>
              <a
                href="mailto:support@chemlabsynthesis.com"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                support@chemlabsynthesis.com
              </a>
            </div>

            {/* Phone Support */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-blue-500" />
                <h2 className="text-xl font-semibold">Phone Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Speak directly with our technical experts for immediate assistance.
              </p>
              <p className="font-medium">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground mt-2">
                <Clock className="h-4 w-4 inline mr-2" />
                Monday - Friday, 9:00 AM - 5:00 PM EST
              </p>
            </div>
          </div>

          {/* Support Form */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <div className="border rounded-lg p-6 bg-white">
              <SupportForm />
            </div>
          </div>

          {/* Support Resources */}
          <h2 className="text-2xl font-bold mb-6">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Documentation */}
            <div className="border rounded-lg p-6">
              <FileText className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access detailed product specifications, usage guides, and technical documentation.
              </p>
              <Link
                href="/msds"
                className="text-blue-500 hover:text-blue-700 font-medium text-sm"
              >
                View Documentation →
              </Link>
            </div>

            {/* FAQ */}
            <div className="border rounded-lg p-6">
              <MessagesSquare className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">FAQ</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find answers to commonly asked questions about our products and services.
              </p>
              <Link
                href="/faq"
                className="text-blue-500 hover:text-blue-700 font-medium text-sm"
              >
                View FAQ →
              </Link>
            </div>

            {/* Safety Guidelines */}
            <div className="border rounded-lg p-6">
              <Headphones className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Safety Guidelines</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about proper handling, storage, and safety protocols for our products.
              </p>
              <Link
                href="/safety"
                className="text-blue-500 hover:text-blue-700 font-medium text-sm"
              >
                View Guidelines →
              </Link>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">Emergency Contact</h2>
            <p className="text-red-700 mb-2">
              For chemical emergencies, spills, or accidents requiring immediate assistance:
            </p>
            <p className="text-xl font-bold text-red-700">Emergency Hotline: +1 (800) 424-9300</p>
            <p className="text-sm text-red-600 mt-2">
              Available 24/7 for emergency response
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
} 