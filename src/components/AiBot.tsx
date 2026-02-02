import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Bot,
  Send,
  X,
  MessageCircle,
  Sparkles,
  Link2,
  Trash2,
} from "lucide-react";

type From = "user" | "bot";

type ChatMessage = {
  id: string;
  from: From;
  text: string;
};

type KBItem = {
  title: string;
  keywords: string[];
  answer: string;
};

const STORAGE_KEY = "ravi_portfolio_ai_chat_v1";

function uid() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : String(Date.now()) + "_" + Math.random().toString(16).slice(2);
}

function normalize(text: string) {
  return (text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatList(items: string[]) {
  return items.map((x) => `• ${x}`).join("\n");
}

export default function AiBot() {
  return createPortal(<AiBotUI />, document.body);
}

function AiBotUI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Load saved chat (optional)
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return [
          {
            id: uid(),
            from: "bot",
            text: "Hi! I’m Ravi’s portfolio assistant 🤖\nAsk me about projects, skills, experience, education, certifications, resume, or contact.",
          },
        ];
      }
      const parsed = JSON.parse(raw) as { messages?: ChatMessage[] };
      if (parsed?.messages?.length) return parsed.messages;
    } catch {
      // ignore
    }
    return [
      {
        id: uid(),
        from: "bot",
        text: "Hi! I’m Ravi’s portfolio assistant 🤖\nAsk me about projects, skills, experience, education, certifications, resume, or contact.",
      },
    ];
  });

  // Save chat
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages }));
    } catch {
      // ignore
    }
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isTyping, open]);

  // Focus input on open
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [open]);

  // ESC closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // ========= Extracted from your uploaded components =========

  const aboutBullets = useMemo(
    () => [
      "Developing RESTful APIs and scalable microservices architectures",
      "Creating secure authentication systems with Spring Security & JWT",
      "Designing responsive front-end interfaces with React.js, HTML, CSS, and JavaScript",
      "Optimizing database management with MySQL & Oracle",
    ],
    [],
  );

  const experienceSummary = useMemo(
    () => [
      {
        role: "Associate Software Developer",
        company: "Youlogix Infotech Pvt. Ltd.",
        duration: "December 2022 - Present",
        highlights: [
          "Designed scalable solutions based on user needs and requirements",
          "Built and maintained high-availability applications aligned with business goals",
          "Implemented RESTful web services for better interoperability",
          "Evaluated project requirements to align stakeholders with technical feasibility",
        ],
      },
      {
        role: "Intern As Java Developer",
        company: "Neo Nimbus IT",
        duration: "September 2022 - November 2022",
        highlights: [
          "Training in Core Java, Spring Boot, and MySQL with real-world exposure",
          "Built REST APIs connected with relational DB",
          "Bug fixing and code reviews under mentor guidance",
          "Used Git, Postman, and Agile workflows",
        ],
      },
    ],
    [],
  );

  const educationSummary = useMemo(
    () => [
      "MCA (Master Of Computer Application) — Dr. Virendra Swarup Institute Of Computer Studies, Kanpur (2025) — 8.26 CGPA",
      "B.Sc — Chhatrapati Shahu Ji Maharaj University, Kanpur (2023) — 67.66%",
      "Intermediate — Dr. C.V. Raman Inter College U.P Board (2020) — 80.20%",
      "High School — Sardar Patel Academy High School U.P. Board (2018) — 89.16%",
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      "Coding Ninja CodeKaze'24",
      "Java Program Training",
      "Java Full Stack Web Development",
      "Employability Enhancement Program (Centum Foundation, supported by Infosys Foundation)",
      "HTML Programming (Great Learning)",
      "Professional Accounting and Business Systems",
    ],
    [],
  );

  const projects = useMemo(
    () => [
      {
        name: "HealthPredict – Disease Prediction Tool",
        duration: "August 2024 - Present",
        stack: [
          "React",
          "Java",
          "Spring Boot",
          "Microservices",
          "Kafka",
          "MySQL",
        ],
        summary:
          "A healthcare analytics platform that collects patient data and generates disease risk predictions for early intervention. React dashboard + Spring Boot microservices with secure REST APIs; Kafka for real-time events and MySQL performance tuning.",
        points: [
          "Backend microservices with Java + Spring Boot for health data processing",
          "REST APIs for predictive insights and integrations",
          "Interactive React dashboard with real-time risk score view",
          "MySQL indexing + query tuning for large datasets",
          "Kafka event-driven streaming across services",
        ],
      },
      {
        name: "UniEnroll – University Admission Management System",
        duration: "June 2023 - May 2024",
        stack: [
          "Java",
          "Spring Boot",
          "Microservices",
          "JWT",
          "MySQL",
          "REST APIs",
        ],
        summary:
          "Automates student applications from submission to verification and seat allocation. JWT-based secure access for students/admins/faculty and tuned for high-volume admission periods.",
        points: [
          "Microservices for application processing, verification, and seat allocation",
          "Role-based auth with JWT",
          "Secure REST APIs for university portals and external verification",
          "MySQL optimization and backend performance tuning for peak traffic",
        ],
      },
    ],
    [],
  );

  const academicProjects = useMemo(
    () => [
      {
        name: "Appointment Booking System",
        link: "https://github.com/RaviKumar560/ApointmentMicroservice",
        summary:
          "Doctor-Patient appointment booking with real-time email confirmation notifications (Spring Boot microservices + Kafka + mail service).",
      },
      {
        name: "E-Learning Website",
        link: "https://github.com/RaviKumar560/E-learning-website",
        summary:
          "E-learning platform frontend (JSP/HTML/CSS/JS) with Spring Boot backend and MySQL for authentication and course handling.",
      },
      {
        name: "Online Test Paper Generator",
        link: "https://github.com/RaviKumar560/TestPaper-Generator",
        summary:
          "Automated test paper generator fetching questions dynamically; built with Spring Boot + MySQL + JS.",
      },
      {
        name: "Payment Gateway Integration",
        link: "https://github.com/RaviKumar560/PaymentGateway",
        summary:
          "Razorpay integration for secure online payments with backend handling and UI flow.",
      },
    ],
    [],
  );

  const contact = useMemo(
    () => ({
      phone: "+91 9616086635",
      emailPrimary: "ravikumar.tech.in@gmail.com",
      emailAlt: "techkumarravi563@gmail.com",
      location: "Kanpur, Uttar Pradesh (India)",
      github: "https://github.com/RaviKumar560",
      linkedin: "https://www.linkedin.com/in/ravi-kumar-224671356/",
      resumeHint:
        "Use the ‘Download CV’ button. For GitHub Pages, keep the PDF inside /public and link via import.meta.env.BASE_URL.",
    }),
    [],
  );

  // ========= Knowledge base (strong FAQ) =========
  const knowledgeBase: KBItem[] = useMemo(() => {
    const aboutAnswer =
      "Ravi Kumar is a Java Full Stack Developer with 3+ years of experience building scalable, secure web applications.\n\n" +
      "What Ravi focuses on:\n" +
      formatList(aboutBullets) +
      "\n\nHe also explores Generative AI and LLM/API integrations to build assistant-like features and automation.";

    const experienceAnswer =
      "Professional Experience:\n" +
      formatList(
        experienceSummary.map(
          (e) => `${e.role} — ${e.company} (${e.duration})`,
        ),
      ) +
      "\n\nHighlights:\n" +
      formatList(experienceSummary.flatMap((e) => e.highlights));

    const educationAnswer = "Education:\n" + formatList(educationSummary);

    const certAnswer = "Certifications:\n" + formatList(certifications);

    const projectsAnswer =
      "Featured Projects:\n" +
      formatList(projects.map((p) => `${p.name} (${p.duration})`)) +
      "\n\nAsk: “Tell me about HealthPredict” or “Tell me about UniEnroll” for details.";

    const healthPredictAnswer =
      `${projects[0].name} (${projects[0].duration})\n` +
      `${projects[0].summary}\n\n` +
      "Tech Stack:\n" +
      formatList(projects[0].stack) +
      "\n\nKey Work:\n" +
      formatList(projects[0].points);

    const uniEnrollAnswer =
      `${projects[1].name} (${projects[1].duration})\n` +
      `${projects[1].summary}\n\n` +
      "Tech Stack:\n" +
      formatList(projects[1].stack) +
      "\n\nKey Work:\n" +
      formatList(projects[1].points);

    const skillsAnswer =
      "Core Skills:\n" +
      formatList([
        "Java, Spring Boot, Spring Security, Microservices, REST APIs",
        "React.js, Tailwind CSS, Bootstrap, Material-UI, Redux, Axios",
        "MySQL, Oracle, H2 (testing)",
        "Kafka, Docker, Kubernetes, AWS, Git, Postman, Swagger, JUnit",
      ]) +
      "\n\nAI/Dev Tools:\n" +
      formatList([
        "Generative AI basics + API integration knowledge",
        "GitHub Copilot, Windsurf, Cline, Warp",
      ]);

    const academicAnswer =
      "Academic Projects:\n" +
      formatList(academicProjects.map((p) => `${p.name} — ${p.summary}`)) +
      "\n\nSay: “Show academic project links” if you want GitHub links.";

    const academicLinksAnswer =
      "Academic Project Links:\n" +
      formatList(academicProjects.map((p) => `${p.name}: ${p.link}`));

    const contactAnswer =
      "Contact Ravi:\n" +
      formatList([
        `Email: ${contact.emailPrimary} (alt: ${contact.emailAlt})`,
        `Phone: ${contact.phone}`,
        `Location: ${contact.location}`,
        `GitHub: ${contact.github}`,
        `LinkedIn: ${contact.linkedin}`,
      ]);

    const resumeAnswer =
      "Resume Download:\n" +
      contact.resumeHint +
      "\n\nTip: If download doesn’t work on GitHub Pages, ensure the PDF is in /public and the href uses import.meta.env.BASE_URL.";

    const genAiAnswer =
      "Generative AI:\n" +
      "Ravi has practical knowledge of GenAI concepts and LLM/API integrations to build chatbots, smart assistants, and automation workflows.\n" +
      "He also uses AI dev tools (Copilot, Windsurf, Cline, Warp) to boost productivity while keeping code quality and security in mind.";

    return [
      {
        title: "About",
        keywords: [
          "about",
          "about me",
          "who is ravi",
          "introduce",
          "summary",
          "profile",
          "bio",
        ],
        answer: aboutAnswer,
      },
      {
        title: "Projects",
        keywords: [
          "project",
          "projects",
          "work",
          "portfolio",
          "healthpredict",
          "unienroll",
        ],
        answer: projectsAnswer,
      },
      {
        title: "HealthPredict",
        keywords: [
          "healthpredict",
          "health",
          "disease",
          "prediction",
          "kafka",
          "patient",
          "risk",
        ],
        answer: healthPredictAnswer,
      },
      {
        title: "UniEnroll",
        keywords: [
          "unienroll",
          "university",
          "admission",
          "seat",
          "verification",
          "jwt",
          "application",
        ],
        answer: uniEnrollAnswer,
      },
      {
        title: "Skills",
        keywords: [
          "skills",
          "stack",
          "tech",
          "technology",
          "react",
          "spring",
          "microservices",
          "kafka",
          "mysql",
          "docker",
          "kubernetes",
          "aws",
        ],
        answer: skillsAnswer,
      },
      {
        title: "Experience",
        keywords: [
          "experience",
          "company",
          "companies",
          "job",
          "role",
          "work experience",
          "youlogix",
          "neo nimbus",
          "intern",
        ],
        answer: experienceAnswer,
      },
      {
        title: "Education",
        keywords: [
          "education",
          "college",
          "degree",
          "mca",
          "bsc",
          "university",
          "cgpa",
        ],
        answer: educationAnswer,
      },
      {
        title: "Certifications",
        keywords: [
          "certification",
          "certifications",
          "certificate",
          "codekaze",
          "coding ninjas",
          "great learning",
        ],
        answer: certAnswer,
      },
      {
        title: "Academic Projects",
        keywords: [
          "academic",
          "mini project",
          "college project",
          "appointment",
          "e learning",
          "test paper",
          "payment",
          "razorpay",
        ],
        answer: academicAnswer,
      },
      {
        title: "Academic Links",
        keywords: [
          "links",
          "github links",
          "project links",
          "show links",
          "academic links",
        ],
        answer: academicLinksAnswer,
      },
      {
        title: "Generative AI",
        keywords: [
          "generative ai",
          "genai",
          "ai",
          "llm",
          "openai",
          "chatbot",
          "assistant",
          "automation",
          "copilot",
          "windsurf",
          "cline",
          "warp",
        ],
        answer: genAiAnswer,
      },
      {
        title: "Resume",
        keywords: ["resume", "cv", "download", "pdf"],
        answer: resumeAnswer,
      },
      {
        title: "Contact",
        keywords: [
          "contact",
          "email",
          "mail",
          "phone",
          "linkedin",
          "github",
          "reach",
          "location",
        ],
        answer: contactAnswer,
      },
    ];
  }, [
    aboutBullets,
    academicProjects,
    certifications,
    contact,
    educationSummary,
    experienceSummary,
    projects,
  ]);

  // ========= Better intent routing + scoring =========
  const getBotReply = (text: string) => {
    const q = normalize(text);
    if (!q)
      return "Ask me about projects, skills, experience, education, certifications, resume, or contact.";

    // Intent shortcuts (feel more “AI”)
    if (q.includes("show") && q.includes("link")) {
      const item = knowledgeBase.find((x) => x.title === "Academic Links");
      return item ? item.answer : "I couldn't find links right now.";
    }

    let bestScore = 0;
    let bestAnswer: string | null = null;

    const qWords = new Set(q.split(" "));

    for (const item of knowledgeBase) {
      let score = 0;

      // Title match
      const t = normalize(item.title);
      if (t && q.includes(t)) score += 10;

      for (const kw of item.keywords) {
        const k = normalize(kw);
        if (!k) continue;

        // Phrase match
        if (q.includes(k)) score += 8;

        // Word overlap match
        const kWords = k.split(" ");
        let overlap = 0;
        for (const w of kWords) if (qWords.has(w)) overlap += 1;
        score += overlap * 2;
      }

      if (score > bestScore) {
        bestScore = score;
        bestAnswer = item.answer;
      }
    }

    if (!bestAnswer || bestScore < 8) {
      return (
        "I can help with: About Ravi, Projects (HealthPredict / UniEnroll), Skills, Experience, Education, Certifications, Academic Projects, Resume, and Contact.\n\n" +
        "Try asking:\n" +
        "• Tell me about Ravi\n" +
        "• Tell me about HealthPredict\n" +
        "• What skills do you have?\n" +
        "• Show academic project links"
      );
    }

    return bestAnswer;
  };

  const pushUserAndBot = (text: string) => {
    const clean = (text || "").trim();
    if (!clean) return;

    setMessages((prev) => [...prev, { id: uid(), from: "user", text: clean }]);
    setIsTyping(true);

    // Small delay = smoother UI, still feels instant
    setTimeout(() => {
      const reply = getBotReply(clean);
      setMessages((prev) => [...prev, { id: uid(), from: "bot", text: reply }]);
      setIsTyping(false);
    }, 140);
  };

  const onSend = () => {
    pushUserAndBot(input);
    setInput("");
  };

  const quickChips = useMemo(
    () => [
      "Tell me about Ravi",
      "Tell me about HealthPredict",
      "Tell me about UniEnroll",
      "What skills do you have?",
      "Show experience",
      "Show education",
      "Show certifications",
      "Show academic project links",
      "How can I contact you?",
      "How to download your resume?",
      "Do you know Generative AI?",
    ],
    [],
  );

  const clearChat = () => {
    const fresh: ChatMessage[] = [
      {
        id: uid(),
        from: "bot",
        text: "Chat cleared ✅\nAsk me about projects, skills, experience, education, certifications, resume, or contact.",
      },
    ];
    setMessages(fresh);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages: fresh }));
    } catch {
      // ignore
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[2147483647] flex items-center gap-2 rounded-full bg-purple-600 px-4 py-3 text-white shadow-lg hover:bg-purple-700 active:scale-[0.98] transition"
        aria-label="Open portfolio assistant"
      >
        <MessageCircle className="w-5 h-5" />
        Ask AI
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[2147483646] bg-black/40 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            className="
              fixed z-[2147483647] pointer-events-auto
              bottom-6 right-6
              w-[380px] max-w-[92vw]
              rounded-2xl border border-white/10
              bg-[#0B1220]/95 text-white shadow-2xl overflow-hidden
              animate-in fade-in zoom-in-95 duration-200
              max-h-[78vh]
              bottom-0 right-0 sm:bottom-6 sm:right-6 sm:rounded-2xl rounded-t-2xl
            "
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/10">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-600/20 p-2">
                  <Bot className="w-5 h-5 text-purple-200" />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold">Portfolio Assistant</div>
                  <div className="text-xs text-white/70 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Always ready to help you 🚀
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              className="px-4 py-3 space-y-3 overflow-y-auto"
              style={{ height: "420px", maxHeight: "55vh" }}
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm leading-relaxed
                      ${m.from === "user" ? "bg-purple-600 text-white" : "bg-white/10 text-white"}
                    `}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl px-4 py-2 text-sm text-white/80">
                    Typing<span className="animate-pulse">...</span>
                  </div>
                </div>
              )}

              {/* Quick chips */}
              <div className="pt-1">
                <div className="text-xs text-white/60 mb-2">
                  Quick questions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickChips.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => pushUserAndBot(s)}
                      className="text-xs rounded-full border border-white/15 px-3 py-1.5 hover:bg-white/10 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Small hint for links */}
                <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
                  <Link2 className="w-4 h-4" />
                  Tip: ask “Show academic project links”
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills, education, contact..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-purple-600 p-2.5 hover:bg-purple-700 active:scale-[0.98] transition"
                  aria-label="Send"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
