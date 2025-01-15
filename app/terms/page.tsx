import { Container } from "@/components/ui/container";

export default function Terms() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of ChemLab Synthesis's website and services. By accessing or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
            <p>
              We strive to provide accurate product information, including specifications, prices, and availability. However, we reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify product specifications without notice</li>
              <li>Correct pricing errors or inaccuracies</li>
              <li>Limit quantities of products available for purchase</li>
              <li>Discontinue products without prior notice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Ordering and Purchase</h2>
            <p>By placing an order, you acknowledge that:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You are authorized to purchase laboratory chemicals</li>
              <li>You have necessary licenses and permits for handling chemicals</li>
              <li>You will comply with all applicable regulations</li>
              <li>You will handle and store products safely</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Safety and Compliance</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Follow all safety guidelines and instructions</li>
              <li>Maintain proper storage conditions</li>
              <li>Use appropriate personal protective equipment</li>
              <li>Comply with local, state, and federal regulations</li>
              <li>Report any incidents or accidents promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
            <p>
              We follow strict guidelines for chemical transportation. Delivery times may vary based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Product availability</li>
              <li>Shipping restrictions for hazardous materials</li>
              <li>Delivery location and accessibility</li>
              <li>Required permits and documentation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
            <p>
              Due to the nature of chemical products, returns are subject to strict conditions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Products must be unopened and in original packaging</li>
              <li>Returns must be authorized in advance</li>
              <li>Certain hazardous materials cannot be returned</li>
              <li>Customer is responsible for return shipping costs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              ChemLab Synthesis shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
              <br />
              Email: legal@chemlabsynthesis.com
              <br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
} 