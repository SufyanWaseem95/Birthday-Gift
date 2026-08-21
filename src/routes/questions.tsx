import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Heart, Circle as HelpCircle, RotateCcw, Sparkles } from "lucide-react";

export const Route = createFileRoute("/questions")({
  component: QuestionsPage,
  head: () => ({
    meta: [
      { title: "Questions For Us" },
      {
        name: "description",
        content: "A few little yes-or-no questions about you and me.",
      },
      { property: "og:title", content: "Questions For Us" },
      {
        property: "og:description",
        content: "A few little yes-or-no questions about you and me.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Reaction = "yes" | "no" | null;

const questions = [
  {
    text: "Do you remember the first time we met?",
    yesEmoji: "🥰",
    yesMsg: "Of course you do — it's etched in my heart forever too.",
    noEmoji: "🤔",
    noMsg: "That's okay, I remember enough for both of us. It was magical.",
  },
  {
    text: "Did your heart skip a beat when you first saw me?",
    yesEmoji: "💗",
    yesMsg: "Mine did too. Still does, every single time.",
    noEmoji: "😤",
    noMsg: "Liar! But I'll let it slide because you're cute.",
  },
  {
    text: "Am I your favorite person in the whole world?",
    yesEmoji: "👑",
    yesMsg: "You're mine too, forever and always.",
    noEmoji: "😢",
    noMsg: "Ouch! I'm going to pretend I didn't see that.",
  },
  {
    text: "Do you think about me before falling asleep?",
    yesEmoji: "🌙",
    yesMsg: "You're my last thought every night too, my love.",
    noEmoji: "🛌",
    noMsg: "Sure, sure. And I'm a fairy. But I still love you.",
  },
  {
    text: "Would you choose me in every lifetime?",
    yesEmoji: "♾️",
    yesMsg: "In every lifetime, in every universe, I'd find you.",
    noEmoji: "💔",
    noMsg: "Good thing I'd choose you hard enough for both of us!",
  },
  {
    text: "Do I make you happier than anyone else?",
    yesEmoji: "😊",
    yesMsg: "You make me the happiest person alive, just by existing.",
    noEmoji: "😠",
    noMsg: "I'm going to need names. Just kidding... mostly.",
  },
  {
    text: "Are you mine, forever?",
    yesEmoji: "💍",
    yesMsg: "Forever and ever. You're stuck with me, my pretty little girl.",
    noEmoji: "😜",
    noMsg: "Too bad — you're already stuck with me. No returns accepted!",
  },
  {
    text: "Do you love me more than chocolate?",
    yesEmoji: "🍫",
    yesMsg: "Now THAT'S a serious compliment. I love you more than everything.",
    noEmoji: "🍫",
    noMsg: "I can't compete with chocolate? The betrayal! ...I still love you though.",
  },
  {
    text: "Will you grow old with me?",
    yesEmoji: "👴👵",
    yesMsg: "I can't wait to be old and grumpy together, my love.",
    noEmoji: "🏃",
    noMsg: "Where do you think you're going? I'll chase you forever.",
  },
  {
    text: "Am I the best thing that ever happened to you?",
    yesEmoji: "✨",
    yesMsg: "You're the best thing that ever happened to me too. Happy birthday, my love.",
    noEmoji: "🤷",
    noMsg: "Well, you're definitely the best thing that happened to ME.",
  },
];

type Confetti = { id: number; left: number; emoji: string; delay: number; duration: number };

const yesEmojis = ["💖", "💕", "💗", "🥰", "🌸", "✨", "💫", "💝"];
const noEmojis = ["😂", "🤣", "😜", "🤷", "💅", "😏", "🤨", "😅"];

function QuestionsPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Reaction[]>([]);
  const [currentReaction, setCurrentReaction] = useState<Reaction>(null);
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [done, setDone] = useState(false);

  const current = questions[step];

  const spawnConfetti = useCallback((isYes: boolean) => {
    const pool = isYes ? yesEmojis : noEmojis;
    const pieces: Confetti[] = [];
    for (let i = 0; i < 16; i++) {
      pieces.push({
        id: Math.random() * 100000,
        left: Math.random() * 100,
        emoji: pool[Math.floor(Math.random() * pool.length)],
        delay: Math.random() * 0.3,
        duration: 1.8 + Math.random() * 1.2,
      });
    }
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 3500);
  }, []);

  const handleAnswer = (answer: Exclude<Reaction, null>) => {
    if (currentReaction !== null) return;
    setCurrentReaction(answer);
    setAnswers((prev) => [...prev, answer]);
    spawnConfetti(answer === "yes");

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep((s) => s + 1);
        setCurrentReaction(null);
      } else {
        setDone(true);
      }
    }, 2200);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setCurrentReaction(null);
    setDone(false);
    setConfetti([]);
  };

  const yesCount = answers.filter((a) => a === "yes").length;

  if (done) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="confetti-piece pointer-events-none absolute text-2xl"
            style={{
              left: `${c.left}%`,
              top: "-5%",
              animation: `confetti-fall ${c.duration}s ease-in ${c.delay}s forwards`,
            }}
          >
            {c.emoji}
          </span>
        ))}
        <div className="pop-in rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <Heart className="h-8 w-8 fill-primary-foreground" />
          </div>
          <h1 className="text-4xl font-medium text-foreground md:text-5xl">
            You said yes {yesCount} times!
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            {yesCount === questions.length
              ? "Every single yes. Just like I knew you would. You're my forever, my love. Happy birthday."
              : "Whether yes or no, my answer is always you. Happy birthday, my pretty little girl."}
          </p>
          <div className="mt-6 text-5xl">🎉💕🎂</div>
          <button
            onClick={reset}
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <RotateCcw className="h-4 w-4" />
            Answer again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      {confetti.map((c) => (
        <span
          key={c.id}
          className="confetti-piece pointer-events-none absolute text-2xl"
          style={{
            left: `${c.left}%`,
            top: "-5%",
            animation: `confetti-fall ${c.duration}s ease-in ${c.delay}s forwards`,
          }}
        >
          {c.emoji}
        </span>
      ))}

      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <HelpCircle className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-medium text-foreground md:text-6xl">Questions for us</h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          A few little yes-or-no questions about you and me. Answer honestly... or don't, I'll love
          you either way.
        </p>
      </header>

      <div className="mt-8 flex items-center justify-center gap-2">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === step ? "w-8 bg-primary" : i < step ? "w-4 bg-blossom-300" : "w-4 bg-blossom-100"
            }`}
          />
        ))}
      </div>

      <div key={step} className="pop-in mt-10 rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-8 text-center shadow-sm md:p-12">
        <span className="rounded-full bg-blossom-100 px-3 py-1 text-xs font-semibold text-blossom-700">
          Question {step + 1} of {questions.length}
        </span>
        <h2 className="mt-5 text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
          {current.text}
        </h2>

        {currentReaction === null ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => handleAnswer("yes")}
              className="yes-btn group flex flex-col items-center gap-2 cursor-pointer rounded-3xl bg-primary px-8 py-5 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-110 active:scale-95"
            >
              <span className="text-3xl">💚</span>
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="no-btn group flex flex-col items-center gap-2 cursor-pointer rounded-3xl border-2 border-blossom-200 bg-card px-8 py-5 text-lg font-semibold text-foreground shadow-sm transition-all hover:scale-110 active:scale-95"
            >
              <span className="text-3xl">🙈</span>
              No
            </button>
          </div>
        ) : (
          <div className="reaction-show mt-8">
            <div className="text-6xl">
              {currentReaction === "yes" ? current.yesEmoji : current.noEmoji}
            </div>
            <p
              className={`mt-4 text-lg italic ${
                currentReaction === "yes" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {currentReaction === "yes" ? current.yesMsg : current.noMsg}
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-blossom-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium">Next question coming up...</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
