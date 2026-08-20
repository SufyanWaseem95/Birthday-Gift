import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Heart, Quote } from "lucide-react";

export const Route = createFileRoute("/letters")({
  component: LettersPage,
  head: () => ({
    meta: [
      { title: "Love Letters For You" },
      {
        name: "description",
        content: "Handwritten-style love letters to open one by one, written just for you.",
      },
      { property: "og:title", content: "Love Letters For You" },
      {
        property: "og:description",
        content: "Handwritten-style love letters to open one by one, written just for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const letters = [
  {
    title: "To my forever person",
    preview: "Open when you want to feel loved",
    body: [
      "My beautiful wife,",
      "I could write a thousand letters and still not find the words for what you are to me. You are my first thought in the morning and my softest thought at night.",
      "Today I celebrate every little thing that makes you you — your kindness, your laugh, the way you make hard days feel lighter.",
      "Happy birthday, my love. Forever and always.",
    ],
  },
  {
    title: "Open when you miss me",
    preview: "For the quiet, faraway days",
    body: [
      "Hey you,",
      "If you're reading this, come here — even from far away I'm holding you. Close your eyes and remember the sound of us laughing at nothing at all.",
      "I'm always on my way back to you.",
    ],
  },
  {
    title: "Open when you're sad",
    preview: "A hug in words",
    body: [
      "My love,",
      "You don't have to be strong right now. Put it down. I've got it, and I've got you.",
      "You are allowed to rest. You are still the best thing that ever happened to me, even on your heaviest days.",
    ],
  },
  {
    title: "Open when you're Angryy",
    preview: "For when you need to cool down",
    body: [
      "Hey my little firecracker,",
      "First of all, whatever made you mad — I'm on your side. Always. Even if it's me who made you mad, I'm still on your side.",
      "Take a deep breath. Now another one. You're too pretty to be frowning, you know that?",
      "I love you even when you're angry. Especially when you're angry. You get this cute little face and I just want to hug you forever.",
      "Now come here. Let me hold you until the storm passes. I've got you, always.",
    ],
  },
];

function LettersPage() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : letters[open];

  return (
    <main className="relative overflow-hidden px-5 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        {[
          "top-[8%] left-[6%]",
          "top-[22%] right-[10%]",
          "bottom-[18%] left-[14%]",
          "bottom-[30%] right-[7%]",
          "top-[45%] left-[42%]",
        ].map((pos, i) => (
          <Heart
            key={i}
            className={`petal-fall absolute ${pos} h-5 w-5 fill-blossom-200 text-blossom-200 opacity-50`}
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
            <Mail className="h-7 w-7" />
          </div>
          <h1 className="text-4xl font-medium text-foreground md:text-6xl">Letters for you</h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Little envelopes to open whenever your heart needs them.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {letters.map((letter, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(idx)}
              className="envelope-card group relative cursor-pointer overflow-hidden rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-7 text-left shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="wax-seal absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                <Heart className="h-4 w-4 fill-primary-foreground" />
              </span>
              <Quote className="h-5 w-5 text-blossom-300" />
              <h2 className="mt-3 pr-12 text-2xl font-medium text-foreground italic">
                {letter.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{letter.preview}</p>
              <p className="mt-5 text-xs font-semibold tracking-widest text-primary uppercase">
                Tap to open
              </p>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blossom-900/40 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="letter-open relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-blossom-200 bg-[linear-gradient(oklch(1_0_0),oklch(0.985_0.012_350))] p-8 shadow-2xl md:p-12"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close letter"
              className="absolute top-4 right-4 cursor-pointer rounded-full p-2 text-muted-foreground hover:bg-blossom-100 hover:text-foreground"
            >
              ✕
            </button>
            <h2 className="pr-10 text-4xl leading-tight font-medium text-foreground italic md:text-5xl">
              {active.title}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {active.body.map((line, i) => (
                <p key={i} className="letter-line" style={{ animationDelay: `${i * 220}ms` }}>
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5 fill-primary" />
              <span className="text-lg italic">Yours, always.</span>
            </p>
          </article>
        </div>
      )}
    </main>
  );
}
