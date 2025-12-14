import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { fadeUp, stagger } from "../lib/motion";

const initialState = {
  name: "",
  email: "",
  company: "",
  budget: "Under $1k",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim();
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
     setStatus({ state: 'idle', message: '' })
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit || status.state === "loading") return;

    setStatus({ state: "loading", message: "Sending…" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "nova-sphere",
          createdAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      await res.json();
      setStatus({
        state: "success",
        message: "Message sent! We’ll get back to you shortly.",
      });
      setForm(initialState);
      setTimeout(() => {
        setStatus({ state: "idle", message: "" });
      }, 4000);
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            kicker="Contact"
            title="Tell us what you’re working on"
            description="This demo form uses controlled React state and posts your details to a mock JSONPlaceholder API."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
                <p className="text-sm font-semibold text-white">
                  Fast response. Clear next steps.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Share a bit about your project and we’ll reply with a short
                  plan, timeline, and next steps.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <Mail size={18} className="text-white/80" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        hello@novasphere.studio
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <MapPin size={18} className="text-white/80" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        Remote • Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    What you’ll get
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {[
                      "Timeline + scope",
                      "Price estimate",
                      "Launch checklist",
                    ].map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Name *
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
                      required
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Email *
                    </span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
                      required
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Company
                    </span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Company name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Budget
                    </span>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={onChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white outline-none ring-0 focus:border-white/25"
                    >
                      {["Under $1k", "$1k–$3k", "$3k–$7k", "$7k+"].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-4 block space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Message *
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us what you’re building…"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
                    required
                  />
                </label>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p
                    className={`text-sm ${
                      status.state === "success"
                        ? "text-emerald-300"
                        : status.state === "error"
                        ? "text-red-300"
                        : "text-white/60"
                    }`}
                    aria-live="polite"
                  >
                    {status.message || "We typically reply within 24 hours."}
                  </p>

                  <button
                    type="submit"
                    disabled={!canSubmit || status.state === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status.state === "loading" ? "Sending…" : "Send message"}
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
