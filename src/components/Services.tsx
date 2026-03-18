"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Database, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern frameworks, optimised for performance and scalability.",
  },
  {
    icon: Cpu,
    title: "API & Backend Systems",
    description:
      "Robust backend services and RESTful APIs that power data-driven products with reliability.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description:
      "Connecting to government registries, industry databases, and third-party APIs to deliver accurate insights.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description:
      "End-to-end product development — from idea validation to launch and ongoing iteration.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            Our Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            We specialise in building reliable, data-driven software products
            for the Australian market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-5 transition-colors">
                <service.icon size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
