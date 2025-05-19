export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground mb-12">
          At ClassicBuy, we take your privacy seriously. This policy outlines how we collect, use,
          and protect your personal information.
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communication with our support team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating about your orders and account</li>
              <li>Providing customer support</li>
              <li>Sending important updates about our services</li>
              <li>Improving our website and services</li>
              <li>Preventing fraud and maintaining security</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Encryption of sensitive data</li>
              <li>Secure payment processing</li>
              <li>Regular security audits</li>
              <li>Limited access to personal information</li>
              <li>Compliance with industry standards</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve your shopping experience</li>
              <li>Provide personalized recommendations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our privacy policy or your personal information, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:privacy@classicbuy.shop" className="text-chart-1 hover:underline">
                  privacy@classicbuy.shop
                </a>
              </p>
              <p>
                <span className="font-medium">Address: </span>
                ClassicBuy Privacy Team<br />
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
              We reserve the right to update this privacy policy at any time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}