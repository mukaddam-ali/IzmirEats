import GenericPage from "@/components/GenericPage"

export default function AboutPage() {
    return (
        <GenericPage title="About Izmir Eats">
            <p>
                Welcome to <strong>Izmir Eats</strong>, your premier destination for discovering and ordering the finest food in the Pearl of the Aegean.
            </p>
            <p className="mt-4">
                Founded in 2024, our mission is to connect food lovers with the rich culinary heritage of Izmir. From the historic streets of Kemeraltı to the vibrant promenade of Kordon, we bring the city's best flavors directly to your doorstep.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
            <p>
                We started with a simple idea: why is it so hard to find good, authentic local food online? We wanted to create a platform that celebrates local businesses, from the oldest artisan bakeries to the newest trendy cafes.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local Focus:</strong> We specialize in Izmir's unique cuisine.</li>
                <li><strong>Curated Selection:</strong> We partner only with the best restaurants.</li>
                <li><strong>Fast Delivery:</strong> Our local logistics network ensures your food arrives hot and fresh.</li>
            </ul>
        </GenericPage>
    )
}
