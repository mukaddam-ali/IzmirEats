import GenericPage from "@/components/GenericPage"

export default function CareersPage() {
    return (
        <GenericPage title="Careers at Izmir Eats">
            <p className="text-xl mb-8">Join us in revolutionizing the food delivery experience in Izmir.</p>

            <div className="space-y-8">
                <div className="border p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Senior Frontend Developer</h3>
                    <p className="text-muted-foreground mb-4">Remote / Izmir • Full-time</p>
                    <p className="mb-4">We are looking for an experienced React/Next.js developer to help build our core platform.</p>
                    <button className="text-primary font-medium hover:underline">Apply Now &rarr;</button>
                </div>

                <div className="border p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Operations Manager</h3>
                    <p className="text-muted-foreground mb-4">Izmir (Alsancak) • Full-time</p>
                    <p className="mb-4">Lead our delivery fleet and restaurant partnerships team.</p>
                    <button className="text-primary font-medium hover:underline">Apply Now &rarr;</button>
                </div>

                <div className="border p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Customer Success Specialist</h3>
                    <p className="text-muted-foreground mb-4">Remote • Full-time</p>
                    <p className="mb-4">Ensure our customers and restaurant partners have a seamless experience.</p>
                    <button className="text-primary font-medium hover:underline">Apply Now &rarr;</button>
                </div>
            </div>
        </GenericPage>
    )
}
