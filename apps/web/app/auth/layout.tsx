import { Diamond } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="flex flex-col items-center text-center my-3">
          <Link href="/" className="mb-2 flex gap-3 items-center space-x-2">
            <Diamond className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">GemMarket</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
