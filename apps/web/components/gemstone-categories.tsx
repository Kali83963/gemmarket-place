import Link from "next/link";
import { Diamond, Gem, Sparkles, Droplet, Hexagon, Circle } from "lucide-react";

export default function GemstoneCategories() {
  const categories = [
    { name: "Diamonds", icon: Diamond, color: "bg-blue-100 text-blue-600" },
    { name: "Rubies", icon: Gem, color: "bg-red-100 text-red-600" },
    {
      name: "Sapphires",
      icon: Droplet,
      color: "bg-indigo-100 text-indigo-600",
    },
    { name: "Emeralds", icon: Hexagon, color: "bg-green-100 text-green-600" },
    { name: "Pearls", icon: Circle, color: "bg-gray-100 text-gray-600" },
    {
      name: "Other Gems",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`#`}
              className="group flex flex-col items-center rounded-lg p-6 transition-all hover:shadow-md"
            >
              <div
                className={`mb-4 rounded-full ${category.color} p-4 transition-all group-hover:scale-110`}
              >
                <category.icon className="h-8 w-8" />
              </div>
              <span className="text-center font-medium text-gray-800">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
