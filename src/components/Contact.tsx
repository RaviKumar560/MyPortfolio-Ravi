import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

type Status = { success: boolean; error: string };

const ContactItem = ({
  icon: Icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="
      relative overflow-hidden
      flex items-center gap-4 p-6
      bg-[#2A3749] rounded-2xl shadow-lg
      border border-purple-500/20
      transition-all duration-300
      hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/40
      group
    "
  >
    {/* glow */}
    <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(168,85,247,0.20)_0%,transparent_55%)]" />
    </div>

    {/* shimmer */}
    <div
      className="
        pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        before:absolute before:inset-0
        before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_20%,transparent_40%)]
        before:translate-x-[-120%] group-hover:before:translate-x-[120%]
        before:transition-transform before:duration-700
      "
    />

    <div className="relative p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
      <Icon className="w-6 h-6 text-white" />
    </div>

    <div className="relative">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-gray-300 break-words">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({ success: false, error: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init("teBMOXOJ1RqfKhvAa");
  }, []);

  // auto-hide success after 3.5s
  useEffect(() => {
    if (!status.success) return;
    const t = setTimeout(() => setStatus({ success: false, error: "" }), 3500);
    return () => clearTimeout(t);
  }, [status.success]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setStatus({ success: false, error: "" }); // clear on typing
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (sending) return;

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: "All fields are required." });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        success: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "techkumarravi",
        "template_w10q3qa",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "teBMOXOJ1RqfKhvAa",
      );

      setStatus({ success: true, error: "" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        success: false,
        error: "Failed to send message. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4"
          >
            Get in Touch
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6 rounded-full origin-left"
          />

          <p className="text-gray-300 max-w-2xl mx-auto">
            Want to collaborate or have an opportunity in mind? Send a message —
            I usually respond quickly.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactItem icon={Phone} title="Phone" content="+91 9616086635" />
          <ContactItem
            icon={Mail}
            title="Email"
            content="ravikumar.tech.in@gmail.com"
          />
          <ContactItem
            icon={MapPin}
            title="Location"
            content="Kanpur, Uttar Pradesh (India)"
          />
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            relative overflow-hidden
            max-w-xl mx-auto
            bg-[#2A3749] p-8 rounded-2xl shadow-lg
            border border-purple-500/20
          "
        >
          {/* subtle top glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl" />

          <div className="relative flex items-center gap-2 mb-6 text-white">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-white/10">
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <div className="font-semibold leading-tight">Send a message</div>
              <div className="text-xs text-white/60">
                I’ll get back to you as soon as possible.
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-xl
                bg-[#364155] border border-white/10
                text-white placeholder-gray-400
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20
                outline-none transition-all duration-300
              "
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-xl
                bg-[#364155] border border-white/10
                text-white placeholder-gray-400
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20
                outline-none transition-all duration-300
              "
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="
                w-full px-4 py-3 rounded-xl
                bg-[#364155] border border-white/10
                text-white placeholder-gray-400
                focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20
                outline-none transition-all duration-300
                resize-none
              "
              required
            />

            <motion.button
              whileHover={{ scale: sending ? 1 : 1.03 }}
              whileTap={{ scale: sending ? 1 : 0.97 }}
              type="submit"
              disabled={sending}
              className={`
                w-full py-3.5 px-6 rounded-xl
                flex items-center justify-center gap-2
                text-white font-medium
                bg-gradient-to-r from-purple-500 to-pink-500
                transition-all duration-300
                ${sending ? "opacity-70 cursor-not-allowed" : "hover:from-purple-600 hover:to-pink-600"}
              `}
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status messages */}
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 flex items-center gap-2 text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </motion.div>
            )}

            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 flex items-center gap-2 text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                {status.error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
