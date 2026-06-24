import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as BookOpen, D as CodeXml, E as Sparkles, O as ChartColumn, S as BotMessageSquare, T as ArrowUpRight, _ as Cloud, a as Rocket, b as Briefcase, c as Mail, d as Github, f as Eye, g as Copy, h as Cpu, i as Send, l as Linkedin, m as Database, n as Trophy, o as Moon, p as Download, r as Sun, s as MapPin, t as Users, u as GraduationCap, v as Check, w as Award, x as Brain, y as Camera } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BgWdBDfN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile_default = "/assets/profile-B_TBsFZb.jpg";
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "certifications",
		label: "Certs"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Portfolio() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = typeof localStorage !== "undefined" && localStorage.getItem("theme");
		const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
		const initial = stored ?? (prefersDark ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	const toggleTheme = () => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			document.documentElement.classList.toggle("dark", next === "dark");
			try {
				localStorage.setItem("theme", next);
			} catch {}
			return next;
		});
	};
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight) * 100);
			setScrolled(h.scrollTop > 20);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gradient-primary transition-[width] duration-150",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent-pink/25 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-cyan/20 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
				scrolled,
				theme,
				onToggleTheme: toggleTheme
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav({ scrolled, theme, onToggleTheme }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed top-3 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${scrolled ? "w-[min(96%,1100px)]" : "w-[min(98%,1180px)]"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `glass flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 ${scrolled ? "shadow-glow" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 font-display font-bold text-base md:text-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Pradyumna"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
						children: n.label
					}) }, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onToggleTheme,
						"aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
						className: "glass-strong grid h-9 w-9 place-items-center rounded-full text-foreground transition-transform hover:scale-110",
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Hire me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			]
		})
	});
}
function Section({ id, eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 max-w-2xl md:mb-14",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "glass mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
						" ",
						eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold leading-tight md:text-5xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-muted-foreground md:text-lg",
					children: subtitle
				})
			]
		}), children]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 md:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-up",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
						}), "Open to AI/ML internships · 2027"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
						children: [
							"Pradyumna Kumar ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Mohapatra"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base font-medium text-muted-foreground md:text-lg",
						children: "AI & Machine Learning Enthusiast · Data Engineering Learner · Computer Vision Developer · CSE Undergraduate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
						children: "I'm a Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning, Data Engineering, and Computer Vision. I transform ideas into impactful solutions through research, hackathons, internships, and real-world projects."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/resume.pdf",
								download: true,
								className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/pradyumna-kumar-mohapatra/",
								target: "_blank",
								rel: "noreferrer",
								className: "glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/PradyumnaZypher",
								target: "_blank",
								rel: "noreferrer",
								className: "glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-sm animate-fade-up md:mx-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-30 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-strong relative rounded-[2rem] p-3 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-[1.5rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile_default,
								alt: "Pradyumna Kumar Mohapatra",
								width: 768,
								height: 896,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium text-white/80",
									children: "Bhubaneswar, India"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-white",
									children: "B.Tech CSE · PMEC"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "absolute -left-6 top-10 animate-float",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 text-primary" }),
						label: "AI/ML"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "absolute -right-4 top-1/3 animate-float [animation-delay:1s]",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4 text-accent-pink" }),
						label: "Computer Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
						className: "absolute -left-2 bottom-10 animate-float [animation-delay:2s]",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4 text-accent-cyan" }),
						label: "GCP"
					})
				]
			})]
		})
	});
}
function FloatingChip({ className = "", icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${className}`,
		children: [
			icon,
			" ",
			label
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: "Engineering intelligence, one model at a time.",
		subtitle: "A Computer Science Engineering student focused on AI, ML, Computer Vision, Data Engineering, and Cloud — turning curiosity into shipped solutions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-base leading-relaxed text-foreground/80 md:text-lg",
					children: [
						"I love building at the intersection of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: "data, models, and real-world impact"
						}),
						". From training computer vision pipelines to designing analytics dashboards, I'm focused on solutions that move beyond demos — solving practical problems in industry-grade settings."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Interests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							"Artificial Intelligence",
							"Machine Learning",
							"Computer Vision",
							"Data Analytics",
							"Cloud Computing",
							"Research & Innovation",
							"Problem Solving"
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary",
							children: i
						}, i))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2",
				children: [
					{
						label: "B.Tech CSE",
						value: "Student"
					},
					{
						label: "Graduating",
						value: "2027"
					},
					{
						label: "Internships",
						value: "5+"
					},
					{
						label: "Research",
						value: "Active"
					},
					{
						label: "Hackathons",
						value: "SIH '25"
					},
					{
						label: "Cloud",
						value: "GCP"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass group rounded-2xl p-4 transition-transform hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-bold text-gradient md:text-2xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-medium text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})]
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: "Academic timeline",
		subtitle: "A consistent record of building strong fundamentals across science and engineering.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative ml-3 border-l border-dashed border-primary/30 pl-6 md:ml-6",
			children: [
				{
					school: "Parala Maharaja Engineering College (PMEC)",
					degree: "B.Tech in Computer Science & Engineering",
					years: "2023 — 2027",
					icon: GraduationCap
				},
				{
					school: "Demonstration Multipurpose School, RIE Bhubaneswar",
					degree: "Higher Secondary Education (Science)",
					years: "2021 — 2023",
					icon: BookOpen
				},
				{
					school: "Prabhujee English Medium School",
					degree: "Secondary Education",
					years: "2010 — 2021",
					icon: BookOpen
				}
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "group relative mb-6 last:mb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-5 transition-transform group-hover:-translate-y-0.5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold md:text-lg",
							children: it.degree
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
							children: it.years
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: it.school
					})]
				})]
			}, i))
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: "Internships, research & teams",
		subtitle: "Real-world exposure across AI research, analytics, cloud, and robotics.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: [
				{
					role: "Applied AI & Data Research Intern",
					org: "Plasticure Private Limited",
					time: "Jun 2026 — Present",
					bullets: [
						"Computer Vision research & model development",
						"AI-powered image processing solutions",
						"Plastic bottle detection & classification"
					],
					tag: "Current"
				},
				{
					role: "Summer Intern",
					org: "Central Tool Room & Training Centre (CTTC)",
					time: "Jun 2025 — Jul 2025",
					bullets: ["Hands-on industrial training", "Applied engineering practice"]
				},
				{
					role: "Data Analytics Virtual Intern",
					org: "Tata Group (Forage)",
					time: "May 2025 — Jul 2025",
					bullets: ["Business analytics simulations", "Data-driven decision frameworks"]
				},
				{
					role: "GCP Skills Learner",
					org: "Google Cloud Skills Boost",
					time: "Jan 2025 — Jun 2025",
					bullets: ["Cloud computing fundamentals", "Hands-on labs across GCP services"]
				},
				{
					role: "Summer Intern",
					org: "Parala Maharaja Engineering College",
					time: "Jun 2024 — Jul 2024",
					bullets: ["Applied CS coursework projects"]
				},
				{
					role: "Member",
					org: "ROBOSTREAKS Robotics Club",
					time: "Oct 2024 — Present",
					bullets: ["Robotics & embedded systems", "Team-based engineering"]
				}
			].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5" })
						}), e.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary",
							children: e.tag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-semibold",
						children: e.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: e.org
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: e.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5",
						children: e.bullets.map((b, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm text-foreground/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" }), b]
						}, j))
					})
				]
			}, i))
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "A toolkit built for AI-first products",
		subtitle: "Core competencies backed by hands-on projects, certifications, and live deployments.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					{
						name: "Artificial Intelligence",
						level: 88,
						icon: Brain
					},
					{
						name: "Machine Learning",
						level: 85,
						icon: Cpu
					},
					{
						name: "Computer Vision",
						level: 82,
						icon: Eye
					},
					{
						name: "Python Development",
						level: 90,
						icon: CodeXml
					},
					{
						name: "Data Engineering",
						level: 75,
						icon: Database
					},
					{
						name: "Google Cloud Platform",
						level: 78,
						icon: Cloud
					},
					{
						name: "Data Analytics",
						level: 80,
						icon: ChartColumn
					},
					{
						name: "Feature Engineering",
						level: 76,
						icon: BotMessageSquare
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass group rounded-2xl p-4 transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: s.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-bold text-muted-foreground",
							children: [s.level, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1.5 overflow-hidden rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-gradient-primary transition-[width] duration-700",
							style: { width: `${s.level}%` }
						})
					})]
				}, s.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Supporting Stack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							"HTML",
							"CSS",
							"JavaScript",
							"Git",
							"GitHub",
							"SQL",
							"IoT",
							"Cloud Computing",
							"Data Visualization"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider opacity-80",
							children: "Currently learning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-bold",
							children: "MLOps · LLMs · Vision Transformers"
						})]
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "services",
		eyebrow: "What I Do",
		title: "Services",
		subtitle: "A focused set of capabilities I can bring to your team or product.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: Brain,
					title: "AI & ML Solutions",
					desc: "Intelligent systems, predictive models, and end-to-end ML pipelines."
				},
				{
					icon: Eye,
					title: "Computer Vision",
					desc: "Object detection, classification, and visual intelligence apps."
				},
				{
					icon: ChartColumn,
					title: "Data Analytics",
					desc: "Turning raw data into clear, actionable business insights."
				},
				{
					icon: CodeXml,
					title: "Python Development",
					desc: "Automation, backend, and data-driven application engineering."
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-lg font-semibold",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
						children: s.desc
					})
				]
			}, s.title))
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Selected Work",
		title: "Featured projects",
		subtitle: "A glimpse into shipped systems and research-grade builds.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					title: "Automated Face Recognition & Attendance System",
					icon: Camera,
					tag: "Computer Vision",
					desc: "Real-time face detection with automated attendance logging.",
					features: [
						"Real-time face detection",
						"Attendance automation",
						"Python-based pipeline"
					],
					stack: [
						"Python",
						"OpenCV",
						"ML"
					]
				},
				{
					title: "Retail Analytics Dashboard",
					icon: ChartColumn,
					tag: "Data Analytics",
					desc: "Sales insights, customer trends, and revenue tracking in one view.",
					features: [
						"Sales analysis",
						"Customer insights",
						"Interactive visuals"
					],
					stack: [
						"Power BI",
						"Excel",
						"SQL"
					]
				},
				{
					title: "Plastic Bottle Detection & Classification",
					icon: Eye,
					tag: "Industrial AI",
					desc: "HDPE bottle detection and classification for plastic recycling.",
					features: [
						"HDPE bottle detection",
						"Object classification",
						"Real-time processing"
					],
					stack: [
						"Python",
						"OpenCV",
						"Computer Vision"
					]
				}
			].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass group flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-1.5 hover:shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] overflow-hidden bg-gradient-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-30",
							style: {
								backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
								backgroundSize: "24px 24px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-16 w-16 text-white/90 drop-shadow-xl transition-transform duration-500 group-hover:scale-110" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur",
							children: p.tag
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1.5",
							children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-xs text-foreground/75",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary" }),
									" ",
									f
								]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary",
								children: s
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/PradyumnaZypher",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), " Code"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#",
								className: "ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary",
								children: ["Live demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							})]
						})
					]
				})]
			}, p.title))
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "certifications",
		eyebrow: "Credentials",
		title: "Certifications",
		subtitle: "Continuous learning across cloud, data science, and machine learning.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					name: "Google Cloud Certifications",
					org: "Google Cloud",
					icon: Cloud
				},
				{
					name: "Data Science in Python",
					org: "University of Michigan",
					icon: CodeXml
				},
				{
					name: "Introduction to Big Data",
					org: "UC San Diego",
					icon: Database
				},
				{
					name: "Big Data Modeling & Management",
					org: "UC San Diego",
					icon: Database
				},
				{
					name: "Big Data Integration & Processing",
					org: "UC San Diego",
					icon: Database
				},
				{
					name: "Machine Learning with Big Data",
					org: "UC San Diego",
					icon: Brain
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: c.org
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "ml-auto h-4 w-4 text-primary/40 transition-colors group-hover:text-primary" })
				]
			}, c.name))
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "Highlights",
		title: "Achievements",
		subtitle: "Milestones that mark the journey so far.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					icon: Cloud,
					title: "Google Cloud Skills Boost Learner",
					desc: "Completed hands-on GCP labs and skill paths."
				},
				{
					icon: Trophy,
					title: "SIH 2025 Participant",
					desc: "Smart India Hackathon — team innovation."
				},
				{
					icon: BookOpen,
					title: "Research Activities",
					desc: "Applied AI & data research contributions."
				},
				{
					icon: Briefcase,
					title: "Multiple Industry Internships",
					desc: "5+ internships across AI, analytics, and engineering."
				},
				{
					icon: Users,
					title: "Robotics Club Member",
					desc: "Active contributor at ROBOSTREAKS."
				},
				{
					icon: Rocket,
					title: "Continuous Builder",
					desc: "Always shipping projects and prototypes."
				}
			].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass group rounded-2xl p-5 transition-all hover:-translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-semibold",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: a.desc
					})
				]
			}, a.title))
		})
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const email = "pradyumna7541@gmail.com";
	const copy = async () => {
		await navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 1800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Get in touch",
		title: "Let's build something intelligent.",
		subtitle: "Open to internships, collaborations, and research opportunities.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-3xl p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold",
						children: "Pradyumna Kumar Mohapatra"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Bhubaneswar, India"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copy,
							className: "group flex w-full items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 text-left transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: email
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-primary",
								children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), " Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), " Copy"] })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.linkedin.com/in/pradyumna-kumar-mohapatra/",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "LinkedIn"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://github.com/PradyumnaZypher",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 transition-colors hover:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "GitHub"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground" })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					window.location.href = `mailto:${email}`;
				},
				className: "glass rounded-3xl p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Your name",
							placeholder: "Jane Doe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							placeholder: "jane@company.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Subject",
						placeholder: "Internship opportunity",
						className: "mt-4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							placeholder: "Tell me about the role or project…",
							className: "mt-1.5 w-full rounded-2xl border border-border bg-card/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send message"]
					})
				]
			})]
		})
	});
}
function Field({ label, className = "", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			className: "mt-1.5 w-full rounded-2xl border border-border bg-card/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mx-auto mt-10 w-full max-w-7xl px-5 pb-10 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass flex flex-col items-center justify-between gap-4 rounded-3xl px-6 py-5 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Designed and Developed by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: "Pradyumna Kumar Mohapatra"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.linkedin.com/in/pradyumna-kumar-mohapatra/",
						target: "_blank",
						rel: "noreferrer",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/PradyumnaZypher",
						target: "_blank",
						rel: "noreferrer",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:pradyumna7541@gmail.com",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
					})
				]
			})]
		})
	});
}
//#endregion
export { Portfolio as component };
