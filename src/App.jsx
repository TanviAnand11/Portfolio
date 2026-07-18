import React, { useState, useEffect, useRef } from "react";
import portrait from "./assets/images/lightblue.jpeg";
import dashboard from "./assets/images/02_category_dashboard.png";
import office from "./assets/images/office.jpeg";


function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ed-transition ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}


function ContactLink({ label, href, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group inline-flex items-baseline gap-2 font-serif-ed italic"
      style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)", color: "rgba(255,255,255,0.75)" }}
    >
      <span className="relative">
        {label}
        <span
          className="absolute left-0 -bottom-1 h-px w-full bg-white/50 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </span>
      <span className="font-sans-ed not-italic text-sm transition-transform duration-300 ease-out group-hover:translate-x-1 opacity-50 group-hover:opacity-90">
        &rarr;
      </span>
    </a>
  );
}

export default function PortfolioLanding() {
  const [phase, setPhase] = useState("initial"); // initial | first | fading | second
  const [section2Visible, setSection2Visible] = useState(false);
  const [beforeQueryVisible, setBeforeQueryVisible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const section2Ref = useRef(null);
  const beforeQueryRef = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Opening sequence timing:
  // 200ms  -> first line begins fade in (900ms transition, fully visible ~1100ms)
  // 2000ms -> first line begins fade out
  // 3000ms -> second line begins fade in
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("first"), 200);
    const t2 = setTimeout(() => setPhase("fading"), 2000);
    const t3 = setTimeout(() => setPhase("second"), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSection2Visible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (section2Ref.current) observer.observe(section2Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setBeforeQueryVisible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (beforeQueryRef.current) observer.observe(beforeQueryRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSection3Visible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (section3Ref.current) observer.observe(section3Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSection4Visible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (section4Ref.current) observer.observe(section4Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSection5Visible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (section5Ref.current) observer.observe(section5Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSection6Visible(true),
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    if (section6Ref.current) observer.observe(section6Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setContactVisible(true),
      { threshold: 0.1 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScrollClick = () =>
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });

  const firstLineClass = () => {
    if (phase === "initial") return "opacity-0 translate-y-6";
    if (phase === "first") return "opacity-100 translate-y-0";
    return "opacity-0 -translate-y-6";
  };
  const secondLineClass = () =>
    phase === "second" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <div
      className="min-h-screen relative overflow-x-hidden selection:bg-white/10"
      style={{ backgroundColor: "#08111F", color: "#F3F4F6" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .font-serif-ed { font-family: 'Cormorant Garamond', Georgia, serif; }
          .font-sans-ed { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .grid-bg {
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
            background-size: 72px 72px;
          }
          .ed-transition { transition: opacity 900ms cubic-bezier(0.16,1,0.3,1), transform 900ms cubic-bezier(0.16,1,0.3,1); }
          @keyframes scrollLine { 0% { transform: translateY(-100%); } 75%,100% { transform: translateY(200%); } }
          .scroll-line-fill { animation: scrollLine 2.4s cubic-bezier(0.16,1,0.3,1) infinite; }
          .ed-link { transition: opacity 300ms ease; }
          .ed-link:hover { opacity: 0.6; }
          @media (prefers-reduced-motion: reduce) {
            .ed-transition { transition: none !important; }
          }
        `,
        }}
      />

      {/* SECTION 1 — Opening statement */}
      <section className="grid-bg relative h-screen w-full flex flex-col justify-center items-center px-6">
        <div className="relative w-full max-w-5xl flex justify-center items-center" style={{ height: "14rem" }}>
          {/* Phase A: Good analysts ask / What happened? */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center ed-transition ${firstLineClass()}`}
          >
            <span
              className="font-sans-ed uppercase font-light text-white/40"
              style={{ fontSize: "clamp(0.65rem, 1.6vw, 0.85rem)", letterSpacing: "0.4em" }}
            >
              Good analysts ask
            </span>
            <h1
              className="font-serif-ed italic text-white/95 mt-6"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
            >
              &ldquo;What happened?&rdquo;
            </h1>
          </div>

          {/* Phase B: Great analysts uncover / Why did it happen? */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-center ed-transition ${secondLineClass()}`}
          >
            <span
              className="font-sans-ed uppercase font-light text-white/40"
              style={{ fontSize: "clamp(0.65rem, 1.6vw, 0.85rem)", letterSpacing: "0.4em" }}
            >
              Great analysts uncover
            </span>
            <h1
              className="font-serif-ed italic text-white/95 mt-6"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
            >
              &ldquo;Why did it happen?&rdquo;
            </h1>
          </div>
        </div>

        {/* Simple scroll indicator — thin line only, no block */}
        <button
          onClick={handleScrollClick}
          aria-label="Scroll down to explore"
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 focus:outline-none ${
            phase === "second" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <span
            className="font-sans-ed uppercase text-white/30 font-light"
            style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 scroll-line-fill" />
          </div>
        </button>
      </section>

      {/* SECTION 2 — Portrait + About */}
      <section
        ref={section2Ref}
        className={`grid-bg w-full min-h-screen px-6 sm:px-10 lg:px-16 py-20 sm:py-28 flex items-center border-t border-white/5 ed-transition ${
          section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {/* Portrait column */}
          <div className="min-w-0 w-full flex flex-col gap-3 mx-auto" style={{ maxWidth: "26rem" }}>
            <div
              className="w-full relative overflow-hidden border border-white/5 p-2.5"
              style={{ backgroundColor: "#0A0D14" }}
            >
              <div
                className="w-full flex items-center justify-center"
                style={{ aspectRatio: "4 / 5", backgroundColor: "#0D111A" }}
              >
                {/* Replace with: <img src={yourPortrait} alt="Tanvi Anand" className="w-full h-full object-cover" /> */}
              <img
                src={portrait}
                alt="Tanvi Anand"
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-2000
                hover:scale-[1.02]"
              />
              </div>
              <div className="
              w-full
              h-full
              object-cover
              rounded-sm
              border
              border-white/10
              shadow-2xl
              "
              >
              </div>
              <div className="mt-8">
                <p
                className="font-serif-ed italic text-white/85"
                style={{
                  fontSize:"clamp(1.2rem,2vw,1.5rem)",
                  lineHeight:1.6
                }}
                >
                  I don't just look for answers.
                  <br/>
                  I look for the questions worth asking.
                  </p>
                  </div>
                  <span
                  className="font-sans-ed uppercase text-white/30 mt-8"
                  style={{
                    fontSize:"0.65rem",
                    letterSpacing:"0.25em"
                    }}
                    >
                      <br/>
                      DELHI, INDIA
                      </span>
                    </div>
                    </div>

          {/* Text column */}
          <div className="min-w-0 w-full mx-auto" style={{ maxWidth: "34rem" }}>
            
            <h2
              className="font-serif-ed font-light text-white mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}
            >
              Hi,
              <br />
              I&rsquo;m Tanvi.
            </h2>
            <div className="h-px w-16 bg-white/15 mb-8" />

            <div
              className="font-sans-ed font-light text-white/70 space-y-6"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85 }}
            >
              <p>
                I’ve always been drawn to understanding how things work—not just what happens, 
                but why it happens.
              </p>
              <p>
                Whether it's understanding why a business metric changed or exploring 
                how different parts of a process connect, I've always been driven by curiosity 
                and the desire to understand the bigger picture.
              </p>
              <p>
                That mindset first led me to Statistics and continues to shape the way I approach analytics
                today. I enjoy asking better questions, exploring data from multiple angles, and 
                translating complex information into clear business insights.
              </p>
              <p>
                SQL, Python and Power BI are simply the tools I use. Curiosity is what drives the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Case Study 01: E-commerce Profitability Analysis */}
      <section
        ref={section3Ref}
        className={`grid-bg w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-t border-white/5 ed-transition ${
          section3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
        <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
          <span
            className="font-sans-ed uppercase text-white/50 mt-4"
            style={{ fontSize: "1rem", letterSpacing: "0.25em" }}
          >
            <span>SELECTED INVESTIGATIONS</span>
            <div className="w-20 h-0.5 bg-white/15 mt-6" />
          </span>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <span
            className="font-sans-ed uppercase text-white/30 block mb-6"
            style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}
          >
            Case Study 01
            
          </span>

          <h2
            className="font-serif-ed font-light text-white mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            E-commerce Profitability Analysis
          </h2>

          <p
            className="font-serif-ed italic text-white/90 mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.1vw, 2.2rem)", lineHeight: 1.35, letterSpacing: "-0.01em" }}
          >
            &ldquo;Why were some product categories generating revenue but failing to generate profit?&rdquo;
          </p>

          <p
            className="font-sans-ed font-light text-white/70 max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85 }}
          >
            Revenue doesn't always tell the whole story. I looked past the top line and into pricing, discounts, returns, shipping costs, and platform
            fees — the quiet costs that decide whether revenue actually becomes profit. The goal wasn&rsquo;t
            another report. It was understanding which categories were genuinely profitable, and which only
            looked successful.
          </p>

          {/* Dashboard preview — visual centerpiece */}
          <div
            className="mt-14 sm:mt-16 w-full overflow-hidden rounded-xl border border-white/10"
            style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
          >
            <div
              className="w-full flex items-center justify-center"
              style={{ aspectRatio: "18 / 10", backgroundColor: "#0A0D14" }}
            >
              {/* Replace with: <img src={categoryDashboard} alt="Category Dashboard" className="w-full h-full object-cover" /> */}
              <img
                src={dashboard}
                alt="Tanvi Anand"
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-2000
                hover:scale-[1.01]"
              />
            </div>
          </div>
          <p
          className="font-sans-ed uppercase text-white/35 mt-4"
          style={{
            fontSize:"0.72rem",
            letterSpacing:"0.25em"
            }}
            >
              CATEGORY PERFORMANCE DASHBOARD
            </p>
            <div className="mt-10 mb-10">

  <div className="text-[11px] tracking-[0.28em] uppercase text-white/40">
    Built With
  </div>

  <div className="mt-3 text-white/80 text-[15px] leading-relaxed">
     · MySQL · Power BI 
  </div>

</div>

          {/* Text links */}
          <div className="mt-10 flex flex-wrap items-right gap-x-7 gap-y-4">
            <a
              href="https://github.com/TanviAnand11/ecommerce-profitability-analysis/blob/main/dashboard/01_executive_dashboard.png"
              className="ed-link font-sans-ed text-white/80"
              style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}
            >
              Explore Dashboard ↗
            </a>
            <a
              href="https://github.com/TanviAnand11/ecommerce-profitability-analysis"
              target="_blank"
              rel="noreferrer"
              className="ed-link font-sans-ed text-white/80"
              style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}
            >
              Read the Analysis ↗
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Case Study 02: Music Store SQL Analysis */}
      <section
        ref={section4Ref}
        className={`grid-bg px-6 sm:px-10 lg:px-16 py-10 sm:py-10 border-t border-white/5 ed-transition ${
          section4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16 items-start">
          {/* Left — narrative */}
          <div className="lg:col-span-7">
            <span
              className="font-sans-ed uppercase text-white/30 block mb-6"
              style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}
            >
              Case Study 02
            </span>

            <h2
              className="font-serif-ed font-light text-white mb-10"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Music Store SQL Analysis
            </h2>

            <p
              className="font-serif-ed italic text-white/90 mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.1vw, 2.2rem)", lineHeight: 1.35, letterSpacing: "-0.01em" }}
            >
              &ldquo;Why did the music store&rsquo;s revenue decline in 2018?&rdquo;
            </p>

            <p
              className="font-sans-ed font-light text-white/70 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85 }}
            >
              Revenue had already fallen. The real challenge was understanding why. Using SQL, I explored
              customer purchasing behaviour, sales trends, and historical performance, then validated the
              pattern through statistical hypothesis testing. The analysis pointed to declining customer
              engagement — not a shift in what people were buying — as the primary driver behind the drop.
            </p>

            <div className="mt-10 mb-10">

  <div className="text-[11px] tracking-[0.28em] uppercase text-white/40">
    Built With
  </div>

  <div className="mt-3 text-white/80 text-[15px] leading-relaxed">
     · MySQL 
  </div>

</div>

            {/* Text links */}
            <div className="mt-10 flex flex-wrap items-right gap-x-7 gap-y-4">
              <a
                href="https://github.com/TanviAnand11/music-store-data-analysis/blob/main/sql/music_store_analysis.sql"
                target="_blank"
                rel="noreferrer"
                className="ed-link font-sans-ed text-white/80"
                style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}
              >
                View SQL Queries ↗
              </a>
              <a
                href="https://github.com/TanviAnand11/music-store-data-analysis"
                target="_blank"
                rel="noreferrer"
                className="ed-link font-sans-ed text-white/80"
                style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}
              >
                Read the Analysis ↗
              </a>
            </div>
          </div>

          {/* Right — investigation path (monochrome, no cards, no color coding) */}
          <div className="lg:col-span-5">
            <Reveal>
              <span
                className="font-sans-ed uppercase text-white/30 block mb-10"
                style={{ fontSize: "0.68rem", letterSpacing: "0.3em" }}
              >
                Investigation Path
              </span>

              <p
                className="font-serif-ed italic text-white/85 mb-8"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", lineHeight: 1.4 }}
              >
                Revenue declined ↓
              </p>

              <div className="relative pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.12)" }}>
                {[
                  {
                    q: "Was average order value declining?",
                    a: "Ruled out",
                    note: null,
                  },
                  {
                    q: "Had the genre mix changed?",
                    a: "Observed, but not the cause",
                    note: "Pricing was identical across genres — no margin impact.",
                  },
                  {
                    q: "Had purchase volume dropped?",
                    a: "Confirmed",
                    note: null,
                  },
                  {
                    q: "Had customer activity declined?",
                    a: "Confirmed",
                    note: null,
                  },
                ].map((step, i) => (
                  <div key={i} className="relative mb-9 last:mb-0">
                    <div
                      className="absolute -left-6 top-2 w-5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
                    />
                    <p
                      className="font-sans-ed font-light text-white/75"
                      style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.02rem)", lineHeight: 1.6 }}
                    >
                      {step.q}
                    </p>
                    <p
                      className="font-sans-ed uppercase mt-1.5"
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.18em",
                        color: step.a === "Ruled out" ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {step.a}
                    </p>
                    {step.note && (
                      <p
                        className="font-sans-ed font-light text-white/40 mt-2"
                        style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
                      >
                        {step.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="pl-6 mt-2">
                <p
                  className="font-sans-ed uppercase text-white/30 mb-2"
                  style={{ fontSize: "0.68rem", letterSpacing: "0.3em" }}
                >
                  <br />
                  Conclusion
                </p>
                <p
                  className="font-serif-ed italic text-white/90"
                  style={{ fontSize: "clamp(1.15rem, 2vw, 1.4rem)", lineHeight: 1.4 }}
                >
                  Customer engagement had declined.
                </p>
              </div>
            </Reveal>
            
          </div>
          
        </div>
      </section>

      {/* SECTION 5 — Case Study 03: Cart Abandonment Analysis */}
      <section
        ref={section5Ref}
        className={`grid-bg px-6 sm:px-10 lg:px-16 py-10 sm:py-10 border-t border-white/5 ed-transition ${
          section5Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto">
          <span
            className="font-sans-ed uppercase text-white/30 block mb-6"
            style={{ fontSize: "0.7rem", letterSpacing: "0.35em" }}
          >
            Case Study 03
          </span>

          <h2
            className="font-serif-ed font-light text-white mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Cart Abandonment Analysis
          </h2>

          <p
            className="font-serif-ed italic text-white/90 mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.1vw, 2.2rem)", lineHeight: 1.35, letterSpacing: "-0.01em" }}
          >
            &ldquo;Why do customers abandon their carts before completing a purchase?&rdquo;
          </p>

          <p
            className="font-sans-ed font-light text-white/70 max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85 }}
          >
            Drop-offs are easy to measure. Understanding why they happen is much harder. In this ongoing
            project, I&rsquo;m analysing session-level user behaviour, customer journeys, and funnel
            progression to identify where users leave the purchasing process — and what&rsquo;s quietly
            contributing to it. The goal isn&rsquo;t to measure abandonment. It&rsquo;s to uncover the
            behavioural pattern behind it.
          </p>

          {/* Status indicator — plain typography, no badge */}
          <div className="mt-10">
            <span
              className="font-sans-ed uppercase text-white/30 block mb-2"
              style={{ fontSize: "0.65rem", letterSpacing: "0.3em" }}
            >
              Status
            </span>
            <span
              className="font-serif-ed italic text-white/80"
              style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}
            >
              In Progress
            </span>
          </div>
          <div className="mt-10 mb-10">

  <div className="text-[11px] tracking-[0.28em] uppercase text-white/40">
    Built With
  </div>

  <div className="mt-3 text-white/80 text-[15px] leading-relaxed">
    · MySQL · Python 
  </div>

</div>
        
        </div>
      </section>

      {/* SECTION 2B — Before the First Query */}

      <section
        ref={beforeQueryRef}
        className={`grid-bg w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20 border-t border-white/5 ed-transition ${
          beforeQueryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-3xl mx-auto">
          <h2
            className="font-serif-ed font-light text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Every business problem begins with a question.
          </h2>
          <div className="w-190 h-0.5 bg-white/15 mb-16 sm:mb-20" />

          <p
            className="font-sans-ed font-light text-white/90 mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85 }}
          >
            Monday morning.
            <br />
            I open the weekly dashboard.
            <br />
            One metric immediately catches my attention.
            <br />
            Conversion rate has dropped sharply in one of the highest-performing categories.
            <br /><br />

            A dashboard tells me what changed.
           <br />
            It rarely explains why.
            <br />
            That's where my investigation begins, I ask:
          </p>

          {/* Question 1 */}
          <Reveal>
            <p
              className="font-serif-ed italic text-white/95 mb-2"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.35 }}
            >
             Can I trust this data?
            </p>
            <p
              className="font-sans-ed font-light text-white/60 px-5"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.8 }}
            >
              Real Issue?
              <br />
              Or just broken tracking?
            </p>
          </Reveal>

          <div className="w-10 h-px bg-white/10 mx-auto my-10 sm:my-12" />

          {/* Question 2 */}
          <Reveal>
            <p
              className="font-serif-ed italic text-white/95 mb-2"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.35 }}
            >
              Where does the customer journey begin to break?
            </p>
            <p
              className="font-sans-ed font-light text-white/60 mb-4 px-5"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.9 }}
            >
              Is the problem happening on the product page?
              <br />
              During add-to-cart?
              <br />
              At checkout?
              <br />
              Or during payment?
            </p>
            
          </Reveal>

          <div className="w-10 h-px bg-white/10 mx-auto my-10 sm:my-12" />

          {/* Question 3 */}
          <Reveal>
            <p
              className="font-serif-ed italic text-white/95 mb-2"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.35 }}
            >
              Who is actually affected?
            </p>
            <p
              className="font-sans-ed font-light text-white/60 mb-4 px-5"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.9 }}
            >
              Is everyone behaving differently, or only new visitors?
              <br />
              or Mobile users?
              <br />
              or Returning customers?
            </p>
            
          </Reveal>

          <div className="w-10 h-px bg-white/10 mx-auto my-10 sm:my-12" />

          {/* Question 4 */}
          <Reveal>
            <p
              className="font-serif-ed italic text-white/95 mb-2"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", lineHeight: 1.35 }}
            >
              What changed recently?
            </p>
            <p
              className="font-sans-ed font-light text-white/60 mb-4 px-5"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", lineHeight: 1.9 }}
            >
              Did pricing change?
              <br />
              Was the product page redesigned?
              <br />
              Was a marketing campaign launched?
              <br />
              Was inventory running low?
            </p>
            
          </Reveal>

          <div className="w-10 h-px bg-white/10 mx-auto my-10 sm:my-12" />

        {/* Final thought */}
          <Reveal className="mt-14 sm:mt-16 text-center">
            <p
              className="font-serif-ed italic text-white"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.4 }}
            >
              Only after asking the right questions
              do I begin writing SQL.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — Professional Experience */}
      <section
        ref={section6Ref}
        className={`grid-bg w-full min-h-screen px-6 sm:px-10 lg:px-16 py- sm:py-10 flex flex-col justify-center border-t border-white/5 ed-transition ${
          section6Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto">
         <span
            className="font-sans-ed uppercase text-white/50 mt-4"
          style={{
            fontSize:"1rem",
            letterSpacing:"0.25em"
            }}
          >
            PROFESSIONAL EXPERIENCE
          <div className="w-20 h-0.5 bg-white/15 mt-6"/>
          </span>
          <div className="h-28" />

          <div
            className="w-full grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {/* Photograph column */}
            <div className="min-w-0 w-full flex flex-col gap-3 mx-auto" style={{ maxWidth: "26rem" }}>
              <div
                className="w-full relative overflow-hidden rounded-lg border border-white/10"
                style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
              >
                <div
                  className="w-full flex items-center justify-center"
                  style={{ aspectRatio: "4 / 5", backgroundColor: "#0D111A" }}
                >
                  {/* Replace with: import officePortrait from "./assets/images/office-portrait.jpeg";
                      then: <img src={officePortrait} alt="Tanvi Anand at Sun Life" className="w-full h-full object-cover" /> */}
                  <img
                src={office}
                alt="Tanvi Anand"
                className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-2000
                hover:scale-[1.02]"
              />
              </div>
              </div>
              <div
                className="font-sans-ed uppercase text-white/30"
                style={{ fontSize: "0.65rem", letterSpacing: "0.25em", lineHeight: 2 }}
              >
                Sun Life Financial
                <br />
                Gurugram, India
                <br />
                2023 &ndash; Present
              </div>
            </div>

            {/* Narrative column */}
            <div className="min-w-0 w-full mx-auto" style={{ maxWidth: "34rem" }}>
              <h2
                className="font-serif-ed font-light text-white mb-3"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Sun Life Financial
              </h2>
              <p
                className="font-serif-ed italic text-white/70 mb-8"
                style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", lineHeight: 1.5 }}
              >
                Insurance Operations
              </p>

              <div
                className="font-sans-ed font-light text-white/70 space-y-6"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1rem)", lineHeight: 1.85 }}
              >
                <p>
                  For the past two and a half years, I&rsquo;ve worked in insurance operations at Sun Life
                  — a role built almost entirely on precision.
                </p>
                <p>
                  Every case moves through a structured, multi-step process, and a single missed detail can
                  affect the client experience. Working across multiple systems taught me to validate data, 
                  investigate discrepancies and identify the causes behind processing errors. That experience 
                  shaped the way I approach analysis today: slow down, verify the evidence, and 
                  understand the problem before drawing conclusions.
                </p>
                
              </div>

              {/* Editorial summary — plain text, no cards, no icons */}
              <div
                className="mt-10 font-sans-ed uppercase text-white/40"
                style={{ fontSize: "0.72rem", letterSpacing: "0.2em", lineHeight: 2.1 }}
              >
                2.5+ Years &middot; Insurance Operations &middot; Process Quality
                <br />
                Attention to Detail &middot; Problem Solving &middot; Cross-functional Collaboration
              </div>
            </div>
          </div>

          {/* Closing transition */}
          <p
            className="font-serif-ed italic text-white/85 text-center mt-24 sm:mt-32 mb-16 sm:mb-20 mx-auto"
            style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.6rem)", lineHeight: 1.6, maxWidth: "40rem" }}
          >
            I&rsquo;m now looking forward to solving business problems where curiosity, analysis and
            decision-making come together.
          </p>
        </div>
      </section>

      {/* SECTION 7 — Contact */}
      <section
        ref={contactRef}
        className={`grid-bg w-full min-h-screen px-6 sm:px-10 lg:px-16 py-24 sm:py-32 flex items-center justify-center border-t border-white/5 ed-transition ${
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-full mx-auto text-center" style={{ maxWidth: "700px" }}>
          <h2
            className="font-serif-ed font-light text-white mb-8"
            style={{ fontSize: "clamp(2.4rem, 6vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Let&rsquo;s Continue the Conversation
          </h2>

          <p
            className="font-sans-ed font-light text-white/70 mx-auto"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.1rem)", lineHeight: 1.85, maxWidth: "34rem" }}
          >
            Thank you for taking the time to explore my work. If my approach to solving problems resonates
            with the kind of challenges you&rsquo;re working on, I&rsquo;d be happy to continue the
            conversation.
          </p>

          <div className="h-px w-full bg-white/10 mt-16 sm:mt-20 mb-16 sm:mb-20" />

          <div className="flex flex-col items-center gap-8 sm:gap-9">
            <ContactLink label="Email" href="mailto:tanvianand291@gmail.com" />
            <ContactLink label="Phone" href="tel:+919810300486" />
            <ContactLink label="LinkedIn" href="https://linkedin.com/in/tanvianand11" external />
            <ContactLink label="GitHub" href="https://github.com/TanviAnand11" external />
            <ContactLink label="Resume" href="/Tanvi_Anand.pdf" external/>
          </div>

          <div className="h-px w-full bg-white/10 mt-16 sm:mt-20 mb-12 sm:mb-16" />

          <p
            className="font-serif-ed italic text-white/40"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", lineHeight: 1.6 }}
          >
            Thanks for reading.
          </p>
        </div>
      </section>
    </div>
  );
}