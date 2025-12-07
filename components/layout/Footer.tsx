import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                            <span className="font-bold text-xl text-primary">Izmir Eats</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Discover the best tastes of Izmir. From traditional Boyoz to fresh seafood, we bring the city's flavors to your doorstep.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/restaurants" className="hover:text-foreground">
                                    Browse Restaurants
                                </Link>
                            </li>
                            <li>
                                <Link href="/cuisines" className="hover:text-foreground">
                                    Cuisines
                                </Link>
                            </li>
                            <li>
                                <Link href="/offers" className="hover:text-foreground">
                                    Special Offers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-foreground">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/terms" className="hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Izmir Eats. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
