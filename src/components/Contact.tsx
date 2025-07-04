
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactItem = ({ icon: Icon, title, content }) => (
  <motion.div 
    whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(200, 0, 255, 0.3)" }} 
    className="flex items-center gap-4 p-6 bg-[#2A3749] rounded-lg shadow-md border border-purple-500/20 transition-all duration-300"
  >
    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: false, error: "" });

  useEffect(() => {
    emailjs.init("teBMOXOJ1RqfKhvAa"); // Replace with your EmailJS Public Key
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: "All fields are required!" });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus({ success: false, error: "Please enter a valid email address!" });
      return;
    }

    try {
      await emailjs.send(
        "techkumarravi", // Service ID
        "template_w10q3qa", // Template ID
        formData,
        "teBMOXOJ1RqfKhvAa" // Public Key
      );

      setStatus({ success: true, error: "" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ success: false, error: "Failed to send message. Try again!" });
    }
  };

  return (
    <section className="py-20 px-6 bg-[#1E293B]" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }} 
            animate={{ scaleX: 1 }} 
            transition={{ duration: 0.5 }} 
            className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6 rounded-full"
          />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions below.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactItem icon={Phone} title="Phone" content="+919616086635" />
          <ContactItem icon={Mail} title="Email" content="ravikumar.tech.in@gmail.com" />
          <ContactItem icon={MapPin} title="Location" content="Kanpur, Uttar Pradesh (India)" />
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.4 }}
          className="max-w-md mx-auto bg-[#2A3749] p-8 rounded-lg shadow-md border border-purple-500/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#364155] border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#364155] border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#364155] border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>

            {/* Success & Error Messages */}
            {status.success && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="mt-4 flex items-center gap-2 text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                Message Sent Successfully!
              </motion.div>
            )}
            {status.error && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="mt-4 flex items-center gap-2 text-red-400"
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
