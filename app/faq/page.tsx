import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Bitcoin. Our cryptocurrency payments are processed securely and instantly."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders are typically processed within 24 hours. Domestic shipping takes 2-4 business days, while international shipping can take 5-10 business days."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. International shipping costs and delivery times vary by location."
  },
  {
    question: "What is your price guarantee?",
    answer: "If you find a lower price on an identical product from an authorized retailer within 30 days of purchase, we'll refund you the difference plus an additional 10%."
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, all our products are 100% authentic and sourced directly from authorized distributors or manufacturers."
  },
  {
    question: "How do Bitcoin payments work?",
    answer: "During checkout, you'll receive a unique Bitcoin address for payment. Once the transaction is confirmed on the blockchain, your order will be processed automatically."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unopened items in their original packaging. Please visit our Returns & Refunds page for detailed information."
  },
  {
    question: "Do you offer warranty coverage?",
    answer: "All products come with their original manufacturer warranty. Additional extended warranty options are available at checkout."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard."
  },
  {
    question: "What happens if my item arrives damaged?",
    answer: "Contact our support team immediately with photos of the damage. We'll arrange a free return and send a replacement right away."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Find answers to common questions about our products, services, and policies.
          If you can't find what you're looking for, please contact our support team.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help. Contact us via email or phone.
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email: </span>
              <a href="mailto:support@classicbuy.shop" className="text-chart-1 hover:underline">
                support@classicbuy.shop
              </a>
            </p>
            <p>
              <span className="font-medium">Hours: </span>
              <span>Monday - Friday, 9am - 6pm EST</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}