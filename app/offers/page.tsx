import GenericPage from "@/components/GenericPage"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OffersPage() {
    return (
        <GenericPage title="Special Offers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                        <Badge className="mb-4">Limited Time</Badge>
                        <h2 className="text-2xl font-bold mb-2">50% OFF Your First Order</h2>
                        <p className="text-muted-foreground mb-4">Use code <strong>IZMIR50</strong> at checkout to get 50% off your first order up to 100 TL.</p>
                        <Button>Order Now</Button>
                    </CardContent>
                </Card>

                <Card className="bg-secondary/5 border-secondary/20">
                    <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-4">Free Delivery</Badge>
                        <h2 className="text-2xl font-bold mb-2">Free Delivery on All Orders</h2>
                        <p className="text-muted-foreground mb-4">Enjoy free delivery from selected restaurants in Bornova and Karşıyaka this weekend.</p>
                        <Button variant="secondary">View Restaurants</Button>
                    </CardContent>
                </Card>
            </div>
        </GenericPage>
    )
}
