import Link from "next/link"
import Image from "next/image"
import { Star, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Restaurant {
    id: string
    name: string
    cuisine: string
    rating: number
    reviews: number
    deliveryTime: string
    minOrder: number
    image: string
    address: string
    isFeatured: boolean
}

interface RestaurantCardProps {
    restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <Link href={`/restaurants/${restaurant.id}`} className="group block h-full">
            <div className="relative h-full overflow-hidden rounded-xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        {restaurant.isFeatured && (
                            <Badge className="bg-primary text-primary-foreground font-medium shadow-sm backdrop-blur-md">
                                Featured
                            </Badge>
                        )}
                    </div>

                    <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold shadow-sm backdrop-blur-md">
                            {restaurant.deliveryTime}
                        </Badge>
                    </div>

                    {/* Bottom Image Info */}
                    <div className="absolute bottom-3 left-3 text-white">
                        <div className="flex items-center gap-1 text-xs font-medium bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                            <Clock className="h-3 w-3" />
                            <span>Min. {restaurant.minOrder} TL</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                {restaurant.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                {restaurant.cuisine} • {restaurant.address}
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold dark:bg-green-900/30 dark:text-green-400">
                                <Star className="h-3 w-3 fill-current" />
                                {restaurant.rating}
                            </div>
                            <span className="text-[10px] text-muted-foreground">({restaurant.reviews})</span>
                        </div>
                    </div>

                    <div className="pt-3 border-t flex items-center justify-between text-sm">
                        <div className="flex items-center text-green-600 font-medium text-xs">
                            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                                Free Delivery
                            </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium group-hover:text-primary transition-colors">
                            View Menu &rarr;
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
