"use client";

import { useState, useEffect } from "react";
import {
  User,
  Settings,
  CreditCard,
  Heart,
  Package,
  LogOut,
  Gem,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { useAppSelector } from "@/store/hooks";
import withAuth from "@/lib/utils/withAuth";
import { RootState } from "@/store";
import { useGetProfileQuery, useUpdateProfileMutation } from "@/store/slices/authApi";
import { useGetUserGemstonesQuery } from "@/store/slices/gemstoneApi";
import { GemstoneCard } from "@/components/gemstone-card";
import { toast } from "sonner";

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { data: profile, isLoading: isProfileLoading } = useGetProfileQuery();
  const { data: userGemstones, isLoading: isGemstonesLoading } = useGetUserGemstonesQuery();
  const [updateProfile] = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
      });
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = async () => {
    try {
      await updateProfile(formData).unwrap();
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (isProfileLoading) {
    return (
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="flex h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={profile?.picture || "/placeholder.svg?height=96&width=96"}
                    alt="User"
                  />
                  <AvatarFallback>{profile?.firstName?.[0]}{profile?.lastName?.[0]}</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-center">{profile?.firstName} {profile?.lastName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="flex items-center py-2">
                <User className="mr-2 h-4 w-4 text-blue-600" />
                <span className="text-sm">Profile</span>
              </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-3/4">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="gemstones">My Gemstones</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Personal Information</CardTitle>
                    <Button
                      variant="outline"
                      onClick={handleEditToggle}
                    >
                      {isEditing ? "Cancel" : "Edit"}
                    </Button>
                  </div>
                  <CardDescription>
                    Update your personal details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      readOnly={!isEditing}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  {isEditing && (
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSave}>
                      Save Changes
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="gemstones" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>My Gemstones</CardTitle>
                    <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="/add-gemstone">Add New Gemstone</a>
                    </Button>
                  </div>
                  <CardDescription>
                    Manage your listed gemstones
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGemstonesLoading ? (
                    <div className="flex h-[200px] items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                        <p className="text-gray-600">Loading gemstones...</p>
                      </div>
                    </div>
                  ) : userGemstones?.length === 0 ? (
                    <div className="text-center py-12">
                      <Gem className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No gemstones listed yet</h3>
                      <p className="text-gray-500 mb-4">Start by adding your first gemstone to the marketplace</p>
                      <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href="/add-gemstone">Add New Gemstone</a>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {userGemstones?.map((gemstone) => (
                        <GemstoneCard key={gemstone.id} {...gemstone} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default withAuth(ProfilePage);