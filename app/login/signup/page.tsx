"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bitcoin, ArrowRight, Mail } from "lucide-react";
import { signup } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEmailSent, setIsEmailSent] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");

  const handleSignup = async (formData: FormData) => {
    setIsLoading(true);
    const email = formData.get("email") as string;
    setUserEmail(email);
    
    try {
      const result = await signup(formData);
      if (!result?.error) {
        setIsEmailSent(true);
      }
    } catch (error) {
      setIsEmailSent(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Bitcoin className="mr-2 h-6 w-6 text-chart-1" />
            <span>ClassicBuy</span>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                "Join thousands of tech enthusiasts who trust ClassicBuy for the latest devices at unbeatable prices."
              </p>
              <footer className="text-sm">Michael Roberts, CTO</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="h-12 w-12 rounded-full bg-chart-1/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-chart-1" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight">Check your email</h1>
              <p className="text-sm text-muted-foreground">
                We've sent a verification link to <span className="font-medium">{userEmail}</span>. 
                Please check your email and click the link to complete your registration.
              </p>
              <p className="text-sm text-muted-foreground">
                The verification link will expire in 24 hours.
              </p>
            </div>
            <div className="space-y-4">
              <p className="px-8 text-center text-sm text-muted-foreground">
                Didn't receive the email?{" "}
                <Link href="/login/signup" className="hover:text-brand underline underline-offset-4">
                  Try again
                </Link>
              </p>
              <p className="px-8 text-center text-sm text-muted-foreground">
                Already verified?{" "}
                <Link href="/login" className="hover:text-brand underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Bitcoin className="mr-2 h-6 w-6 text-chart-1" />
          <span>ClassicBuy</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Join thousands of tech enthusiasts who trust ClassicBuy for the latest devices at unbeatable prices."
            </p>
            <footer className="text-sm">Michael Roberts, CTO</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form action={handleSignup}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                  <Input
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    type="password"
                    autoComplete="new-password"
                    disabled={isLoading}
                    required
                  />
                </div>
                <Button disabled={isLoading} className="gap-2">
                  {isLoading ? (
                    "Creating account..."
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking create account, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="hover:text-brand underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}