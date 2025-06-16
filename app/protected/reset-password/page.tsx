import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bitcoin, Shield, Eye, EyeOff } from "lucide-react";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-8">
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
                  Create a new secure password for your account
                </p>
              </div>
            </div>

            {/* Security Info */}
            <div className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="text-green-400 font-medium mb-1">Secure Reset</p>
                <p className="text-muted-foreground">
                  Your password will be encrypted and stored securely.
                </p>
              </div>
            </div>

            {/* Reset Form */}
            <form className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">New Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    required
                    className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    required
                    className="h-11 bg-background/50 border-border/50 focus:border-yellow-400 focus:ring-yellow-400/20"
                  />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-muted-foreground space-y-1">
                <p className="font-medium">Password requirements:</p>
                <ul className="list-disc list-inside space-y-0.5 ml-2">
                  <li>At least 6 characters long</li>
                  <li>Include both letters and numbers</li>
                  <li>Use a unique password you haven't used before</li>
                </ul>
              </div>

              <SubmitButton 
                formAction={resetPasswordAction}
                className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/25"
              >
                Update Password
              </SubmitButton>

              <FormMessage message={searchParams} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}