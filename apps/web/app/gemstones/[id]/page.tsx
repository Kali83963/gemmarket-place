"use client";
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
import React, { useState } from "react";
import { useGetGemstoneByIdQuery, useAddToCartMutation } from "@/store/slices/gemstoneApi";
import { useRouter } from "next/navigation";
import { addToCart } from "@/store/slices/cartSlice";
import { RootState } from "@/store";

import { CertificateViewer } from "@/components/certificate-viewer";
import { toast } from "sonner";
import {  useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";

export default function GemstoneDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const { id } = React.use(params);
  const { data: gemstone, isLoading, error } = useGetGemstoneByIdQuery(Number(id));
  const [addToCart] = useAddToCartMutation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.auth.user);
  console.log(gemstone?.user.id)
  console.log(user?.id)
  const handleBackToResults = () => {
    router.back();
  };

  const handleAddToCart = async () => {
    if (!gemstone) return;
    
    if (!isAuthenticated) {
      // Store current URL to redirect back after login
      sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
      router.push('/auth/login');
      return;
    }
    
    try {
      const cartItem = {
        itemData: {
          productId: gemstone.id,
          quantity: 1,
          price: gemstone.price,
          size: gemstone.dimension,
          color: gemstone.color,
        }
      };
      await addToCart(cartItem).unwrap();
      toast.success("Added to cart successfully!");
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  const handleShare = async () => {
    if (!gemstone) return;

    const shareData = {
      title: gemstone.name,
      text: `Check out this beautiful ${gemstone.type} gemstone on GemMarket`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        toast.error("Failed to share. Please try again.");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Loading gemstone details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <p className="text-red-600">Error loading gemstone details. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!gemstone) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">Gemstone not found.</p>
          </div>
        </div>
      </div>
    );
  }

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
        <Link href={`/gemstones?type=${gemstone.type.toLowerCase()}`} className="hover:text-blue-600">
          {gemstone.type}
        </Link>
        <ChevronRight className="mx-2 h-4 w-4" />
        <span className="text-gray-900">{gemstone.name}</span>
      </div>

      <div className="mb-8 flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2"
          onClick={handleBackToResults}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Results
        </Button>
        <div className="ml-auto flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={handleShare}
          >
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
              src={gemstone.images[selectedImageIndex]?.url || "/placeholder.svg?height=600&width=600"}
              alt={gemstone.name}
              className="h-full w-full object-cover"
            />
            
          </div>
          <div className="grid grid-cols-4 gap-2">
            {gemstone.images?.map((image, index) => (
              <div
                key={index}
                className={`aspect-square cursor-pointer overflow-hidden rounded-md border-2 ${
                  selectedImageIndex === index
                    ? "border-blue-600"
                    : "border-transparent hover:border-blue-600"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image.url}
                  alt={`${gemstone.name} - Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <Badge className="bg-blue-600">{gemstone.certification} Certified</Badge>
            {gemstone.showOnSaleLabel && (
              <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                On Sale
              </Badge>
            )}
          </div>

          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            {gemstone.name}
          </h1>
          <p className="mb-4 text-gray-600">
            {gemstone.description}
          </p>

          <div className="mb-6">
            <div className="mb-2 text-3xl font-bold text-blue-700">${gemstone.price.toLocaleString()}</div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Carat</div>
              <div className="font-semibold">{gemstone.weight} ct</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Color</div>
              <div className="font-semibold">{gemstone.color_grade}  ({gemstone.color})</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Clarity</div>
              <div className="font-semibold">{gemstone.clarity_grade}</div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-sm text-gray-500">Cut</div>
              <div className="font-semibold">{gemstone.cut_grade}</div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Seller Information</h3>
            <div className="flex items-center">
              <div className="mr-3 h-12 w-12 rounded-full bg-blue-100">
                <div className="flex h-full w-full items-center justify-center text-blue-600">
                  {gemstone.user.firstName[0]}{gemstone.user.lastName[0]}
                </div>
              </div>
              <div>
                <div className="font-medium">{gemstone.user.firstName} {gemstone.user.lastName}</div>
                <div className="flex items-center text-sm text-gray-500">
                <span>Seller since {new Date(gemstone.user.createdAt).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Authenticity guaranteed
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              {gemstone.certification} certification included
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Secure payment processing
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              {gemstone.chargeForShipping ? "Shipping charges apply" : "Free shipping with insurance"}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {gemstone.userId !== user?.id && (
              <Button
                size="lg"
                className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
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
                      <span>Shape</span>
                      <span className="font-medium">{gemstone.shape}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Carat Weight</span>
                      <span className="font-medium">{gemstone.weight}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Color Grade</span>
                      <span className="font-medium">{gemstone.color_grade}  ({gemstone.color})</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Clarity Grade</span>
                      <span className="font-medium">{gemstone.clarity_grade}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Cut Grade</span>
                      <span className="font-medium">{gemstone.cut_grade}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Polish</span>
                      <span className="font-medium">{gemstone.polish}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Symmetry</span>
                      <span>{gemstone.symmetry}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Fluorescence</span>
                      <span>{gemstone.fluorescence}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Measurements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Dimensions</span>
                      <span>{gemstone.dimension}</span>
                    </li>
                   
                  </ul>

                  <h4 className="mb-2 mt-6 font-medium">
                    Additional Information
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Certificate</span>
                      <span>{gemstone.certification}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Origin</span>
                      <span>{gemstone.origin}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Treatment</span>
                      <span>{gemstone.treatment}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="mb-2 mt-6 font-medium">Description</h4>
              <p className="text-gray-700">
                {gemstone.description}
              </p>
              
            </div>
          </TabsContent>

          <TabsContent value="certificate" className="mt-6">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="mb-4 text-xl font-semibold">Certificate Information</h3>
              <div className="space-y-6">
                <CertificateViewer
                  documentUrl={gemstone.certification_document}
                  certificateType={gemstone.certification}
                  gemstoneName={gemstone.name}
                />
                <div>
                  <h4 className="mb-4 font-medium">Certificate Information</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Certificate Type</span>
                      <span className="font-medium">{gemstone.certification}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Status</span>
                      <span className="font-medium">{gemstone.certificationStatus}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Verified By</span>
                      <span className="font-medium">
                        {gemstone.verifiedBy 
                          ? `${gemstone.verifiedBy.firstName} ${gemstone.verifiedBy.lastName}`
                          : "Not verified yet"}
                      </span>
                    </li>
                  </ul>
                </div>
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


    </div>
  );
}
