"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Mail, 
  Bitcoin,
  ArrowLeft,
  Calendar,
  Globe,
  Database,
  UserCheck
} from 'lucide-react';

const sections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: Database,
    content: [
      {
        subtitle: 'Personal Information',
        items: [
          'Name and contact information (email address, shipping address)',
          'Payment information (Bitcoin wallet addresses, transaction IDs)',
          'Order history and purchase preferences',
          'Account credentials (encrypted passwords)'
        ]
      },
      {
        subtitle: 'Automatically Collected Information',
        items: [
          'Device information (IP address, browser type, operating system)',
          'Usage data (pages visited, time spent on site, click patterns)',
          'Cookies and similar tracking technologies',
          'Location data (general geographic location based on IP address)'
        ]
      }
    ]
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    icon: UserCheck,
    content: [
      {
        subtitle: 'Primary Uses',
        items: [
          'Process and fulfill your orders',
          'Communicate about your purchases and account',
          'Provide customer support and respond to inquiries',
          'Send important updates about our services'
        ]
      },
      {
        subtitle: 'Secondary Uses',
        items: [
          'Improve our website and user experience',
          'Analyze shopping patterns and preferences',
          'Prevent fraud and ensure security',
          'Comply with legal obligations'
        ]
      }
    ]
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    icon: Globe,
    content: [
      {
        subtitle: 'We Do Not Sell Your Data',
        items: [
          'ClassicBuy never sells, rents, or trades your personal information',
          'We only share information as described in this policy'
        ]
      },
      {
        subtitle: 'Limited Sharing Scenarios',
        items: [
          'Service providers (shipping companies, payment processors)',
          'Legal compliance (when required by law or legal process)',
          'Business transfers (in case of merger or acquisition)',
          'Consent (when you explicitly authorize sharing)'
        ]
      }
    ]
  },
  {
    id: 'bitcoin-privacy',
    title: 'Bitcoin & Cryptocurrency Privacy',
    icon: Bitcoin,
    content: [
      {
        subtitle: 'Transaction Privacy',
        items: [
          'Bitcoin transactions are recorded on a public blockchain',
          'We do not store your private keys or wallet passwords',
          'Lightning Network transactions provide enhanced privacy',
          'We may retain transaction IDs for order verification'
        ]
      },
      {
        subtitle: 'Wallet Information',
        items: [
          'We only collect wallet addresses necessary for transactions',
          'Wallet addresses are encrypted and securely stored',
          'We do not track your other cryptocurrency activities',
          'You can use different addresses for each transaction'
        ]
      }
    ]
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: Lock,
    content: [
      {
        subtitle: 'Security Measures',
        items: [
          'Industry-standard encryption for all data transmission',
          'Secure servers with regular security updates',
          'Limited access to personal information by employees',
          'Regular security audits and vulnerability assessments'
        ]
      },
      {
        subtitle: 'Your Security Responsibilities',
        items: [
          'Keep your account credentials secure',
          'Use strong, unique passwords',
          'Log out of your account when using shared devices',
          'Report any suspicious activity immediately'
        ]
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    icon: Shield,
    content: [
      {
        subtitle: 'Access and Control',
        items: [
          'Access your personal information we have collected',
          'Request correction of inaccurate information',
          'Request deletion of your personal information',
          'Opt-out of marketing communications'
        ]
      },
      {
        subtitle: 'Data Portability',
        items: [
          'Request a copy of your data in a portable format',
          'Transfer your data to another service provider',
          'Receive information about data sharing practices'
        ]
      }
    ]
  }
];

export default function PrivacyPage() {
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
              Privacy Policy
              <span className="block text-sm text-yellow-400 mt-2">Your Privacy Matters</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At ClassicBuy, we're committed to protecting your privacy and being transparent 
              about how we collect, use, and protect your information.
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
          <Card className="bg-yellow-400/10 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400">
                <Eye className="w-5 h-5" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>We never sell your personal data</span>
                </div>
                <div className="flex items-start gap-2">
                  <Bitcoin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>Bitcoin transactions are private by design</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>All data is encrypted and secure</span>
                </div>
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>You control your information</span>
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

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                Questions About Privacy?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:privacy@classicbuy.shop">privacy@classicbuy.shop</a>
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
            This Privacy Policy is part of our{' '}
            <Link href="/terms" className="text-yellow-400 hover:text-yellow-300 underline">
              Terms of Service
            </Link>
            {' '}and applies to all ClassicBuy services.
          </p>
        </motion.div>
      </div>
    </div>
  );
}