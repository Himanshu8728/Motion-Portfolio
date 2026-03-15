"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="bg-[#121212] py-32 px-8 text-white relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-medium tracking-widest text-[#3B82F6] uppercase mb-16 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#3B82F6]/50"></span>
            Experience
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-0 w-[2px] bg-white/5" />

          {/* Timeline Item 1 */}
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-20 sm:pl-32 mb-16"
          >
            {/* Dot Pattern */}
            <div className="absolute left-[13px] top-6 w-[30px] h-[30px] bg-[#121212] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4] animate-pulse" />
            </div>

            {/* Content Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10">
              
              {/* Glowing Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[#3B82F6]" />
                    Developer Trainee
                  </h4>
                  <p className="text-[#06B6D4] mt-2 font-medium">Levithan Technologies</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-mono">
                    Jan 2026 — Present
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-400 font-light leading-relaxed list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50 rounded-full" />
                  Fine-tuned an Ollama-based LLM model on a cybersecurity dataset for improved domain-specific responses.
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50 rounded-full" />
                  Developing web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50 rounded-full" />
                  Collaborating with cross-functional teams to implement features, fix bugs, and improve application performance.
                </li>
              </ul>
              
            </div>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-20 sm:pl-32"
          >
            {/* Dot Pattern */}
            <div className="absolute left-[13px] top-6 w-[30px] h-[30px] bg-[#121212] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4]" />
            </div>

            {/* Content Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10">
              
              {/* Glowing Left Border Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-[#3B82F6]" />
                    Front-End Web Development Internship
                  </h4>
                  <p className="text-[#06B6D4] mt-2 font-medium">IBM SkillsBuild (Hosted by CSRBOX Foundation)</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-mono">
                    June 2024 — Aug 2024
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-400 font-light leading-relaxed list-none">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-2.5 w-2 h-[2px] bg-[#3B82F6]/50 rounded-full" />
                  Built and deployed responsive web pages using HTML, CSS, JavaScript, and Git, improving user experience for learning modules.
                </li>
              </ul>
              
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
