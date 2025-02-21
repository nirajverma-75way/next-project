import { Metadata } from "next";

interface Props {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params; // ✅ Await params before accessing properties
    const { id } = resolvedParams;

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // Truncated for security

    try {
        const response = await fetch("http://localhost:8000/api/doctor/dashboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token, // ✅ Use correct Bearer token format
            },
            cache: "no-store", // ✅ Prevent caching
        });

        // if (!response.ok) {
        //     throw new Error(`Failed to fetch data: ${response.status}`);
        // }

        const data = await response.json();

        return {
            title: data.message || `Blog Post - ${id}`,
            description: data.message || "No description available.",
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);

        return {
            title: `Blog Post - ${id}`,
            description: "Failed to load metadata.",
        };
    }
}

export default async function BlogPost({ params }: Props) {
    const { id } = await params;
    if (!id) {
        return <div>Loading...</div>; // ✅ Handle undefined params gracefully
    }

    return <div>Blog Post: {id}</div>;
}
