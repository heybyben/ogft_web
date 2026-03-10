"use client";

import Image from "next/image";
import Link from "next/link";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";

interface EventContentProps {
    markdown: string;
    slug: string;
}

interface Event {
    title: string;
    date: string;
    location: string;
    image: string;
    slug: string;
    content: string;
}

export default function EventContent({ markdown, slug }: EventContentProps) {
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        async function parseMarkdown() {
            const { data, content } = matter(markdown);
            const processedContent = await remark().use(gfm).use(html).process(content);
            const contentHtml = processedContent.toString();

            setEvent({
                title: data.title,
                date: data.date,
                location: data.location,
                image: data.image,
                slug,
                content: contentHtml,
            });
        }
        parseMarkdown();
    }, [markdown, slug]);

    if (!event) return <div>Loading...</div>;

    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <Link href="/event" className="text-red-500 mb-6 inline-block">
                &larr; Kembali ke Acara
            </Link>

            <h1 className="text-5xl font-bold text-white mb-4">{event.title}</h1>
            <div className="text-gray-400 mb-6 flex gap-6 text-sm">
                <span>{event.date}</span>
                <span>{event.location}</span>
            </div>

            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div
                className="text-gray-300 text-lg space-y-4"
                dangerouslySetInnerHTML={{ __html: event.content }}
            />
        </main>
    );
}
