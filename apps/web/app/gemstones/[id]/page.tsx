import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Star,
  BadgeIcon as Certificate,
  MessageSquare,
  RotateCw,
  ChevronRight,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/seperator";
import { Badge } from "@/components/ui/badge";
import { GemstoneCard } from "@/components/gemstone-card";

export type PageProps = Promise<{ id: string }>;
export default async function GemstoneDetailPage(props: { params: PageProps }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 flex items-center text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <Link href="/gemstones" className="hover:text-blue-600">
          Gemstones
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <Link href="/gemstones?type=diamond" className="hover:text-blue-600">
          Diamonds
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <span className="text-gray-900">Round Brilliant Diamond</span>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <Button variant="outline" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Results
        </Button>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Diamond"
              className="h-full w-full object-cover"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-4 right-4 gap-2"
            >
              <RotateCw className="h-4 w-4" />
              View 360°
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square cursor-pointer overflow-hidden rounded-md border-2 border-transparent hover:border-blue-600"
              >
                <img
                  src={`/placeholder.svg?height=150&width=150&text=View ${i}`}
                  alt={`Diamond view ${i}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <Badge className="bg-blue-600">GIA Certified</Badge>
            <div className="flex items-center text-yellow-500">
              <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.9</span>
              <span className="ml-1 text-sm text-gray-500">(24 reviews)</span>
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Round Brilliant Diamond - 1.25 Carat
          </h1>
          <p className="mb-4 text-gray-600">
            Exquisite round brilliant cut diamond with exceptional clarity and
            color. GIA certified.
          </p>

          <div className="mb-6">
            <div className="mb-2 text-3xl font-bold text-blue-700">$5,299</div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2 line-through">$5,999</span>
              <Badge
                variant="outline"
                className="border-green-200 bg-green-50 text-green-700"
              >
                Save $700
              </Badge>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Carat</div>
              <div className="font-semibold">1.25</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Color</div>
              <div className="font-semibold">D</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Clarity</div>
              <div className="font-semibold">VS1</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Cut</div>
              <div className="font-semibold">Excellent</div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Seller Information</h3>
            <div className="flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-blue-100">
                <div className="flex h-full w-full items-center justify-center text-blue-600">
                  DS
                </div>
              </div>
              <div>
                <div className="font-medium">Diamond Specialists Inc.</div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9 · 152 reviews · Since 2015</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                View Profile
              </Button>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Authenticity guaranteed
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              GIA certification included
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Secure payment processing
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Free shipping with insurance
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <MessageSquare className="h-5 w-5" />
              Message Seller
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-xl font-semibold">Product Details</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium">Specifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Shape</span>
                      <span>Round Brilliant</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Carat Weight</span>
                      <span>1.25</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Color Grade</span>
                      <span>D (Colorless)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Clarity Grade</span>
                      <span>VS1</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Cut Grade</span>
                      <span>Excellent</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Polish</span>
                      <span>Excellent</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Symmetry</span>
                      <span>Excellent</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Fluorescence</span>
                      <span>None</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Measurements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Diameter</span>
                      <span>6.9 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Table</span>
                      <span>58%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Depth</span>
                      <span>61.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Girdle</span>
                      <span>Medium</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Culet</span>
                      <span>None</span>
                    </li>
                  </ul>

                  <h4 className="mb-2 mt-6 font-medium">
                    Additional Information
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Certificate</span>
                      <span>GIA #12345678</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Origin</span>
                      <span>South Africa</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Treatment</span>
                      <span>None</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="mb-2 mt-6 font-medium">Description</h4>
              <p className="text-gray-700">
                This exquisite 1.25 carat round brilliant diamond is a true
                masterpiece of nature. With its D color grade, it belongs to the
                rare colorless category, displaying exceptional white
                brilliance. The VS1 clarity ensures that any inclusions are
                barely visible even under 10x magnification, resulting in a
                clean and pure appearance.
              </p>
              <p className="mt-4 text-gray-700">
                The excellent cut grade maximizes the diamond's fire,
                brilliance, and scintillation, creating a mesmerizing play of
                light. This diamond comes with a GIA certificate, guaranteeing
                its authenticity and quality. Perfect for an engagement ring or
                a special jewelry piece, this diamond represents the pinnacle of
                quality and beauty.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="certificate" className="mt-6">
            <div className="rounded-lg border bg-white p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  GIA Certificate #12345678
                </h3>
                <Button variant="outline" className="gap-2">
                  <Certificate className="h-4 w-4" />
                  Download Certificate
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Certificate Preview"
                    alt="GIA Certificate"
                    className="w-full rounded-lg border"
                  />
                </div>
                <div>
                  <h4 className="mb-4 font-medium">Certificate Information</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Certificate Number</span>
                      <span>GIA #12345678</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Issue Date</span>
                      <span>January 15, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Laboratory</span>
                      <span>GIA (Gemological Institute of America)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Report Type</span>
                      <span>Diamond Grading Report</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h4 className="mb-2 font-medium">Verify Certificate</h4>
                    <p className="text-sm text-gray-600">
                      You can verify the authenticity of this certificate by
                      visiting the GIA website and entering the certificate
                      number.
                    </p>
                    <Button className="mt-4 gap-2 bg-blue-600 hover:bg-blue-700">
                      Verify on GIA Website
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="rounded-lg border bg-white p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Write a Review
                </Button>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="col-span-1 rounded-lg bg-blue-50 p-4 text-center md:col-span-1">
                  <div className="mb-2 text-4xl font-bold text-blue-700">
                    4.9
                  </div>
                  <div className="mb-4 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Based on 24 reviews</p>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <div className="mr-2 w-8 text-sm text-gray-600">
                          {rating} star
                        </div>
                        <div className="mr-2 h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-yellow-400"
                            style={{
                              width:
                                rating === 5
                                  ? "80%"
                                  : rating === 4
                                    ? "15%"
                                    : "5%",
                            }}
                          ></div>
                        </div>
                        <div className="w-8 text-right text-sm text-gray-600">
                          {rating === 5
                            ? "80%"
                            : rating === 4
                              ? "15%"
                              : rating === 3
                                ? "5%"
                                : "0%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Review List */}
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6 last:border-0">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 h-10 w-10 rounded-full bg-blue-100">
                          <div className="flex h-full w-full items-center justify-center text-blue-600">
                            {review === 1 ? "JD" : review === 2 ? "AK" : "MP"}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">
                            {review === 1
                              ? "John Doe"
                              : review === 2
                                ? "Amanda Kim"
                                : "Michael Patel"}
                          </div>
                          <div className="text-xs text-gray-500">
                            {review === 1
                              ? "March 15, 2023"
                              : review === 2
                                ? "February 28, 2023"
                                : "January 10, 2023"}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <h4 className="mb-1 font-medium">
                      {review === 1
                        ? "Exceptional quality and service"
                        : review === 2
                          ? "Beautiful diamond, exactly as described"
                          : "Perfect for my engagement ring"}
                    </h4>
                    <p className="text-gray-700">
                      {review === 1
                        ? "The diamond exceeded my expectations. The brilliance and fire are incredible, and it looks even better in person than in the photos. The seller was very responsive and shipping was fast and secure."
                        : review === 2
                          ? "I was nervous about purchasing a diamond online, but this seller made the process easy and transparent. The certificate matched exactly, and the diamond is stunning. Highly recommend!"
                          : "I purchased this diamond for an engagement ring, and my fiancée absolutely loves it. The quality is outstanding, and it sparkles beautifully in any light. Great value for the price."}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button variant="outline">Load More Reviews</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-xl font-semibold">Shipping & Returns</h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium">Shipping Information</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>Free insured shipping on all orders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        Delivery within 2-5 business days after verification
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        All packages are fully insured and require signature
                        upon delivery
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        International shipping available to select countries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>Tracking information provided via email</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-medium">Returns & Refunds</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>30-day money-back guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        Item must be returned in original condition with all
                        documentation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>Return shipping is free for domestic orders</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        Refunds processed within 5-7 business days after
                        inspection
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 text-green-500 shrink-0" />
                      <span>
                        Contact customer service for return authorization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium">Secure Transactions</h4>
                <p className="text-gray-700">
                  All transactions are processed securely through our payment
                  partners. Your payment information is encrypted and never
                  stored on our servers. We support multiple payment methods
                  including credit cards, PayPal, and bank transfers.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Similar Items */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <GemstoneCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
