/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="wiseman-footer" className="bg-mars-black text-slate-300 border-t border-mars-border relative z-10">
      
      {/* Top Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          
          {/* Col 1: Brand Pitch & Security Accreditation */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => onScrollToSection('hero')}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              <div>
                <span className="block font-sans font-semibold text-lg text-white leading-none tracking-tight">
                  WISEMAN
                </span>
                <span className="block font-mono text-[10px] text-mars-gold tracking-widest uppercase mt-0.5 font-bold">
                  IT SERVICES
                </span>
              </div>
            </button>

            <p className="font-sans text-sm text-slate-400 max-w-sm leading-relaxed">
              Enterprise-grade cyber architecture, managed SIEM solutions, and continuous posture auditing. Over 20 years of expert defense against sophisticated ransomware vectors.
            </p>

            {/* Accreditation Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-mono text-[10px] text-slate-500 uppercase font-bold pr-2">
                Framework Credentials:
              </span>
              <div className="flex gap-2">
                {['NIST', 'CIS', 'ISO27001', 'NCSC'].map((badge) => (
                  <span
                    key={badge}
                    className="bg-mars-dark border border-mars-border text-slate-400 px-2 py-0.5 rounded text-[10px] font-mono font-bold hover:text-white transition duration-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Col 2: Interactive Section Anchors */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-widest">
              Core Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {[
                { label: 'Security Overview', id: 'hero' },
                { label: 'Managed IT Solutions', id: 'services' },
                { label: 'Posture Assessment Tool', id: 'audit' },
                { label: 'Cyber Threat Intel Blog', id: 'blog' },
                { label: 'Book Consultations', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollToSection(link.id)}
                    className="text-slate-400 hover:text-mars-gold transition cursor-pointer text-left font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Secure Vectors Detail box */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-widest">
              Secure Endpoint Vectors
            </h4>
            <div className="bg-mars-card border border-mars-border p-5 rounded-2xl space-y-4">
              <p className="font-sans text-xs text-slate-400 leading-normal font-semibold">
                Need immediate response to an active threat vector or system configuration drift? Engage our SOC engineers directly on our secure lines.
              </p>
              <div className="space-y-2 text-xs font-mono font-bold">
                <a
                  href="mailto:contact@wisemanit.co.uk"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition"
                >
                  <Mail className="w-3.5 h-3.5 text-mars-red" />
                  contact@wisemanit.co.uk
                </a>
                <a
                  href="tel:07793113123"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition"
                >
                  <Phone className="w-3.5 h-3.5 text-mars-red" />
                  07793 113123
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and disclosures */}
        <div className="pt-12 mt-12 border-t border-mars-border flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-semibold">© {currentYear} Wiseman IT Services. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1 font-semibold text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-mars-gold" />
              Secured under British Cyber Security & NCSC Standard Guidelines
            </span>
          </div>

          <div className="flex gap-6 font-semibold">
            <span className="cursor-not-allowed hover:text-slate-300 transition">Data Policy</span>
            <span className="cursor-not-allowed hover:text-slate-300 transition">ISO Ledger</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
