"use client";

import type React from "react";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Info,
  Plus,
  Upload,
  X,
  Download,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  gemstoneSchema,
  type GemstoneFormData,
} from "@/lib/validations/gemstone";
import {
  useCreateGemstoneMutation,
  useUpdateGemstoneBlockChainIdMutation,
} from "@/store/slices/gemstoneApi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getContract } from "../../utils/contracts";

type FileWithPreview = File & {
  preview: string;
};

export default function AddGemstonePage() {
  const [activeTab, setActiveTab] = useState<
    "details" | "specifications" | "media" | "pricing"
  >("details");
  const [images, setImages] = useState<string[]>([]);
  const [certificates, setCertificates] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  // Move these state declarations to the top
  const [imageFiles, setImageFiles] = useState<FileWithPreview[]>([]);
  const [certificateFiles, setCertificateFiles] = useState<File[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<File | null>(
    null
  );
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [imagesFinalized, setImagesFinalized] = useState<string[]>([]);

  // Get the auth state to ensure we have a seller ID
  const auth = useSelector((state: RootState) => state.auth);

  // Use RTK Query mutation
  const [createGemstone, { isLoading: isSubmitting, data: gemstoneData }] =
    useCreateGemstoneMutation();

  const [updateGemstone] = useUpdateGemstoneBlockChainIdMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<GemstoneFormData>({
    resolver: zodResolver(gemstoneSchema),
    defaultValues: {
      title: "",
      gemstoneType: "",
      shape: "",
      description: "",
      carat: 0,
      certification: "",
      price: 0,
      comparePrice: 0,
      quantity: 1,
      sellerId: 2,
      allowOffers: false,
      showComparePriceLabel: false,
      chargeShipping: false,
      listingStatus: "active",
      featured: false,
      additional_specification: "",
      images: [],
      certificates: [],
    },
  });

  // Update the imagePreviews memo to be more stable
  const imagePreviews = useMemo(() => {
    return imageFiles.map((file) => {
      // Only create a new preview URL if one doesn't exist
      if (!file.preview) {
        return {
          ...file,
          preview: URL.createObjectURL(file),
        };
      }
      return file;
    });
  }, [imageFiles]);

  // Update the onImageDrop handler
  const onImageDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log("Files dropped:", acceptedFiles);
      const newFiles = acceptedFiles.map((file) => {
        // Create preview URL only once when file is first added
        const preview = URL.createObjectURL(file);
        return {
          ...file,
          preview,
        };
      });

      setImageFiles((prev) => {
        const updatedFiles = [...prev, ...newFiles];
        // Update form value with all image previews
        const imageUrls = updatedFiles.map((file) => file.preview);
        setValue("images", imageUrls);
        return updatedFiles;
      });
    },
    [setValue]
  );

  // Update the handleRemoveImage function
  const handleRemoveImage = useCallback(
    (index: number) => {
      setImageFiles((prev) => {
        const newFiles = [...prev];
        // Revoke the URL only when removing the image
        if (newFiles[index].preview) {
          URL.revokeObjectURL(newFiles[index].preview);
        }
        newFiles.splice(index, 1);
        // Update form value after removing image
        const imageUrls = newFiles.map((file) => file.preview);
        setValue("images", imageUrls);
        return newFiles;
      });
    },
    [setValue]
  );

  // Effects
  useEffect(() => {
    // Convert imageFiles to URLs for form validation
    const imageUrls = imageFiles.map((file) => file.preview);
    setValue("images", imageUrls);
  }, [imageFiles, setValue]);

  useEffect(() => {
    setValue("certificates", certificates);
  }, [certificates, setValue]);

  // useEffect(() => {
  //   if (gemstoneData) {
  //     setIsSuccess(true);
  //   }
  // }, [gemstoneData]);

  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  useEffect(() => {
    console.log("Current imageFiles state:", imageFiles);
    console.log("Current form images value:", watch("images"));
  }, [imageFiles, watch]);

  // Update the cleanup effect to only run on component unmount
  useEffect(() => {
    return () => {
      // Cleanup all preview URLs when component unmounts
      imageFiles.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, []); // Empty dependency array since we only want to run this on unmount

  // Update the uploadFile function
  // Helper function to convert a blob URL to a real File
  const blobUrlToFile = async (
    blobUrl: string, // The blob URL (e.g., "blob:http://localhost:3000/...")
    originalPath: string // The relative file path (e.g., "./3.jfif")
  ): Promise<File> => {
    const response = await fetch(blobUrl); // Fetch the blob
    const blob = await response.blob(); // Convert the response to a Blob

    // Extract the filename from the original path (or generate one)
    const originalName = originalPath.split("/").pop() || `file-${Date.now()}`;

    // Extract the file extension from the path
    const extension = originalName.split(".").pop() || "jpg";
    const mimeType = blob.type || `image/${extension}`; // Use the MIME type from the blob

    // Create a File object from the Blob
    const file = new File([blob], originalName, {
      type: mimeType,
      lastModified: Date.now(),
    });

    return file; // Return the File object
  };

  // Your existing uploadFile function
  const uploadFile = async (file: File): Promise<string> => {
    console.log("file", file);
    if (!file || !file.name) {
      throw new Error("Invalid file object");
    }

    const formData = new FormData();

    // Get the file extension with null check
    const fileExtension = file.name.split(".").pop()?.toLowerCase() || "";
    // Create a unique filename with timestamp and original extension
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;

    // Append the original file directly to FormData
    formData.append("file", file, fileName);

    try {
      console.log("Uploading file:", {
        name: fileName,
        type: file.type,
        size: file.size,
        extension: fileExtension,
      });

      const response = await fetch("http://localhost:5000/uploads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Upload failed with response:", errorText);
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Upload response:", data);

      if (!data.fileUrl) {
        throw new Error("No URL returned from upload");
      }

      return data.fileUrl; // Return the URL of the uploaded file
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  // Usage example: Convert blob URL to File and upload it
  const handleFileUpload = async (file: { preview: string; path: string }) => {
    try {
      // Convert the blob URL to a File
      const convertedFile = await blobUrlToFile(file.preview, file.path);

      // Upload the converted File
      const uploadedUrl = await uploadFile(convertedFile);

      setImagesFinalized((prevImages: string[]) => {
        const updated = [...prevImages, uploadedUrl];
        return updated.slice(-5); // Only keep the last 5 images
      });
    } catch (error) {
      console.error("Error handling file upload:", error);
    }
  };

  // Update the onSubmit function
  const onSubmit = async (data: GemstoneFormData) => {
    console.log("Form submitted with data:", data);

    try {
      // Upload all images first
      console.log("Uploading images:", imageFiles);
      const imageUrls = await Promise.all(
        imageFiles.map(async (fileWithPreview) => {
          // if (!fileWithPreview || !fileWithPreview.name) {
          //   console.error('Invalid file object:', fileWithPreview);
          //   return '';
          // }
          console.log("Uploading image:", {
            name: fileWithPreview.name,
            type: fileWithPreview.type,
            size: fileWithPreview.size,
          });
          return await handleFileUpload(fileWithPreview);
        })
      ).then((urls) => urls.filter((url) => url !== "")); // Filter out any failed uploads

      console.log("Image URLs received:", imageUrls);

      // Upload certificates
      console.log("Uploading certificates:", certificateFiles);
      const certificateUrls = await Promise.all(
        certificateFiles.map(async (file) => {
          if (!file || !file.name) {
            console.error("Invalid file object:", file);
            return "";
          }
          console.log("Uploading certificate:", {
            name: file.name,
            type: file.type,
            size: file.size,
          });
          return await uploadFile(file);
        })
      ).then((urls) => urls.filter((url) => url !== "")); // Filter out any failed uploads

      console.log("Certificate URLs received:", certificateUrls);

      // Format the data according to the API requirements
      const formattedData = {
        name: data.title,
        treatment: data.treatment,
        type: data.gemstoneType,
        shape: data.shape,
        description: data.description,
        weight: data.carat,
        dimension: data.dimensions,
        certification: data.certification,
        color: data.color,
        clarity_grade: data.clarity,
        cut_grade: data.cut,
        polish: data.polish || "Excellent",
        symmetry: data.symmetry || "Good",
        fluorescence: data.fluorescence || "None",
        color_grade: data.colorHue || "",
        transparency: data.transparency || "Transparent",
        color_saturation: data.colorSaturation || "Medium",
        price: data.price,
        origin: data.origin,
        certification_document: certificateUrls[0] || "",
        certificationStatus: true,
        sellerId: 2,
        quantity: data.quantity,
        sku: data.sku || `GEM-${Math.floor(Math.random() * 10000)}`,
        allowOffers: data.allowOffers,
        showComparePriceLabel: data.showComparePriceLabel,
        chargeShipping: data.chargeShipping,
        featured: data.featured,
        listingStatus: data.listingStatus || "active",
        additional_specification: data.additional_specification || "",
        // images: imageFiles.map((img)=>img.preview)
        images: imagesFinalized,
      };

      console.log("Formatted data for API:", formattedData);

      // Now you can send this formatted data to your API
      const response = await createGemstone(formattedData);
      const blockchainHash = response.data?.data.blockchainHash;
      const gemstoneId = response.data?.data.id;

      const { contract } = await getContract();
      const tx = await contract.registerGemstone(blockchainHash);
      await tx.wait();

      const count = await contract.gemstoneCount();
      const gemstonCount = Number(count) - 1;

      await updateGemstone({
        id: gemstoneId,
        blockChainId: gemstonCount.toString(),
      });

      setIsSuccess(true);

      console.log("API Response:", response);
    } catch (error) {
      setIsSuccess(false);
      console.error("Error in form submission:", error);
    }
  };

  // Event handlers for form fields
  const handleAddImage = () => {
    setImages([...images, "/placeholder.svg?height=200&width=200"]);
  };

  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      "Certificate " + (certificates.length + 1),
    ]);
  };

  const handleRemoveCertificate = (index: number) => {
    setCertificateFiles((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setCertificates((prev) => {
      const newCerts = [...prev];
      newCerts.splice(index, 1);
      return newCerts;
    });
  };

  

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      accept: {
        "image/*": [".jpeg", ".jpg", ".png", ".webp"],
      },
      maxSize: 10 * 1024 * 1024, // 10MB
      onDrop: onImageDrop,
    });

  // Update the certificate drop handler
  const onCertificateDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Certificate files dropped:", acceptedFiles);
    setCertificateFiles((prev) => [...prev, ...acceptedFiles]);
    setCertificates((prev) => [
      ...prev,
      ...acceptedFiles.map((file) => file.name),
    ]);
  }, []);

  const {
    getRootProps: getCertificateRootProps,
    getInputProps: getCertificateInputProps,
  } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: onCertificateDrop,
  });

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
              <Link href="/search">Discover More Gemstones</Link>
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

      <form
        onSubmit={handleSubmit((data) => {
          console.log("Form handleSubmit triggered");
          onSubmit(data);
        })}
      >
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
                    {...register("title")}
                    placeholder="e.g., Round Brilliant Diamond 1.25 Carat"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="gemstoneType">
                      Gemstone Type <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="gemstoneType"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
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
                      )}
                    />
                    {errors.gemstoneType && (
                      <p className="text-sm text-red-500">
                        {errors.gemstoneType.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shape">
                      Shape <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="shape"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
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
                      )}
                    />
                    {errors.shape && (
                      <p className="text-sm text-red-500">
                        {errors.shape.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    placeholder="Describe your gemstone in detail..."
                    className="min-h-32"
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
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
                      {...register("origin")}
                      placeholder="e.g., South Africa, Colombia"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="treatment">Treatment</Label>
                    <Controller
                      name="treatment"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <SelectTrigger id="treatment">
                            <SelectValue placeholder="Select treatment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="heat">Heat Treated</SelectItem>
                            <SelectItem value="irradiated">
                              Irradiated
                            </SelectItem>
                            <SelectItem value="clarity">
                              Clarity Enhanced
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
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
                              type="button"
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
                    <Controller
                      name="carat"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="number"
                          step="0.01"
                          min="0.01"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      )}
                    />
                    {errors.carat && (
                      <p className="text-sm text-red-500">
                        {errors.carat.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensions (mm)</Label>
                    <Controller
                      name="dimensions"
                      control={control}
                      render={({ field }) => (
                        <Input {...field} placeholder="e.g., 6.9 x 6.9 x 4.2" />
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certification">
                      Certification <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="certification"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger id="certification">
                            <SelectValue placeholder="Select certification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gia">GIA</SelectItem>
                            <SelectItem value="igi">IGI</SelectItem>
                            <SelectItem value="agta">AGTA</SelectItem>
                            <SelectItem value="other">Other Lab</SelectItem>
                            <SelectItem value="none">
                              No Certification
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.certification && (
                      <p className="text-sm text-red-500">
                        {errors.certification.message}
                      </p>
                    )}
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
                      <Controller
                        name="color"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger id="color">
                              <SelectValue placeholder="Select color grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="D">D (Colorless)</SelectItem>
                              <SelectItem value="E">E (Colorless)</SelectItem>
                              <SelectItem value="F">F (Colorless)</SelectItem>
                              <SelectItem value="G">
                                G (Near Colorless)
                              </SelectItem>
                              <SelectItem value="H">
                                H (Near Colorless)
                              </SelectItem>
                              <SelectItem value="I">
                                I (Near Colorless)
                              </SelectItem>
                              <SelectItem value="J">
                                J (Near Colorless)
                              </SelectItem>
                              <SelectItem value="K">K (Faint)</SelectItem>
                              <SelectItem value="L">L (Faint)</SelectItem>
                              <SelectItem value="M">M (Faint)</SelectItem>
                              <SelectItem value="N-Z">
                                N-Z (Very Light to Light)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="clarity">Clarity Grade</Label>
                      <Controller
                        name="clarity"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
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
                              <SelectItem value="I1">
                                I1 (Included 1)
                              </SelectItem>
                              <SelectItem value="I2">
                                I2 (Included 2)
                              </SelectItem>
                              <SelectItem value="I3">
                                I3 (Included 3)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cut">Cut Grade</Label>
                      <Controller
                        name="cut"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value || ""}
                          >
                            <SelectTrigger id="cut">
                              <SelectValue placeholder="Select cut grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="excellent">
                                Excellent
                              </SelectItem>
                              <SelectItem value="very-good">
                                Very Good
                              </SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="polish">Polish</Label>
                      <Controller
                        name="polish"
                        control={control}
                        render={({ field }) => (
                      <Select 
                      onValueChange={field.onChange}
                      value={field.value || ""}>
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
                       )}
                       />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symmetry">Symmetry</Label>
                      <Controller
                        name="symmetry"
                        control={control}
                        render={({ field }) => (
                      <Select 
                      onValueChange={field.onChange}
                      value={field.value || ""}>
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
                      )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fluorescence">Fluorescence</Label>
                      <Controller
                        name="fluorescence"
                        control={control}
                        render={({ field }) => (
                      <Select 
                      onValueChange={field.onChange}
                      value={field.value || ""}>
                      
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
                      )}
                      />
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
                        {...register("colorHue")}
                        placeholder="e.g., Deep Blue, Pigeon Blood Red"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transparency">Transparency</Label>
                      <Controller
                        name="transparency"
                        control={control}
                        render={({ field }) => (
                      <Select 
                      onValueChange={field.onChange}
                      value={field.value || ""}>
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
                      )}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="colorSaturation">Color Saturation</Label>
                      <Controller
                        name="colorSaturation"
                        control={control}
                        render={({ field }) => (
                      <Select 
                      onValueChange={field.onChange}
                      value={field.value || ""}>
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
                      )}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional_specification">
                    Additional Specifications
                  </Label>
                  <Textarea
                    id="additional_specification"
                    placeholder="Enter any additional specifications or details..."
                    className="min-h-24"
                    {...register("additional_specification")}
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
                    {imagePreviews.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="relative aspect-square rounded-md border bg-gray-50"
                      >
                        <img
                          src={file.preview}
                          alt={`Uploaded image ${index + 1}`}
                          className="h-full w-full rounded-md object-cover p-2"
                          onError={(e) => {
                            console.error("Image failed to load:", file.name);
                            e.currentTarget.src =
                              "/placeholder.svg?height=200&width=200";
                          }}
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute right-1 top-1 h-6 w-6"
                          onClick={() => handleRemoveImage(index)}
                          type="button"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    <div
                      {...getImageRootProps()}
                      className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 hover:bg-gray-50"
                    >
                      <input {...getImageInputProps()} />
                      <Plus className="mb-2 h-6 w-6 text-gray-400" />
                      <span className="text-sm text-gray-500">Add Image</span>
                    </div>
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
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => {
                            setSelectedCertificate(certificateFiles[index]);
                            setIsCertificateModalOpen(true);
                          }}
                        >
                          <div className="mr-3 rounded-md bg-blue-100 p-2 text-blue-600">
                            <Info className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{cert}</p>
                            <p className="text-xs text-gray-500">
                              {certificateFiles[index]?.size
                                ? `${(certificateFiles[index].size / 1024 / 1024).toFixed(2)} MB`
                                : ""}
                            </p>
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

                    {/* Add the modal */}
                    <Dialog
                      open={isCertificateModalOpen}
                      onOpenChange={setIsCertificateModalOpen}
                    >
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Certificate Preview</DialogTitle>
                        </DialogHeader>
                        {selectedCertificate && (
                          <div className="mt-4">
                            {selectedCertificate.type.startsWith("image/") ? (
                              <img
                                src={URL.createObjectURL(selectedCertificate)}
                                alt="Certificate preview"
                                className="w-full h-auto rounded-lg"
                              />
                            ) : selectedCertificate.type ===
                              "application/pdf" ? (
                              <div className="space-y-4">
                                <div className="flex justify-end">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      const url =
                                        URL.createObjectURL(
                                          selectedCertificate
                                        );
                                      const a = document.createElement("a");
                                      a.href = url;
                                      a.download = selectedCertificate.name;
                                      document.body.appendChild(a);
                                      a.click();
                                      document.body.removeChild(a);
                                      URL.revokeObjectURL(url);
                                    }}
                                  >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download PDF
                                  </Button>
                                </div>
                                <div className="h-[600px] w-full rounded-lg border bg-gray-50">
                                  <iframe
                                    src={URL.createObjectURL(
                                      selectedCertificate
                                    )}
                                    className="h-full w-full rounded-lg"
                                    title="PDF Preview"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">
                                  Preview not available for this file type.
                                  Please download to view.
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    <div
                      {...getCertificateRootProps()}
                      className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-8 hover:bg-gray-50"
                    >
                      <input {...getCertificateInputProps()} />
                      <Upload className="mb-2 h-8 w-8 text-gray-400" />
                      <p className="mb-2 text-sm font-medium">
                        Drag and drop your certificate here
                      </p>
                      <p className="mb-4 text-xs text-gray-500">
                        Supports PDF, JPG, PNG up to 10MB
                      </p>
                      <Button variant="outline" size="sm" type="button">
                        Browse Files
                      </Button>
                    </div>
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
                    <Controller
                      name="price"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            $
                          </span>
                          <Input
                            {...field}
                            type="text"
                            className="pl-8"
                            placeholder="Enter price"
                            value={field.value || ""}
                            onChange={(e) => {
                              const value =
                                e.target.value === ""
                                  ? 0
                                  : Number(e.target.value);
                              field.onChange(value);
                            }}
                          />
                        </div>
                      )}
                    />
                    {errors.price && (
                      <p className="text-sm text-red-500">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sku">
                      SKU  <span className="text-red-500">*</span>
                    </Label>
                    <Controller
                      name="sku"
                      control={control}
                      render={({ field }) => (
                        <div className="relative">
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter SKU"
                            value={field.value || ""}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                {/* <div>
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
                      <Controller
                        name="allowOffers"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
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
                      <Controller
                        name="showComparePriceLabel"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
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
                      <Controller
                        name="chargeShipping"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div> */}

                {/* <Separator /> */}

                <div>
                  <h3 className="mb-4 text-lg font-medium">
                    Listing Visibility
                  </h3>

                  <div className="space-y-4">
                    {/* <div className="flex items-center justify-between rounded-lg border p-4">
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
                    </div> */}

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
                  onClick={() => console.log("Submit button clicked")}
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
