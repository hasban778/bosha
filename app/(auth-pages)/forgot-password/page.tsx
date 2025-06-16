import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bitcoin, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
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
          <h1 className="text-2xl font-bold text-foreground">Reset Password</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Enter your email address and we'll send you a reset link
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
        <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <p className="text-blue-400 font-medium mb-1">Check your email</p>
          <p className="text-muted-foreground">
            We'll send you a secure link to reset your password. The link will expire in 1 hour.
          </p>
        </div>
      </div>

      {/* Reset Form */}
      <form className="space-y-4">
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

        <SubmitButton 
          formAction={forgotPasswordAction}
          className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25"
        >
          Send Reset Link
        </SubmitButton>

        <FormMessage message={searchParams} />
      </form>

      {/* Back to Sign In */}
      <div className="text-center">
        <Link 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow-400 transition-colors" 
          href="/sign-in"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>

      {/* SMTP Message */}
      <div className="pt-4">
        <SmtpMessage />
      </div>
    </div>
  );
}