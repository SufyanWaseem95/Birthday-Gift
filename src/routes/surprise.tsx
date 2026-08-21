import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";

export const Route = createFileRoute("/surprise")({
  component: SurprisePage,
  head: () => ({
    meta: [
      { title: "Your Surprise" },
      {
        name: "description",
        content: "Unwrap your surprise — a little box of love, just for you.",
      },
      { property: "og:title", content: "Your Surprise" },
      {
        property: "og:description",
        content: "Unwrap your surprise — a little box of love, just for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SurprisePage() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <Gift className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-medium text-foreground md:text-6xl">Your surprise</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          One little box, waiting just for you.
        </p>
      </header>

      <section className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-card p-8 text-center shadow-sm md:p-12">
        {!opened ? (
          <>
            <button
              onClick={() => setOpened(true)}
              aria-label="Unwrap the surprise"
              className="gift-pulse mx-auto flex h-28 w-28 cursor-pointer items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-105"
            >
              <Gift className="h-12 w-12" />
            </button>
            <p className="mt-4 text-sm text-muted-foreground">Tap the box, birthday girl</p>
          </>
        ) : (
          <div className="scale-in-soft">
            <Sparkles className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-4 text-3xl font-medium text-foreground md:text-4xl">
              A little box of love, just for you
            </h2>
            <div className="mx-auto mt-4 max-w-lg space-y-4">
              <p className="text-lg italic text-foreground">
                "In a world full of temporary things, you are a perpetual feeling."
              </p>
              <div className="rounded-2xl bg-blossom-100/70 p-4">
                <p className="text-sm font-medium text-foreground">
                  You are the poem I never knew how to write, the song I never knew how to sing, and
                  the love I never knew I deserved.
                </p>
              </div>
              <div className="rounded-2xl bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">
                  If I had to choose between loving you and breathing, I'd use my last breath to say
                  I love you.
                </p>
              </div>
              <p className="text-base text-muted-foreground">
                You're my favorite person to annoy, and my absolute favorite to love. Happy birthday,
                my pretty little girl. Every day with you feels like a gift I never want to stop
                unwrapping.
              </p>
            </div>
            <button
              onClick={() => setOpened(false)}
              className="mt-6 cursor-pointer rounded-full bg-blossom-100 px-4 py-2 text-xs font-semibold text-blossom-700 hover:bg-blossom-200"
            >
              Wrap it back up
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
