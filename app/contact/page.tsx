import GenericPage from "@/components/GenericPage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
    return (
        <GenericPage title="Contact Us">
            <p className="mb-8">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <div className="space-y-4">
                        <p><strong>Address:</strong> Cumhuriyet Bulvarı No:1, Alsancak, Izmir</p>
                        <p><strong>Email:</strong> support@izmireats.com</p>
                        <p><strong>Phone:</strong> +90 232 123 45 67</p>
                    </div>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            id="message"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </GenericPage>
    )
}
