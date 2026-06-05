/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { Shield, Construction } from 'lucide-react';

export default function App() {
  return (
    <div id="under-construction-root" className="min-h-screen bg-mars-black text-slate-100 flex flex-col justify-between selection:bg-mars-red/30 selection:text-mars-gold font-sans antialiased relative overflow-hidden">
      
      {/* Background cyber ambient grid lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#140909_1px,transparent_1px),linear-gradient(to_bottom,#140909_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-mars-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-mars-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header section */}
      <header className="border-b border-mars-border bg-mars-black/80 backdrop-blur-md relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-mars-dark border border-mars-border rounded-lg relative overflow-hidden">
              <Shield className="w-6 h-6 text-mars-red animate-pulse" />
              <div className="absolute inset-0 bg-mars-red/10 blur-[4px]" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg tracking-tight text-white block">
                WISEMAN <span className="text-mars-red">IT SERVICES</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">
                Core Security Gatekeeper
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live DNS domain confirmation */}
            <span className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-mars-dark/80 border border-mars-border/80 rounded-full text-[10px] font-mono font-bold text-mars-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-mars-gold animate-ping" />
              TARGET: wisemanit.co.uk
            </span>
            <span className="text-[10px] uppercase font-mono bg-mars-red text-white font-extrabold px-2.5 py-1 rounded">
              SITE UNDER DEVELOPMENT
            </span>
          </div>
        </div>
      </header>

      {/* Main Stage: Under Construction Message */}
      <main className="flex-grow flex items-center justify-center py-12 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full text-center space-y-8">
          
          {/* Deployment Indicator Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mars-dark border border-mars-border mx-auto transition-all hover:border-mars-red/50">
            <Construction className="w-4 h-4 text-mars-gold animate-bounce" />
            <span className="font-mono text-[11px] font-bold text-slate-300 tracking-wider">
              SYSTEM UPDATE: Website Build in Progress
            </span>
          </div>

          {/* Display message */}
          <div className="space-y-4">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Our Full Website Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-mars-red to-mars-gold">Launching Soon</span>
            </h1>
            <p className="font-sans text-lg sm:text-xl text-slate-350 leading-relaxed font-semibold max-w-2xl mx-auto">
              We are currently building our comprehensive defensive gateway for <strong className="text-white">Wiseman IT Services</strong>. Soon, organizations can access our elite, automated tooling and expert consulting suites online.
            </p>
          </div>

        </div>
      </main>

      {/* Accreditations and target mapping footer */}
      <footer className="border-t border-mars-border bg-mars-dark/40 relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Wiseman IT Services. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mars-red" />
              CIS Controls v8 aligned
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mars-gold" />
              Zero-Remediation Bias Policy
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
