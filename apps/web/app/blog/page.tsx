import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Sapphire Grading",
    excerpt:
      "Learn how sapphires are graded based on color, clarity, cut, and carat weight, and what to look for when purchasing a sapphire.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2023",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Education",
    featured: true,
  },
  {
    id: 2,
    title: "Ethical Gemstone Mining: What You Need to Know",
    excerpt:
      "Discover the importance of ethical mining practices and how to ensure the gemstones you purchase are responsibly sourced.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 28, 2023",
    author: "Michael Chen",
    readTime: "6 min read",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "Emerald vs. Tsavorite: Green Gemstone Showdown",
    excerpt:
      "Compare two of the most popular green gemstones - emerald and tsavorite - in terms of color, durability, rarity, and value.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 10, 2023",
    author: "Priya Patel",
    readTime: "5 min read",
    category: "Gemstone Comparison",
  },
  {
    id: 4,
    title: "How to Care for Your Gemstone Jewelry",
    excerpt:
      "Essential tips for maintaining the beauty and longevity of your gemstone jewelry, including cleaning, storage, and wear recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 22, 2023",
    author: "David Rodriguez",
    readTime: "7 min read",
    category: "Care & Maintenance",
  },
  {
    id: 5,
    title: "Birthstones: History, Meaning, and Modern Interpretations",
    excerpt:
      "Explore the fascinating history of birthstones, their cultural significance, and how they've evolved over time.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 5, 2023",
    author: "Emma Wilson",
    readTime: "9 min read",
    category: "History & Culture",
  },
  {
    id: 6,
    title: "Investment Gemstones: What to Buy in 2023",
    excerpt:
      "Expert insights on which gemstones are likely to appreciate in value and tips for building a gemstone investment portfolio.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 18, 2023",
    author: "James Thompson",
    readTime: "10 min read",
    category: "Investment",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Education",
  "Sustainability",
  "Gemstone Comparison",
  "Care & Maintenance",
  "History & Culture",
  "Investment",
  "Market Trends",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gemstone Blog</h1>
          <p className="text-gray-600">
            Insights, guides, and news from the world of gemstones
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          {categories.slice(0, 5).map((category, index) => (
            <Badge
              key={index}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-blue-600" : ""}
            >
              {category}
            </Badge>
          ))}
          <Badge variant="outline">More +</Badge>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">Featured</Badge>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <Badge variant="outline" className="mb-3">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Regular Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="bg-white">
                  {post.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6 flex-grow">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" className="w-full">
                Read Article
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest gemstone news, market trends, and
            exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
            />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* More Articles Link */}
      <div className="mt-12 text-center">
        <Button variant="outline" className="inline-flex items-center">
          Load More Articles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
