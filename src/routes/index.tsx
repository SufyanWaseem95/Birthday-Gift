import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Heart, Gift, Camera, MessageCircleHeart, Sparkles, Lock, Unlock, ChevronRight, RotateCcw, Cake } from "lucide-react";

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
    question: "How you felt for the first time after seeing me?",
    options: [
      "My heart skipped a beat",
      "Butterflies everywhere",
      "Like I'd known you forever",
      "All of the above",
    ],
    answer: 3,
    note: "From that very first glance, you were already my whole world.",
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
  {
    question: "What do I think about before falling asleep?",
    options: ["Work stuff", "You, always you", "What to eat tomorrow", "Nothing — I'm out cold"],
    answer: 1,
    note: "You're my last thought every night and my first every morning.",
  },
  {
    question: "What's my favorite way to spend time with you?",
    options: ["Fancy dinners out", "Cozy nights in", "Adventures together", "Anywhere, as long as it's with you"],
    answer: 3,
    note: "Wherever you are is my favorite place to be.",
  },
  {
    question: "What makes my day instantly better?",
    options: ["A good cup of coffee", "Seeing you smile", "A surprise hug from you", "Both B and C"],
    answer: 3,
    note: "Your smile and your hugs are my daily dose of happiness.",
  },
  {
    question: "How much do I love you?",
    options: ["A lot", "More than words can say", "To the moon and back", "Infinity and beyond"],
    answer: 3,
    note: "Even infinity feels too small a word for what I feel for you.",
  },
  {
    question: "What's my favorite sound in the world?",
    options: ["Rain on the window", "Your laugh", "Your voice saying my name", "Both B and C"],
    answer: 3,
    note: "Your laugh is music, and my name sounds best in your voice.",
  },
  {
    question: "What do I want most for your birthday?",
    options: ["To spoil you rotten", "To see you happy all day", "To hold you close", "All of the above"],
    answer: 3,
    note: "Your happiness is the only gift I ever need.",
  },
  {
    question: "What are you to me?",
    options: ["My wife", "My best friend", "My home", "All of the above and so much more"],
    answer: 3,
    note: "You are everything I never knew I always wanted.",
  },
];

function BirthdayPage() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentReason, setCurrentReason] = useState(0);
  const [lovePercent, setLovePercent] = useState(0);

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
      setLovePercent((p) => Math.min(100, p + 100 / quizQuestions.length));
    }
    setTimeout(() => {
      if (quizStep < quizQuestions.length - 1) {
        setQuizStep((s) => s + 1);
        setSelectedOption(null);
      } else {
        setQuizDone(true);
      }
    }, 1800);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScore(0);
    setQuizDone(false);
    setSelectedOption(null);
    setLovePercent(0);
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
          <Link
            to="/letters"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-blossom-50"
          >
            <MessageCircleHeart className="h-4 w-4 text-primary" />
            Read my letters
          </Link>
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
              <Link
                to="/letters"
                className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Open all my letters
                <ChevronRight className="h-4 w-4" />
              </Link>
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
            <Link
              to="/memories"
              className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-blossom-100 px-4 py-2 text-xs font-semibold text-blossom-700 hover:bg-blossom-200"
            >
              Open the full gallery
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
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

          {/* Interactive quiz teaser */}
          <BentoCard className="lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-card to-blossom-50">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-medium text-foreground">Love quiz</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {quizQuestions.length} little questions about us. Each right answer fills our love
              meter a little more.
            </p>
            <a
              href="#love-quiz"
              className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Take the quiz
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
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

      {/* Love quiz with love meter */}
      <section id="love-quiz" className="relative z-10 mx-auto max-w-5xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-6 shadow-sm md:p-10">
          <header className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
              <Heart className="h-7 w-7 fill-primary" />
            </div>
            <h2 className="text-4xl font-medium text-foreground md:text-5xl">Our Love Quiz</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Answer {quizQuestions.length} little questions and watch our love meter rise with every
              answer you get right.
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto]">
            {/* Quiz area */}
            <div className="order-2 md:order-1">
              {!quizDone && currentQuestion ? (
                <div key={quizStep} className="pop-in">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blossom-100 px-3 py-1 text-xs font-semibold text-blossom-700">
                      Question {quizStep + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      Score: {quizScore}/{quizQuestions.length}
                    </span>
                  </div>
                  <p className="mb-4 text-lg font-medium text-foreground">
                    {currentQuestion.question}
                  </p>
                  <div className="space-y-2.5">
                    {currentQuestion.options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQuestion.answer;
                      const showResult = selectedOption !== null;
                      return (
                        <button
                          key={idx}
                          disabled={showResult}
                          onClick={() => handleQuizAnswer(idx)}
                          className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition-all ${
                            showResult && isCorrect
                              ? "bg-green-100 text-green-800"
                              : showResult && isSelected
                                ? "bg-destructive/10 text-destructive"
                                : "bg-card/70 text-foreground hover:bg-blossom-100 hover:scale-[1.02]"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {selectedOption !== null && (
                    <p className="mt-4 rounded-2xl bg-blossom-100/60 p-4 text-sm italic text-foreground">
                      {currentQuestion.note}
                    </p>
                  )}
                </div>
              ) : (
                <div className="pop-in text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Heart className="h-8 w-8 fill-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-medium text-foreground">
                    {quizScore}/{quizQuestions.length} correct!
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                    {quizScore === quizQuestions.length
                      ? "You know me perfectly. Just like I know you're perfect for me. Happy birthday, my love."
                      : "You know my heart, and that's all that matters. Every answer is a little piece of us."}
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Play again
                  </button>
                </div>
              )}
            </div>

            {/* Love meter */}
            <div className="order-1 flex flex-col items-center md:order-2">
              <span className="mb-2 text-xs font-semibold tracking-widest text-blossom-700 uppercase">
                Love Meter
              </span>
              <div className="relative h-72 w-10 overflow-hidden rounded-full border-2 border-blossom-200 bg-blossom-50">
                <div
                  className="absolute bottom-0 left-0 w-full origin-bottom rounded-full bg-gradient-to-t from-blossom-400 via-blossom-500 to-primary transition-transform duration-700 ease-out"
                    style={{
                      transform: `scaleY(${lovePercent / 100})`,
                    }}
                  />
                  {/* Tick marks */}
                  {[20, 40, 60, 80].map((tick) => (
                    <div
                      key={tick}
                      className="absolute left-0 w-full border-t border-blossom-200/60"
                      style={{ bottom: `${tick}%` }}
                    />
                  ))}
                </div>
                <div className="relative mt-3">
                  <Heart
                    className={`h-8 w-8 fill-primary text-primary ${quizDone ? "animate-[meter-pulse_1.2s_ease-in-out_infinite]" : ""}`}
                  />
                  {quizDone && lovePercent === 100 && (
                    <Heart className="heart-burst absolute inset-0 h-8 w-8 fill-primary text-primary" />
                  )}
                </div>
                <span className="mt-2 text-2xl font-bold text-primary">
                  {Math.round(lovePercent)}%
                </span>
            </div>
          </div>
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
