import Link from "next/link";
import { Heart, Star, BadgeIcon as Certificate, RotateCw } from "lucide-react";

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
  id?: number;
  name?: string;
  price?: number;
  image?: string;
  carat?: number;
  cut?: string;
  color?: string;
  clarity?: string;
  rating?: number;
  featured?: boolean;
  className?: string;
}

export function GemstoneCard({
  id = 1,
  name = "Round Brilliant Diamond",
  price = 5299,
  image = "/placeholder.svg?height=300&width=400",
  carat = 1.25,
  cut = "Excellent",
  color = "D",
  clarity = "VS1",
  rating = 4.9,
  featured = false,
  className,
}: GemstoneCardProps) {
  // Extract gemstone type from name (e.g., "Blue Sapphire" -> "Sapphire")
  const gemstoneType = name.split(" ").pop() || "Diamond";

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
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white hover:text-red-500"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-3 right-3 rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-white"
          >
            <RotateCw className="h-5 w-5" />
            <span className="sr-only">View 360°</span>
          </Button>
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="border-blue-200 bg-blue-50 text-blue-700"
          >
            {gemstoneType}
          </Badge>
          <div className="flex items-center text-sm text-yellow-500">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>
        <CardTitle className="mt-2 text-lg">
          <Link href={`/gemstones/${id}`} className="hover:text-blue-600">
            {name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center text-sm text-gray-500">
          <Certificate className="mr-1 h-4 w-4" />
          GIA Certified
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500">Carat</p>
            <p className="font-medium">{carat}</p>
          </div>
          <div>
            <p className="text-gray-500">Color</p>
            <p className="font-medium">{color}</p>
          </div>
          <div>
            <p className="text-gray-500">Clarity</p>
            <p className="font-medium">{clarity}</p>
          </div>
          <div>
            <p className="text-gray-500">Cut</p>
            <p className="font-medium">{cut}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold text-blue-700">${price.toLocaleString()}</p>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}