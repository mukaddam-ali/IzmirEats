import GenericPage from "@/components/GenericPage"
import { categories } from "@/data/mock-data"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CuisinesPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-primary">Explore Cuisines</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <Link key={category.id} href={`/restaurants?cuisine=${category.id}`}>
                        <Card className="hover:shadow-lg transition-all cursor-pointer overflow-hidden h-64 group">
                            <div className="relative h-full w-full">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                                    <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                                    <p className="text-lg opacity-90">{category.count} Restaurants</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
