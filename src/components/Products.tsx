"use client";

import { motion } from "framer-motion";
import {
  Car,
  Search,
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  FileText,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "VIN & Rego Lookup",
    description: "Search by VIN or registration plate to decode full vehicle details instantly.",
  },
  {
    icon: ShieldCheck,
    title: "PPSR Certificate",
    description: "Official PPSR certificate showing finance owing, stolen, and write-off status.",
  },
  {
    icon: AlertTriangle,
    title: "Write-Off & Stolen Check",
    description: "Know if a vehicle has been written off or reported stolen before you buy.",
  },
  {
    icon: FileCheck,
    title: "Vehicle Specifications",
    description: "Detailed specs including engine, transmission, body type, variant, and more.",
  },
  {
    icon: FileText,
    title: "Professional PDF Report",
    description: "Get a comprehensive, easy-to-read PDF report you can share or keep on file.",
  },
  {
    icon: Star,
    title: "ANCAP Safety Rating",
    description: "See the official safety rating and any active recall notices for the vehicle.",
  },
];

const plans = [
  {
    name: "Basic Check",
    price: "Free",
    description: "Quick VIN decode",
    features: [
      "VIN decoder",
      "Basic vehicle info",
      "Safety recall check",
    ],
    highlighted: false,
  },
  {
    name: "PPSR Report",
    price: "$5.99",
    description: "Full vehicle history",
    features: [
      "Everything in Basic",
      "PPSR official certificate",
      "Finance owing status",
      "Stolen vehicle check",
      "Write-off history",
      "Full vehicle specifications",
      "Registration & expiry details",
      "Professional PDF report",
    ],
    highlighted: true,
  },
  {
    name: "Premium Report",
    price: "$9.99",
    description: "Complete with valuation",
    features: [
      "Everything in PPSR Report",
      "Market retail price estimate",
      "Trade-in price estimate",
      "Price confidence bounds",
      "Based on real market data",
    ],
    highlighted: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            CheckMyCars
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Australia&apos;s trusted vehicle history check platform. Get instant VIN
            checks and PPSR reports powered by official government data.
          </p>
        </motion.div>

        {/* Product hero card */}
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 sm:p-12 text-white mb-20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 mb-4">
                <Car size={16} />
                <span className="text-sm font-medium">Flagship Product</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Complete Vehicle Intelligence for Australian Buyers
              </h3>
              <p className="mt-4 text-lg text-indigo-100 max-w-xl">
                Search by VIN or Rego to decode vehicle details, check finance
                owing, and get a comprehensive report powered by PPSR, NEVDIS &
                industry data.
              </p>
              <a
                href="https://www.checkmycars.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
              >
                Visit CheckMyCars
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
            <div className="flex-shrink-0 w-full lg:w-80 bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <p className="text-sm text-indigo-200">Powered by</p>
                <p className="text-xl font-bold mt-1">3 Official Data Sources</p>
              </div>
              <div className="space-y-3">
                {["PPSR (AFSA)", "NEVDIS", "Industry Databases"].map((source) => (
                  <div
                    key={source}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10"
                  >
                    <CheckCircle2 size={18} className="text-green-300" />
                    <span className="text-sm font-medium">{source}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            What You Get
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-indigo-50/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <feature.icon size={20} className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Simple, Honest Pricing
          </h3>
          <p className="text-gray-500 text-center mb-10">
            One-time payment per report. No subscriptions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl p-6 border ${
                  plan.highlighted
                    ? "border-indigo-200 bg-indigo-50/50 ring-2 ring-indigo-600 relative"
                    : "border-gray-200 bg-white"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-indigo-600" : "text-gray-400"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.checkmycars.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
