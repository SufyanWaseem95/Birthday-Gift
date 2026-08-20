import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { d as Mail, f as Lock, g as Gamepad2, h as Gift, m as Heart, o as Sparkles, p as Images } from "../_libs/lucide-react.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BuKDYBMz.js
var router_BuKDYBMz_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-rONoL67H.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var PASSCODE_STORAGE_KEY = "birthday-unlocked";
var PASSCODE_HINT = "Hint: the two words I say to you every night 💕";
var hero_birthday_default = "/assets/hero-birthday-ofxvv8Ux.jpg";
function PasscodeGate({ children }) {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [opening, setOpening] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setUnlocked(typeof window !== "undefined" && window.sessionStorage.getItem("birthday-unlocked") === "true");
		setHydrated(true);
	}, []);
	const submit = (e) => {
		e.preventDefault();
		if (value.trim().toLowerCase() === "ilyinno".toLowerCase()) {
			setOpening(true);
			window.sessionStorage.setItem(PASSCODE_STORAGE_KEY, "true");
			setTimeout(() => setUnlocked(true), 900);
		} else {
			setError(true);
			setValue("");
			setTimeout(() => setError(false), 2e3);
		}
	};
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
	if (unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_birthday_default,
				alt: "",
				"aria-hidden": "true",
				className: "absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-blossom-900/30 backdrop-blur-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart absolute top-[15%] left-[12%] h-6 w-6 fill-blossom-100 text-blossom-100 opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart-delayed absolute top-[30%] right-[14%] h-5 w-5 fill-blossom-200 text-blossom-200 opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "floating-heart-slow absolute bottom-[18%] left-[22%] h-5 w-5 text-gold opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart-slow absolute bottom-[28%] right-[18%] h-7 w-7 fill-blossom-100 text-blossom-100 opacity-50" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: `relative z-10 w-full max-w-md rounded-3xl border border-blossom-100/60 bg-card/85 p-8 text-center shadow-2xl backdrop-blur-md transition-all duration-700 md:p-10 ${opening ? "scale-110 opacity-0" : "scale-100 opacity-100"} ${error ? "animate-[shake_0.4s_ease-in-out]" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gift-pulse mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blossom-100 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl leading-tight font-medium text-foreground md:text-5xl",
						children: "Something special awaits"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Enter your special passcode to unlock your surprise."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value,
						onChange: (e) => setValue(e.target.value),
						placeholder: "Special passcode",
						"aria-label": "Special passcode",
						autoFocus: true,
						className: "mt-6 w-full rounded-2xl border border-border bg-background px-4 py-3 text-center text-lg tracking-widest text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-primary-foreground" }), "Unlock surprise"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-4 min-h-[1.25rem] text-xs ${error ? "font-medium text-destructive" : "text-muted-foreground/80"}`,
						children: error ? "That's not it, my love. Try again 💗" : PASSCODE_HINT
					})
				]
			})
		]
	});
}
var links = [
	{
		to: "/",
		label: "Home",
		icon: Heart
	},
	{
		to: "/memories",
		label: "Memories",
		icon: Images
	},
	{
		to: "/letters",
		label: "Letters",
		icon: Mail
	},
	{
		to: "/surprise",
		label: "Surprise",
		icon: Gift
	},
	{
		to: "/game",
		label: "Love game",
		icon: Gamepad2
	}
];
function SiteNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-1.5 px-3 py-3 sm:gap-2",
			children: links.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				activeOptions: { exact: to === "/" },
				className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-blossom-100 hover:text-blossom-700 sm:text-sm",
				activeProps: { className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), label]
			}, to))
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Happy Birthday, My Love" },
			{
				name: "description",
				content: "A special birthday surprise made with love."
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Happy Birthday, My Love"
			},
			{
				property: "og:description",
				content: "A special birthday surprise made with love."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PasscodeGate, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] })
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Jff1-AE4.mjs");
var Route$4 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [
		{ title: "Happy Birthday, My Pretty Little Girl" },
		{
			name: "description",
			content: "A little birthday surprise filled with love letters, memories, quizzes, and gifts."
		},
		{
			property: "og:title",
			content: "Happy Birthday, My Pretty Little Girl"
		},
		{
			property: "og:description",
			content: "A little birthday surprise filled with love letters, memories, quizzes, and gifts."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$3 = () => import("./game-B4Ma7VUl.mjs");
var Route$3 = createFileRoute("/game")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [
		{ title: "Love Match — A Little Game For Us" },
		{
			name: "description",
			content: "Flip the cards, match the pairs, and collect a love note with every match."
		},
		{
			property: "og:title",
			content: "Love Match — A Little Game For Us"
		},
		{
			property: "og:description",
			content: "Flip the cards, match the pairs, and collect a love note with every match."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$2 = () => import("./letters-pNiSmHod.mjs");
var Route$2 = createFileRoute("/letters")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [
		{ title: "Love Letters For You" },
		{
			name: "description",
			content: "Handwritten-style love letters to open one by one, written just for you."
		},
		{
			property: "og:title",
			content: "Love Letters For You"
		},
		{
			property: "og:description",
			content: "Handwritten-style love letters to open one by one, written just for you."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter$1 = () => import("./memories-CG8nJzKh.mjs");
var Route$1 = createFileRoute("/memories")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "Our Memories — Photos & Videos" },
		{
			name: "description",
			content: "A private gallery of our favorite photos and videos, together in one place."
		},
		{
			property: "og:title",
			content: "Our Memories — Photos & Videos"
		},
		{
			property: "og:description",
			content: "A private gallery of our favorite photos and videos, together in one place."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var $$splitComponentImporter = () => import("./surprise-i2HbEq2j.mjs");
var Route = createFileRoute("/surprise")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "Your Surprise — Videos & Voice Notes" },
		{
			name: "description",
			content: "Unwrap your surprise, then listen to voice notes and watch videos made for you."
		},
		{
			property: "og:title",
			content: "Your Surprise — Videos & Voice Notes"
		},
		{
			property: "og:description",
			content: "Unwrap your surprise, then listen to voice notes and watch videos made for you."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] })
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	GameRoute: Route$3.update({
		id: "/game",
		path: "/game",
		getParentRoute: () => Route$5
	}),
	LettersRoute: Route$2.update({
		id: "/letters",
		path: "/letters",
		getParentRoute: () => Route$5
	}),
	MemoriesRoute: Route$1.update({
		id: "/memories",
		path: "/memories",
		getParentRoute: () => Route$5
	}),
	SurpriseRoute: Route.update({
		id: "/surprise",
		path: "/surprise",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter, router_BuKDYBMz_exports as t };
