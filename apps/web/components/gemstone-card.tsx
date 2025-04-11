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
  featured?: boolean;
  className?: string;
}

export function GemstoneCard({
  featured = false,
  className,
}: GemstoneCardProps) {
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
            src="/placeholder.svg?height=300&width=400"
            alt="Gemstone"
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
            Diamond
          </Badge>
          <div className="flex items-center text-sm text-yellow-500">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.9</span>
          </div>
        </div>
        <CardTitle className="mt-2 text-lg">
          <Link href="/gemstones/1" className="hover:text-blue-600">
            Round Brilliant Diamond
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
            <p className="font-medium">1.25</p>
          </div>
          <div>
            <p className="text-gray-500">Color</p>
            <p className="font-medium">D</p>
          </div>
          <div>
            <p className="text-gray-500">Clarity</p>
            <p className="font-medium">VS1</p>
          </div>
          <div>
            <p className="text-gray-500">Cut</p>
            <p className="font-medium">Excellent</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold text-blue-700">$5,299</p>
        </div>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
