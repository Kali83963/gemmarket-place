"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Info, Plus, Upload, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/seperator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/loading-spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AddGemstonePage() {
  const [activeTab, setActiveTab] = useState<
    "details" | "specifications" | "media" | "pricing"
  >("details");
  const [images, setImages] = useState<string[]>([
    "/placeholder.svg?height=200&width=200",
  ]);
  const [certificates, setCertificates] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddImage = () => {
    setImages([...images, "/placeholder.svg?height=200&width=200"]);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      "Certificate " + (certificates.length + 1),
    ]);
  };

  const handleRemoveCertificate = (index: number) => {
    const newCertificates = [...certificates];
    newCertificates.splice(index, 1);
    setCertificates(newCertificates);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <Check className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold">
            Gemstone Listed Successfully!
          </h1>
          <p className="mb-8 text-gray-600">
            Your gemstone has been submitted for verification. Our team will
            review it shortly, and it will be listed on the marketplace once
            approved.
          </p>
          <div className="mb-8 rounded-lg border p-6 text-left">
            <h2 className="mb-4 text-xl font-semibold">Listing Details</h2>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Listing ID</p>
                <p className="font-medium">
                  GEM-{Math.floor(Math.random() * 10000)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date Submitted</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <Badge className="mt-1 bg-yellow-100 text-yellow-800">
                  Pending Verification
                </Badge>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Approval</p>
                <p className="font-medium">1-2 business days</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/dashboard/seller">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/add-gemstone">List Another Gemstone</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4 gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">List a Gemstone</h1>
        <p className="text-gray-500">Add a new gemstone to the marketplace</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as any)}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Basic Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="media">Images & Media</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details about your gemstone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Listing Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Round Brilliant Diamond 1.25 Carat"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Include key details like gemstone type, shape, and carat in
                    the title
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="gemstoneType">
                      Gemstone Type <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="gemstoneType">
                        <SelectValue placeholder="Select gemstone type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diamond">Diamond</SelectItem>
                        <SelectItem value="ruby">Ruby</SelectItem>
                        <SelectItem value="sapphire">Sapphire</SelectItem>
                        <SelectItem value="emerald">Emerald</SelectItem>
                        <SelectItem value="pearl">Pearl</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shape">
                      Shape <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="shape">
                        <SelectValue placeholder="Select shape" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="round">Round</SelectItem>
                        <SelectItem value="princess">Princess</SelectItem>
                        <SelectItem value="cushion">Cushion</SelectItem>
                        <SelectItem value="emerald">Emerald</SelectItem>
                        <SelectItem value="oval">Oval</SelectItem>
                        <SelectItem value="pear">Pear</SelectItem>
                        <SelectItem value="marquise">Marquise</SelectItem>
                        <SelectItem value="radiant">Radiant</SelectItem>
                        <SelectItem value="asscher">Asscher</SelectItem>
                        <SelectItem value="heart">Heart</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your gemstone in detail..."
                    className="min-h-32"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Include information about color, clarity, origin, and any
                    special characteristics
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="origin">Origin</Label>
                    <Input
                      id="origin"
                      placeholder="e.g., South Africa, Colombia"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="treatment">Treatment</Label>
                    <Select>
                      <SelectTrigger id="treatment">
                        <SelectValue placeholder="Select treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="heat">Heat Treated</SelectItem>
                        <SelectItem value="irradiated">Irradiated</SelectItem>
                        <SelectItem value="clarity">
                          Clarity Enhanced
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => setActiveTab("specifications")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue to Specifications
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gemstone Specifications</CardTitle>
                <CardDescription>
                  Enter detailed specifications for your gemstone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="carat">
                        Carat Weight <span className="text-red-500">*</span>
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-5 w-5 rounded-full p-0"
                            >
                              <Info className="h-4 w-4 text-gray-400" />
                              <span className="sr-only">Carat info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Carat is a unit of weight for gemstones (1 carat =
                              0.2 grams)
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Input
                      id="carat"
                      type="number"
                      step="0.01"
                      min="0.01"
                      placeholder="e.g., 1.25"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions (mm)</Label>
                    <Input
                      id="dimensions"
                      placeholder="e.g., 6.9 x 6.9 x 4.2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certification">
                      Certification <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger id="certification">
                        <SelectValue placeholder="Select certification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gia">GIA</SelectItem>
                        <SelectItem value="igi">IGI</SelectItem>
                        <SelectItem value="agta">AGTA</SelectItem>
                        <SelectItem value="other">Other Lab</SelectItem>
                        <SelectItem value="none">No Certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Diamond Specific Attributes
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="color">Color Grade</Label>
                      <Select>
                        <SelectTrigger id="color">
                          <SelectValue placeholder="Select color grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="D">D (Colorless)</SelectItem>
                          <SelectItem value="E">E (Colorless)</SelectItem>
                          <SelectItem value="F">F (Colorless)</SelectItem>
                          <SelectItem value="G">G (Near Colorless)</SelectItem>
                          <SelectItem value="H">H (Near Colorless)</SelectItem>
                          <SelectItem value="I">I (Near Colorless)</SelectItem>
                          <SelectItem value="J">J (Near Colorless)</SelectItem>
                          <SelectItem value="K">K (Faint)</SelectItem>
                          <SelectItem value="L">L (Faint)</SelectItem>
                          <SelectItem value="M">M (Faint)</SelectItem>
                          <SelectItem value="N-Z">
                            N-Z (Very Light to Light)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="clarity">Clarity Grade</Label>
                      <Select>
                        <SelectTrigger id="clarity">
                          <SelectValue placeholder="Select clarity grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="FL">FL (Flawless)</SelectItem>
                          <SelectItem value="IF">
                            IF (Internally Flawless)
                          </SelectItem>
                          <SelectItem value="VVS1">
                            VVS1 (Very Very Slightly Included 1)
                          </SelectItem>
                          <SelectItem value="VVS2">
                            VVS2 (Very Very Slightly Included 2)
                          </SelectItem>
                          <SelectItem value="VS1">
                            VS1 (Very Slightly Included 1)
                          </SelectItem>
                          <SelectItem value="VS2">
                            VS2 (Very Slightly Included 2)
                          </SelectItem>
                          <SelectItem value="SI1">
                            SI1 (Slightly Included 1)
                          </SelectItem>
                          <SelectItem value="SI2">
                            SI2 (Slightly Included 2)
                          </SelectItem>
                          <SelectItem value="I1">I1 (Included 1)</SelectItem>
                          <SelectItem value="I2">I2 (Included 2)</SelectItem>
                          <SelectItem value="I3">I3 (Included 3)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cut">Cut Grade</Label>
                      <Select>
                        <SelectTrigger id="cut">
                          <SelectValue placeholder="Select cut grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="very-good">Very Good</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="polish">Polish</Label>
                      <Select>
                        <SelectTrigger id="polish">
                          <SelectValue placeholder="Select polish" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="very-good">Very Good</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symmetry">Symmetry</Label>
                      <Select>
                        <SelectTrigger id="symmetry">
                          <SelectValue placeholder="Select symmetry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="very-good">Very Good</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fluorescence">Fluorescence</Label>
                      <Select>
                        <SelectTrigger id="fluorescence">
                          <SelectValue placeholder="Select fluorescence" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="faint">Faint</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="strong">Strong</SelectItem>
                          <SelectItem value="very-strong">
                            Very Strong
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Colored Gemstone Attributes
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="colorHue">Color/Hue</Label>
                      <Input
                        id="colorHue"
                        placeholder="e.g., Deep Blue, Pigeon Blood Red"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transparency">Transparency</Label>
                      <Select>
                        <SelectTrigger id="transparency">
                          <SelectValue placeholder="Select transparency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transparent">
                            Transparent
                          </SelectItem>
                          <SelectItem value="semi-transparent">
                            Semi-Transparent
                          </SelectItem>
                          <SelectItem value="translucent">
                            Translucent
                          </SelectItem>
                          <SelectItem value="opaque">Opaque</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="colorSaturation">Color Saturation</Label>
                      <Select>
                        <SelectTrigger id="colorSaturation">
                          <SelectValue placeholder="Select saturation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vivid">Vivid</SelectItem>
                          <SelectItem value="strong">Strong</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="pale">Pale</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalSpecs">
                    Additional Specifications
                  </Label>
                  <Textarea
                    id="additionalSpecs"
                    placeholder="Enter any additional specifications or details..."
                    className="min-h-24"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setActiveTab("details")}
                >
                  Back to Details
                </Button>
                <Button
                  type="button"
                  onClick={() => setActiveTab("media")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue to Images & Media
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Images & Media</CardTitle>
                <CardDescription>
                  Upload high-quality images and videos of your gemstone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Gemstone Images <span className="text-red-500">*</span>
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    Upload at least 3 high-quality images from different angles.
                    The first image will be your main listing image.
                  </p>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md border bg-gray-50"
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gemstone view ${index + 1}`}
                          className="h-full w-full rounded-md object-cover p-2"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute right-1 top-1 h-6 w-6"
                          onClick={() => handleRemoveImage(index)}
                          type="button"
                          disabled={index === 0 && images.length === 1}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute left-2 top-2 bg-blue-600">
                            Main
                          </Badge>
                        )}
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="aspect-square flex-col gap-2 border-dashed"
                      onClick={handleAddImage}
                      type="button"
                    >
                      <Plus className="h-6 w-6" />
                      <span>Add Image</span>
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    360° View (Optional)
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    Upload a 360° view of your gemstone to help buyers see all
                    angles.
                  </p>

                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="mb-2 text-sm font-medium">
                      Drag and drop your 360° view file here
                    </p>
                    <p className="mb-4 text-xs text-gray-500">
                      Supports .glb, .gltf, or multiple images for 360° rotation
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      Browse Files
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Certification Documents
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    Upload certification documents for your gemstone (GIA, IGI,
                    etc.)
                  </p>

                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center">
                          <div className="mr-3 rounded-md bg-blue-100 p-2 text-blue-600">
                            <Info className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{cert}</p>
                            <p className="text-xs text-gray-500">PDF, 2.4 MB</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveCertificate(index)}
                          type="button"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={handleAddCertificate}
                      type="button"
                    >
                      <Plus className="h-4 w-4" />
                      Add Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setActiveTab("specifications")}
                >
                  Back to Specifications
                </Button>
                <Button
                  type="button"
                  onClick={() => setActiveTab("pricing")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue to Pricing
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
                <CardDescription>
                  Set your pricing and inventory details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="price">
                      Price (USD) <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="price"
                        type="number"
                        min="0"
                        step="0.01"
                        className="pl-8"
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comparePrice">
                      Compare-at Price (Optional)
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        id="comparePrice"
                        type="number"
                        min="0"
                        step="0.01"
                        className="pl-8"
                        placeholder="0.00"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      If your item is on sale, enter the original price here
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="quantity">
                      Quantity <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      defaultValue="1"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                    <Input id="sku" placeholder="e.g., DIA-RB-125-D-VS1" />
                    <p className="text-xs text-gray-500">
                      A unique identifier for your inventory management
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">Pricing Options</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label
                          htmlFor="allowOffers"
                          className="text-base font-medium"
                        >
                          Allow Offers
                        </Label>
                        <p className="text-sm text-gray-500">
                          Let buyers make offers on your listing
                        </p>
                      </div>
                      <Switch id="allowOffers" />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label
                          htmlFor="showComparePriceLabel"
                          className="text-base font-medium"
                        >
                          Show "On Sale" Label
                        </Label>
                        <p className="text-sm text-gray-500">
                          Display a sale label when compare-at price is higher
                          than regular price
                        </p>
                      </div>
                      <Switch id="showComparePriceLabel" />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label
                          htmlFor="chargeShipping"
                          className="text-base font-medium"
                        >
                          Charge for Shipping
                        </Label>
                        <p className="text-sm text-gray-500">
                          Enable if you want to charge buyers for shipping
                        </p>
                      </div>
                      <Switch id="chargeShipping" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Listing Visibility
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label
                          htmlFor="listingStatus"
                          className="text-base font-medium"
                        >
                          Listing Status
                        </Label>
                        <p className="text-sm text-gray-500">
                          Set whether this listing is active or draft
                        </p>
                      </div>
                      <Select defaultValue="active">
                        <SelectTrigger id="listingStatus" className="w-[180px]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label
                          htmlFor="featured"
                          className="text-base font-medium"
                        >
                          Featured Listing
                        </Label>
                        <p className="text-sm text-gray-500">
                          Mark this listing as featured to highlight it on the
                          marketplace
                        </p>
                      </div>
                      <Switch id="featured" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-medium text-blue-700">
                    <Info className="h-5 w-5" />
                    Verification Process
                  </h3>
                  <p className="text-sm text-blue-700">
                    All new listings go through a verification process to ensure
                    quality and authenticity. This typically takes 24-48 hours.
                    You'll be notified once your listing is approved.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setActiveTab("media")}
                >
                  Back to Media
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit for Verification"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  );
}
