import { ArrowUpRight, InfoIcon } from "lucide-react";
import Link from "next/link";

export function SmtpMessage() {
  return (
    <div className="bg-yellow-400/10 border border-yellow-400/20 px-4 py-3 rounded-lg">
      <div className="flex gap-3">
        <InfoIcon size={16} className="mt-0.5 text-yellow-400 flex-shrink-0" />
        <div className="flex flex-col gap-2">
          <div className="text-sm">
            <p className="text-yellow-400 font-medium mb-1">Email Rate Limits</p>
            <p className="text-muted-foreground text-xs">
              Emails are rate limited. Enable Custom SMTP to increase the rate limit.
            </p>
          </div>
          <Link
            href="https://supabase.com/docs/guides/auth/auth-smtp"
            target="_blank"
            className="text-yellow-400 hover:text-yellow-300 flex items-center text-xs gap-1 transition-colors"
          >
            Learn more <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}