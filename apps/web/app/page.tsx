"use client";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import { useGetGemstonesQuery } from "@/store/slices/gemstoneApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import FeaturedGemstones from "@/components/featured-gemstones";
import GemstoneCategories from "@/components/gemstone-categories";
import HowItWorks from "@/components/how-it-works";
import { GemstoneCard } from "@/components/gemstone-card";
import { useEffect, useState } from "react";
import { apiUrl } from "@/constants";

export default function Home() {
  const { data: featuredGemstones, isLoading: isLoadingFeatured } =
    useGetGemstonesQuery({
      featured: true,
      limit: 4,
    });

  const { data: recentListings, isLoading: isLoadingRecent } =
    useGetGemstonesQuery({
      sort: "createdAt",
      order: "desc",
      limit: 8,
    });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Discover Exquisite Gemstones from Trusted Sellers
              </h1>
              <p className="text-lg text-blue-100 md:text-xl">
                Browse certified gemstones, connect with sellers, and make
                secure purchases on our trusted marketplace.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href={"/search"}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                  >
                    Start Browsing
                  </Button>
                </Link>
                <Link href={"/add-gemstone"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                  >
                    Sell Gemstones
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center">
              <div className="relative h-80 w-80">
                <div className="absolute left-0 top-0 h-full w-full rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
                {/* Replaced static image with video */}
                <video
                  className="relative z-10 h-full w-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/gemstone.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 rounded-xl bg-blue-50 p-6 shadow-md sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search gemstones..."
                className="w-full pl-10"
              />
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 sm:flex-none">
                Search
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 sm:flex-none"
              >
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Categories */}
      <GemstoneCategories />

      {/* Featured Gemstones */}
      <FeaturedGemstones gemstones={featuredGemstones || []} />

      {/* How It Works */}
      <HowItWorks />

      {/* Recent Listings */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              Recent Listings
            </h2>
            <Link href="/search" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Updated GemstoneCard with proper key and props */}
            {recentListings?.map((gemstone) => (
              <GemstoneCard key={gemstone.id} {...gemstone} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Jewelry Designer",
                content:
                  "This marketplace has transformed how I source gemstones for my designs. The verification process gives me confidence in every purchase.",
                avatar: "/images/sarah.jpeg",
              },
              {
                name: "Michael Chen",
                role: "Gemstone Collector",
                content:
                  "The 360° views and detailed certifications help me make informed decisions. I've found rare pieces I couldn't find anywhere else.",
                avatar: "/images/michael.jpeg",
              },
              {
                name: "Priya Patel",
                role: "Gemstone Seller",
                content:
                  "As a seller, the platform makes it easy to showcase my inventory and connect with serious buyers. The analytics dashboard is invaluable.",
                avatar: "/images/priya.jpeg",
              },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-blue-600">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Join Our Gemstone Community?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
            Whether you're looking to buy exquisite gemstones or sell your
            collection, our platform provides the tools and security you need.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Create an Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
