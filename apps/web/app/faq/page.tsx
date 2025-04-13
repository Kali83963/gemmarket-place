"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// FAQ data structure
const faqData = {
  general: [
    {
      question: "What is Gemstone Marketplace?",
      answer:
        "Gemstone Marketplace is an online platform connecting buyers with verified sellers of authentic gemstones. We provide a secure environment for discovering, buying, and selling a wide variety of gemstones from around the world.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You'll need to provide your email address, create a password, and fill in some basic information. Once registered, you can browse gemstones, create wishlists, and make purchases.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. You can review our Privacy Policy for more details on how we protect your data.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payment processing is handled through secure, encrypted connections to ensure your financial information remains protected.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Orders can be cancelled within 24 hours of purchase if they haven't been shipped yet. To cancel an order, go to your Order History in your account dashboard and select the order you wish to cancel. If the order has already been shipped, you'll need to follow our return process.",
    },
  ],
  buying: [
    {
      question: "How do I know the gemstones are authentic?",
      answer:
        "All gemstones listed on our marketplace undergo verification by certified gemologists. Many come with certificates of authenticity from recognized gemological laboratories. We also have a strict seller verification process and a money-back guarantee if a gemstone is proven to be inauthentic.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Gemstones must be returned in their original condition with all documentation and packaging. Custom or specially ordered items may have different return policies, which will be clearly indicated on the product page.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location. You can see the shipping options available to you during the checkout process. All international shipments are fully insured and require signature upon delivery.",
    },
    {
      question: "How long will it take to receive my order?",
      answer:
        "Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days, depending on the destination country and customs processing. You'll receive a tracking number once your order ships so you can monitor its progress.",
    },
    {
      question: "Are the gemstones treated or enhanced?",
      answer:
        "We require all sellers to disclose any treatments or enhancements applied to their gemstones. This information is clearly displayed on each product page. Common treatments include heat treatment, irradiation, or oiling, which are standard practices in the gemstone industry.",
    },
  ],
  selling: [
    {
      question: "How do I become a seller?",
      answer:
        "To become a seller, click on the 'Become a Seller' link in the footer of our website. You'll need to complete a verification process that includes providing identification, gemological credentials (if applicable), and information about your gemstone inventory. Our team will review your application within 3-5 business days.",
    },
    {
      question: "What fees do you charge sellers?",
      answer:
        "We charge a 10% commission on each sale, plus a small listing fee of $1 per item. There are no monthly subscription fees or hidden charges. Premium features, such as featured listings or promotional placement, are available for additional fees.",
    },
    {
      question: "How do I list my gemstones for sale?",
      answer:
        "Once your seller account is approved, you can list gemstones through your seller dashboard. You'll need to provide detailed information about each gemstone, including type, weight, dimensions, color, clarity, cut, origin (if known), and any treatments. High-quality photographs and any certification documents should also be uploaded.",
    },
    {
      question: "When and how do I get paid?",
      answer:
        "Payments are processed 7 days after the buyer confirms receipt of the gemstone. This waiting period ensures buyer satisfaction and reduces disputes. Funds are transferred directly to your bank account or PayPal account, depending on your preference. You can track all your sales and pending payments in your seller dashboard.",
    },
    {
      question: "What happens if a buyer returns a gemstone?",
      answer:
        "If a buyer returns a gemstone within the 30-day return period, the item will be shipped back to you. Once you confirm the gemstone is in its original condition, the sale amount (minus shipping costs) will be refunded to the buyer, and the commission will be refunded to you as well.",
    },
  ],
  technical: [
    {
      question: "The website isn't loading properly. What should I do?",
      answer:
        "First, try refreshing your browser or clearing your cache and cookies. Make sure you're using a modern, updated browser like Chrome, Firefox, Safari, or Edge. If problems persist, try accessing the site from a different device or contact our support team with details about the issue you're experiencing.",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer:
        "Click on the 'Login' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a password reset link. If you don't receive the email within a few minutes, check your spam folder or contact customer support.",
    },
    {
      question: "Can I use the marketplace on my mobile device?",
      answer:
        "Yes, our website is fully responsive and optimized for mobile devices. You can browse, buy, and sell gemstones from your smartphone or tablet. We also offer mobile apps for iOS and Android for an enhanced mobile experience.",
    },
    {
      question: "How do I update my account information?",
      answer:
        "Log into your account and navigate to the 'Account Settings' or 'Profile' section. From there, you can update your personal information, change your password, manage payment methods, and adjust notification preferences.",
    },
    {
      question: "Is there a way to save gemstones I'm interested in?",
      answer:
        "Yes, you can add gemstones to your wishlist by clicking the heart icon on any product page. To view your saved items, click on the wishlist icon in the top navigation bar or go to the Wishlist section in your account dashboard.",
    },
  ],
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { category: string; items: typeof faqData.general }[]
  >([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: { category: string; items: typeof faqData.general }[] = [];

    Object.entries(faqData).forEach(([category, items]) => {
      const matchedItems = items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );

      if (matchedItems.length > 0) {
        results.push({
          category,
          items: matchedItems,
        });
      }
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">
        Find answers to common questions about Gemstone Marketplace.
      </p>

      {/* Search */}
      <div className="mb-10">
        <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </form>
      </div>

      {/* Search Results */}
      {hasSearched && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">
            {searchResults.length > 0
              ? `Search Results (${searchResults.reduce((acc, category) => acc + category.items.length, 0)})`
              : "No Results Found"}
          </h2>

          {searchResults.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">
                We couldn't find any FAQs matching your search. Try different
                keywords or browse the categories below.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setHasSearched(false);
                }}
              >
                Clear Search
              </Button>
            </div>
          )}

          {searchResults.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2 capitalize">
                {category.category} Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`search-${category.category}-${itemIndex}`}
                  >
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {searchResults.length > 0 && (
            <div className="text-center mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setHasSearched(false);
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      )}

      {/* FAQ Categories */}
      {!hasSearched && (
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="buying">Buying</TabsTrigger>
            <TabsTrigger value="selling">Selling</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.general.map((item, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="buying" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.buying.map((item, index) => (
                <AccordionItem key={index} value={`buying-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="selling" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.selling.map((item, index) => (
                <AccordionItem key={index} value={`selling-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="technical" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.technical.map((item, index) => (
                <AccordionItem key={index} value={`technical-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      )}

      {/* Still Need Help */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer you were looking for, our customer
          support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact Support
          </Button>
          <Button variant="outline">Live Chat</Button>
        </div>
      </div>
    </div>
  );
}
