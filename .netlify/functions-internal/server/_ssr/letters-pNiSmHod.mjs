import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as Quote, d as Mail, m as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/letters-pNiSmHod.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var letters = [
	{
		title: "To my forever person",
		preview: "Open when you want to feel loved",
		body: [
			"My beautiful wife,",
			"I could write a thousand letters and still not find the words for what you are to me. You are my first thought in the morning and my softest thought at night.",
			"Today I celebrate every little thing that makes you you — your kindness, your laugh, the way you make hard days feel lighter.",
			"Happy birthday, my love. Forever and always."
		]
	},
	{
		title: "Open when you miss me",
		preview: "For the quiet, faraway days",
		body: [
			"Hey you,",
			"If you're reading this, come here — even from far away I'm holding you. Close your eyes and remember the sound of us laughing at nothing at all.",
			"I'm always on my way back to you."
		]
	},
	{
		title: "Open when you're sad",
		preview: "A hug in words",
		body: [
			"My love,",
			"You don't have to be strong right now. Put it down. I've got it, and I've got you.",
			"You are allowed to rest. You are still the best thing that ever happened to me, even on your heaviest days."
		]
	},
	{
		title: "Open when you're Angryy",
		preview: "For when you need to cool down",
		body: [
			"Hey my little firecracker,",
			"First of all, whatever made you mad — I'm on your side. Always. Even if it's me who made you mad, I'm still on your side.",
			"Take a deep breath. Now another one. You're too pretty to be frowning, you know that?",
			"I love you even when you're angry. Especially when you're angry. You get this cute little face and I just want to hug you forever.",
			"Now come here. Let me hold you until the storm passes. I've got you, always."
		]
	}
];
function LettersPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const active = open === null ? null : letters[open];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-hidden px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					"top-[8%] left-[6%]",
					"top-[22%] right-[10%]",
					"bottom-[18%] left-[14%]",
					"bottom-[30%] right-[7%]",
					"top-[45%] left-[42%]"
				].map((pos, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: `petal-fall absolute ${pos} h-5 w-5 fill-blossom-200 text-blossom-200 opacity-50`,
					style: { animationDelay: `${i * 1.6}s` }
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-medium text-foreground md:text-6xl",
							children: "Letters for you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-muted-foreground",
							children: "Little envelopes to open whenever your heart needs them."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2",
					children: letters.map((letter, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(idx),
						className: "envelope-card group relative cursor-pointer overflow-hidden rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-7 text-left shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "wax-seal absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-5 w-5 text-blossom-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 pr-12 text-2xl font-medium text-foreground italic",
								children: letter.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: letter.preview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-xs font-semibold tracking-widest text-primary uppercase",
								children: "Tap to open"
							})
						]
					}, idx))
				})]
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-blossom-900/40 p-4 backdrop-blur-sm",
				onClick: () => setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					onClick: (e) => e.stopPropagation(),
					className: "letter-open relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-blossom-200 bg-[linear-gradient(oklch(1_0_0),oklch(0.985_0.012_350))] p-8 shadow-2xl md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(null),
							"aria-label": "Close letter",
							className: "absolute top-4 right-4 cursor-pointer rounded-full p-2 text-muted-foreground hover:bg-blossom-100 hover:text-foreground",
							children: "✕"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "pr-10 text-4xl leading-tight font-medium text-foreground italic md:text-5xl",
							children: active.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground",
							children: active.body.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "letter-line",
								style: { animationDelay: `${i * 220}ms` },
								children: line
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 flex items-center gap-2 text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 fill-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg italic",
								children: "Yours, always."
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LettersPage as component };
