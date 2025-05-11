"use client";

import { useGetGemstonesQuery } from "@/store/slices/gemstoneApi";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
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
import { GemstoneCard } from "@/components/gemstone-card";
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

// Add debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Filter states
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCuts, setSelectedCuts] = useState<string[]>([]);
  const [selectedClarity, setSelectedClarity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const [sortBy, setSortBy] = useState<string>("relevance");

  const { data: gemstones = [], isLoading, error } = useGetGemstonesQuery({
    searchQuery: debouncedSearchQuery || undefined,
    type: selectedTypes.length > 0 ? selectedTypes.join(',') : undefined,
    shape: selectedCuts.length > 0 ? selectedCuts.join(',') : undefined,
    clarity_grade: selectedClarity.length > 0 ? selectedClarity.join(',') : undefined,
    cut: selectedCuts.length > 0 ? selectedCuts.join(',') : undefined,
    minPrice: priceRange[0] > 0 ? priceRange[0] : undefined,
    maxPrice: priceRange[1] < 5000 ? priceRange[1] : undefined,
    sort: sortBy !== "relevance" ? sortBy : undefined,
    order: sortBy === "price-low-high" ? "asc" : "desc"
  });

  const handleTypeChange = (type: string, checked: boolean) => {
    setSelectedTypes(prev => 
      checked ? [...prev, type] : prev.filter(t => t !== type)
    );
  };

  const handleCutChange = (cut: string, checked: boolean) => {
    setSelectedCuts(prev => 
      checked ? [...prev, cut] : prev.filter(c => c !== cut)
    );
  };

  const handleClarityChange = (clarity: string, checked: boolean) => {
    setSelectedClarity(prev => 
      checked ? [...prev, clarity] : prev.filter(c => c !== clarity)
    );
  };

  const handleApplyFilters = () => {
    setFiltersApplied(true);
  };

  const handleClearFilters = () => {
    setSelectedTypes([]);
    setSelectedCuts([]);
    setSelectedClarity([]);
    setPriceRange([0, 5000]);
    setFiltersApplied(false);
    setSortBy("relevance");
    setSearchQuery("");
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter collapsible states
  const [priceOpen, setPriceOpen] = useState(true);
  const [caratOpen, setCaratOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [cutOpen, setCutOpen] = useState(true);
  const [clarityOpen, setClarityOpen] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The API query will automatically update with the new searchQuery
  };

  const handleSort = (value: string) => {
    setSortBy(value);
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
                onClick={handleClearFilters}
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
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category}`}
                          checked={selectedTypes.includes(category)}
                          onCheckedChange={(checked) => handleTypeChange(category, checked as boolean)}
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm">
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
                        <Checkbox 
                          id={`cut-${cut}`}
                          checked={selectedCuts.includes(cut)}
                          onCheckedChange={(checked) => handleCutChange(cut, checked as boolean)}
                        />
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
                      <div key={clarity} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`clarity-${clarity}`}
                          checked={selectedClarity.includes(clarity)}
                          onCheckedChange={(checked) => handleClarityChange(clarity, checked as boolean)}
                        />
                        <Label htmlFor={`clarity-${clarity}`} className="text-sm">
                          {clarity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            <div className="flex gap-2">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline"
                className="w-full mt-4"
                onClick={handleClearFilters}
              >
                Clear
              </Button>
            </div>
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
            <p className="text-gray-500">{gemstones?.length} results</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select onValueChange={handleSort}>
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
                  
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gemstones?.map((item) => (
              <GemstoneCard key={item.id} {...item} />
            ))}
          </div>

          {gemstones?.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No results found</h2>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
