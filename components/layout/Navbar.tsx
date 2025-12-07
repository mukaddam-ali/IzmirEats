"use client"

import Link from "next/link"
import { Menu, Search, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center px-4">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-xl text-primary">
                            Izmir Eats
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/restaurants"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Restaurants
                        </Link>
                        <Link
                            href="/cuisines"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Cuisines
                        </Link>
                        <Link
                            href="/about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            About
                        </Link>
                    </nav>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <div className="px-7">
                            <Link
                                href="/"
                                className="flex items-center"
                            >
                                <span className="font-bold text-xl text-primary">Izmir Eats</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4 mt-8 px-7">
                            <Link
                                href="/restaurants"
                                className="text-lg font-medium hover:text-primary"
                            >
                                Restaurants
                            </Link>
                            <Link
                                href="/cuisines"
                                className="text-lg font-medium hover:text-primary"
                            >
                                Cuisines
                            </Link>
                            <Link
                                href="/about"
                                className="text-lg font-medium hover:text-primary"
                            >
                                About
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search restaurants..."
                                className="pl-8 h-9 md:w-[300px] lg:w-[400px]"
                            />
                        </div>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                            <ShoppingBag className="h-4 w-4" />
                            <span className="sr-only">Cart</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                            <User className="h-4 w-4" />
                            <span className="sr-only">User</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
