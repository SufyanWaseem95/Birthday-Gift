import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Square, h as Gift, l as Mic, n as Upload, o as Sparkles, r as Trash2, t as Video } from "../_libs/lucide-react.mjs";
import { t as useMediaStore } from "./media-store-Co_WjwPw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/surprise-i2HbEq2j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SurprisePage() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const [micError, setMicError] = (0, import_react.useState)(null);
	const recorderRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const { items, error, addFiles, addBlob, remove } = useMediaStore("surprise-media");
	const startRecording = async () => {
		setMicError(null);
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const chunks = [];
			const recorder = new MediaRecorder(stream);
			recorder.ondataavailable = (e) => chunks.push(e.data);
			recorder.onstop = () => {
				stream.getTracks().forEach((t) => t.stop());
				addBlob(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }), `Voice note ${(/* @__PURE__ */ new Date()).toLocaleString()}`);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-medium text-foreground md:text-6xl",
						children: "Your surprise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-muted-foreground",
						children: "One little box, and a place for videos and voice notes."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-card p-8 text-center shadow-sm md:p-12",
				children: !opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpened(true),
					"aria-label": "Unwrap the surprise",
					className: "gift-pulse mx-auto flex h-28 w-28 cursor-pointer items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-105",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-12 w-12" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Tap the box, birthday girl"
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scale-in-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-10 w-10 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-medium text-foreground md:text-4xl",
							children: "A little box of love, just for you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-4 max-w-lg space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg italic text-foreground",
									children: "\"In a world full of temporary things, you are a perpetual feeling.\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl bg-blossom-100/70 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-foreground",
										children: "You are the poem I never knew how to write, the song I never knew how to sing, and the love I never knew I deserved."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl bg-primary/10 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-primary",
										children: "If I had to choose between loving you and breathing, I'd use my last breath to say I love you."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-muted-foreground",
									children: "You're my favorite person to annoy, and my absolute favorite to love. Happy birthday, my pretty little girl. Every day with you feels like a gift I never want to stop unwrapping."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpened(false),
							className: "mt-6 cursor-pointer rounded-full bg-blossom-100 px-4 py-2 text-xs font-semibold text-blossom-700 hover:bg-blossom-200",
							children: "Wrap it back up"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-2xl font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5 text-primary" }), "Videos & voice notes"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Record a voice note right here, or upload videos and audio. They stay saved in this browser."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [
							!recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: startRecording,
								className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" }), "Record a voice note"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: stopRecording,
								className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-destructive-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-4 w-4" }), "Stop recording"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: "file",
								accept: "video/*,audio/*",
								multiple: true,
								className: "hidden",
								onChange: (e) => {
									if (e.target.files) addFiles(e.target.files);
									e.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => inputRef.current?.click(),
								className: "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground hover:bg-blossom-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 text-primary" }), "Upload video or audio"]
							})
						]
					}),
					micError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-destructive",
						children: micError
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-3xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground sm:col-span-2",
							children: "Nothing here yet — record or upload something sweet."
						}), items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-4 shadow-sm",
							children: [item.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: item.dataUrl,
								controls: true,
								className: "w-full rounded-2xl"
							}) : item.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.dataUrl,
								alt: item.name,
								className: "w-full rounded-2xl"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
								src: item.dataUrl,
								controls: true,
								className: "w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => remove(item.id),
									"aria-label": "Remove",
									className: "cursor-pointer rounded-xl p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							})]
						}, item.id))]
					})
				]
			})
		]
	});
}
//#endregion
export { SurprisePage as component };
