import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bitcoin, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Bitcoin className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold text-foreground">ClassicBuy</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Sign in to your account to continue shopping
          </p>
        </div>
      </div>

      {/* Sign In Form */}
      <form className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input 
              name="email" 
              type="email"
              placeholder="you@example.com" 
              required 
              className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Link
                className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
            />
          </div>
        </div>

        <SubmitButton 
          pendingText="Signing In..." 
          formAction={signInAction}
          className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25"
        >
          Sign In
        </SubmitButton>

        <FormMessage message={searchParams} />
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">New to ClassicBuy?</span>
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link 
            className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors" 
            href="/sign-up"
          >
            Create one now
          </Link>
        </p>
      </div>

      {/* Features */}
      <div className="pt-4 border-t border-border/50">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="space-y-1">
            <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto">
              <Bitcoin className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-xs text-muted-foreground">Bitcoin Payments</p>
          </div>
          <div className="space-y-1">
            <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xs font-bold text-green-500">✓</span>
            </div>
            <p className="text-xs text-muted-foreground">Best Prices</p>
          </div>
        </div>
      </div>
    </div>
  );
}