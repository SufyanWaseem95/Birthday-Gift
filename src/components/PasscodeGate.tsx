import { useEffect, useState, type ReactNode } from "react";
import { Heart, Lock, Sparkles } from "lucide-react";

import { PASSCODE_HINT, PASSCODE_STORAGE_KEY, SPECIAL_PASSCODE } from "@/lib/passcode";
import heroImage from "@/assets/hero-birthday.jpg";

export function PasscodeGate({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    setUnlocked(
      typeof window !== "undefined" &&
        window.sessionStorage.getItem(PASSCODE_STORAGE_KEY) === "true",
    );
    setHydrated(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === SPECIAL_PASSCODE.toLowerCase()) {
      setOpening(true);
      window.sessionStorage.setItem(PASSCODE_STORAGE_KEY, "true");
      setTimeout(() => setUnlocked(true), 900);
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!hydrated) {
    return <div className="min-h-screen bg-background" />;
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
      />
      <div className="absolute inset-0 bg-blossom-900/30 backdrop-blur-xl" />

      <div className="pointer-events-none absolute inset-0">
        <Heart className="floating-heart absolute top-[15%] left-[12%] h-6 w-6 fill-blossom-100 text-blossom-100 opacity-70" />
        <Heart className="floating-heart-delayed absolute top-[30%] right-[14%] h-5 w-5 fill-blossom-200 text-blossom-200 opacity-60" />
        <Sparkles className="floating-heart-slow absolute bottom-[18%] left-[22%] h-5 w-5 text-gold opacity-70" />
        <Heart className="floating-heart-slow absolute bottom-[28%] right-[18%] h-7 w-7 fill-blossom-100 text-blossom-100 opacity-50" />
      </div>

      <form
        onSubmit={submit}
        className={`relative z-10 w-full max-w-md rounded-3xl border border-blossom-100/60 bg-card/85 p-8 text-center shadow-2xl backdrop-blur-md transition-all duration-700 md:p-10 ${
          opening ? "scale-110 opacity-0" : "scale-100 opacity-100"
        } ${error ? "animate-[shake_0.4s_ease-in-out]" : ""}`}
      >
        <div className="gift-pulse mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <Lock className="h-7 w-7" />
        </div>
        <h1 className="text-4xl leading-tight font-medium text-foreground md:text-5xl">
          Something special awaits
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Enter your special passcode to unlock your surprise.
        </p>

        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Special passcode"
          aria-label="Special passcode"
          autoFocus
          className="mt-6 w-full rounded-2xl border border-border bg-background px-4 py-3 text-center text-lg tracking-widest text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
        />

        <button
          type="submit"
          className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-95"
        >
          <Heart className="h-4 w-4 fill-primary-foreground" />
          Unlock surprise
        </button>

        <p
          className={`mt-4 min-h-[1.25rem] text-xs ${
            error ? "font-medium text-destructive" : "text-muted-foreground/80"
          }`}
        >
          {error ? "That's not it, my love. Try again 💗" : PASSCODE_HINT}
        </p>
      </form>
    </div>
  );
}
