import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GemstoneCard } from "@/components/gemstone-card";
import { Gemstone } from "@/store/slices/gemstoneApi";

interface Props {
  gemstones: Gemstone[];
}

export default function FeaturedGemstones({ gemstones }: Props) {
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
          {gemstones.map((gemstone) => (
            <GemstoneCard
              key={gemstone.id}
              {...gemstone}
              featured={true}
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
