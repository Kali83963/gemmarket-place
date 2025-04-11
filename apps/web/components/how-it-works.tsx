import { Search, ShieldCheck, CreditCard, MessageSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Browse & Discover",
      description:
        "Search through our extensive collection of certified gemstones with detailed specifications.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Quality",
      description:
        "All gemstones are verified with certificates from trusted laboratories like GIA and IGI.",
    },
    {
      icon: MessageSquare,
      title: "Connect with Sellers",
      description:
        "Message sellers directly to ask questions or negotiate prices before purchase.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Complete your purchase with confidence using our secure payment methods.",
    },
  ];

  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-blue-500 p-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="mt-6 hidden h-0.5 w-full bg-blue-500 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
