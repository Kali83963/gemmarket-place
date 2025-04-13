import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
        <div className="relative py-16 px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Gemstone Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The premier destination for authentic, ethically sourced gemstones
            from around the world.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Gemstone Marketplace was born from a passion for
            beautiful, authentic gemstones and a desire to make them accessible
            to collectors and jewelry enthusiasts worldwide.
          </p>
          <p className="text-gray-600 mb-4">
            What began as a small collection of personally sourced gemstones has
            grown into a thriving marketplace connecting buyers directly with
            trusted sellers from mining regions across the globe.
          </p>
          <p className="text-gray-600">
            Our mission is to provide a transparent, ethical platform where
            gemstone lovers can discover unique pieces with complete confidence
            in their authenticity and origin.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                Every gemstone on our platform undergoes rigorous verification
                by certified gemologists to ensure authenticity and quality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide detailed information about each gemstone's origin,
                treatment history, and certification to ensure complete
                transparency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We work only with sellers who adhere to ethical mining practices
                and fair labor standards, ensuring responsible sourcing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Michael Chen",
              role: "Head Gemologist",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Priya Patel",
              role: "Operations Director",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "David Rodriguez",
              role: "Customer Experience",
              image: "/placeholder.svg?height=300&width=300",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our marketplace or need assistance? Our team is
            here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">contact@gemstonemarketplace.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  123 Gemstone Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=500&width=700"
            alt="Our Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Discover Unique Gemstones?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of collectors and jewelry enthusiasts who have found
          their perfect gemstones on our marketplace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Browse Gemstones
          </Button>
          <Button variant="outline">Become a Seller</Button>
        </div>
      </div>
    </div>
  );
}
