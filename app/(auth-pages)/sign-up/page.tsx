import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bitcoin, Shield, Truck, Award } from "lucide-react";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  
  if ("message" in searchParams) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-8 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <FormMessage message={searchParams} />
            <Link 
              href="/sign-in"
              className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Bitcoin className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold text-foreground">ClassicBuy</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Join thousands of satisfied customers
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-background/30 rounded-lg border border-border/30">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-muted-foreground">Best Prices</span>
        </div>
        <div className="flex items-center gap-2">
          <Bitcoin className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-muted-foreground">Crypto Payments</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-muted-foreground">Fast Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-muted-foreground">Secure Shopping</span>
        </div>
      </div>

      {/* Sign Up Form */}
      <form className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Input 
              name="email" 
              type="email"
              placeholder="you@example.com" 
              required 
              className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Create a strong password"
              minLength={6}
              required
              className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
            />
            <p className="text-xs text-muted-foreground">
              Must be at least 6 characters long
            </p>
          </div>
        </div>

        <SubmitButton 
          formAction={signUpAction} 
          pendingText="Creating Account..."
          className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25"
        >
          Create Account
        </SubmitButton>

        <FormMessage message={searchParams} />
      </form>

      {/* Terms */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-yellow-400 hover:text-yellow-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300">
            Privacy Policy
          </Link>
        </p>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">Already have an account?</span>
        </div>
      </div>

      {/* Sign In Link */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          <Link 
            className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors" 
            href="/sign-in"
          >
            Sign in instead
          </Link>
        </p>
      </div>

      
      
    </div>
  );
}