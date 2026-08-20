import { useCallback, useEffect, useState } from "react";

export type MediaItem = {
  id: string;
  name: string;
  kind: "image" | "video" | "audio";
  dataUrl: string;
  caption?: string;
};

function kindOf(type: string): MediaItem["kind"] | null {
  if (type.startsWith("image/")) return "image";
  if (type.startsWith("video/")) return "video";
  if (type.startsWith("audio/")) return "audio";
  return null;
}

function readAsDataUrl(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * Saves uploaded photos / videos / voice notes in this browser (localStorage),
 * so they stay after a refresh on the same device.
 */
export function useMediaStore(key: string) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setItems(JSON.parse(raw) as MediaItem[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, [key]);

  const persist = useCallback(
    (next: MediaItem[]) => {
      setItems(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
        setError(null);
      } catch {
        setError("This browser ran out of space — try smaller or fewer files.");
      }
    },
    [key],
  );

  const addFiles = useCallback(
    async (files: FileList | File[]) => {
      const incoming: MediaItem[] = [];
      for (const file of Array.from(files)) {
        const kind = kindOf(file.type);
        if (!kind) continue;
        incoming.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          name: file.name,
          kind,
          dataUrl: await readAsDataUrl(file),
        });
      }
      if (incoming.length) persist([...items, ...incoming]);
    },
    [items, persist],
  );

  const addBlob = useCallback(
    async (blob: Blob, name: string) => {
      const kind = kindOf(blob.type) ?? "audio";
      persist([
        ...items,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          name,
          kind,
          dataUrl: await readAsDataUrl(blob),
        },
      ]);
    },
    [items, persist],
  );

  const remove = useCallback(
    (id: string) => persist(items.filter((item) => item.id !== id)),
    [items, persist],
  );

  const setCaption = useCallback(
    (id: string, caption: string) =>
      persist(items.map((item) => (item.id === id ? { ...item, caption } : item))),
    [items, persist],
  );

  return { items, ready, error, addFiles, addBlob, remove, setCaption };
}
