import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { m as Heart, n as Upload, p as Images, r as Trash2, y as Camera } from "../_libs/lucide-react.mjs";
import { t as useMediaStore } from "./media-store-Co_WjwPw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memories-CG8nJzKh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MemoriesPage() {
	const inputRef = (0, import_react.useRef)(null);
	const { items, error, addFiles, remove, setCaption } = useMediaStore("memories-media");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-medium text-foreground md:text-6xl",
						children: "Our memories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-muted-foreground",
						children: "Add your own photos and videos here — they stay saved in this browser."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept: "image/*,video/*",
						multiple: true,
						className: "hidden",
						onChange: (e) => {
							if (e.target.files) addFiles(e.target.files);
							e.target.value = "";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => inputRef.current?.click(),
						className: "mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Add photos & videos"]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-destructive",
						children: error
					})
				]
			}),
			items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square w-full overflow-hidden bg-blossom-50",
						children: item.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: item.dataUrl,
							controls: true,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.dataUrl,
							alt: item.caption || item.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "flex items-center gap-2 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: item.caption ?? "",
							onChange: (e) => setCaption(item.id, e.target.value),
							placeholder: "Add a caption…",
							"aria-label": "Caption",
							className: "min-w-0 flex-1 rounded-xl bg-blossom-50 px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/40"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => remove(item.id),
							"aria-label": "Remove",
							className: "cursor-pointer rounded-xl p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})]
					})]
				}, item.id))
			}),
			items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => inputRef.current?.click(),
					className: "flex min-h-[300px] cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-blossom-200 bg-blossom-50/30 transition-colors hover:bg-blossom-50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-full bg-blossom-100 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-medium text-foreground",
								children: "Upload our favorite moments here"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Photos and videos you add will be saved in this browser."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Choose files"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center justify-center gap-2 text-2xl font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 fill-primary text-primary" }), "Every moment with you is a treasure"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground",
					children: "Upload our special moments above and they'll be right here whenever you want to look back."
				})]
			})
		]
	});
}
//#endregion
export { MemoriesPage as component };
