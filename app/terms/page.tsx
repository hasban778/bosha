export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Please read these terms and conditions carefully before using ClassicBuy's services.
          By accessing or using our website, you agree to be bound by these terms.
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must be at least 18 years old to use this service</li>
              <li>You must provide valid and accurate information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide accurate product information, however:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Product images are for illustration purposes only</li>
              <li>We reserve the right to modify product specifications without notice</li>
              <li>Prices are subject to change without notice</li>
              <li>Products are subject to availability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
            <p className="text-muted-foreground mb-4">
              Our payment terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All prices are in USD unless otherwise stated</li>
              <li>Cryptocurrency payments are processed at current market rates</li>
              <li>Payment must be received in full before order processing</li>
              <li>We reserve the right to cancel orders in case of pricing errors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
            <p className="text-muted-foreground mb-4">
              Our shipping policies include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers upon delivery to the carrier</li>
              <li>International customers are responsible for duties and taxes</li>
              <li>We are not liable for shipping delays beyond our control</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this website is protected by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Copyright laws</li>
              <li>Trademark rights</li>
              <li>Other intellectual property rights</li>
              <li>You may not use our content without express permission</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              ClassicBuy shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data or business interruption</li>
              <li>Damages resulting from unauthorized account access</li>
              <li>Technical malfunctions or cyber attacks</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-4">
              Any disputes shall be resolved through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Direct negotiation first</li>
              <li>Mediation if necessary</li>
              <li>Binding arbitration as a last resort</li>
              <li>Jurisdiction of New York state courts</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these terms, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:legal@classicbuy.shop" className="text-chart-1 hover:underline">
                  legal@classicbuy.shop
                </a>
              </p>
              <p>
                <span className="font-medium">Address: </span>
                ClassicBuy Legal Department<br />
                123 Tech Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              We reserve the right to modify these terms at any time. Your continued use of the website
              following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}