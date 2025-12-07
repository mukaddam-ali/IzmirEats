import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Clock, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories, restaurants } from "@/data/mock-data"
import { RestaurantCard } from "@/components/RestaurantCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Delicious Turkish Food in Izmir"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Taste of Izmir, Delivered.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
            Order from the best local restaurants in Karşıyaka, Bornova, Alsancak, and more.
          </p>

          <div className="w-full max-w-2xl bg-white rounded-lg p-2 flex items-center shadow-xl">
            <div className="flex items-center px-4 border-r border-gray-200 w-1/3">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <select className="bg-transparent text-black outline-none w-full text-sm font-medium cursor-pointer">
                <option>Alsancak</option>
                <option>Karşıyaka</option>
                <option>Bornova</option>
                <option>Konak</option>
                <option>Buca</option>
                <option>Göztepe</option>
              </select>
            </div>
            <div className="flex-1 flex items-center px-4">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="Search for food or restaurants..."
                className="border-none shadow-none focus-visible:ring-0 text-black placeholder:text-gray-400"
              />
            </div>
            <Button size="lg" className="rounded-md">
              Find Food
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Popular Cuisines</h2>
            <Link href="/cuisines" className="text-primary hover:underline flex items-center text-sm font-medium">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/restaurants?cuisine=${category.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm h-full overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-0 text-center h-full">
                    <div className="w-full h-32 relative">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <span className="font-bold text-white text-lg drop-shadow-md">{category.name}</span>
                      </div>
                    </div>
                    <div className="p-3 w-full bg-white">
                      <span className="text-xs text-muted-foreground">{category.count} places</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Restaurants</h2>
            <Link href="/restaurants" className="text-primary hover:underline flex items-center font-medium">
              See All Restaurants <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.filter(r => r.isFeatured).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="relative z-10 max-w-xl text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Izmir Eats</h2>
              <p className="text-lg mb-6 opacity-90">
                Grow your business by reaching more customers in Izmir. Join our network of top-rated restaurants today.
              </p>
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Started
              </Button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
