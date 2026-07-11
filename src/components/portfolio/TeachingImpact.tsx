import { useState } from "react";
import { X } from "lucide-react";
import { teachingImpact } from "./data";
import { SectionHeading } from "./SectionHeading";

export function TeachingImpact() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);

return (
<section id="teaching-impact" className="relative py-28">
<div className="mx-auto max-w-6xl px-6">
<SectionHeading
eyebrow={teachingImpact.eyebrow}
title={
<>
Beyond the <span className="text-gradient">Classroom</span>
</>
}
subtitle={teachingImpact.subtitle}
/>

<div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
{teachingImpact.gallery.map((photo, index) => (
<button
key={index}
onClick={() => setSelectedImage(photo)}
className="group flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-lg"
>
<img
src={photo}
alt={`Community photo ${index + 1}`}
className="h-72 w-56 cursor-pointer object-cover transition duration-500 group-hover:scale-105"
/>
</button>
))}
</div>
</div>

{selectedImage && (
<div
className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6"
onClick={() => setSelectedImage(null)}
>
<button
onClick={() => setSelectedImage(null)}
className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
>
<X className="h-6 w-6" />
</button>

<img
src={selectedImage}
alt="Preview"
onClick={(e) => e.stopPropagation()}
className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
/>
</div>
)}
</section>
);
}