import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Images, Upload, Trash2, Heart } from "lucide-react";

import { useMediaStore } from "@/lib/media-store";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

export const Route = createFileRoute("/memories")({
  component: MemoriesPage,
  head: () => ({
    meta: [
      { title: "Our Memories — Photos & Videos" },
      {
        name: "description",
        content: "A private gallery of our favorite photos and videos, together in one place.",
      },
      { property: "og:title", content: "Our Memories — Photos & Videos" },
      {
        property: "og:description",
        content: "A private gallery of our favorite photos and videos, together in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const starters = [
  { src: memory1, caption: "The day everything changed" },
  { src: memory2, caption: "Cozy mornings" },
  { src: memory3, caption: "Adventures with you" },
  { src: memory4, caption: "Dancing through life" },
];

function MemoriesPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { items, error, addFiles, remove, setCaption } = useMediaStore("memories-media");

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <Images className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-medium text-foreground md:text-6xl">Our memories</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Add your own photos and videos here — they stay saved in this browser.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) void addFiles(e.target.files);
            e.target.value = "";
          }}
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
        >
          <Upload className="h-4 w-4" />
          Add photos & videos
        </button>
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
      </header>

      {items.length > 0 && (
        <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden bg-blossom-50">
                {item.kind === "video" ? (
                  <video src={item.dataUrl} controls className="h-full w-full object-cover" />
                ) : (
                  <img
                    src={item.dataUrl}
                    alt={item.caption || item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <figcaption className="flex items-center gap-2 p-3">
                <input
                  value={item.caption ?? ""}
                  onChange={(e) => setCaption(item.id, e.target.value)}
                  placeholder="Add a caption…"
                  aria-label="Caption"
                  className="min-w-0 flex-1 rounded-xl bg-blossom-50 px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/40"
                />
                <button
                  onClick={() => remove(item.id)}
                  aria-label="Remove"
                  className="cursor-pointer rounded-xl p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <section className="mt-14">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-medium text-foreground">
          <Heart className="h-5 w-5 fill-primary text-primary" />
          A few from me
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {starters.map((memory, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={memory.src}
                alt={memory.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blossom-900/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-medium text-blossom-50">{memory.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
