"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have a project in mind or want to learn more about what we do?
              We&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Mail size={22} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:hello@cortexwave.com.au"
                  className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  hello@cortexwave.com.au
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <MapPin size={22} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">Sydney, Australia</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Send Message
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
