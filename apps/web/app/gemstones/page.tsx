import { Filter, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/seperator";
import { GemstoneCard } from "@/components/gemstone-card";

export default function GemstonesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Gemstones</h1>
        <p className="mt-2 text-gray-600">
          Discover certified gemstones from trusted sellers worldwide
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row md:items-center">
        <div className="relative flex-grow">
          <Input placeholder="Search gemstones..." className="w-full" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="diamond">Diamonds</SelectItem>
              <SelectItem value="ruby">Rubies</SelectItem>
              <SelectItem value="sapphire">Sapphires</SelectItem>
              <SelectItem value="emerald">Emeralds</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="any">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="0-1000">$0 - $1,000</SelectItem>
              <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
              <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
              <SelectItem value="10000+">$10,000+</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="any">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Certification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Certification</SelectItem>
              <SelectItem value="gia">GIA</SelectItem>
              <SelectItem value="igi">IGI</SelectItem>
              <SelectItem value="agta">AGTA</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            More Filters
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
      </div>

      {/* Active Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-700">
          Active Filters:
        </span>
        <Button
          variant="secondary"
          size="sm"
          className="h-7 gap-1 rounded-full text-xs"
        >
          Diamond
          <span className="ml-1 text-gray-500">×</span>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="h-7 gap-1 rounded-full text-xs"
        >
          $1,000 - $5,000
          <span className="ml-1 text-gray-500">×</span>
        </Button>
        <Button variant="link" size="sm" className="h-7 text-xs text-blue-600">
          Clear All
        </Button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Sidebar Filters (Desktop) */}
        <div className="hidden w-64 shrink-0 lg:block">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Refine Results</h3>

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Price Range</h4>
              <div className="flex items-center gap-2">
                <Input placeholder="Min" className="h-8" />
                <span>-</span>
                <Input placeholder="Max" className="h-8" />
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Gemstone Type</h4>
              <div className="space-y-2">
                {[
                  "Diamond",
                  "Ruby",
                  "Sapphire",
                  "Emerald",
                  "Pearl",
                  "Other",
                ].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`type-${type.toLowerCase()}`}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`type-${type.toLowerCase()}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Certification</h4>
              <div className="space-y-2">
                {["GIA", "IGI", "AGTA", "Other"].map((cert) => (
                  <div key={cert} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cert-${cert.toLowerCase()}`}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`cert-${cert.toLowerCase()}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {cert}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-medium">Carat Weight</h4>
              <div className="space-y-2">
                {["0-0.5", "0.5-1", "1-2", "2-3", "3+"].map((weight) => (
                  <div key={weight} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`weight-${weight}`}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`weight-${weight}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {weight} carats
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">Showing 1-12 of 48 results</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="h-8 w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="mb-4 lg:hidden">
            <Button variant="outline" className="w-full gap-2">
              <Filter className="h-4 w-4" />
              Show Filters
            </Button>
          </div>

          {/* Gemstone Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <GemstoneCard key={i} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              &laquo;
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-blue-50"
            >
              1
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              2
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              3
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              &raquo;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
