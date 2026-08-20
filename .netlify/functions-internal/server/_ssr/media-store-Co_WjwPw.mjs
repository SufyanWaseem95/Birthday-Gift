import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-store-Co_WjwPw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function kindOf(type) {
	if (type.startsWith("image/")) return "image";
	if (type.startsWith("video/")) return "video";
	if (type.startsWith("audio/")) return "audio";
	return null;
}
function readAsDataUrl(file) {
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
function useMediaStore(key) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(key);
			if (raw) setItems(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, [key]);
	const persist = (0, import_react.useCallback)((next) => {
		setItems(next);
		try {
			window.localStorage.setItem(key, JSON.stringify(next));
			setError(null);
		} catch {
			setError("This browser ran out of space — try smaller or fewer files.");
		}
	}, [key]);
	return {
		items,
		ready,
		error,
		addFiles: (0, import_react.useCallback)(async (files) => {
			const incoming = [];
			for (const file of Array.from(files)) {
				const kind = kindOf(file.type);
				if (!kind) continue;
				incoming.push({
					id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
					name: file.name,
					kind,
					dataUrl: await readAsDataUrl(file)
				});
			}
			if (incoming.length) persist([...items, ...incoming]);
		}, [items, persist]),
		addBlob: (0, import_react.useCallback)(async (blob, name) => {
			const kind = kindOf(blob.type) ?? "audio";
			persist([...items, {
				id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
				name,
				kind,
				dataUrl: await readAsDataUrl(blob)
			}]);
		}, [items, persist]),
		remove: (0, import_react.useCallback)((id) => persist(items.filter((item) => item.id !== id)), [items, persist]),
		setCaption: (0, import_react.useCallback)((id, caption) => persist(items.map((item) => item.id === id ? {
			...item,
			caption
		} : item)), [items, persist])
	};
}
//#endregion
export { useMediaStore as t };
