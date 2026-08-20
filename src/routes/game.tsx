import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Gamepad2, RotateCcw, Heart } from "lucide-react";

export const Route = createFileRoute("/game")({
  component: GamePage,
  head: () => ({
    meta: [
      { title: "Love Match — A Little Game For Us" },
      {
        name: "description",
        content: "Flip the cards, match the pairs, and collect a love note with every match.",
      },
      { property: "og:title", content: "Love Match — A Little Game For Us" },
      {
        property: "og:description",
        content: "Flip the cards, match the pairs, and collect a love note with every match.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const pairs = [
  { emoji: "💖", note: "You are my favorite person." },
  { emoji: "🌸", note: "You make ordinary days magical." },
  { emoji: "🎂", note: "Every year with you is my favorite year." },
  { emoji: "💌", note: "I'd write you letters forever." },
  { emoji: "🍓", note: "Sweetest thing in my life: you." },
  { emoji: "⭐", note: "You're the best thing I ever chose." },
];

type Card = { id: number; emoji: string; note: string };

function shuffle(): Card[] {
  return [...pairs, ...pairs]
    .map((p, i) => ({ id: i, emoji: p.emoji, note: p.note }))
    .sort(() => Math.random() - 0.5);
}

function GamePage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => setCards(shuffle()), []);

  useEffect(() => {
    if (flipped.length !== 2) return undefined;
    const [a, b] = flipped.map((id) => cards.find((c) => c.id === id)!);
    setMoves((m) => m + 1);
    if (a && b && a.emoji === b.emoji) {
      setMatched((prev) => [...prev, a.emoji]);
      setNote(a.note);
      setFlipped([]);
      return undefined;
    }
    const t = setTimeout(() => setFlipped([]), 900);
    return () => clearTimeout(t);
  }, [flipped, cards]);

  const reset = () => {
    setCards(shuffle());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setNote(null);
  };

  const won = matched.length === pairs.length && cards.length > 0;

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <Gamepad2 className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-medium text-foreground md:text-6xl">Love match</h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Find every pair — each match unlocks a little note from me.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full bg-blossom-100 px-3 py-1 font-semibold text-blossom-700">
            Moves: {moves}
          </span>
          <span className="rounded-full bg-blossom-100 px-3 py-1 font-semibold text-blossom-700">
            Pairs: {matched.length}/{pairs.length}
          </span>
          <button
            onClick={reset}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Restart
          </button>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {cards.map((card) => {
          const isOpen = flipped.includes(card.id) || matched.includes(card.emoji);
          return (
            <button
              key={card.id}
              aria-label={isOpen ? card.emoji : "Hidden card"}
              disabled={isOpen || flipped.length === 2}
              onClick={() => setFlipped((f) => (f.length < 2 ? [...f, card.id] : f))}
              className={`flex aspect-square cursor-pointer items-center justify-center rounded-2xl border text-3xl shadow-sm transition-all duration-300 sm:text-4xl ${
                isOpen
                  ? "scale-in-soft border-blossom-200 bg-card"
                  : "border-blossom-300 bg-gradient-to-br from-blossom-200 to-blossom-300 hover:-translate-y-1"
              }`}
            >
              {isOpen ? (
                card.emoji
              ) : (
                <Heart className="h-7 w-7 fill-blossom-50 text-blossom-50 opacity-80" />
              )}
            </button>
          );
        })}
      </div>

      {note && !won && (
        <p className="scale-in-soft mt-8 rounded-3xl border border-blossom-200 bg-blossom-50 p-5 text-center text-lg italic text-foreground">
          {note}
        </p>
      )}

      {won && (
        <div className="scale-in-soft mt-8 rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 to-card p-8 text-center">
          <h2 className="text-3xl font-medium text-primary">You matched them all 💕</h2>
          <p className="mt-2 text-muted-foreground">
            {moves} moves — but you had my heart before the first flip. Happy birthday, my love.
          </p>
          <button
            onClick={reset}
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <RotateCcw className="h-4 w-4" />
            Play again
          </button>
        </div>
      )}
    </main>
  );
}
