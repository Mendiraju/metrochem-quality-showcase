import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Menu, X, ChevronDown, ArrowRight, FlaskConical, Factory, ShieldCheck, Atom,
  Workflow, ClipboardCheck, Microscope, RefreshCw, Brain, Cog, Handshake, Globe, MapPin, Building2, Info,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import quality from "@/assets/quality.jpg";
import processImg from "@/assets/process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metrochem Pvt Ltd — Pharmaceutical & API Manufacturing" },
      { name: "description", content: "Metrochem Pvt Ltd, Visakhapatnam — a pharmaceutical and API manufacturing company focused on scientific discipline and quality-oriented operations." },
      { property: "og:title", content: "Metrochem Pvt Ltd — Precision in Chemistry" },
      { property: "og:description", content: "Pharmaceutical manufacturing identity, technical focus, and commitment to quality-oriented operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["Home", "home"], ["About", "about"], ["Capabilities", "capabilities"], ["Quality", "quality"], ["Contact", "contact"],
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-accent" aria-label="Metrochem home">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" fill="none" stroke="var(--brand)" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="4" fill="var(--accent)" />
        <circle cx="20" cy="9" r="2.4" fill="var(--brand)" /><circle cx="29.5" cy="25" r="2.4" fill="var(--brand)" /><circle cx="10.5" cy="25" r="2.4" fill="var(--brand)" />
        <path d="M20 16V11.5M23.5 22l4 2M16.5 22l-4 2" stroke="var(--brand)" strokeWidth="1.6" />
      </svg>
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-[0.18em] ${light ? "text-primary-foreground" : "text-navy"}`}>METROCHEM</span>
        <span className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>PHARMACEUTICAL MANUFACTURING</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand">{l}</a>
          ))}
          <a href="#contact" className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand/90">Contact Us</a>
        </nav>
        <button className="rounded p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-5 md:hidden" aria-label="Mobile">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b py-3 font-medium">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block rounded-md bg-brand py-3 text-center font-semibold text-primary-foreground">Contact Us</a>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-accent" : "text-brand"}`}>
      <span className="h-px w-8 bg-accent" />{children}
    </p>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section id="home" className="relative flex min-h-[calc(100vh-5rem)] items-center">
          <img src={hero} alt="Illustrative image of pharmaceutical process equipment" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <Eyebrow light>Metrochem Pvt Ltd · Visakhapatnam</Eyebrow>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
                Precision in Chemistry.<br /><span className="text-accent">Commitment to Quality.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                Discover Metrochem's pharmaceutical manufacturing identity, technical focus, and commitment to responsible, quality-oriented operations.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-4 font-semibold text-primary-foreground transition hover:bg-brand/90">
                  Explore Our Capabilities <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="rounded-md border border-primary-foreground/40 px-7 py-4 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">Contact Us</a>
              </div>
            </div>
          </div>
          <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/70">
            <ChevronDown className="h-7 w-7" />
          </a>
        </section>

        {/* About */}
        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <Eyebrow>About Metrochem</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Supporting Pharmaceutical Manufacturing Through Science and Precision</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Metrochem Pvt Ltd is presented as a pharmaceutical manufacturing business focused on the importance of scientific expertise, manufacturing discipline, and quality-oriented processes. This website introduces the company's industry focus, manufacturing identity, and commitment to professional business relationships.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[[FlaskConical, "Scientific Approach"], [Factory, "Manufacturing Focus"], [ShieldCheck, "Quality-Oriented Mindset"]].map(([I, t]) => {
                  const Icon = I as typeof Atom;
                  return (
                    <div key={t as string} className="border-t-2 border-accent pt-4">
                      <Icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
                      <p className="mt-3 font-semibold text-navy">{t as string}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
            <Reveal className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border-2 border-accent/40" />
              <img src={lab} alt="Illustrative image of a scientist in a chemistry laboratory" loading="lazy" width={1200} height={1408} className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-xl" />
            </Reveal>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="bg-muted py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Manufacturing Focus & Capabilities</h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Factory, "Pharmaceutical Manufacturing", "A focus on the processes and technical disciplines associated with pharmaceutical manufacturing."],
                [Atom, "Active Pharmaceutical Ingredients", "An introduction to the API manufacturing sector and its role in pharmaceutical production."],
                [Workflow, "Process Development", "The importance of process understanding, optimization, and manufacturing consistency."],
                [ClipboardCheck, "Quality-Focused Operations", "The role of documentation, process discipline, and quality-oriented practices in pharmaceutical manufacturing."],
              ].map(([I, t, d], i) => {
                const Icon = I as typeof Atom;
                return (
                  <Reveal key={t as string}>
                    <article className="group h-full rounded-lg border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground/60">0{i + 1}</span>
                      </div>
                      <h3 className="mt-6 text-lg font-semibold text-navy">{t as string}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d as string}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="bg-navy py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <img src={quality} alt="Illustrative image of analytical laboratory instruments" loading="lazy" width={1200} height={1008} className="aspect-[6/5] w-full rounded-lg object-cover" />
            </Reveal>
            <Reveal>
              <Eyebrow light>Quality</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Quality Is a Fundamental Priority</h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
                In pharmaceutical manufacturing, quality depends on scientific discipline, suitable process controls, reliable analytical methods, accurate documentation, and continuous improvement.
              </p>
              <ul className="mt-10 space-y-5">
                {[[ClipboardCheck, "Process Discipline"], [Microscope, "Analytical Focus"], [RefreshCw, "Continuous Improvement"]].map(([I, t]) => {
                  const Icon = I as typeof Atom;
                  return (
                    <li key={t as string} className="flex items-center gap-4 border-b border-primary-foreground/10 pb-5">
                      <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      <span className="text-lg font-medium">{t as string}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Manufacturing */}
        <section className="relative py-28 text-primary-foreground lg:py-36">
          <img src={processImg} alt="Illustrative image of stainless-steel process equipment" loading="lazy" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <Eyebrow light>Manufacturing</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designed Around Precision and Process Understanding</h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Pharmaceutical manufacturing requires attention to process consistency, technical understanding, operational discipline, and responsible industrial practices.
              </p>
            </Reveal>
            <Reveal className="mt-14">
              <ol className="grid gap-4 md:grid-cols-4">
                {["Process Understanding", "Manufacturing", "Quality Evaluation", "Continuous Improvement"].map((s, i) => (
                  <li key={s} className="relative rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
                    <span className="text-sm font-semibold text-accent">Step 0{i + 1}</span>
                    <p className="mt-2 text-lg font-semibold">{s}</p>
                    {i < 3 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-accent md:block" />}
                  </li>
                ))}
              </ol>
              <p className="mt-5 flex items-center gap-2 text-sm text-primary-foreground/60">
                <Info className="h-4 w-4" /> General illustration of pharmaceutical manufacturing stages — not a description of Metrochem's specific production process.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>Why Metrochem</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Principles That Guide Our Work</h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Brain, "Scientific Thinking", "Grounding decisions in chemistry, data, and technical understanding."],
                [ShieldCheck, "Quality-Oriented Approach", "Treating quality as an integral part of every stage of work."],
                [Cog, "Operational Discipline", "Valuing consistency, documentation, and well-defined procedures."],
                [Handshake, "Professional Collaboration", "Building clear, responsible, and long-term business relationships."],
              ].map(([I, t, d]) => {
                const Icon = I as typeof Atom;
                return (
                  <div key={t as string} className="bg-background p-8">
                    <Icon className="h-8 w-8 text-accent" strokeWidth={1.4} />
                    <h3 className="mt-5 text-lg font-semibold text-navy">{t as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-muted py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5 lg:px-8">
            <Reveal className="lg:col-span-2">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Connect With Metrochem</h2>
              <p className="mt-5 text-lg text-muted-foreground">For business inquiries and further information, please get in touch with our team.</p>
              <ul className="mt-10 space-y-6">
                {[[Building2, "Company", "Metrochem Pvt Ltd"], [Globe, "Website", "metrochempvt.works"], [MapPin, "Location", "Visakhapatnam, Andhra Pradesh, India"]].map(([I, l, v]) => {
                  const Icon = I as typeof Atom;
                  return (
                    <li key={l as string} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                      <span><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l as string}</span><span className="font-medium text-navy">{v as string}</span></span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/65">Metrochem Pvt Ltd — a pharmaceutical and API manufacturing company based in Visakhapatnam, focused on scientific discipline and quality-oriented operations.</p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-primary-foreground/75 hover:text-primary-foreground">{l}</a></li>)}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Get in touch</p>
            <p className="mt-4 text-sm text-primary-foreground/75">Visakhapatnam, Andhra Pradesh, India<br />metrochempvt.works</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">Contact section <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between lg:px-8">
            <p>© {year} Metrochem Pvt Ltd. All rights reserved.</p>
            <p>Photographs are illustrative and do not depict Metrochem facilities.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [note, setNote] = useState(false);
  const field = "w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
  return (
    <form onSubmit={(e) => { e.preventDefault(); setNote(true); }} className="rounded-lg border bg-card p-8 shadow-sm">
      <div className="mb-6 flex gap-2 rounded-md bg-accent/10 p-3 text-sm text-navy">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        This form is a demonstration and is not yet connected to a submission service.
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">Name<input required maxLength={100} className={`${field} mt-2`} /></label>
        <label className="text-sm font-medium">Company<input maxLength={100} className={`${field} mt-2`} /></label>
        <label className="text-sm font-medium">Email<input required type="email" maxLength={255} className={`${field} mt-2`} /></label>
        <label className="text-sm font-medium">Subject<input maxLength={150} className={`${field} mt-2`} /></label>
        <label className="text-sm font-medium sm:col-span-2">Message<textarea required rows={5} maxLength={1000} className={`${field} mt-2 resize-none`} /></label>
      </div>
      <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 font-semibold text-primary-foreground transition hover:bg-brand/90">
        Send Inquiry <ArrowRight className="h-4 w-4" />
      </button>
      {note && <p role="status" className="mt-4 text-sm text-muted-foreground">Your message was not sent — a submission service has not been configured yet.</p>}
    </form>
  );
}
