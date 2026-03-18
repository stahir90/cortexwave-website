"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, BarChart3, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technology to solve real-world problems for Australian consumers and businesses.",
  },
  {
    icon: Code2,
    title: "Built with Care",
    description:
      "Every product is crafted with attention to detail, performance, and an exceptional user experience.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description:
      "We harness official government and industry data sources to deliver accurate, trustworthy results.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Privacy and security are at the core of everything we build. Your data is always protected.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            CortexWave is an Australian software company focused on building
            intelligent, user-friendly products that empower people to make
            better decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
