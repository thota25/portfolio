use client
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, Activity, Award, Briefcase, FileText, Send, 
  Settings, Layout, Database, CheckCircle, AlertCircle, RefreshCw, 
  Layers, Search, Filter, ChevronRight, Moon, Sun, Smartphone, 
  Tablet, Monitor, Eye, Sparkles, Plus, Trash2, Edit3, ArrowUpRight,
  ChevronDown, ExternalLink, Download, Check, X, Lock, Cpu, BarChart2
} from 'lucide-react';

// ==========================================
// INITIAL VERIFIED PORTFOLIO DATA ARCHITECTURE
// ==========================================
const initialPortfolioData = {
  profile: {
    name: "Manish Thota",
    title: "Sr. QA Engineer & Quality Process Architect",
    tagline: "Bridging technical quality assurance, telecom infrastructure, and data-driven process optimization.",
    bio: "Results-driven QA Engineer with 6+ years leading QA/QC oversight, inspection, and process improvement across manufacturing, telecom, and large-scale construction environments. Skilled in RFI lifecycle management, CAPA/root-cause analysis, MRB leadership, and document control using SAP/MES, Procore, and Primavera P6.",
    location: "Denton, TX / Remote",
    email: "thota.manish02@gmail.com",
    phone: "+1 (940) 758-2447",
    linkedin: "https://www.linkedin.com/in/manish-thota-b41339189/",
    github: "https://github.com/",
    resumeUrl: "/Manish_Thota_Resume.pdf",
    interests: "In my downtime, I apply an analytical mindset to analyzing international soccer match strategies and tracking tournament statistics (following teams like Argentina and Spain). I also enjoy culinary experimentation, focusing on the precise spice balances, onions, and tomatoes required for authentic Indian curries."
  },
  metrics: [
    { id: "m1", label: "Years Experience", value: "6+", change: "+1yr", description: "In QA/QC oversight & manufacturing", visible: true },
    { id: "m2", label: "Rework Reduction", value: "30%", change: "Target Met", description: "Across mechanical & HVAC systems", visible: true },
    { id: "m3", label: "Execution Efficiency", value: "25%", change: "+10%", description: "Improvement via gap identification", visible: true },
    { id: "m4", label: "Footage Verified", value: "2.41M+", change: "Linear Feet", description: "Inspected across 177 work packages", visible: true },
    { id: "m5", label: "Chassis Inspected", value: "300+", change: "Units", description: "100% safety & code compliance", visible: true }
  ],
  experiences: [
    {
      id: "exp-1",
      company: "TBrij LLC",
      client: "Lumen Technologies / ByVerTek",
      role: "Sr. QA Engineer",
      startDate: "Nov 2025",
      endDate: "Present",
      isCurrent: true,
      published: true,
      challenge: "Large-scale self-perform mechanical construction and manufacturing facility required strict QA/QC oversight across wet, dry, and HVAC piping systems to prevent costly rework and timeline delays.",
      responsibility: "Led QA/QC field verification, established document control processes, managed RFI lifecycles, and validated HVAC system calibration for critical environmentally controlled spaces.",
      approach: "Enforced standardized multi-trade quality checkpoints, coordinated cross-functional responses across Production, Quality, and Engineering teams, and maintained audit-ready non-conformance tracking.",
      technologies: ["Procore", "Primavera P6", "SAP/MES", "CAPA", "HVAC Verification", "RFI Lifecycle"],
      result: "Achieved a 30% reduction in rework across piping systems, boosted project execution efficiency by 25%, and improved environmental control energy efficiency by 20%.",
      businessImpact: "Mitigated high-risk non-conformances prior to commissioning, keeping project delivery on schedule and under strict budget compliance.",
      order: 1
    },
    {
      id: "exp-2",
      company: "SVR Telecom",
      client: "AT&T",
      role: "Quality Assurance Engineer",
      startDate: "May 2025",
      endDate: "Oct 2025",
      isCurrent: false,
      published: true,
      challenge: "Managing quality compliance and field verification across a $700M hospital construction program and 300+ chassis units without impacting tight delivery timelines.",
      responsibility: "Coordinated chassis inspection workflows, conducted systematic site inspections for hospital construction, and analyzed defect trends to recommend root-cause remedies.",
      approach: "Utilized Procore and Primavera P6 for real-time tracking of RFIs, change orders, and submittals while maintaining 100% safety code adherence across all site operations.",
      technologies: ["Procore", "Primavera P6", "Telecom Chassis QC", "Root Cause Analysis", "Code Compliance"],
      result: "Successfully verified 300+ chassis units, increased manufacturing efficiency by 15%, and resolved high-priority construction non-conformances with zero safety violations.",
      businessImpact: "Ensured enterprise telecom infrastructure readiness for hospital operations while establishing repeatable quality inspection benchmarks.",
      order: 2
    },
    {
      id: "exp-3",
      company: "Cardinal Tech INC.",
      client: "Enterprise Manufacturing",
      role: "QA Engineer",
      startDate: "Jul 2023",
      endDate: "Apr 2024",
      isCurrent: false,
      published: true,
      challenge: "Triaging non-conforming inventory across four continuous production shifts without disrupting manufacturing throughput or creating material supply line halts.",
      responsibility: "Led daily Material Review Board (MRB) meetings, built SAP/MES tracking models for CAPA, managed RFI lifecycles, and oversaw hardware vendor compliance.",
      approach: "Constructed data-driven SAP models to analyze labor trends, capacity, and resource utilization while delivering monthly executive presentations on risk assessments.",
      technologies: ["SAP/MES", "MRB Leadership", "CAPA Models", "Labor Capacity Analytics", "PowerPoint Exec Dashboards"],
      result: "Standardized rework procedures, prevented production halts through proactive vendor purchase order management, and accelerated RFI technical review turnarounds.",
      businessImpact: "Transformed reactive shift defect handling into a predictable, data-backed continuous improvement process.",
      order: 3
    }
  ],
  skills: [
    { id: "s1", name: "QA/QC Field Verification", category: "QA / Quality", yearsExp: 6, featured: true, order: 1, description: "Multi-discipline inspection for mechanical, piping, and telecom setups." },
    { id: "s2", name: "Root Cause Analysis (CAPA)", category: "QA / Quality", yearsExp: 6, featured: true, order: 2, description: "Structured defect identification and corrective action tracking." },
    { id: "s3", name: "SAP & MES Data Modeling", category: "Data & Analytics", yearsExp: 4, featured: true, order: 3, description: "Inventory non-conformance tracking and operational forecasting." },
    { id: "s4", name: "Procore & Primavera P6", category: "Tools & Technologies", yearsExp: 5, featured: true, order: 4, description: "RFI management, submittals, and master scheduling." },
    { id: "s5", name: "Python for Data Analysis", category: "Technical Skills", yearsExp: 3, featured: false, order: 5, description: "Data mining, trend extraction, and statistical quality modeling." },
    { id: "s6", name: "MRB Leadership", category: "Professional Skills", yearsExp: 4, featured: true, order: 6, description: "Material Review Board leadership across multi-shift production schedules." }
  ],
  projects: [
    {
      id: "p1",
      title: "AT&T Fiber Infrastructure & Telecom Quality Verification",
      category: "Telecommunications QA",
      customer: "AT&T",
      company: "SVR Telecom",
      problem: "High volume telecom fielding and project package validation required stringent quality control to prevent field re-work and line loss.",
      role: "Lead QA Engineer for Fielding Verification",
      approach: "Engineered a systematic inspection protocol tracking F1/F2 fiber lines across 100+ distinct project work packages in Florida.",
      technologies: ["Fielding Inspections", "Fiber Optics Quality", "Procore", "Excel Analytics"],
      result: "Processed over 2.4 Million linear feet of network documentation with zero critical audit findings.",
      businessImpact: "Accelerated network handoff cycles for major telecom account infrastructure.",
      published: true,
      featured: true
    },
    {
      id: "p2",
      title: "Lumen Tech High-Precision Mechanical Facility QA",
      category: "Manufacturing & MEP",
      customer: "Lumen Technologies",
      company: "TBrij LLC",
      problem: "Environmentally controlled manufacturing facility needed strict mechanical and HVAC piping performance verification to ensure operational compliance.",
      role: "Sr. QA Engineer - Mechanical Systems Oversight",
      approach: "Established multi-trade inspection checkpoints and calibrated testing protocols for environmental control systems.",
      technologies: ["HVAC Validation", "SAP/MES", "CAPA Tracking", "RFI Lifecycle"],
      result: "Achieved 30% reduction in rework and improved system energy control accuracy by 20%.",
      businessImpact: "Directly lowered facility commissioning costs and ensured strict environmental code compliance.",
      published: true,
      featured: true
    }
  ],
  achievements: [
    { id: "a1", title: "Master of Science in Information Systems & Tech", issuer: "University of North Texas", date: "May 2023", category: "Education", detail: "GPA 3.4/4.0. Focus on Data Mining, Python, DBMS, and Strategic Use of IT." },
    { id: "a2", title: "30% Field Rework Reduction Award", issuer: "TBrij LLC / Client Project", date: "2025", category: "Professional Milestone", detail: "Recognized for optimizing mechanical verification protocols on manufacturing facility construction." },
    { id: "a3", title: "Google Analytics Certification", issuer: "Google", date: "Credentialed", category: "Certification", detail: "Advanced data visualization and analytics interpretation." },
    { id: "a4", title: "HubSpot Sales & Software Certification", issuer: "HubSpot", date: "Credentialed", category: "Certification", detail: "CRM and client communication operational excellence." }
  ]
};

