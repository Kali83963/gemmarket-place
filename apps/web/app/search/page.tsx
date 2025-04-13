"use client";

import type React from "react";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Mock data for search results
const mockSearchResults = [
  {
    id: 1,
    name: "Blue Sapphire",
    image: "/placeholder.svg?height=200&width=200",
    price: 1299.99,
    carat: 2.5,
    color: "Deep Blue",
    clarity: "VS1",
    cut: "Oval",
    category: "Sapphire",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Ruby Gemstone",
    image: "/placeholder.svg?height=200&width=200",
    price: 1599.99,
    carat: 1.8,
    color: "Pigeon Blood Red",
    clarity: "VVS2",
    cut: "Round",
    category: "Ruby",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Emerald Stone",
    image: "/placeholder.svg?height=200&width=200",
    price: 1899.99,
    carat: 3.2,
    color: "Vivid Green",
    clarity: "VS2",
    cut: "Cushion",
    category: "Emerald",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Diamond",
    image: "/placeholder.svg?height=200&width=200",
    price: 4999.99,
    carat: 1.5,
    color: "D",
    clarity: "IF",
    cut: "Princess",
    category: "Diamond",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Amethyst Crystal",
    image: "/placeholder.svg?height=200&width=200",
    price: 499.99,
    carat: 4.0,
    color: "Purple",
    clarity: "SI1",
    cut: "Pear",
    category: "Amethyst",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Aquamarine Gem",
    image: "/placeholder.svg?height=200&width=200",
    price: 899.99,
    carat: 2.8,
    color: "Sky Blue",
    clarity: "VVS1",
    cut: "Emerald",
    category: "Aquamarine",
    rating: 4.6,
  },
];

// Categories for filtering
const categories = [
  "Diamond",
  "Ruby",
  "Sapphire",
  "Emerald",
  "Amethyst",
  "Aquamarine",
  "Topaz",
  "Opal",
  "Garnet",
  "Tanzanite",
];

// Cuts for filtering
const cuts = [
  "Round",
  "Princess",
  "Cushion",
  "Emerald",
  "Oval",
  "Pear",
  "Marquise",
  "Radiant",
  "Asscher",
  "Heart",
];

// Clarity options
const clarityOptions = [
  "FL",
  "IF",
  "VVS1",
  "VVS2",
  "VS1",
  "VS2",
  "SI1",
  "SI2",
  "I1",
  "I2",
  "I3",
];

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [caratRange, setCaratRange] = useState([0, 5]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter collapsible states
  const [priceOpen, setPriceOpen] = useState(true);
  const [caratOpen, setCaratOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [cutOpen, setCutOpen] = useState(true);
  const [clarityOpen, setClarityOpen] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger an API call with the search parameters
    console.log("Searching for:", searchQuery);
  };

  const sortResults = (sortBy: string) => {
    const sortedResults = [...searchResults];

    switch (sortBy) {
      case "price-low-high":
        sortedResults.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        sortedResults.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedResults.sort((a, b) => b.rating - a.rating);
        break;
      case "carat":
        sortedResults.sort((a, b) => b.carat - a.carat);
        break;
      default:
        // Default sorting (relevance)
        break;
    }

    setSearchResults(sortedResults);
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </div>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`}
            />
          </Button>
        </div>

        {/* Filters sidebar */}
        <div
          className={`md:w-1/4 ${mobileFiltersOpen ? "block" : "hidden md:block"}`}
        >
          <div className="sticky top-4 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button
                variant="ghost"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Reset All
              </Button>
            </div>

            {/* Price Range Filter */}
            <Collapsible open={priceOpen} onOpenChange={setPriceOpen}>
              <div className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="font-medium">Price Range</h3>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${priceOpen ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <Slider
                    defaultValue={[0, 5000]}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="border rounded p-2 text-sm w-24 text-center">
                      ${priceRange[0]}
                    </div>
                    <div className="border rounded p-2 text-sm w-24 text-center">
                      ${priceRange[1]}
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Carat Range Filter */}
            <Collapsible open={caratOpen} onOpenChange={setCaratOpen}>
              <div className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="font-medium">Carat</h3>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${caratOpen ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <Slider
                    defaultValue={[0, 5]}
                    max={5}
                    step={0.1}
                    value={caratRange}
                    onValueChange={setCaratRange}
                    className="mt-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="border rounded p-2 text-sm w-24 text-center">
                      {caratRange[0]} ct
                    </div>
                    <div className="border rounded p-2 text-sm w-24 text-center">
                      {caratRange[1]} ct
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Category Filter */}
            <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
              <div className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="font-medium">Category</h3>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`category-${category}`} />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Cut Filter */}
            <Collapsible open={cutOpen} onOpenChange={setCutOpen}>
              <div className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="font-medium">Cut</h3>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${cutOpen ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {cuts.map((cut) => (
                      <div key={cut} className="flex items-center space-x-2">
                        <Checkbox id={`cut-${cut}`} />
                        <Label htmlFor={`cut-${cut}`} className="text-sm">
                          {cut}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Clarity Filter */}
            <Collapsible open={clarityOpen} onOpenChange={setClarityOpen}>
              <div className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex w-full items-center justify-between">
                  <h3 className="font-medium">Clarity</h3>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${clarityOpen ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-4">
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {clarityOptions.map((clarity) => (
                      <div
                        key={clarity}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={`clarity-${clarity}`} />
                        <Label
                          htmlFor={`clarity-${clarity}`}
                          className="text-sm"
                        >
                          {clarity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Search results */}
        <div className="md:w-3/4">
          <div className="mb-6">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for gemstones..."
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

          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">{searchResults.length} results</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select onValueChange={sortResults}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low-high">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high-low">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="carat">Carat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-100 text-blue-800 border-blue-200">
                    {item.category}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-blue-600 font-bold mb-2">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(item.rating) ? "fill-current" : "stroke-current fill-none"}`}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Carat:</span> {item.carat}
                    </div>
                    <div>
                      <span className="font-medium">Color:</span> {item.color}
                    </div>
                    <div>
                      <span className="font-medium">Clarity:</span>{" "}
                      {item.clarity}
                    </div>
                    <div>
                      <span className="font-medium">Cut:</span> {item.cut}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No results found</h2>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
