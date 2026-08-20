import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Clock, b as Cake, f as Lock, h as Gift, i as Target, m as Heart, n as Upload, o as Sparkles, s as RotateCcw, u as MessageCircleHeart, v as ChevronRight, y as Camera } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Jff1-AE4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reasons = [
	"I love you because you always choose me.",
	"I love you because you're always there for me.",
	"I love you because you're different, you're so mine.",
	"I love you because you're the sweetest, kind, pure, beautiful, prettiest, caring, forgiving, my whole world.",
	"I love you when you smile, I love you when you cry, I love you when you're angry, I love you when you're happy.",
	"I love being with you, I love being part of you.",
	"I love you because you're my wife.",
	"And you're dumb if you think I can give reasons to love you, it's infinity ∞ my dumbo."
];
var quizQuestions = [
	{
		question: "How you felt for the first time after seeing me?",
		options: [
			"My heart skipped a beat",
			"Butterflies everywhere",
			"Like I'd known you forever",
			"All of the above"
		],
		answer: 3,
		note: "From that very first glance, you were already my whole world."
	},
	{
		question: "What is my favorite thing about you?",
		options: [
			"Your smile",
			"Your heart",
			"Your humor",
			"Everything"
		],
		answer: 3,
		note: "Trick question — it's impossible to choose just one."
	},
	{
		question: "What was our first date like?",
		options: [
			"Awkward but sweet",
			"Perfect",
			"A fun adventure",
			"All of the above"
		],
		answer: 3,
		note: "Every moment with you feels like all the good things at once."
	},
	{
		question: "What do I think about before falling asleep?",
		options: [
			"Work stuff",
			"You, always you",
			"What to eat tomorrow",
			"Nothing — I'm out cold"
		],
		answer: 1,
		note: "You're my last thought every night and my first every morning."
	},
	{
		question: "What's the one thing I can never get enough of from you?",
		options: [
			"Your hugs",
			"Your kisses",
			"Your voice",
			"All of the above, always"
		],
		answer: 3,
		note: "Every little thing from you is something I never want to run out of."
	},
	{
		question: "What makes my day instantly better?",
		options: [
			"A good cup of coffee",
			"Seeing you smile",
			"A surprise picture from you",
			"Both B and C"
		],
		answer: 3,
		note: "Your smile and your surprise pictures are my daily dose of happiness."
	},
	{
		question: "How much do I love you?",
		options: [
			"A lot",
			"More than words can say",
			"To the moon and back",
			"Infinity and beyond"
		],
		answer: 3,
		note: "Even infinity feels too small a word for what I feel for you."
	},
	{
		question: "What's my favorite sound in the world?",
		options: [
			"Rain on the window",
			"Your laugh",
			"Your voice saying my name",
			"Both B and C"
		],
		answer: 3,
		note: "Your laugh is music, and my name sounds best in your voice."
	},
	{
		question: "What do I want most for your birthday?",
		options: [
			"To spoil you rotten",
			"To see you happy all day",
			"To hold you close",
			"All of the above"
		],
		answer: 3,
		note: "Your happiness is the only gift I ever need."
	},
	{
		question: "What are you to me?",
		options: [
			"My wife",
			"My best friend",
			"My home",
			"All of the above and so much more"
		],
		answer: 3,
		note: "You are everything I never knew I always wanted."
	}
];
var frontLetterLines = [
	"Happy birthday my lovely Inno, ahh you're turning one year older, you'll be 17, yayyyy my little girl is growing up!",
	"I can't imagine this all, I remember you were so little when I found you, I remember those days, the excitement in your eyes and your heart, the energy, you were just like a little baby, I loved you and adopted you.",
	"My lovely princess, I love you the most, you're the shine of my life, my only hope in my life, my light in the dark.",
	"I fall in love with you more with your every smile, every laugh, I'll be with you forever, my girl. Happy birthday, enjoy your day, with me of course.",
	"MMWAAAHHHHH"
];
var giftQuotes = ["You're my favorite person to annoy, and my absolute favorite to love.", "Are you getting older, or just hotter? Mommy!"];
var heartCompliments = [
	"You're the prettiest girl I've ever seen.",
	"Your smile lights up my whole world.",
	"You're my favorite hello and my hardest goodbye.",
	"Every heart beats for you, but mine beats the loudest.",
	"You're the sweetest thing in my life.",
	"I'd choose you in every lifetime.",
	"Your laugh is my favorite melody.",
	"You're my little princess, forever.",
	"You make my world so much brighter.",
	"I love you more than words can say.",
	"You're the best thing that ever happened to me.",
	"My heart is yours, completely."
];
function BirthdayPage() {
	const [giftOpen, setGiftOpen] = (0, import_react.useState)(false);
	const [quizStep, setQuizStep] = (0, import_react.useState)(0);
	const [quizScore, setQuizScore] = (0, import_react.useState)(0);
	const [quizDone, setQuizDone] = (0, import_react.useState)(false);
	const [selectedOption, setSelectedOption] = (0, import_react.useState)(null);
	const [wasCorrect, setWasCorrect] = (0, import_react.useState)(false);
	const [currentReason, setCurrentReason] = (0, import_react.useState)(0);
	const [lovePercent, setLovePercent] = (0, import_react.useState)(0);
	const [meterPulse, setMeterPulse] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setCurrentReason((prev) => (prev + 1) % reasons.length);
		}, 4e3);
		return () => clearInterval(interval);
	}, []);
	const currentQuestion = quizQuestions[quizStep];
	const handleQuizAnswer = (index) => {
		if (selectedOption !== null || !currentQuestion) return;
		setSelectedOption(index);
		const correct = index === currentQuestion.answer;
		setWasCorrect(correct);
		if (correct) {
			setQuizScore((s) => s + 1);
			setLovePercent((p) => Math.min(100, p + 100 / quizQuestions.length));
			setMeterPulse(true);
			setTimeout(() => setMeterPulse(false), 800);
		}
		setTimeout(() => {
			if (quizStep < quizQuestions.length - 1) {
				setQuizStep((s) => s + 1);
				setSelectedOption(null);
				setWasCorrect(false);
			} else setQuizDone(true);
		}, 1800);
	};
	const resetQuiz = () => {
		setQuizStep(0);
		setQuizScore(0);
		setQuizDone(false);
		setSelectedOption(null);
		setWasCorrect(false);
		setLovePercent(0);
	};
	const heroInputRef = (0, import_react.useRef)(null);
	const [heroPhoto, setHeroPhoto] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const saved = window.localStorage.getItem("hero-photo");
			if (saved) setHeroPhoto(saved);
		} catch {}
	}, []);
	const handleHeroUpload = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			const url = String(reader.result);
			setHeroPhoto(url);
			try {
				window.localStorage.setItem("hero-photo", url);
			} catch {}
		};
		reader.readAsDataURL(file);
		e.target.value = "";
	};
	const memoryInputRef = (0, import_react.useRef)(null);
	const [homeMemories, setHomeMemories] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem("home-memories");
			if (raw) setHomeMemories(JSON.parse(raw));
		} catch {}
	}, []);
	const handleMemoryUpload = (e) => {
		const files = e.target.files;
		if (!files) return;
		const incoming = [];
		let pending = files.length;
		Array.from(files).forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				incoming.push({
					dataUrl: String(reader.result),
					caption: ""
				});
				pending--;
				if (pending === 0) {
					const next = [...homeMemories, ...incoming].slice(0, 4);
					setHomeMemories(next);
					try {
						window.localStorage.setItem("home-memories", JSON.stringify(next));
					} catch {}
				}
			};
			reader.readAsDataURL(file);
		});
		e.target.value = "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart absolute top-[10%] left-[8%] h-5 w-5 text-blossom-200 fill-blossom-200 opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart-delayed absolute top-[25%] right-[12%] h-4 w-4 text-blossom-300 fill-blossom-300 opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart-slow absolute bottom-[20%] left-[15%] h-6 w-6 text-blossom-100 fill-blossom-100 opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "floating-heart absolute bottom-[35%] right-[8%] h-5 w-5 text-blossom-300 fill-blossom-300 opacity-50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "floating-heart-delayed absolute top-[15%] right-[30%] h-4 w-4 text-gold opacity-70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "floating-heart-slow absolute bottom-[15%] left-[35%] h-4 w-4 text-gold opacity-60" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-12 text-center md:pt-24 md:pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: heroInputRef,
						type: "file",
						accept: "image/*",
						className: "hidden",
						onChange: handleHeroUpload
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => heroInputRef.current?.click(),
						className: "group relative mb-8 flex h-48 w-48 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-blossom-200 shadow-xl transition-transform hover:scale-105 md:h-64 md:w-64",
						"aria-label": "Upload your photo",
						children: heroPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: heroPhoto,
							alt: "Your photo",
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2 text-blossom-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-blossom-500",
								children: "Add your photo"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 inline-flex items-center gap-2 rounded-full bg-blossom-100 px-4 py-1.5 text-sm font-medium text-blossom-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, { className: "h-4 w-4" }), "Today is all about you"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "max-w-3xl text-5xl leading-[1.1] font-medium text-foreground md:text-7xl",
						children: ["Happy Birthday, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "My Pretty Little Girl"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl",
						children: "I built this little corner of the internet just for you — a place to read, play, remember, and unwrap something special."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#surprises",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95",
							children: ["Open your surprises", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/letters",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition-colors hover:bg-blossom-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleHeart, { className: "h-4 w-4 text-primary" }), "Read my letters"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "surprises",
				className: "relative z-10 mx-auto max-w-6xl px-4 pb-20 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoCard, {
							className: "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blossom-50 to-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blossom-100 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleHeart, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl font-medium text-foreground",
										children: "A letter for you"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: "Words I want you to carry with you today and always."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex-1 overflow-y-auto rounded-2xl bg-card/60 p-5 backdrop-blur-sm",
										children: [
											frontLetterLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `font-body leading-relaxed ${i === frontLetterLines.length - 1 ? "mt-4 text-xl font-medium text-primary" : i === 0 ? "text-lg text-foreground" : "mt-3 text-muted-foreground"}`,
												children: line
											}, i)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 font-body font-medium text-foreground",
												children: "Your love <3"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-body text-muted-foreground",
												children: "Forever yours >>"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/letters",
										className: "mt-5 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
										children: ["Open all my letters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
							className: "lg:col-span-2 lg:row-span-2 bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blossom-100 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-medium text-foreground",
									children: "Our memories"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: "A few moments that make my heart feel full."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: memoryInputRef,
											type: "file",
											accept: "image/*",
											multiple: true,
											className: "hidden",
											onChange: handleMemoryUpload
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => memoryInputRef.current?.click(),
											className: "inline-flex items-center gap-2 rounded-full bg-blossom-100 px-4 py-2 text-xs font-semibold text-blossom-700 hover:bg-blossom-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }), "Upload our photos"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/memories",
											className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90",
											children: ["Open the full gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-2 gap-3",
									children: homeMemories.length > 0 ? homeMemories.map((memory, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "group relative aspect-square overflow-hidden rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: memory.dataUrl,
											alt: memory.caption || `Memory ${idx + 1}`,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
										})
									}, idx)) : [
										0,
										1,
										2,
										3
									].map((idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => memoryInputRef.current?.click(),
										className: "flex aspect-square cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-blossom-200 bg-blossom-50/50 text-blossom-300 transition-colors hover:bg-blossom-50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-7 w-7" })
									}, idx))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
							className: "lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-card to-blossom-50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-medium text-foreground",
									children: "Love quiz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [quizQuestions.length, " little questions about us. Each right answer fills our love meter a little more."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#love-quiz",
									className: "mt-4 inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105",
									children: ["Take the quiz", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BentoCard, {
							className: "lg:col-span-1 lg:row-span-1 bg-gradient-to-br from-primary/10 to-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-medium text-foreground",
									children: "Your gift"
								}),
								!giftOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": "Unwrap gift",
										onClick: () => setGiftOpen(true),
										className: "gift-pulse mx-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground",
										children: "Tap to unwrap"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blossom-100 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-8 w-8" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-medium text-foreground",
											children: ["INNNOOOOOO: ", giftQuotes[0]]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-primary",
											children: giftQuotes[1]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoCard, {
							className: "lg:col-span-2 lg:row-span-1 bg-gradient-to-r from-blossom-50 via-card to-blossom-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col items-center justify-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blossom-100 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 fill-primary" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-2xl font-medium text-foreground",
										children: [
											"Reason #",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: currentReason + 1
											}),
											" I love you"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "reason-fade mt-2 min-h-[3rem] max-w-md text-lg font-body leading-relaxed text-muted-foreground",
										children: reasons[currentReason]
									}, currentReason),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex gap-1.5",
										children: reasons.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setCurrentReason(idx),
											className: `h-2 w-2 rounded-full transition-all ${idx === currentReason ? "w-6 bg-primary" : "bg-blossom-200"}`,
											"aria-label": `Reason ${idx + 1}`
										}, idx))
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "love-quiz",
				className: "relative z-10 mx-auto max-w-5xl px-4 pb-20 md:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-6 shadow-sm md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7 fill-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-medium text-foreground md:text-5xl",
								children: "Our Love Quiz"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mx-auto mt-3 max-w-lg text-muted-foreground",
								children: [
									"Answer ",
									quizQuestions.length,
									" little questions and watch our love meter rise with every answer you get right."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "order-2 md:order-1",
							children: !quizDone && currentQuestion ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pop-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-blossom-100 px-3 py-1 text-xs font-semibold text-blossom-700",
											children: [
												"Question ",
												quizStep + 1,
												" of ",
												quizQuestions.length
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-medium text-muted-foreground",
											children: [
												"Score: ",
												quizScore,
												"/",
												quizQuestions.length
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-lg font-medium text-foreground",
										children: currentQuestion.question
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-2.5",
										children: currentQuestion.options.map((option, idx) => {
											const isSelected = selectedOption === idx;
											const isCorrect = idx === currentQuestion.answer;
											const showResult = selectedOption !== null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												disabled: showResult,
												onClick: () => handleQuizAnswer(idx),
												className: `w-full rounded-2xl px-4 py-3 text-left text-sm transition-all ${showResult && isCorrect ? "bg-green-100 text-green-800" : showResult && isSelected ? "bg-destructive/10 text-destructive" : "bg-card/70 text-foreground hover:bg-blossom-100 hover:scale-[1.02]"}`,
												children: option
											}, idx);
										})
									}),
									selectedOption !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-4 rounded-2xl p-4 text-sm italic ${wasCorrect ? "bg-green-50 text-green-700" : "bg-blossom-100/60 text-foreground"}`,
										children: currentQuestion.note
									})
								]
							}, quizStep) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pop-in text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-8 w-8 fill-primary-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-3xl font-medium text-foreground",
										children: [
											quizScore,
											"/",
											quizQuestions.length,
											" correct!"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-2 max-w-md text-muted-foreground",
										children: quizScore === quizQuestions.length ? "You know me perfectly. Just like I know you're perfect for me. Happy birthday, my love." : "You know my heart, and that's all that matters. Every answer is a little piece of us."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: resetQuiz,
										className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Play again"]
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "order-1 flex flex-col items-center md:order-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-2 text-xs font-semibold tracking-widest text-blossom-700 uppercase",
									children: "Love Meter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative h-72 w-10 overflow-hidden rounded-full border-2 bg-blossom-50 transition-all duration-300 ${meterPulse ? "border-primary scale-105 shadow-lg shadow-primary/30" : "border-blossom-200"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `absolute bottom-0 left-0 w-full origin-bottom rounded-full bg-gradient-to-t from-blossom-400 via-blossom-500 to-primary transition-transform duration-700 ease-out ${meterPulse ? "meter-burst" : ""}`,
											style: { transform: `scaleY(${lovePercent / 100})` }
										}),
										[
											20,
											40,
											60,
											80
										].map((tick) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-0 w-full border-t border-blossom-200/60",
											style: { bottom: `${tick}%` }
										}, tick)),
										meterPulse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
											className: "meter-sparkle absolute left-1/2 h-4 w-4 -translate-x-1/2 text-gold",
											style: { bottom: `${lovePercent}%` }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
											className: "meter-sparkle-delayed absolute left-1/2 h-3 w-3 -translate-x-1/2 text-gold",
											style: { bottom: `${Math.min(100, lovePercent + 10)}%` }
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-8 w-8 fill-primary text-primary ${quizDone ? "animate-[meter-pulse_1.2s_ease-in-out_infinite]" : ""} ${meterPulse ? "meter-burst" : ""}` }), quizDone && lovePercent === 100 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "heart-burst absolute inset-0 h-8 w-8 fill-primary text-primary" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `mt-2 text-2xl font-bold text-primary transition-all ${meterPulse ? "scale-125" : "scale-100"}`,
									children: [Math.round(lovePercent), "%"]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupidArrowGame, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 pb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-2 text-sm text-muted-foreground",
					children: [
						"Made with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-primary text-primary" }),
						" for you"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground/70",
					children: "Every day feels like a celebration with you."
				})]
			})
		]
	});
}
function CupidArrowGame() {
	const [hearts, setHearts] = (0, import_react.useState)([]);
	const [score, setScore] = (0, import_react.useState)(0);
	const [missed, setMissed] = (0, import_react.useState)(0);
	const [compliment, setCompliment] = (0, import_react.useState)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [gameOver, setGameOver] = (0, import_react.useState)(false);
	const nextIdRef = (0, import_react.useRef)(0);
	const gameLoopRef = (0, import_react.useRef)(null);
	const stopRef = (0, import_react.useRef)(() => {});
	const stopGame = (0, import_react.useCallback)(() => {
		setPlaying(false);
		setGameOver(true);
		if (gameLoopRef.current) {
			clearInterval(gameLoopRef.current);
			gameLoopRef.current = null;
		}
	}, []);
	stopRef.current = stopGame;
	const startGame = (0, import_react.useCallback)(() => {
		setHearts([]);
		setScore(0);
		setMissed(0);
		setCompliment(null);
		setGameOver(false);
		setPlaying(true);
		nextIdRef.current = 0;
		let spawnCounter = 0;
		gameLoopRef.current = setInterval(() => {
			spawnCounter++;
			if (spawnCounter % 14 === 0) {
				const id = nextIdRef.current++;
				const complimentText = heartCompliments[Math.floor(Math.random() * heartCompliments.length)];
				setHearts((prev) => {
					if (prev.length >= 5) return prev;
					return [...prev, {
						id,
						left: 5 + Math.random() * 85,
						top: -5,
						speed: .4 + Math.random() * .5,
						compliment: complimentText
					}];
				});
			}
			setHearts((prev) => {
				let newMissed = 0;
				const next = prev.map((h) => ({
					...h,
					top: h.top + h.speed
				})).filter((h) => {
					if (h.top >= 100) {
						newMissed++;
						return false;
					}
					return true;
				});
				if (newMissed > 0) setMissed((m) => {
					const total = m + newMissed;
					if (total >= 5) stopRef.current();
					return total;
				});
				return next;
			});
		}, 50);
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			if (gameLoopRef.current) clearInterval(gameLoopRef.current);
		};
	}, []);
	const shootHeart = (id) => {
		setHearts((prev) => {
			const heart = prev.find((h) => h.id === id);
			if (heart) {
				setScore((s) => s + 1);
				setCompliment(heart.compliment);
				setTimeout(() => setCompliment(null), 2500);
			}
			return prev.filter((h) => h.id !== id);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cupid-game",
		className: "relative z-10 mx-auto max-w-5xl px-4 pb-20 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl border border-border bg-gradient-to-br from-blossom-50 via-card to-blossom-100 p-6 shadow-sm md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blossom-100 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-medium text-foreground md:text-5xl",
							children: "Cupid's Arrow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-lg text-muted-foreground",
							children: "Tap the floating hearts to shoot your arrow. Each hit reveals a little compliment. Miss 5 and the game ends!"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-primary px-4 py-1.5 font-semibold text-primary-foreground",
							children: ["Hits: ", score]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-destructive/15 px-4 py-1.5 font-semibold text-destructive",
							children: [
								"Misses: ",
								missed,
								"/5"
							]
						}),
						!playing && !gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: startGame,
							className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-primary-foreground" }), "Start"]
						}),
						playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: stopGame,
							className: "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-5 py-1.5 text-sm font-semibold text-card-foreground hover:bg-blossom-50",
							children: "Stop"
						}),
						gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: startGame,
							className: "inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Play again"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 h-80 overflow-hidden rounded-3xl border-2 border-blossom-200 bg-gradient-to-b from-blossom-50/50 to-blossom-100/30",
					children: [
						!playing && !gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center gap-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-12 w-12 fill-primary/30 text-primary/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-medium text-muted-foreground",
								children: "Press start to shoot some hearts!"
							})]
						}),
						gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center gap-3 text-center pop-in",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-12 w-12 fill-primary text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-2xl font-medium text-foreground",
									children: [
										"You hit ",
										score,
										" ",
										score === 1 ? "heart" : "hearts",
										"!"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xs text-sm text-muted-foreground",
									children: score >= 10 ? "Cupid's champion! You stole every heart out there." : score >= 5 ? "Nice shooting, my love. My heart is yours." : "Every heart you missed just means more love for me to give you."
								})
							]
						}),
						playing && hearts.map((heart) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => shootHeart(heart.id),
							className: "cupid-heart absolute cursor-pointer text-3xl transition-transform hover:scale-125 active:scale-90",
							style: {
								left: `${heart.left}%`,
								top: `${heart.top}%`
							},
							"aria-label": "Shoot this heart",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "💖"
							})
						}, heart.id)),
						compliment && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cupid-compliment pointer-events-none absolute bottom-4 left-1/2 w-[90%] max-w-md -translate-x-1/2 rounded-2xl bg-card/90 p-4 text-center shadow-lg backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto mb-1 h-5 w-5 fill-primary text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium italic text-foreground",
								children: compliment
							})]
						})
					]
				})
			]
		})
	});
}
function BentoCard({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-3xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8 ${className}`,
		children
	});
}
//#endregion
export { BirthdayPage as component };
