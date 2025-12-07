import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GenericPage({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">{title}</h1>
            <div className="prose prose-lg max-w-none">
                {children}
            </div>
            <div className="mt-12">
                <Link href="/">
                    <Button>Return Home</Button>
                </Link>
            </div>
        </div>
    )
}
