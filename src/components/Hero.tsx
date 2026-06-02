/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, ShieldAlert, Award, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onStartAssessment: () => void;
}

export default function Hero({ onScrollToSection, onStartAssessment }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-mars-black text-slate-100"
    >
      {/* Decorative Professional Grid Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#1f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80 pointer-events-none" />

      {/* Radiant Soft Crimson & Gold Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mars-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-mars-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust Pill Emblem */}
            <div className="inline-flex items-center gap-2 bg-mars-red/10 border border-mars-red/30 px-3.5 py-1.5 rounded-full text-mars-gold font-mono text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mars-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mars-red"></span>
              </span>
              Enterprise cybersecurity in motion
            </div>

            {/* Giant Display Heading */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl">
              Secure Your Enterprise. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mars-red via-amber-500 to-mars-gold">
                Eliminate Vulnerabilities.
              </span>
            </h1>

            {/* Value Proposition Subtext */}
            <p className="font-sans text-base sm:text-lg text-slate-350 max-w-xl leading-relaxed">
              Wiseman IT Services delivers world-class managed threat detection, multi-cloud hardening, and automated patch orchestration. Built on 20+ years of frontline security defense to safeguard your key business assets.
            </p>

            {/* Compelling 15-Min Free Audit Callout Key Conversion Box */}
            <div className="bg-gradient-to-br from-mars-card to-mars-dark/80 border border-mars-border rounded-2xl p-6 shadow-2xl max-w-xl text-left space-y-3 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mars-red/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2">
                <span className="bg-mars-red text-white text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Limited-Time Offer
                </span>
                <span className="font-mono text-xs text-mars-gold font-bold">Free CIS Controls Maturity Assessment</span>
              </div>
              <p className="font-sans text-sm text-slate-350 leading-relaxed font-semibold">
                Critical systems exposure can cause irreparable financial and reputation loss in minutes. <strong className="text-mars-gold font-bold">Let's schedule your 15-minute audit today and secure your systems instantly.</strong> Our principal security architect will trace your threat vectors and map a CIS Controls-based maturity roadmap.
              </p>
            </div>

            {/* Security Compliance Alignment Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block font-bold">Aligned to:</span>
              <div className="flex flex-wrap gap-2.5">
                {['NIST 800-53', 'CIS Benchmarks', 'ISO 27001', 'NCSC UK'].map((std) => (
                  <span
                    key={std}
                    className="bg-mars-dark border border-mars-border text-slate-300 px-2.5 py-1 rounded text-xs font-mono font-bold shadow-md"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Multi-Choice Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-primary-cta"
                onClick={() => onScrollToSection('contact')}
                className="group flex items-center justify-center gap-3 bg-mars-red hover:bg-mars-red-hover text-white font-sans font-black py-4 px-7 rounded-xl transition-all duration-300 shadow-xl shadow-mars-red/20 border border-mars-red hover:scale-102 cursor-pointer text-base"
              >
                Schedule Free 15-Min Audit
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onStartAssessment}
                className="group flex items-center justify-center gap-3 bg-mars-dark hover:bg-mars-card text-slate-200 hover:text-mars-gold font-sans font-bold py-4 px-7 rounded-xl transition-all duration-200 border border-mars-border hover:border-mars-red/50 cursor-pointer text-base shadow-lg"
              >
                <Activity className="w-5 h-5 text-mars-red group-hover:animate-pulse" />
                Run Posture Grader Tool
              </button>
            </div>

            {/* ROI Incentive Note */}
            <p className="font-mono text-xs text-slate-400 italic flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-mars-red" />
              Incentive: Receive an instant Security Posture Ledger & secure your configurations instantly.
            </p>
          </div>

          {/* Hero Right Visual Column (Interactive Cyber Dashboard Preview) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-mars-card/90 border border-mars-border rounded-2xl p-6 shadow-2xl backdrop-blur-md">
              
              {/* Terminal Window Header chrome */}
              <div className="flex items-center justify-between border-b border-mars-border pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-mars-red block" />
                  <span className="w-3 h-3 rounded-full bg-mars-gold block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                  <span className="font-mono text-xs text-slate-400 ml-2">wiseman-soc-node-01.sh</span>
                </div>
                <span className="font-mono text-[10px] text-mars-gold bg-mars-red/10 border border-mars-red/20 px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider">
                  ACTIVE SCAN
                </span>
              </div>

              {/* Simulated Operational Metrics Grid */}
              <div className="space-y-4">
                <div className="bg-mars-dark/80 border border-mars-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-xs text-slate-450 font-semibold text-slate-400">Threat Ingestion Rate</span>
                    <span className="font-mono text-xs font-bold text-mars-gold">99.4% filter</span>
                  </div>
                  <div className="w-full bg-mars-black rounded-full h-1.5 overflow-hidden">
                    <div className="bg-mars-red h-1.5 rounded-full" style={{ width: '99%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-mars-dark/50 border border-mars-border rounded-lg p-3 text-center">
                    <span className="block font-mono text-[10px] text-slate-500 uppercase font-bold">Detection Mean-Time</span>
                    <span className="font-sans text-lg font-extrabold text-slate-200">&lt; 12 mins</span>
                  </div>
                  <div className="bg-mars-dark/50 border border-mars-border rounded-lg p-3 text-center">
                    <span className="block font-mono text-[10px] text-slate-500 uppercase font-bold">Surface Hardening</span>
                    <span className="font-sans text-lg font-extrabold text-mars-gold">-92% Exploits</span>
                  </div>
                </div>

                {/* Live Terminal Log Stream Mock (Strategic Contrast element) */}
                <div className="bg-black/80 rounded-xl p-3.5 border border-mars-border font-mono text-[11px] text-slate-300 space-y-2 h-[120px] overflow-y-hidden select-none">
                  <p className="text-slate-500">
                    <span className="text-mars-red">[02.19:14]</span> Enterprise SIEM telemetry pipe established.
                  </p>
                  <p className="text-slate-300">
                    <span className="text-mars-red">[02.19:15]</span> Audit scan active on AWS/Azure tenant boundaries.
                  </p>
                  <p className="text-mars-gold font-bold">
                    <span className="text-mars-red">[02.19:15]</span> [ALERT] Insecure API endpoint (v1/auth) detected.
                  </p>
                  <p className="text-mars-gold animate-pulse font-bold">
                    <span className="text-mars-red">[02.19:15]</span> Remediated. Root access isolates enabled.
                  </p>
                </div>
              </div>

              {/* Floating Shield Decorative Badge */}
              <div className="absolute -bottom-5 -right-5 bg-mars-dark border border-mars-border rounded-xl p-3 shadow-2xl flex items-center gap-3 shadow-black/80">
                <div className="bg-mars-red/10 p-2 rounded-lg text-mars-gold border border-mars-red/20">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-mono text-slate-100 font-bold uppercase leading-none">CISO Certified</span>
                  <span className="block text-[10px] text-slate-450 mt-1 leading-none font-semibold text-slate-400">Security Architecture</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
