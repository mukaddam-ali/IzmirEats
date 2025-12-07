import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, Clock, MapPin, ChevronLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { restaurants, menuItems } from "@/data/mock-data"
import Link from "next/link"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

export default async function RestaurantPage({ params }: PageProps) {
    const { id } = await params
    const restaurant = restaurants.find((r) => r.id === id)
    const menu = menuItems[id as keyof typeof menuItems] || []

    if (!restaurant) {
        notFound()
    }

    // Group menu by category
    const categories = Array.from(new Set(menu.map((item) => item.category)))

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 w-full bg-muted overflow-hidden">
                <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover brightness-50"
                    priority
                />

                <div className="absolute top-4 left-4 z-10">
                    <Link href="/restaurants">
                        <Button variant="secondary" size="sm" className="gap-1">
                            <ChevronLeft className="h-4 w-4" /> Back
                        </Button>
                    </Link>
                </div>

                <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{restaurant.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <span className="font-semibold">{restaurant.rating}</span>
                            <span className="text-muted-foreground">({restaurant.reviews} reviews)</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-medium">{restaurant.cuisine}</span>
                        <span className="text-muted-foreground">•</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{restaurant.deliveryTime}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{restaurant.address}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Menu Section */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue={categories[0]} className="w-full">
                            <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 bg-transparent border-b rounded-none mb-6">
                                {categories.map((category) => (
                                    <TabsTrigger
                                        key={category}
                                        value={category}
                                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                                    >
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {categories.map((category) => (
                                <TabsContent key={category} value={category} className="space-y-4">
                                    <h2 className="text-xl font-bold mb-4">{category}</h2>
                                    {menu.filter((item) => item.category === category).map((item) => (
                                        <div key={item.id} className="group flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                                                    <span className="font-bold text-primary text-lg">₺{item.price}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
                                            </div>
                                            <Button size="icon" className="h-10 w-10 shrink-0 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                                <Plus className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>

                    {/* Sidebar / Cart Summary */}
                    <div className="hidden lg:block">
                        <Card className="sticky top-24">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-xl mb-4">Your Order</h3>
                                <div className="text-center py-8 text-muted-foreground">
                                    <div className="mb-4 flex justify-center">
                                        <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center">
                                            <Plus className="h-8 w-8 opacity-20" />
                                        </div>
                                    </div>
                                    <p>Your cart is empty</p>
                                    <p className="text-sm mt-2">Add items from the menu to start your order.</p>
                                </div>
                                <Button className="w-full mt-4" disabled>
                                    Go to Checkout
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
