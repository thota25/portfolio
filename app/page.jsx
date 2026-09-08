"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, Activity, Award, Briefcase, FileText, Send, 
  ChevronRight, Download, Sparkles, Cpu, CheckCircle2, Zap, ArrowUpRight
} from 'lucide-react';

export default function PortfolioApp() {
  const { scrollYProgress } = useScroll();
  
  // Parallax translation mapping for background photo
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const metrics = [
    { label: "QA/QC Experience", value: "6+ Yrs", change: "Verified Leadership", color: "from-emerald-400 to-teal-500" },
    { label: "Rework Reduction", value: "30%", change: "HVAC & Mechanical", color: "from-orange-400 to-amber-500" },
    { label: "Execution Efficiency", value: "+25%", change: "Gap Analysis", color: "from-emerald-400 to-green-500" },
    { label: "Work Packages Inspected", value: "177", change: "2.41M+ Linear Feet", color: "from-orange-500 to-red-500" }
  ];

  const projects = [
    {
      title: "Telecom Infrastructure Quality Audit",
      category: "Telecom",
      metrics: "2.41M+ ft Inspected",
      desc: "Implemented strict CAPA and MRB processes across 177 manufacturing packages, driving zero-defect deployments.",
      tags: ["SAP/MES", "CAPA", "Procore"]
    },
    {
      title: "Mechanical & HVAC Rework Optimization",
      category: "Process Design",
      metrics: "30% Cost Reduction",
      desc: "Architected root-cause analysis workflows reducing defect rates and accelerating multi-site turnovers.",
      tags: ["Primavera P6", "MRB", "Audit Ready"]
    },
    {
      title: "Center of Excellence CoE Framework",
      category: "Architecture",
      metrics: "100% Audit Readiness",
      desc: "Designed standardized feedback CoE website and tracking mechanisms for enterprise quality governance.",
      tags: ["Quality Ops", "CoE", "Python"]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white relative overflow-hidden">
      
      {/* PARALLAX BACKGROUND PHOTO WITH HIGH VISIBILITY */}
      <motion.div 
        style={{ y: yBg }} 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <img 
          src="/profile.jpg" 
          alt="Manish Thota Background" 
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105 opacity-60 scale-105" 
        />
        {/* Subtle gradient overlay to keep text readable without obscuring the photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.15),transparent_50%)]" />
      </motion.div>

      {/* FLOATING SAMSUNG-STYLE NAVIGATION BAR */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-xl shadow-2xl shadow-emerald-950/20">
          <div className="flex items-center gap-2 font-bold tracking-wider text-sm bg-gradient-to-r from-emerald-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>MANISH THOTA</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#metrics" className="hover:text-orange-400 transition-colors">Impact</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
          <a 
            href="/Manish_Thota_Resume.pdf" 
            target="_blank" 
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-500 to-orange-500 text-zinc-950 hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative z-10 pt-36 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          Enterprise Quality & Data Architecture
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Architecting Zero-Defect <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-orange-500 bg-clip-text text-transparent">
            Precision & Process Quality
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-10 leading-relaxed"
        >
          Sr. QA Engineer & Quality Process Architect with 6+ years leading QA/QC lifecycle management, CAPA/root-cause analysis, and telecom/manufacturing optimization using SAP/MES, Procore, and Primavera P6.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
          >
            Explore Case Studies
            <ChevronRight className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-zinc-900 border border-zinc-700 text-white hover:border-orange-500 hover:text-orange-400 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>

      {/* METRICS / SAMSUNG GLASS CARDS */}
      <section id="metrics" className="relative z-10 py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all shadow-xl"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
              <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">{item.label}</p>
              <h3 className="text-4xl font-extrabold text-white mb-2">{item.value}</h3>
              <p className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                {item.change}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES / PROJECTS */}
      <section id="projects" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-orange-400 mb-2">Verified Projects</h2>
            <p className="text-3xl md:text-4xl font-bold text-white">Featured Impact & Architecture</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between hover:border-orange-500/40 transition-all shadow-2xl relative group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    {proj.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-xs font-bold text-orange-400 mb-4">{proj.metrics}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <section id="contact" className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect & Collaborate</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Ready to enhance operational precision, build QA/QC frameworks, or optimize telecom processes? Reach out directly.
          </p>
          <a 
            href="mailto:contact@manishthota.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-orange-500 text-zinc-950 hover:brightness-110 transition-all shadow-xl shadow-emerald-500/20"
          >
            <Send className="w-4 h-4" />
            Send Message
          </a>
        </div>
        <p className="mt-12 text-xs text-zinc-600">© 2026 Manish Thota. All rights reserved.</p>
      </section>
    </div>
  );
}
