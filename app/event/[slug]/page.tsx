import { notFound } from "next/navigation";
import EventContent from "./EventContent";

export const runtime = "edge";

interface EventPageProps {
    params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: EventPageProps) {
    const { slug } = await params;

    const url = `https://raw.githubusercontent.com/heybyben/ogft_web/main/events/${slug}.md`;
    const res = await fetch(url);

    if (!res.ok) return notFound();

    const fileContent = await res.text();
    return <EventContent markdown={fileContent} slug={slug} />;
}
