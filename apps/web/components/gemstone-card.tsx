import Link from "next/link";
import { Heart, Star, BadgeIcon as Certificate, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GemstoneCardProps {
  id: number;
  name: string;
  type: string;
  shape: string;
  description: string;
  treatment: string;
  weight: number;
  dimension: string;
  certification: string;
  color_grade: string;
  clarity_grade: string;
  cut_grade: string;
  polish: string;
  symmetry: string;
  fluorescence: string;
  color: string;
  transparency: string;
  color_saturation: string;
  additional_specification: string;
  price: number;
  origin: string;
  certification_document: string;
  certificationStatus: string;
  sellerId: number;
  status: string;
  quantity: number;
  sku: string;
  allowOffers: boolean;
  showOnSaleLabel: boolean;
  chargeForShipping: boolean;
  isFeatured: boolean;
  isActive: boolean;
  userId: string;
  verifiedById: string | null;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string | null;
    role: string;
    createdAt: string;
    isActive: boolean;
  };
  verifiedBy: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    picture: string | null;
    role: string;
    createdAt: string;
    isActive: boolean;
  } | null;
  images: { url: string }[];
  createdAt: string;
  updatedAt: string;
  blockchainHash: string;
  blockchainGemstoneId: string | null;
  className?: string;
  featured?: boolean;
}

export function GemstoneCard({
  id,
  name,
  type,
  shape,
  description,
  price,
  images,
  weight,
  cut_grade,
  color,
  color_grade,
  clarity_grade,
  showOnSaleLabel,
  certification,
  user,
  userId,
  className,
  featured = false,
}: GemstoneCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      <div className="relative">
        {featured && (
          <Badge className="absolute left-3 top-3 z-10 bg-blue-600">
            Featured
          </Badge>
        )}
        
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container h-full">
              {images.map((image, index) => (
                <div key={index} className="embla__slide h-full flex-[0_0_100%]">
                  <img
                    src={image.url}
                    alt={`${name} - Image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="border-blue-200 bg-blue-50 text-blue-700"
          >
            {type}
          </Badge>
        </div>
        <CardTitle className="mt-2 text-lg">
          <Link href={`/gemstones/${id}`} className="hover:text-blue-600">
            {name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center text-sm text-gray-500">
          <Certificate className="mr-1 h-4 w-4" />
          {certification} Certified
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500">Carat</p>
            <p className="font-medium">{weight} ct</p>
          </div>
          <div>
            <p className="text-gray-500">Color</p>
            <p className="font-medium">{color_grade} ({color})</p>
          </div>
          <div>
            <p className="text-gray-500">Clarity</p>
            <p className="font-medium">{clarity_grade}</p>
          </div>
          <div>
            <p className="text-gray-500">Cut</p>
            <p className="font-medium">{cut_grade}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold text-blue-700">${price.toLocaleString()}</p>
        </div>
        <Link href={`/gemstones/${id}`}>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}