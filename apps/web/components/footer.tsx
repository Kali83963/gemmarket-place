import Link from "next/link";
import { Diamond, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Diamond className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">GemMarket</span>
            </Link>
            <p className="mb-4 text-gray-600">
              The premier marketplace for buying and selling certified gemstones
              from trusted sellers worldwide.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Browse Gemstones", href: "/gemstones" },
                { label: "Sellers", href: "/sellers" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Buyers & Sellers</h3>
            <ul className="space-y-2">
              {[
                { label: "Buyer Guide", href: "/buyer-guide" },
                { label: "Seller Guide", href: "/seller-guide" },
                { label: "Certification Info", href: "/certification" },
                { label: "Gemstone Education", href: "/education" },
                { label: "Pricing & Fees", href: "/pricing" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-gray-600">
              Stay updated with the latest gemstones and marketplace news.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Your email" className="pl-10" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} GemMarket. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
