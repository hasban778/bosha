export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full text-sm">
      {"success" in message && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            <span>{message.success}</span>
          </div>
        </div>
      )}
      {"error" in message && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-red-400 mt-0.5">⚠</span>
            <span>{message.error}</span>
          </div>
        </div>
      )}
      {"message" in message && (
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <span className="text-blue-400 mt-0.5">ℹ</span>
            <span>{message.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}