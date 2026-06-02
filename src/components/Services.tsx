/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { WISEMAN_SERVICES } from '../data';
import { ShieldAlert, Cloud, Activity, Check, ChevronDown, ChevronUp, ArrowRight, Shield } from 'lucide-react';

interface ServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Services({ onScrollToSection }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-mars-red" />;
      case 'CloudShield':
        return <Cloud className="w-6 h-6 text-mars-red" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-mars-red" />;
      default:
        return <Shield className="w-6 h-6 text-mars-red" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-mars-dark text-slate-100 relative">
      {/* Mesh lines for deep corporate structural look */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mars-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title elements */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest block">
              Enterprise Defensive Offerings
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              A High-Trust Threat Shield
            </h2>
            <p className="font-sans text-sm text-slate-450 text-slate-400 max-w-xl font-semibold">
              We focus on the three pillars of modern systemic vulnerability mitigation. Click any core capability to audit our direct technical implementation frameworks.
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <button
              id="solutions-header-cta"
              onClick={() => onScrollToSection('contact')}
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-mars-red hover:text-mars-gold transition group cursor-pointer"
            >
              Request Custom Service Briefing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Core Services layout Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WISEMAN_SERVICES.map((serv) => {
            const isExpanded = expandedId === serv.id;
            return (
              <div
                key={serv.id}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-mars-card border-mars-red shadow-2xl shadow-black/80 col-span-1 md:col-span-3'
                    : 'bg-mars-card/50 border-mars-border hover:border-mars-red/40 hover:bg-mars-card'
                }`}
              >
                
                {/* Core Service card header/top */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Icon + Main ROI Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-mars-black border border-mars-border flex items-center justify-center">
                      {getIcon(serv.iconName)}
                    </div>
                    {/* ROI Badge */}
                    <div className="text-right">
                      <span className="block font-sans text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-mars-red via-amber-500 to-mars-gold">
                        {serv.roiMetric}
                      </span>
                      <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-wider font-extrabold">
                        Measurable ROI
                      </span>
                    </div>
                  </div>

                  {/* Service Headers */}
                  <div className="space-y-2 text-left">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-white group-hover:text-mars-gold transition-colors">
                      {serv.title}
                    </h3>
                    <p className="font-mono text-xs text-mars-red font-bold uppercase tracking-wider">
                      {serv.tagline}
                    </p>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed pt-1 font-semibold">
                      {serv.description}
                    </p>
                  </div>

                  {/* Bullet Bullet Points */}
                  <ul className="space-y-2.5 pt-2 text-left">
                    {serv.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-350 text-slate-300 font-semibold">
                        <Check className="w-4 h-4 text-mars-gold shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ROI Descriptor Text */}
                  <div className="bg-mars-black/60 border border-mars-border p-3.5 rounded-xl flex items-start gap-2.5 shadow-sm text-left">
                    <div className="bg-mars-red/10 p-1.5 rounded text-mars-gold border border-mars-red/20 shrink-0 mt-0.5">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[11px] font-mono text-slate-450 uppercase font-bold text-slate-400">ROI Guarantee</span>
                      <p className="text-[11px] text-slate-350 leading-normal font-semibold text-slate-300">{serv.roiLabel}</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Details Expand Collapse */}
                {isExpanded && (
                  <div className="bg-mars-black/80 border-t border-mars-border p-6 sm:p-8 space-y-6 animate-fade-in text-left">
                    <div className="max-w-3xl">
                      <h4 className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest mb-3">
                        Technical Execution Framework & Operational Toolsets
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-305 leading-relaxed">
                        {serv.details.map((detail, dIdx) => (
                          <div key={dIdx} className="bg-mars-dark p-4 rounded-xl border border-mars-border space-y-2">
                            <div className="flex h-5 w-5 rounded-full bg-mars-red/15 text-mars-gold text-[10px] items-center justify-center font-mono font-black border border-mars-red/30">
                              0{dIdx + 1}
                            </div>
                            <p className="text-xs text-slate-300 font-semibold">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Expansion Trigger Tab */}
                <div className="border-t border-mars-border px-6 sm:px-8 py-4 bg-mars-black/40 flex items-center justify-between">
                  <button
                    id={`service-expand-${serv.id}`}
                    onClick={() => toggleExpand(serv.id)}
                    className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    {isExpanded ? (
                      <>
                        Collapse Technical Blueprint
                        <ChevronUp className="w-4 h-4 text-mars-red" />
                      </>
                    ) : (
                      <>
                        Inspect Technical Blueprint & Architecture
                        <ChevronDown className="w-4 h-4 text-mars-red" />
                      </>
                    )}
                  </button>
                  
                  {!isExpanded && (
                    <button
                      id={`service-cta-book-${serv.id}`}
                      onClick={() => onScrollToSection('contact')}
                      className="text-xs font-mono text-mars-gold hover:text-mars-red transition flex items-center gap-1 cursor-pointer font-bold"
                    >
                      Remediate Instantly
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
