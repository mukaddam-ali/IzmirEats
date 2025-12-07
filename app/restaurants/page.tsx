import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RestaurantCard } from "@/components/RestaurantCard"
import { restaurants, categories } from "@/data/mock-data"
import { Search, Map, ListFilter } from "lucide-react"

export default function RestaurantsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold">Restaurants in Izmir</h1>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search restaurants..." className="pl-8" />
                    </div>
                    <Button variant="outline" size="icon">
                        <Map className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <ListFilter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}
                <aside className="hidden md:block w-64 space-y-6">
                    <div>
                        <h3 className="font-semibold mb-4">Cuisines</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <div key={category.id} className="flex items-center space-x-2">
                                    <Checkbox id={`category-${category.id}`} />
                                    <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                                        {category.name} ({category.count})
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-semibold mb-4">Sort By</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sort-rating" />
                                <Label htmlFor="sort-rating" className="text-sm font-normal cursor-pointer">Highest Rated</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sort-delivery" />
                                <Label htmlFor="sort-delivery" className="text-sm font-normal cursor-pointer">Fastest Delivery</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sort-price" />
                                <Label htmlFor="sort-price" className="text-sm font-normal cursor-pointer">Lowest Price</Label>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-semibold mb-4">Price Range</h3>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">₺</Button>
                            <Button variant="outline" size="sm" className="flex-1">₺₺</Button>
                            <Button variant="outline" size="sm" className="flex-1">₺₺₺</Button>
                        </div>
                    </div>
                </aside>

                {/* Restaurant Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                        {/* Duplicate for demo purposes to fill grid */}
                        {restaurants.map((restaurant) => (
                            <RestaurantCard key={`${restaurant.id}-duplicate`} restaurant={{ ...restaurant, id: `${restaurant.id}-duplicate` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
