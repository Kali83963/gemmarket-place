"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for wishlist items
const mockWishlistItems = [
  {
    id: 1,
    name: "Blue Sapphire",
    image: "/placeholder.svg?height=200&width=200",
    price: 1299.99,
    carat: 2.5,
    color: "Deep Blue",
    clarity: "VS1",
    cut: "Oval",
    inStock: true,
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
    inStock: true,
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
    inStock: false,
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
    inStock: true,
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex items-center mb-8">
        <Heart className="h-6 w-6 text-blue-600 mr-2" />
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add items to your wishlist to save them for later.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Browse Gemstones
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white hover:bg-red-50 text-red-500"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {!item.inStock && (
                    <Badge
                      variant="outline"
                      className="absolute top-2 left-2 bg-red-100 text-red-800 border-red-200"
                    >
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-blue-600 font-bold mb-2">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-500 mt-3">
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

                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-gray-500">
              {wishlistItems.length} items in wishlist
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Add All to Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
