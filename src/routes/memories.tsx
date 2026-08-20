import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Images, Upload, Trash2, Heart, Camera } from "lucide-react";

import { useMediaStore } from "@/lib/media-store";

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

      {items.length === 0 && (
        <section className="mt-12">
          <div
            onClick={() => inputRef.current?.click()}
            className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-blossom-200 bg-blossom-50/30 transition-colors hover:bg-blossom-50"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <Camera className="h-8 w-8" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-foreground">
                Upload our favorite moments here
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Photos and videos you add will be saved in this browser.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              <Upload className="h-4 w-4" />
              Choose files
            </span>
          </div>
        </section>
      )}

      <section className="mt-14 text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-medium text-foreground">
          <Heart className="h-5 w-5 fill-primary text-primary" />
          Every moment with you is a treasure
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Upload our special moments above and they'll be right here whenever you want to look back.
        </p>
      </section>
    </main>
  );
}
