import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Cpu, Eye, Database, Cloud, Code2, Mail, Github, Linkedin,
  Download, MapPin, GraduationCap, Briefcase, Award, Rocket, Sparkles,
  Send, Copy, Check, ArrowUpRight, BarChart3, BotMessageSquare, Camera,
  Trophy, BookOpen, Users, Sun, Moon,
} from "lucide-react";
const imageModules = import.meta.glob<{ default: string }>("@/assets/profile.{png,jpg,jpeg}", { eager: true });
const profileImg = Object.values(imageModules)[0]?.default || "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradyumna Kumar Mohapatra — AI & ML Engineer Portfolio" },
      { name: "description", content: "Portfolio of Pradyumna Kumar Mohapatra — Computer Science undergraduate specializing in AI, Machine Learning, Data Engineering, and Computer Vision." },
      { property: "og:title", content: "Pradyumna Kumar Mohapatra — AI & ML Portfolio" },
      { property: "og:description", content: "AI, ML, Data Engineering and Computer Vision projects, internships, and research." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try { localStorage.setItem("theme", next); } catch { }
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
      setScrolled(h.scrollTop > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div className="h-full bg-gradient-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none fixed -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent-pink/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none fixed bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-cyan/20 blur-3xl" />

      <Nav scrolled={scrolled} theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav({
  scrolled,
  theme,
  onToggleTheme,
}: {
  scrolled: boolean;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  return (
    <header className={`fixed top-3 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${scrolled ? "w-[min(96%,1100px)]" : "w-[min(98%,1180px)]"}`}>
      <nav className={`glass flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 ${scrolled ? "shadow-glow" : ""}`}>
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-base md:text-lg">
          <div className="relative h-8 w-8 shrink-0 rounded-full border-2 border-primary/70 p-[2px] bg-background shadow-glow">
            <div className="h-full w-full rounded-full overflow-hidden">
              <img src={profileImg} alt="Pradyumna" className="h-full w-full object-cover" />
            </div>
          </div>
          <span className="hidden sm:inline">Pradyumna</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="glass-strong grid h-9 w-9 place-items-center rounded-full text-foreground transition-transform hover:scale-110"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-10 max-w-2xl md:mb-14">
        {eyebrow && (
          <span className="glass mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3 w-3" /> {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto w-full max-w-7xl px-5 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to AI/ML internships · 2027
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Pradyumna Kumar <br />
            <span className="text-gradient">Mohapatra</span>
          </h1>
          <p className="mt-5 text-base font-medium text-muted-foreground md:text-lg">
            AI &amp; Machine Learning Enthusiast · Data Engineering Learner · Computer Vision Developer · CSE Undergraduate
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I'm a Computer Science undergraduate passionate about Artificial Intelligence, Machine Learning,
            Data Engineering, and Computer Vision. I transform ideas into impactful solutions through research,
            hackathons, internships, and real-world projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/resume.pdf" download className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="https://www.linkedin.com/in/pradyumna-kumar-mohapatra/" target="_blank" rel="noreferrer" className="glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/PradyumnaZypher" target="_blank" rel="noreferrer" className="glass grid h-11 w-11 place-items-center rounded-full transition-transform hover:scale-110">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs animate-fade-up md:ml-auto md:mr-16">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="glass-strong relative rounded-[2.5rem] p-4 shadow-glow">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/5 bg-slate-950/20">
              <img src={profileImg} alt="Pradyumna Kumar Mohapatra" width={768} height={896} className="h-full w-full object-cover aspect-[4/5] transition-transform duration-700 hover:scale-105" />
            </div>
            
            <div className="mt-4 px-1.5 pb-1.5 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">Location</span>
                  <p className="text-xs font-semibold text-foreground mt-0.5">Bhubaneswar, India</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">Education</span>
                  <p className="text-xs font-semibold text-foreground mt-0.5">B.Tech CSE · PMEC</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wide">
                  <Brain className="h-3 w-3" /> AI/ML
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wide">
                  <Eye className="h-3 w-3" /> Vision
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wide">
                  <Cloud className="h-3 w-3" /> Cloud
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const interests = ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Data Analytics", "Cloud Computing", "Research & Innovation", "Problem Solving"];
  const stats = [
    { label: "B.Tech CSE", value: "Student" },
    { label: "Graduating", value: "2027" },
    { label: "Internships", value: "5+" },
    { label: "Research", value: "Active" },
    { label: "Hackathons", value: "SIH '25" },
    { label: "Cloud", value: "GCP" },
  ];
  return (
    <Section id="about" eyebrow="About" title="Engineering intelligence, one model at a time." subtitle="A Computer Science Engineering student focused on AI, ML, Computer Vision, Data Engineering, and Cloud — turning curiosity into shipped solutions.">
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="glass rounded-3xl p-7 md:p-9">
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            I love building at the intersection of <span className="font-semibold text-foreground">data, models, and real-world impact</span>.
            From training computer vision pipelines to designing analytics dashboards, I'm focused on solutions that
            move beyond demos — solving practical problems in industry-grade settings.
          </p>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Interests</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="glass group rounded-2xl p-4 transition-transform hover:-translate-y-1">
              <p className="text-xl font-bold text-gradient md:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { school: "Parala Maharaja Engineering College (PMEC)", degree: "B.Tech in Computer Science & Engineering", years: "2023 — 2027", icon: GraduationCap },
    { school: "Demonstration Multipurpose School, RIE Bhubaneswar", degree: "Higher Secondary Education (Science)", years: "2021 — 2023", icon: BookOpen },
    { school: "Prabhujee English Medium School", degree: "Secondary Education", years: "2010 — 2021", icon: BookOpen },
  ];
  return (
    <Section id="education" eyebrow="Education" title="Academic timeline" subtitle="A consistent record of building strong fundamentals across science and engineering.">
      <ol className="relative ml-3 border-l border-dashed border-primary/30 pl-6 md:ml-6">
        {items.map((it, i) => (
          <li key={i} className="group relative mb-6 last:mb-0">
            <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
              <it.icon className="h-3.5 w-3.5" />
            </span>
            <div className="glass rounded-2xl p-5 transition-transform group-hover:-translate-y-0.5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-base font-semibold md:text-lg">{it.degree}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{it.years}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{it.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Experience() {
  const logoModules = import.meta.glob<{ default: string }>("@/assets/logos/*.{png,jpg,jpeg,svg}", { eager: true });

  const items = [
    { role: "Applied AI & Data Research Intern", org: "Plasticure Private Limited", time: "Jun 2026 — Present", bullets: ["Computer Vision research & model development", "AI-powered image processing solutions", "Plastic bottle detection & classification"], tag: "Current", logoKey: "plasticure" },
    { role: "Summer Intern", org: "Central Tool Room & Training Centre (CTTC)", time: "Jun 2025 — Jul 2025", bullets: ["Hands-on industrial training", "Applied engineering practice"], logoKey: "cttc" },
    { role: "Data Analytics Virtual Intern", org: "Tata Group (Forage)", time: "May 2025 — Jul 2025", bullets: ["Business analytics simulations", "Data-driven decision frameworks"], logoKey: "tata" },
    { role: "GCP Skills Learner", org: "Google Cloud Skills Boost", time: "Jan 2025 — Jun 2025", bullets: ["Cloud computing fundamentals", "Hands-on labs across GCP services"], logoKey: "gcp" },
    { role: "Summer Intern", org: "Parala Maharaja Engineering College", time: "Jun 2024 — Jul 2024", bullets: ["Applied CS coursework projects"], logoKey: "pmec" },
    { role: "Member", org: "ROBOSTREAKS Robotics Club", time: "Oct 2024 — Present", bullets: ["Robotics & embedded systems", "Team-based engineering"], logoKey: "robostreaks" },
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Internships, research & teams" subtitle="Real-world exposure across AI research, analytics, cloud, and robotics.">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((e, i) => {
          const logoUrl = Object.entries(logoModules).find(([path]) =>
            path.includes(`/logos/${e.logoKey}.`)
          )?.[1]?.default;

          return (
            <article key={i} className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="flex items-start justify-between gap-3">
                {logoUrl ? (
                  <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-glow">
                    <img src={logoUrl} alt={e.org} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Briefcase className="h-5 w-5" />
                  </div>
                )}
                {e.tag && <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{e.tag}</span>}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{e.role}</h3>
              <p className="text-sm font-medium text-primary">{e.org}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{e.time}</p>
              <ul className="mt-3 space-y-1.5">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-foreground/75">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  const core = [
    { name: "Artificial Intelligence", level: "Advanced", keywords: ["Neural Networks", "NLP", "Deep Learning"], icon: Brain },
    { name: "Machine Learning", level: "Advanced", keywords: ["Scikit-Learn", "Regression", "Clustering"], icon: Cpu },
    { name: "Computer Vision", level: "Intermediate", keywords: ["OpenCV", "YOLO", "Segmentation"], icon: Eye },
    { name: "Python Development", level: "Expert", keywords: ["Pandas", "NumPy", "Scripting", "APIs"], icon: Code2 },
    { name: "Data Engineering", level: "Intermediate", keywords: ["SQL", "ETL Pipelines", "Data Warehousing"], icon: Database },
    { name: "Google Cloud Platform", level: "Proficient", keywords: ["Compute Engine", "BigQuery", "Cloud Storage"], icon: Cloud },
    { name: "Data Analytics", level: "Proficient", keywords: ["Power BI", "Excel", "Data Viz"], icon: BarChart3 },
    { name: "Feature Engineering", level: "Advanced", keywords: ["Preprocessing", "Dimensionality Reduction"], icon: BotMessageSquare },
  ];
  const supporting = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "SQL", "IoT", "Cloud Computing", "Data Visualization"];
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit built for AI-first products" subtitle="Core competencies backed by hands-on projects, certifications, and live deployments.">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {core.map((s) => (
            <div key={s.name} className="glass group rounded-2xl p-4.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{s.name}</h4>
                    <span className="inline-block mt-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {s.level}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.keywords.map((k) => (
                  <span key={k} className="rounded-md bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="glass rounded-3xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Supporting Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {supporting.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-primary p-5 text-primary-foreground shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Currently learning</p>
            <p className="mt-1 text-lg font-bold">MLOps · LLMs · Vision Transformers</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const items = [
    { icon: Brain, title: "AI & ML Solutions", desc: "Intelligent systems, predictive models, and end-to-end ML pipelines." },
    { icon: Eye, title: "Computer Vision", desc: "Object detection, classification, and visual intelligence apps." },
    { icon: BarChart3, title: "Data Analytics", desc: "Turning raw data into clear, actionable business insights." },
    { icon: Code2, title: "Python Development", desc: "Automation, backend, and data-driven application engineering." },
  ];
  return (
    <Section id="services" eyebrow="What I Do" title="Services" subtitle="A focused set of capabilities I can bring to your team or product.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <div key={s.title} className="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const items = [
    {
      title: "Face Recognition & Attendance System",
      icon: Camera,
      tag: "Computer Vision",
      desc: "Real-time face detection with automated attendance logging.",
      features: ["Real-time face detection", "Attendance automation", "Python-based pipeline"],
      stack: ["Python", "OpenCV", "ML"],
    },
    {
      title: "Retail Analytics Dashboard",
      icon: BarChart3,
      tag: "Data Analytics",
      desc: "Sales insights, customer trends, and revenue tracking in one view.",
      features: ["Sales analysis", "Customer insights", "Interactive visuals"],
      stack: ["Power BI", "Excel", "SQL"],
    },
    {
      title: "Plastic Bottle Detection & Classification",
      icon: Eye,
      tag: "Industrial AI",
      desc: "HDPE bottle detection and classification for plastic recycling.",
      features: ["HDPE bottle detection", "Object classification", "Real-time processing"],
      stack: ["Python", "OpenCV", "Computer Vision"],
    },
  ];
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured projects" subtitle="A glimpse into shipped systems and research-grade builds.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article key={p.title} className="glass group flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-1.5 hover:shadow-glow">
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-primary">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="absolute inset-0 grid place-items-center">
                <p.icon className="h-16 w-16 text-white/90 drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur">
                {p.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground/75">
                      <Check className="h-3.5 w-3.5 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <a href="https://github.com/PradyumnaZypher" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 hover:text-primary">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                <a href="#" className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const items = [
    { name: "Google Cloud Certifications", org: "Google Cloud", icon: Cloud, url: "https://www.cloudskillsboost.google/" },
    { name: "Data Science in Python", org: "University of Michigan", icon: Code2, url: "https://www.coursera.org/" },
    { name: "Introduction to Big Data", org: "UC San Diego", icon: Database, url: "https://www.coursera.org/" },
    { name: "Big Data Modeling & Management", org: "UC San Diego", icon: Database, url: "https://www.coursera.org/" },
    { name: "Big Data Integration & Processing", org: "UC San Diego", icon: Database, url: "https://www.coursera.org/" },
    { name: "Machine Learning with Big Data", org: "UC San Diego", icon: Brain, url: "https://www.coursera.org/" },
  ];
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications" subtitle="Continuous learning across cloud, data science, and machine learning.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-glow cursor-pointer"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
              <c.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-grow">
              <p className="truncate text-sm font-semibold group-hover:text-primary transition-colors">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.org}</p>
            </div>
            <Award className="ml-auto h-4 w-4 text-primary/40 transition-colors group-hover:text-primary shrink-0" />
          </a>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const items = [
    { icon: Cloud, title: "Google Cloud Skills Boost Learner", desc: "Completed hands-on GCP labs and skill paths." },
    { icon: Trophy, title: "SIH 2025 Participant", desc: "Smart India Hackathon — team innovation." },
    { icon: BookOpen, title: "Research Activities", desc: "Applied AI & data research contributions." },
    { icon: Briefcase, title: "Multiple Industry Internships", desc: "5+ internships across AI, analytics, and engineering." },
    { icon: Users, title: "Robotics Club Member", desc: "Active contributor at ROBOSTREAKS." },
    { icon: Rocket, title: "Continuous Builder", desc: "Always shipping projects and prototypes." },
  ];
  return (
    <Section id="achievements" eyebrow="Highlights" title="Achievements" subtitle="Milestones that mark the journey so far.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <div key={a.title} className="glass group rounded-2xl p-5 transition-all hover:-translate-y-1">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <a.icon className="h-4 w-4" />
            </span>
            <p className="mt-3 text-sm font-semibold">{a.title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "pradyumna7541@gmail.com";
  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something intelligent." subtitle="Open to internships, collaborations, and research opportunities.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass-strong rounded-3xl p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-base font-semibold">Pradyumna Kumar Mohapatra</p>
              <p className="text-xs text-muted-foreground">Bhubaneswar, India</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <button onClick={copy} className="group flex w-full items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 text-left transition-colors hover:border-primary">
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{email}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground group-hover:text-primary">
                {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
              </span>
            </button>
            <a href="https://www.linkedin.com/in/pradyumna-kumar-mohapatra/" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 transition-colors hover:border-primary">
              <span className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-primary" /><span className="text-sm font-medium">LinkedIn</span></span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
            <a href="https://github.com/PradyumnaZypher" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-border bg-card/60 px-4 py-3 transition-colors hover:border-primary">
              <span className="flex items-center gap-3"><Github className="h-4 w-4 text-primary" /><span className="text-sm font-medium">GitHub</span></span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${email}`; }} className="glass rounded-3xl p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Subject" placeholder="Internship opportunity" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea required rows={5} placeholder="Tell me about the role or project…" className="mt-1.5 w-full rounded-2xl border border-border bg-card/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </div>
          <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, className = "", ...props }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...props} className="mt-1.5 w-full rounded-2xl border border-border bg-card/70 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto mt-10 w-full max-w-7xl px-5 pb-10 md:px-8">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-3xl px-6 py-5 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          Designed and Developed by <span className="font-semibold text-foreground">Pradyumna Kumar Mohapatra</span>
        </p>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/pradyumna-kumar-mohapatra/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/PradyumnaZypher" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"><Github className="h-4 w-4" /></a>
          <a href="mailto:pradyumna7541@gmail.com" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
