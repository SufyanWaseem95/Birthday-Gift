import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Heart,
  Gift,
  Camera,
  MessageCircleHeart,
  Sparkles,
  Lock,
  Unlock,
  ChevronRight,
  RotateCcw,
  Music,
  Cake,
} from "lucide-react";

import heroImage from "../assets/hero-birthday.jpg";
import memory1 from "../assets/memory-1.jpg";
import memory2 from "../assets/memory-2.jpg";
import memory3 from "../assets/memory-3.jpg";
import memory4 from "../assets/memory-4.jpg";

export const Route = createFileRoute("/")({
  component: BirthdayPage,
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Beautiful Wife" },
      {
        name: "description",
        content:
          "A little birthday surprise filled with love letters, memories, quizzes, and gifts.",
      },
      { property: "og:title", content: "Happy Birthday, My Beautiful Wife" },
      {
        property: "og:description",
        content:
          "A little birthday surprise filled with love letters, memories, quizzes, and gifts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const memories = [
  { src: memory1, caption: "The day everything changed" },
  { src: memory2, caption: "Coffee dates & cozy mornings" },
  { src: memory3, caption: "Adventures with you" },
  { src: memory4, caption: "Dancing through life together" },
];

const reasons = [
  "Your laugh is my favorite sound.",
  "You make ordinary days feel magical.",
  "You're my safest place.",
  "Your kindness inspires me every day.",
  "You love me exactly as I am.",
  "You make every room brighter.",
  "You're my best friend and my greatest adventure.",
  "Forever wouldn't be long enough with you.",
];

const quizQuestions = [
  {
    question: "Where did we first meet?",
    options: ["At a coffee shop", "Through friends", "Online", "At a party"],
    answer: 0,
    note: "That little café will always be magic to me.",
  },
  {
    question: "What is my favorite thing about you?",
    options: ["Your smile", "Your heart", "Your humor", "Everything"],
    answer: 3,
    note: "Trick question — it's impossible to choose just one.",
  },
  {
    question: "What was our first date like?",
    options: ["Awkward but sweet", "Perfect", "A fun adventure", "All of the above"],
    answer: 3,
    note: "Every moment with you feels like all the good things at once.",
  },
];

function BirthdayPage() {
  const [showLetter, setShowLetter] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentReason, setCurrentReason] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentQuestion = quizQuestions[quizStep];

  const handleQuizAnswer = (index: number) => {
    if (selectedOption !== null || !currentQuestion) return;
    setSelectedOption(index);
    if (index === currentQuestion.answer) {
      setQuizScore((s) => s + 1);
    }
    setTimeout(() => {
      if (quizStep < quizQuestions.length - 1) {
        setQuizStep((s) => s + 1);
        setSelectedOption(null);
      } else {
        setQuizDone(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScore(0);
    setQuizDone(false);
    setSelectedOption(null);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Floating decorative hearts */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Heart className="floating-heart absolute top-[10%] left-[8%] h-5 w-5 text-blossom-200 fill-blossom-200 opacity-60" />
        <Heart className="floating-heart-delayed absolute top-[25%] right-[12%] h-4 w-4 text-blossom-300 fill-blossom-300 opacity-50" />
        <Heart className="floating-heart-slow absolute bottom-[20%] left-[15%] h-6 w-6 text-blossom-100 fill-blossom-100 opacity-40" />
        <Heart className="floating-heart absolute bottom-[35%] right-[8%] h-5 w-5 text-blossom-300 fill-blossom-300 opacity-50" />
        <Sparkles className="floating-heart-delayed absolute top-[15%] right-[30%] h-4 w-4 text-gold opacity-70" />
        <Sparkles className="floating-heart-slow absolute bottom-[15%] left-[35%] h-4 w-4 text-gold opacity-60" />
      </div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-12 text-center md:pt-24 md:pb-16">
        <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-blossom-200 shadow-xl md:h-64 md:w-64">
          <img
            src={heroImage}
            alt="Happy birthday celebration"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blossom-100 px-4 py-1.5 text-sm font-medium text-blossom-700">
          <Cake className="h-4 w-4" />
          Today is all about you
        </p>
        <h1 className="max-w-3xl text-5xl leading-[1.1] font-medium text-foreground md:text-7xl">
          Happy Birthday, <span className="text-primary">My Beautiful Wife</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I built this little corner of the internet just for you — a place to read, play, remember,
          and unwrap something special.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#surprises"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
          >
            Open your surprises
            <ChevronRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setShowLetter(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-blossom-50"
          >
            <MessageCircleHeart className="h-4 w-4 text-primary" />
            Read my letter
          </button>
        </div>
      </section>

      {/* Bento grid */}
      <section
        id="surprises"
        className="relative z-10 mx-auto max-w-6xl px-4 pb-20 md:px-6"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {/* Love letter — large */}
          <BentoCard className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blossom-50 to-card">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blossom-100 text-primary">
                <MessageCircleHeart className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-medium text-foreground">A letter for you</h2>
              <p className="mt-2 text-muted-foreground">
                Words I want you to carry with you today and always.
              </p>
              <div className="mt-6 flex-1 overflow-hidden rounded-2xl bg-card/60 p-5 backdrop-blur-sm">
                <p className="font-body text-lg leading-relaxed text-foreground">
                  My love,
                </p>
                <p className="mt-3 font-body leading-relaxed text-muted-foreground">
                  On this day, the world got a little brighter because you were born. Every year with
                  you feels like a gift I never stop unwrapping. You are my favorite person, my
                  calmest storm, my happiest place.
                </p>
                <p className="mt-3 font-body leading-relaxed text-muted-foreground">
                  I fall in love with you a little more with every laugh, every quiet moment, and
                  every adventure we share. Thank you for being exactly you.
                </p>
                <p className="mt-4 font-body font-medium text-foreground">Forever yours,</p>
              </div>
              <button
                onClick={() => setShowLetter(true)}
                className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Read the full letter
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </BentoCard>

          {/* Memory gallery */}
          <BentoCard className="lg:col-span-2 lg:row-span-2 bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <Camera className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-medium text-foreground">Our memories</h2>
            <p className="mt-2 text-muted-foreground">
              A few moments that make my heart feel full.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {memories.map((memory, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    src={memory.src}
                    alt={memory.caption}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blossom-900/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-blossom-50">{memory.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Interactive quiz */}
          <BentoCard className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-card to-blossom-50">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-medium text-foreground">Love quiz</h2>
            {!quizDone && currentQuestion ? (
              <div className="mt-4">
                <p className="mb-3 text-sm font-medium text-foreground">
                  {currentQuestion.question}
                </p>
                <div className="space-y-2">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.answer;
                    const showResult = selectedOption !== null;
                    return (
                      <button
                        key={idx}
                        disabled={showResult}
                        onClick={() => handleQuizAnswer(idx)}
                        className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-all ${
                          showResult && isCorrect
                            ? "bg-green-100 text-green-800"
                            : showResult && isSelected
                              ? "bg-destructive/10 text-destructive"
                              : "bg-blossom-100/50 text-foreground hover:bg-blossom-100"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {selectedOption !== null && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    {currentQuestion.note}
                  </p>
                )}
              </div>
            ) : (
              <div className="mt-4 text-center">
                <p className="text-3xl font-medium text-primary">{quizScore}/{quizQuestions.length}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {quizScore === quizQuestions.length
                    ? "You know me perfectly. Just like I know you're perfect for me."
                    : "You know my heart, and that's all that matters."}
                </p>
                <button
                  onClick={resetQuiz}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blossom-100 px-3 py-1.5 text-xs font-semibold text-blossom-700 hover:bg-blossom-200"
                >
                  <RotateCcw className="h-3 w-3" />
                  Play again
                </button>
              </div>
            )}
          </BentoCard>

          {/* Gift reveal */}
          <BentoCard className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-primary/10 to-card">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Gift className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-medium text-foreground">Your gift</h2>
            {!giftOpen ? (
              <div className="mt-4 text-center">
                <button
                  aria-label="Unwrap gift"
                  onClick={() => setGiftOpen(true)}
                  className="gift-pulse mx-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
                >
                  <Lock className="h-8 w-8" />
                </button>
                <p className="mt-3 text-sm text-muted-foreground">Tap to unwrap</p>
              </div>
            ) : (
              <div className="mt-4 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blossom-100 text-primary">
                  <Unlock className="h-8 w-8" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">
                  A promise: one whole day of your favorite things — breakfast in bed, a long walk,
                  and all my attention.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">(Plus a real surprise coming later.)</p>
              </div>
            )}
          </BentoCard>

          {/* Reasons jar */}
          <BentoCard className="lg:col-span-2 lg:row-span-1 bg-gradient-to-r from-blossom-50 via-card to-blossom-50">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-primary">
                <Heart className="h-5 w-5 fill-primary" />
              </div>
              <h2 className="text-2xl font-medium text-foreground">Reason #<span className="text-primary">{currentReason + 1}</span> I love you</h2>
              <p className="mt-2 min-h-[3rem] max-w-md text-lg font-body leading-relaxed text-muted-foreground transition-opacity duration-500">
                {reasons[currentReason]}
              </p>
              <div className="mt-4 flex gap-1.5">
                {reasons.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReason(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === currentReason ? "w-6 bg-primary" : "bg-blossom-200"
                    }`}
                    aria-label={`Reason ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 pb-12 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for you
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">
          Every day feels like a celebration with you.
        </p>
      </footer>

      {/* Full letter modal */}
      {showLetter && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blossom-900/40 p-4 backdrop-blur-sm"
          onClick={() => setShowLetter(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-8 shadow-2xl md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLetter(false)}
              className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground hover:bg-blossom-100 hover:text-foreground"
              aria-label="Close letter"
            >
              ✕
            </button>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <MessageCircleHeart className="h-7 w-7" />
            </div>
            <h2 className="text-4xl font-medium text-foreground md:text-5xl">To my forever person,</h2>
            <div className="mt-6 space-y-4 font-body text-lg leading-relaxed text-muted-foreground">
              <p>My beautiful wife,</p>
              <p>
                I could write you a thousand letters and still not find the right words to describe
                how much you mean to me. You are the first thought on my mind in the morning and the
                last one before I sleep. You are my home, my calm, my favorite adventure.
              </p>
              <p>
                Today, I celebrate not just your birthday, but every little thing that makes you
                you — your kindness, your strength, your laughter, the way you make even the hardest
                days feel lighter.
              </p>
              <p>
                I am so grateful to walk through life with you. Here's to many more birthdays,
                adventures, quiet Sundays, and late-night talks.
              </p>
              <p className="font-medium text-foreground">Happy birthday, my love. Forever and always.</p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-primary">
              <Music className="h-5 w-5" />
              <span className="text-sm font-medium">This page is playing our song in my heart.</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
