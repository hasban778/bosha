import Link from "next/link";
import { ArrowRight, PackageCheck, RefreshCw, Truck } from "lucide-react";

const steps = [
  {
    icon: PackageCheck,
    title: "Initiate Return",
    description: "Contact our support team or use your account dashboard to start the return process within 30 days of delivery."
  },
  {
    icon: RefreshCw,
    title: "Return Approval",
    description: "We'll review your return request and send you a prepaid return shipping label within 24 hours."
  },
  {
    icon: Truck,
    title: "Ship the Item",
    description: "Pack the item securely in its original packaging and attach the provided shipping label."
  }
];

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We want you to be completely satisfied with your purchase. If you're not happy with your order,
          we offer a simple and hassle-free return process.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-lg border bg-card">
              <div className="mb-4">
                <step.icon className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Items can be returned within 30 days of delivery for a full refund, provided they are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unopened and in original packaging</li>
                <li>Free from damage and in resalable condition</li>
                <li>Accompanied by all original accessories and documentation</li>
                <li>Not listed as final sale or non-returnable</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Once we receive your return:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We'll inspect the item within 2 business days</li>
                <li>Approved refunds will be processed to your original payment method</li>
                <li>Credit card refunds typically appear within 5-7 business days</li>
                <li>Bitcoin refunds will be processed at the current market rate</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>The following items cannot be returned:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opened software or digital products</li>
                <li>Items marked as "Final Sale"</li>
                <li>Custom or personalized orders</li>
                <li>Items showing signs of use or damage</li>
              </ul>
            </div>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Need to Return an Item?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is ready to assist you with your return. Contact us or visit our FAQ page for more information.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:support@classicbuy.shop"
                className="inline-flex items-center gap-2 text-chart-1 hover:underline"
              >
                Contact Support <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                View FAQ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}