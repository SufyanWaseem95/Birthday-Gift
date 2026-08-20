import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Gift, Mic, Square, Upload, Trash2, Sparkles, Video } from "lucide-react";

import { useMediaStore } from "@/lib/media-store";

export const Route = createFileRoute("/surprise")({
  component: SurprisePage,
  head: () => ({
    meta: [
      { title: "Your Surprise — Videos & Voice Notes" },
      {
        name: "description",
        content: "Unwrap your surprise, then listen to voice notes and watch videos made for you.",
      },
      { property: "og:title", content: "Your Surprise — Videos & Voice Notes" },
      {
        property: "og:description",
        content: "Unwrap your surprise, then listen to voice notes and watch videos made for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SurprisePage() {
  const [opened, setOpened] = useState(false);
  const [recording, setRecording] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { items, error, addFiles, addBlob, remove } = useMediaStore("surprise-media");

  const startRecording = async () => {
    setMicError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const chunks: Blob[] = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        void addBlob(
          new Blob(chunks, { type: recorder.mimeType || "audio/webm" }),
          `Voice note ${new Date().toLocaleString()}`,
        );
      };
      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
    } catch {
      setMicError("I couldn't reach the microphone — you can upload an audio file instead.");
    }
  };

  const stopRecording = () => {
    recorderRef.current?.stop();
    recorderRef.current = null;
    setRecording(false);
  };

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <header className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary">
          <Gift className="h-7 w-7" />
        </div>
        <h1 className="text-4xl font-medium text-foreground md:text-6xl">Your surprise</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          One little box, and a place for videos and voice notes.
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
              A whole day that's only yours
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Breakfast in bed, your favorite playlist, a long walk, zero chores, and all of my
              attention — plus one real gift waiting for you later today.
            </p>
            <button
              onClick={() => setOpened(false)}
              className="mt-6 cursor-pointer rounded-full bg-blossom-100 px-4 py-2 text-xs font-semibold text-blossom-700 hover:bg-blossom-200"
            >
              Wrap it back up
            </button>
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-2xl font-medium text-foreground">
          <Video className="h-5 w-5 text-primary" />
          Videos & voice notes
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Record a voice note right here, or upload videos and audio. They stay saved in this
          browser.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {!recording ? (
            <button
              onClick={startRecording}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Mic className="h-4 w-4" />
              Record a voice note
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground"
            >
              <Square className="h-4 w-4" />
              Stop recording
            </button>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="video/*,audio/*"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files) void addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground hover:bg-blossom-50"
          >
            <Upload className="h-4 w-4 text-primary" />
            Upload video or audio
          </button>
        </div>

        {micError && <p className="mt-3 text-sm text-destructive">{micError}</p>}
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.length === 0 && (
            <p className="rounded-3xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground sm:col-span-2">
              Nothing here yet — record or upload something sweet.
            </p>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-border bg-card p-4 shadow-sm"
            >
              {item.kind === "video" ? (
                <video src={item.dataUrl} controls className="w-full rounded-2xl" />
              ) : item.kind === "image" ? (
                <img src={item.dataUrl} alt={item.name} className="w-full rounded-2xl" />
              ) : (
                <audio src={item.dataUrl} controls className="w-full" />
              )}
              <div className="mt-3 flex items-center justify-between gap-2">
                <p className="truncate text-xs text-muted-foreground">{item.name}</p>
                <button
                  onClick={() => remove(item.id)}
                  aria-label="Remove"
                  className="cursor-pointer rounded-xl p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
