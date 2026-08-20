import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Gamepad2, m as Heart, s as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/game-B4Ma7VUl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pairs = [
	{
		emoji: "💖",
		note: "You are my favorite person."
	},
	{
		emoji: "🌸",
		note: "You make ordinary days magical."
	},
	{
		emoji: "🎂",
		note: "Every year with you is my favorite year."
	},
	{
		emoji: "💌",
		note: "I'd write you letters forever."
	},
	{
		emoji: "🍓",
		note: "Sweetest thing in my life: you."
	},
	{
		emoji: "⭐",
		note: "You're the best thing I ever chose."
	}
];
function shuffle() {
	return [...pairs, ...pairs].map((p, i) => ({
		id: i,
		emoji: p.emoji,
		note: p.note
	})).sort(() => Math.random() - .5);
}
function GamePage() {
	const [cards, setCards] = (0, import_react.useState)([]);
	const [flipped, setFlipped] = (0, import_react.useState)([]);
	const [matched, setMatched] = (0, import_react.useState)([]);
	const [moves, setMoves] = (0, import_react.useState)(0);
	const [note, setNote] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setCards(shuffle()), []);
	(0, import_react.useEffect)(() => {
		if (flipped.length !== 2) return void 0;
		const [a, b] = flipped.map((id) => cards.find((c) => c.id === id));
		setMoves((m) => m + 1);
		if (a && b && a.emoji === b.emoji) {
			setMatched((prev) => [...prev, a.emoji]);
			setNote(a.note);
			setFlipped([]);
			return;
		}
		const t = setTimeout(() => setFlipped([]), 900);
		return () => clearTimeout(t);
	}, [flipped, cards]);
	const reset = () => {
		setCards(shuffle());
		setFlipped([]);
		setMatched([]);
		setMoves(0);
		setNote(null);
	};
	const won = matched.length === pairs.length && cards.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-medium text-foreground md:text-6xl",
						children: "Love match"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-lg text-muted-foreground",
						children: "Find every pair — each match unlocks a little note from me."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-blossom-100 px-3 py-1 font-semibold text-blossom-700",
								children: ["Moves: ", moves]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-blossom-100 px-3 py-1 font-semibold text-blossom-700",
								children: [
									"Pairs: ",
									matched.length,
									"/",
									pairs.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: reset,
								className: "inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), "Restart"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4",
				children: cards.map((card) => {
					const isOpen = flipped.includes(card.id) || matched.includes(card.emoji);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": isOpen ? card.emoji : "Hidden card",
						disabled: isOpen || flipped.length === 2,
						onClick: () => setFlipped((f) => f.length < 2 ? [...f, card.id] : f),
						className: `flex aspect-square cursor-pointer items-center justify-center rounded-2xl border text-3xl shadow-sm transition-all duration-300 sm:text-4xl ${isOpen ? "scale-in-soft border-blossom-200 bg-card" : "border-blossom-300 bg-gradient-to-br from-blossom-200 to-blossom-300 hover:-translate-y-1"}`,
						children: isOpen ? card.emoji : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7 fill-blossom-50 text-blossom-50 opacity-80" })
					}, card.id);
				})
			}),
			note && !won && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "scale-in-soft mt-8 rounded-3xl border border-blossom-200 bg-blossom-50 p-5 text-center text-lg italic text-foreground",
				children: note
			}),
			won && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scale-in-soft mt-8 rounded-3xl border border-blossom-200 bg-gradient-to-br from-blossom-50 to-card p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-medium text-primary",
						children: "You matched them all 💕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-muted-foreground",
						children: [moves, " moves — but you had my heart before the first flip. Happy birthday, my love."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: reset,
						className: "mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Play again"]
					})
				]
			})
		]
	});
}
//#endregion
export { GamePage as component };
