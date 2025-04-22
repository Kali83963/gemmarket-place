import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GemstoneCard } from "@/components/gemstone-card";

export default function FeaturedGemstones() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Gemstones
          </h2>
          <Link
            href="/gemstones/featured"
            className="text-blue-600 hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                id: 1,
                name: "Blue Sapphire",
                price: 1299,
                image: "/images/blue-sapphire.jpeg",
                carat: 2.4,
                cut: "Oval"
              },
              {
                id: 2,
                name: "Ruby",
                price: 1499,
                image: "/images/ruby.jpeg",
                carat: 1.8,
                cut: "Round"
              },
              {
                id: 3,
                name: "Emerald",
                price: 1699,
                image: "/images/emerald.jpeg",
                carat: 2.1,
                cut: "Princess"
              },
              {
                id: 4,
                name: "Diamond",
                price: 2499,
                image: "/images/diamond.jpeg",
                carat: 1.5,
                cut: "Brilliant"
              }
            ].map((gemstone) => (
              <GemstoneCard 
                key={gemstone.id} 
                name={gemstone.name}
                price={gemstone.price}
                image={gemstone.image}
                carat={gemstone.carat}
                cut={gemstone.cut}
              />
            ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Explore More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
