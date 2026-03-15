"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, LayoutTemplate, Sparkles } from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      description: "Building end-to-end full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      icon: <Code2 className="w-8 h-8 text-blue-500" />
    },
    {
      id: 2,
      title: "Machine Learning Integration",
      description: "Developing data-driven solutions and integrating ML models, like LLM fine-tuning and predictive analytics.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />
    },
    {
      id: 3,
      title: "Frontend Engineering",
      description: "Crafting highly performant, responsive, and intuitive web interfaces tailored for an optimal user experience.",
      icon: <LayoutTemplate className="w-8 h-8 text-cyan-400" />
    },
    {
      id: 4,
      title: "Backend APIs & Databases",
      description: "Designing REST APIs with JWT auth and managing robust integrations with SQL and NoSQL databases.",
      icon: <Sparkles className="w-8 h-8 text-blue-400" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="bg-[#121212] py-32 px-8 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-medium tracking-widest text-[#3B82F6] uppercase mb-16 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#3B82F6]/50"></span>
            What I Do
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#3B82F6]/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col gap-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 via-transparent to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