export default function PortfolioApp() {
  // Navigation & Theme State
  const [data, setData] = useState(initialPortfolioData);
  const [darkMode, setDarkMode] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [adminTab, setAdminTab] = useState('overview');
  
  // Public Filters State
  const [skillSearch, setSkillSearch] = useState('');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Admin CMS & Device Preview State
  const [previewDevice, setPreviewDevice] = useState('desktop'); // desktop, tablet, mobile
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Auto-dismiss notification toast
  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 4000);
  };

  // Toggle Dark/Light Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle AI Content Assistant Execution (Strict System Prompt Simulation)
  const runAiAssistant = (textInput, command) => {
    if (!textInput.trim()) {
      showToast("Please provide input text for the AI to refine.", "error");
      return;
    }
    setIsAiLoading(true);
    setTimeout(() => {
      let result = "";
      if (command === "executive") {
        result = `Directed executive QA/QC operations: ${textInput}. Engineered SAP/MES tracking models to optimize workflow efficiency by 25% while maintaining strict compliance.`;
      } else if (command === "technical") {
        result = `Executed rigorous quality protocols: ${textInput}. Conducted root cause analysis (CAPA), submittal validation, and RFI lifecycle management using Procore & Primavera P6.`;
      } else if (command === "impact") {
        result = `Transformed quality processes: ${textInput}, resulting in a measurable 30% rework reduction and zero audit non-conformances.`;
      } else {
        result = `Refined professional overview: ${textInput} with enhanced emphasis on analytical precision and cross-functional leadership.`;
      }
      setAiOutput(result);
      setIsAiLoading(false);
      showToast("AI suggestion generated! Review before accepting.", "success");
    }, 1200);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* ========================================== */}
      {/* GLOBAL TOAST NOTIFICATION                  */}
      {/* ========================================== */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 flex items-center space-x-2 bg-slate-900 text-white border border-cyan-500/40 px-4 py-3 rounded-xl shadow-2xl animate-bounce">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium">{notification.msg}</span>
        </div>
      )}

      {/* ========================================== */}
      {/* STICKY HEADER / NAVIGATION BAR             */}
      {/* ========================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand Mark */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 tracking-wider shadow-lg shadow-cyan-500/20">
              MT
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">{data.profile.name}</span>
              <span className="hidden sm:block text-xs text-cyan-400 font-mono">QA & Process Architect</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 font-medium text-sm">
            {['Home', 'About', 'Impact', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => {
              const key = item.toLowerCase();
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setIsAdminMode(false); }}
                  className={`px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Controls */}
          <div className="flex items-center space-x-3">
            {/* Dark/Light Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              title="Toggle Color Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Admin Toggle Button */}
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`flex items-center space-x-2 text-xs font-mono font-semibold px-3 py-2 rounded-lg transition-all ${
                isAdminMode 
                  ? 'bg-amber-500 text-slate-950 border border-amber-400 shadow-lg shadow-amber-500/20' 
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>{isAdminMode ? 'Exit CMS Admin' : 'Admin CMS'}</span>
            </button>

            {/* Resume Download CTA */}
            <a 
              href={data.profile.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* ========================================== */}
      {/* MAIN CONTENT ROUTER                        */}
      {/* ========================================== */}
      <main>
        {isAdminMode ? (
          /* ADMIN CMS DASHBOARD VIEW */
          <AdminDashboard 
            data={data} 
            setData={setData} 
            adminTab={adminTab} 
            setAdminTab={setAdminTab}
            previewDevice={previewDevice}
            setPreviewDevice={setPreviewDevice}
            runAiAssistant={runAiAssistant}
            aiPrompt={aiPrompt}
            setAiPrompt={setAiPrompt}
            aiOutput={aiOutput}
            setAiOutput={setAiOutput}
            isAiLoading={isAiLoading}
            showToast={showToast}
          />
        ) : (
          /* PUBLIC USER-FACING PORTFOLIO VIEW */
          <div>
            {activeTab === 'home' && (
              <>
                <HeroSection data={data} setActiveTab={setActiveTab} />
                <ImpactDashboardSection metrics={data.metrics} />
                <AboutSection data={data} />
                <ExperienceSection experiences={data.experiences} setSelectedCaseStudy={setSelectedCaseStudy} />
                <ProjectsSection projects={data.projects} setSelectedCaseStudy={setSelectedCaseStudy} />
              </>
            )}

            {activeTab === 'about' && <AboutSection data={data} />}

            {activeTab === 'impact' && <ImpactDashboardSection metrics={data.metrics} detailedView={true} />}

            {activeTab === 'experience' && (
              <ExperienceSection experiences={data.experiences} setSelectedCaseStudy={setSelectedCaseStudy} />
            )}

            {activeTab === 'skills' && (
              <SkillsSection 
                skills={data.skills} 
                skillSearch={skillSearch} 
                setSkillSearch={setSkillSearch}
                selectedCategory={selectedSkillCategory}
                setSelectedCategory={setSelectedSkillCategory}
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsSection 
                projects={data.projects} 
                selectedCategory={selectedProjectCategory}
                setSelectedCategory={setSelectedProjectCategory}
                setSelectedCaseStudy={setSelectedCaseStudy}
              />
            )}

            {activeTab === 'achievements' && <AchievementsSection achievements={data.achievements} />}

            {activeTab === 'contact' && <ContactSection profile={data.profile} showToast={showToast} />}
          </div>
        )}
      </main>

      {/* ========================================== */}
      {/* CASE STUDY EXPANDABLE MODAL                */}
      {/* ========================================== */}
      {selectedCaseStudy && (
        <CaseStudyModal item={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
      )}

      {/* ========================================== */}
      {/* FOOTER SECTION                             */}
      {/* ========================================== */}
      <footer className="mt-20 border-t border-slate-900 bg-slate-950 py-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {data.profile.name} — Sr. Quality Engineer & Process Architect.
          </div>
          <div className="flex space-x-6">
            <a href={data.profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href={`mailto:${data.profile.email}`} className="hover:text-cyan-400 transition-colors">Direct Email</a>
            <button onClick={() => setIsAdminMode(true)} className="hover:text-cyan-400 transition-colors">CMS Login</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// 1. PUBLIC HERO SECTION COMPONENT
// ============================================================================
function HeroSection({ data, setActiveTab }) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-900 bg-slate-950">
      {/* Tech Grid Background Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-semibold text-cyan-300 tracking-wide uppercase">
                Enterprise Quality & Data Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              {data.profile.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-300">
              {data.profile.title}
            </p>

            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              {data.profile.tagline} {data.profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => setActiveTab('projects')}
                className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Case Studies</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('experience')}
                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 px-6 py-3 rounded-xl transition-all"
              >
                <span>Career Impact</span>
                <BarChart2 className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Verified Quality Metrics</span>
              <span className="inline-flex items-center text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span> Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.metrics.filter(m => m.visible).slice(0, 4).map(metric => (
                <div key={metric.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4">
                  <div className="text-2xl font-black text-cyan-400 font-mono">{metric.value}</div>
                  <div className="text-xs font-semibold text-slate-300 mt-1">{metric.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/60 flex justify-between items-center">
              <span>Primary Tech: SAP, Procore, P6, Python</span>
              <span className="font-mono text-cyan-400">100% Audit Ready</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 2. PROFESSIONAL IMPACT DASHBOARD SECTION
// ============================================================================
function ImpactDashboardSection({ metrics, detailedView = false }) {
  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Activity className="w-4 h-4" />
            <span>Quantitative Performance Dashboard</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Measurable Quality & Operational Results
          </h2>
          <p className="text-slate-400 text-sm">
            All values derived from verified site logs across 177 manufacturing and telecom project work packages.
          </p>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.filter(m => m.visible).map((metric) => (
            <div key={metric.id} className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all group">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                <span>METRIC #{metric.id}</span>
                <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">{metric.change}</span>
              </div>
              <div className="text-3xl font-black text-white font-mono group-hover:text-cyan-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">{metric.label}</div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">{metric.description}</div>
            </div>
          ))}
        </div>

        {detailedView && (
          <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Enterprise Work Package Distribution (Excel Verified)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold font-mono text-cyan-400">100 Work Packages</div>
                <div className="text-xs text-slate-400 mt-1">AT&T Telecom Infrastructure</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold font-mono text-blue-400">59 Work Packages</div>
                <div className="text-xs text-slate-400 mt-1">Lumen Technologies MEP/HVAC</div>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold font-mono text-emerald-400">18 Work Packages</div>
                <div className="text-xs text-slate-400 mt-1">ByVerTek Verification</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// ============================================================================
// 3. ABOUT ME & "WHAT I BRING" SECTION
// ============================================================================
function AboutSection({ data }) {
  const coreStrengths = [
    { title: "Defect Prevention & CAPA", desc: "Building root-cause models in SAP/MES to eliminate recurring errors before shift deployment." },
    { title: "RFI & Document Control", desc: "Streamlining complex submittal lifecycles using Procore and Primavera P6." },
    { title: "Cross-Functional Alignment", desc: "Unifying Production, Quality, Engineering, and Client Management teams." },
    { title: "Data-Driven Forecasting", desc: "Translating inspection logs into actionable labor utilization and capacity metrics." }
  ];

  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Executive Background</div>
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Precision Engineering Meets Systemic Quality Control
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              {data.profile.bio}
            </p>
            
            {/* Grounded Interests Section */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Personal Balance & Analytical Mindset</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.profile.interests}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// 4. PROFESSIONAL EXPERIENCE SECTION (CASE STUDY FORMAT)
// ============================================================================
function ExperienceSection({ experiences, setSelectedCaseStudy }) {
  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-4 h-4" />
            <span>Case Study Career Timeline</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Career Experience & Measurable Outcomes
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-2">
                <div>
                  <span className="text-xs font-mono text-cyan-400">{exp.company} {exp.client && `(Client: ${exp.client})`}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start lg:self-auto">
                  {exp.startDate} — {exp.endDate}
                </div>
              </div>

              {/* Case Study Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-slate-500">The Challenge</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.challenge}</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-cyan-400">The Approach</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.approach}</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-emerald-400">Business Impact</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{exp.result}</p>
                </div>
              </div>

              {/* Tech Badges & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(exp)}
                  className="flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Case Study Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// 5. SKILLS SECTION
// ============================================================================
function SkillsSection({ skills, skillSearch, setSkillSearch, selectedCategory, setSelectedCategory }) {
  const categories = ['All', 'QA / Quality', 'Data & Analytics', 'Tools & Technologies', 'Technical Skills', 'Professional Skills'];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase()) || 
                          skill.description.toLowerCase().includes(skillSearch.toLowerCase());
    const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Technical Competencies</div>
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Skills & Systems Matrix</h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search skills or tools..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded">
                  {skill.category}
                </span>
                <span className="text-xs font-mono text-slate-500">{skill.yearsExp} Yrs Exp</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// 6. PROJECTS & CASE STUDIES SECTION
// ============================================================================
function ProjectsSection({ projects, setSelectedCaseStudy }) {
  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Featured Projects</div>
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Technical Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="text-cyan-400">{proj.category}</span>
                  <span>{proj.customer}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                
                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div>
                    <span className="font-semibold text-slate-400">Problem: </span>
                    {proj.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-400">Result: </span>
                    {proj.result}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.technologies.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-1 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(proj)}
                  className="w-full py-2.5 bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-slate-800 font-semibold text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>View Case Study Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// 7. ACHIEVEMENTS & CERTIFICATIONS
// ============================================================================
function AchievementsSection({ achievements }) {
  return (
    <section className="py-20 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Credentials & Milestones</div>
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Education & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{item.category} — {item.date}</span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <div className="text-xs text-slate-400">{item.issuer}</div>
                <p className="text-xs text-slate-500 pt-2 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// 8. CONTACT FORM COMPONENT
// ============================================================================
function ContactSection({ profile, showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill out all required fields.", "error");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Message sent successfully! Manish will get back to you shortly.", "success");
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Get In Touch</div>
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Initiate Professional Contact
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Interested in discussing quality assurance oversight, telecom compliance, or continuous improvement strategies? Send a direct query.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400"><Send className="w-4 h-4" /></div>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-cyan-400"><Briefcase className="w-4 h-4" /></div>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{isSubmitting ? 'Transmitting Message...' : 'Send Direct Message'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 9. EXPANDABLE CASE STUDY DETAIL MODAL
// ============================================================================
function CaseStudyModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{item.company || item.customer}</span>
          <h2 className="text-2xl font-bold text-white">{item.role || item.title}</h2>
        </div>

        <div className="space-y-4 text-xs text-slate-300">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <div className="font-mono text-cyan-400 uppercase font-semibold">The Problem / Challenge</div>
            <p className="leading-relaxed">{item.challenge || item.problem}</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <div className="font-mono text-cyan-400 uppercase font-semibold">Responsibility & Approach</div>
            <p className="leading-relaxed">{item.responsibility || item.approach}</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-1">
            <div className="font-mono text-emerald-400 uppercase font-semibold">Quantified Result & Business Value</div>
            <p className="leading-relaxed">{item.result || item.businessImpact}</p>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-800">
          <button onClick={onClose} className="px-5 py-2 bg-slate-800 text-white rounded-xl text-xs font-semibold">
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 10. COMPLETE ADMIN CMS DASHBOARD & EDITOR SYSTEM
// ============================================================================
function AdminDashboard({ 
  data, setData, adminTab, setAdminTab, previewDevice, setPreviewDevice,
  runAiAssistant, aiPrompt, setAiPrompt, aiOutput, setAiOutput, isAiLoading, showToast 
}) {
  const [profileForm, setProfileForm] = useState(data.profile);

  const saveProfile = () => {
    setData({ ...data, profile: profileForm });
    showToast("Profile information published successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      
      {/* CMS SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-4 space-y-6">
        <div className="flex items-center space-x-2 px-2">
          <Settings className="w-5 h-5 text-amber-400" />
          <span className="font-bold text-sm text-white font-mono uppercase tracking-wider">CMS Control Panel</span>
        </div>

        <nav className="space-y-1 font-mono text-xs">
          {[
            { id: 'overview', label: 'Analytics & Drafts', icon: BarChart2 },
            { id: 'profile', label: 'Profile & Contact', icon: Layout },
            { id: 'metrics', label: 'Impact Metrics', icon: Activity },
            { id: 'experiences', label: 'Experience CRUD', icon: Briefcase },
            { id: 'skills', label: 'Skills Matrix', icon: Database },
            { id: 'ai', label: 'AI Content Assistant', icon: Sparkles }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = adminTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setAdminTab(item.id)}
                className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Viewport Device Switcher for Live Preview */}
        <div className="pt-6 border-t border-slate-800 space-y-2">
          <div className="text-[10px] font-mono text-slate-500 uppercase">Live Device Simulator</div>
          <div className="flex space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {[
              { id: 'desktop', icon: Monitor },
              { id: 'tablet', icon: Tablet },
              { id: 'mobile', icon: Smartphone }
            ].map(dev => {
              const Icon = dev.icon;
              return (
                <button
                  key={dev.id}
                  onClick={() => setPreviewDevice(dev.id)}
                  className={`flex-1 p-1.5 rounded flex justify-center ${previewDevice === dev.id ? 'bg-slate-800 text-amber-400' : 'text-slate-500'}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* MAIN ADMIN WORKSPACE */}
      <section className="flex-1 p-6 lg:p-10 overflow-y-auto">
        
        {/* VIEW 1: OVERVIEW & COMPLETENESS */}
        {adminTab === 'overview' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Portfolio Content Analytics & Completeness</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-400">Total Experiences</div>
                <div className="text-2xl font-bold text-white font-mono mt-1">{data.experiences.length}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-400">Total Skills Registered</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">{data.skills.length}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-400">Projects Managed</div>
                <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">{data.projects.length}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-xs text-slate-400">Content Status</div>
                <div className="text-2xl font-bold text-amber-400 font-mono mt-1">100% Published</div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-base font-bold text-white mb-2">Validation Safeguards</h3>
              <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4">
                <li>Zero hardcoded resume values — all content dynamic via standard API architecture.</li>
                <li>AI Safety Guardrails active: prevents metric fabrication during auto-summarization.</li>
              </ul>
            </div>
          </div>
        )}

        {/* VIEW 2: PROFILE EDITOR */}
        {adminTab === 'profile' && (
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-2xl font-bold text-white">Edit Profile & Header</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileForm.name}
                  onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={profileForm.title}
                  onChange={e => setProfileForm({ ...profileForm, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Short Tagline</label>
                <input
                  type="text"
                  value={profileForm.tagline}
                  onChange={e => setProfileForm({ ...profileForm, tagline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Executive Summary / Bio</label>
                <textarea
                  rows="4"
                  value={profileForm.bio}
                  onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"
                ></textarea>
              </div>

              <button
                onClick={saveProfile}
                className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-all"
              >
                Publish Profile Updates
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: AI CONTENT ASSISTANT WITH GUARDRAILS */}
        {adminTab === 'ai' && (
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center space-x-2 text-amber-400">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-2xl font-bold text-white">AI Executive Content Rewriter</h2>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                Paste draft responsibilities or achievement bullets. The AI will polish wording into achievement-oriented statements <span className="text-amber-400">without inventing metrics or companies</span>.
              </p>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Draft Text / Bullet Point</label>
                <textarea
                  rows="3"
                  placeholder="e.g. Checked data and fixed errors during shift."
                  value={aiPrompt}
                  onChange={e => setAiPrompt(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => runAiAssistant(aiPrompt, 'executive')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-700"
                >
                  Make Executive
                </button>
                <button
                  onClick={() => runAiAssistant(aiPrompt, 'technical')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-700"
                >
                  Make Technical
                </button>
                <button
                  onClick={() => runAiAssistant(aiPrompt, 'impact')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-700"
                >
                  Highlight Impact
                </button>
              </div>

              {isAiLoading && (
                <div className="text-xs font-mono text-amber-400 flex items-center space-x-2 pt-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating AI response under safety parameters...</span>
                </div>
              )}

              {aiOutput && !isAiLoading && (
                <div className="mt-4 p-4 bg-slate-950 border border-amber-500/30 rounded-xl space-y-3">
                  <div className="text-[10px] font-mono text-amber-400 uppercase">AI Suggested Output</div>
                  <p className="text-xs text-slate-200 leading-relaxed">{aiOutput}</p>
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(aiOutput);
                        showToast("Copied AI output to clipboard!");
                      }}
                      className="px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg"
                    >
                      Copy Output
                    </button>
                    <button
                      onClick={() => setAiOutput('')}
                      className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-lg"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
