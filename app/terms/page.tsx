"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  ShoppingCart, 
  Bitcoin, 
  Shield,
  ArrowLeft,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Truck,
  RotateCcw
} from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    content: [
      {
        subtitle: 'Agreement to Terms',
        items: [
          'By accessing or using ClassicBuy, you agree to be bound by these Terms of Service',
          'If you do not agree to these terms, please do not use our services',
          'These terms apply to all users, including browsers, customers, and contributors',
          'We may update these terms at any time, and continued use constitutes acceptance'
        ]
      }
    ]
  },
  {
    id: 'products-services',
    title: 'Products and Services',
    icon: ShoppingCart,
    content: [
      {
        subtitle: 'Product Information',
        items: [
          'We strive to provide accurate product descriptions and pricing',
          'Product availability is subject to change without notice',
          'All prices are listed in USD and subject to applicable taxes',
          'We reserve the right to limit quantities and refuse service'
        ]
      },
      {
        subtitle: 'Pricing and Availability',
        items: [
          'Prices are subject to change without prior notice',
          'We offer price matching on identical products from authorized retailers',
          'Special offers and discounts may have additional terms and conditions',
          'Out-of-stock items will be backordered or refunded at your choice'
        ]
      }
    ]
  },
  {
    id: 'bitcoin-payments',
    title: 'Bitcoin and Cryptocurrency Payments',
    icon: Bitcoin,
    content: [
      {
        subtitle: 'Payment Processing',
        items: [
          'We accept Bitcoin via Lightning Network and on-chain transactions',
          'All cryptocurrency transactions are final and irreversible',
          'You are responsible for ensuring correct payment amounts and addresses',
          'Transaction fees may apply and are the responsibility of the customer'
        ]
      },
      {
        subtitle: 'Exchange Rates',
        items: [
          'Bitcoin prices are calculated at the time of invoice generation',
          'Exchange rates are provided by third-party services and may fluctuate',
          'You have 15 minutes to complete Lightning payments before expiration',
          'On-chain payments must be confirmed within 24 hours'
        ]
      },
      {
        subtitle: 'Refunds and Cryptocurrency',
        items: [
          'Refunds for cryptocurrency payments will be processed in USD equivalent',
          'Refund amounts are calculated based on the original USD purchase price',
          'We do not guarantee refunds in the original cryptocurrency amount',
          'Processing time for crypto refunds may be 5-10 business days'
        ]
      }
    ]
  },
  {
    id: 'shipping-delivery',
    title: 'Shipping and Delivery',
    icon: Truck,
    content: [
      {
        subtitle: 'Shipping Policy',
        items: [
          'Free express shipping on all orders worldwide',
          'Delivery times vary by location and product availability',
          'We are not responsible for delays caused by customs or local authorities',
          'Signature confirmation may be required for high-value items'
        ]
      },
      {
        subtitle: 'International Shipping',
        items: [
          'International customers are responsible for customs duties and taxes',
          'Some products may be restricted in certain countries',
          'Delivery times for international orders may be extended',
          'We comply with all applicable export and import regulations'
        ]
      }
    ]
  },
  {
    id: 'returns-refunds',
    title: 'Returns and Refunds',
    icon: RotateCcw,
    content: [
      {
        subtitle: '30-Day Return Policy',
        items: [
          'Items can be returned within 30 days of delivery for a full refund',
          'Products must be in original condition with all packaging and accessories',
          'Custom or personalized items are not eligible for return',
          'Return shipping costs are the responsibility of the customer unless item is defective'
        ]
      },
      {
        subtitle: 'Refund Processing',
        items: [
          'Refunds are processed within 5-10 business days after we receive the return',
          'Original shipping costs are non-refundable unless item was defective',
          'Refunds are issued to the original payment method when possible',
          'Cryptocurrency refunds are processed in USD equivalent value'
        ]
      }
    ]
  },
  {
    id: 'warranties',
    title: 'Warranties and Disclaimers',
    icon: Shield,
    content: [
      {
        subtitle: 'Product Warranties',
        items: [
          'All products come with manufacturer warranties as specified',
          'We provide additional 2-year warranty coverage on select items',
          'Warranty claims should be directed to us first for fastest resolution',
          'We will facilitate warranty repairs or replacements as needed'
        ]
      },
      {
        subtitle: 'Disclaimers',
        items: [
          'Products are sold "as is" except for express warranties provided',
          'We disclaim all implied warranties to the extent permitted by law',
          'We are not liable for indirect, incidental, or consequential damages',
          'Our liability is limited to the purchase price of the product'
        ]
      }
    ]
  },
  {
    id: 'user-conduct',
    title: 'User Conduct',
    icon: AlertTriangle,
    content: [
      {
        subtitle: 'Prohibited Activities',
        items: [
          'Using our services for any illegal or unauthorized purpose',
          'Attempting to gain unauthorized access to our systems',
          'Interfering with the proper functioning of our website',
          'Submitting false or misleading information'
        ]
      },
      {
        subtitle: 'Account Responsibilities',
        items: [
          'You are responsible for maintaining the security of your account',
          'You must provide accurate and complete information',
          'You must notify us immediately of any unauthorized use',
          'You are liable for all activities that occur under your account'
        ]
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: FileText,
    content: [
      {
        subtitle: 'Our Rights',
        items: [
          'All content on our website is protected by copyright and trademark laws',
          'You may not reproduce, distribute, or create derivative works without permission',
          'Our trademarks and logos may not be used without written consent',
          'We respect the intellectual property rights of others'
        ]
      },
      {
        subtitle: 'User Content',
        items: [
          'You retain ownership of content you submit (reviews, comments, etc.)',
          'You grant us a license to use, display, and distribute your content',
          'You represent that your content does not infringe on others\' rights',
          'We may remove content that violates these terms or applicable laws'
        ]
      }
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button variant="outline" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
              <span className="block text-sm text-yellow-400 mt-2">Legal Terms & Conditions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These terms govern your use of ClassicBuy and the purchase of our products. 
              Please read them carefully before making a purchase.
            </p>
          </div>

          {/* Last Updated */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </motion.div>

        {/* Quick Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-blue-500/10 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <FileText className="w-5 h-5" />
                Key Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>30-day return policy on all items</span>
                </div>
                <div className="flex items-start gap-2">
                  <Bitcoin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Bitcoin payments are final and irreversible</span>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>Free express shipping worldwide</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>2-year warranty on select products</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <section.icon className="w-5 h-5 text-yellow-400" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((subsection, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold mb-3 text-foreground">
                        {subsection.subtitle}
                      </h4>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-yellow-500/10 border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle className="w-5 h-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                These terms are subject to change. We will notify users of significant changes 
                via email or website notice. Continued use of our services after changes 
                constitutes acceptance of the new terms.
              </p>
              <p className="text-sm text-muted-foreground">
                For questions about these terms, please contact our legal team at{' '}
                <a href="mailto:legal@classicbuy.shop" className="text-yellow-400 hover:text-yellow-300 underline">
                  legal@classicbuy.shop
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            These Terms of Service work together with our{' '}
            <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 underline">
              Privacy Policy
            </Link>
            {' '}to govern your use of ClassicBuy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
