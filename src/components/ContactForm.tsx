/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { BookingSubmission } from '../types';
import { Calendar, Clock, Sparkles, Send, ShieldAlert, CheckCircle, Mail, Phone, MapPin, Info } from 'lucide-react';

interface ContactFormProps {
  preFillScore?: number | null;
  preFillMsg?: string;
  onClearPreFill: () => void;
}

export default function ContactForm({ preFillScore, preFillMsg, onClearPreFill }: ContactFormProps) {
  // Form state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('mdr-siem');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  
  // App states
  const [submitted, setSubmitted] = useState(false);
  const [bookedSessions, setBookedSessions] = useState<BookingSubmission[]>([]);
  const [errorWord, setErrorWord] = useState('');

  // Handle prefilled triggers
  useEffect(() => {
    if (preFillMsg) {
      setMessage(preFillMsg);
    }
  }, [preFillMsg]);

  // Load existing ledger items from local storage to prove persistence
  useEffect(() => {
    const raw = localStorage.getItem('wiseman_audit_bookings');
    if (raw) {
      try {
        setBookedSessions(JSON.parse(raw));
      } catch (err) {
        console.error('Error parsing historical corporate audit bookings.', err);
      }
    }
  }, []);

  // Quick validations
  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorWord('');

    if (!companyName.trim() || !contactName.trim() || !email.trim() || !phone.trim() || !date || !time) {
      setErrorWord('Ensure all core company and contact details are set before booking.');
      return;
    }

    const payload: BookingSubmission = {
      companyName,
      contactName,
      email,
      phone,
      serviceInterest: service,
      preferredDate: date,
      preferredTime: time,
      message,
      riskScore: preFillScore || undefined
    };

    const updated = [payload, ...bookedSessions];
    setBookedSessions(updated);
    localStorage.setItem('wiseman_audit_bookings', JSON.stringify(updated));
    setSubmitted(true);
  };

  const getServiceLabel = (srv: string) => {
    switch (srv) {
      case 'mdr-siem': return 'Managed Threat Detection (MDR)';
      case 'cloud-security': return 'Cloud Posture Assessments (CSPM)';
      case 'vuln-remediation': return 'Proactive Vulnerability Remediation';
      default: return 'General IT & Security Architecture';
    }
  };

  const resetForm = () => {
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setService('mdr-siem');
    setDate('');
    setTime('');
    setMessage('');
    setSubmitted(false);
    onClearPreFill();
  };

  return (
    <section id="contact" className="py-24 bg-mars-black text-slate-100 relative border-b border-mars-border">
      <div className="absolute inset-0 bg-radial-gradient from-mars-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest block font-bold">
            Accelerated Shield Response
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Let's schedule your 15-minute audit today and secure your systems instantly.
          </h2>
          <p className="font-sans text-sm text-slate-400 font-semibold leading-relaxed">
            Gain immediate defensive oversight. Wiseman IT traces configuration drift, details active endpoints vulnerabilities, and provisions an automated ROI security timeline.
          </p>
        </div>

        {/* Double Column Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMN 1: Company Credentials & Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-mars-card border border-mars-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <h3 className="font-sans text-lg font-bold text-white">Wiseman IT Headquarters</h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed font-semibold">
                Connect directly with our principal cyber security architects and our SOC leads. Together, we analyze endpoint behaviors, cloud posture, and secure configurations.
              </p>

              {/* Specs Rows */}
              <div className="space-y-4 font-sans text-sm">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mars-dark border border-mars-border flex items-center justify-center text-mars-red">
                    <Mail className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 font-extrabold uppercase">Secure Inboxes</span>
                    <a href="mailto:contact@wisemanit.co.uk" className="text-slate-200 hover:text-mars-gold font-bold transition">
                      contact@wisemanit.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mars-dark border border-mars-border flex items-center justify-center text-mars-red">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 font-extrabold uppercase">Direct Secure Hotlines</span>
                    <a href="tel:07793113123" className="text-slate-200 hover:text-mars-gold font-bold transition tracking-wide">
                      07793 113123
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mars-dark border border-mars-border flex items-center justify-center text-mars-red">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 font-extrabold uppercase">Principal UK Presence</span>
                    <p className="font-bold text-slate-200 leading-relaxed">
                      44 Fairefield Crescent, Leicester, UK
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Regulatory Alignment Badges */}
              <div className="pt-6 border-t border-mars-border">
                <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-extrabold">
                  Secured & Audited Assets Include:
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-mono font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse" />
                    Enterprise SIEM & SOAR
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse" />
                    Vulnerability Engine & WAS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse" />
                    Threat Exposure Scanning
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-mars-red animate-pulse" />
                    Multi-Cloud CSPM Compliance
                  </div>
                </div>
              </div>

            </div>

            {/* Historical Booking Ledger logs for visual audit trails */}
            {bookedSessions.length > 0 && (
              <div id="historical-audit-ledger" className="bg-mars-card border border-mars-border rounded-2xl p-6 space-y-4 shadow-xl">
                <h4 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center justify-between font-bold">
                  <span>Your Confirmed Audits</span>
                  <span className="bg-mars-red/10 text-mars-gold border border-mars-red/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                    {bookedSessions.length} Active
                  </span>
                </h4>
                <div className="space-y-3 max-h-[180px] overflow-y-auto font-sans">
                  {bookedSessions.map((book, idx) => (
                    <div key={idx} className="bg-mars-dark border border-mars-border p-3 rounded-xl flex items-start justify-between text-xs">
                      <div className="space-y-1 text-left">
                        <span className="block font-black text-slate-200 uppercase tracking-tight">{book.companyName}</span>
                        <p className="text-slate-400 text-[11px] leading-tight font-medium">
                          {getServiceLabel(book.serviceInterest)}
                        </p>
                        <span className="block text-mars-gold text-[10px] font-mono mt-1 font-bold">
                          {book.preferredDate} at {book.preferredTime}
                        </span>
                      </div>
                      {book.riskScore !== undefined && (
                        <span className="bg-mars-red/10 text-mars-gold text-[10px] font-mono px-2 py-0.5 rounded border border-mars-red/20 font-bold leading-none self-center">
                          Risk Grade: {book.riskScore}%
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* COLUMN 2: Booking Form Column */}
          <div className="lg:col-span-7">
            
            {/* SUCCESS MODAL / WINDOW STATE */}
            {submitted ? (
              <div id="consult-success-card" className="bg-mars-card border border-mars-border rounded-2xl p-8 text-left space-y-6 animate-fade-in py-12 shadow-2xl text-slate-100">
                <div className="w-16 h-16 bg-mars-dark text-mars-red rounded-full flex items-center justify-center mx-auto border border-mars-border shadow-sm animate-pulse">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <div className="space-y-2 max-w-md mx-auto text-center">
                  <span className="font-mono text-xs text-mars-gold uppercase font-bold">Diagnostic secure queue updated</span>
                  <h3 className="font-sans text-2xl font-extrabold text-white">Audit Session Confirmed</h3>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-semibold">
                    Wiseman’s principal Cyber Security Consultant is preloaded with your request parameters for **{companyName}**. Your secure consultation invite key has been compiled.
                  </p>
                </div>

                {/* Confirmed Details Block */}
                <div className="bg-mars-dark border border-mars-border p-5 rounded-2xl max-w-sm mx-auto text-left font-sans text-sm space-y-3 shadow-none text-slate-200">
                  <div className="flex justify-between border-b border-mars-border pb-2">
                    <span className="text-slate-400 font-mono text-[10px] uppercase font-bold">Service Targeted</span>
                    <span className="text-slate-100 font-bold text-xs">{getServiceLabel(service)}</span>
                  </div>
                  <div className="flex justify-between border-b border-mars-border pb-2">
                    <span className="text-slate-400 font-mono text-[10px] uppercase font-bold">Assigned Date</span>
                    <span className="text-mars-gold font-bold text-xs">{date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono text-[10px] uppercase font-bold">Assigned Time</span>
                    <span className="text-mars-gold font-bold text-xs">{time} (GMT/London)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={resetForm}
                    className="bg-mars-black hover:bg-mars-dark border border-mars-border text-slate-300 hover:text-white px-6 py-3 rounded-xl font-sans text-sm cursor-pointer font-bold shadow-sm transition"
                  >
                    Schedule Another Team Audit
                  </button>
                  <a
                    href="mailto:contact@wisemanit.co.uk"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-mars-red to-orange-600 text-white font-sans font-bold px-6 py-3 rounded-xl text-sm hover:from-mars-red/90 hover:to-orange-500 shadow-md shadow-mars-red/20 cursor-pointer transition border border-mars-red/30"
                  >
                    <Mail className="w-4 h-4" />
                    Open Support Inbox
                  </a>
                </div>
              </div>
            ) : (
              /* ACTIVE FORM INPUT STACK */
              <form id="contact-booking-form" onSubmit={handleBookingSubmit} className="bg-mars-card border border-mars-border rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl text-left text-slate-200">
                
                {/* Active Pre-fill Score warning alert banner */}
                {preFillScore !== undefined && preFillScore !== null && (
                  <div className="bg-mars-dark border border-mars-border rounded-xl p-4 flex items-start gap-3 relative shadow-2xl animate-fade-in">
                    <div className="bg-mars-black p-2 rounded-lg text-mars-gold border border-mars-border shrink-0">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="space-y-1 pr-6">
                      <span className="block font-sans font-bold text-white text-xs">Security Posture Ledger Pre-loaded</span>
                      <p className="text-xs text-slate-350 leading-relaxed font-semibold">
                        We have prefilled your computed Exposure rating of <strong className="text-mars-gold font-black">{preFillScore}%</strong>. Your diagnostic vulnerabilities are aligned for our team's expert CIS Controls-based maturity assessment briefing.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClearPreFill}
                      className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 text-xs p-1 font-bold animate-fade-in cursor-pointer"
                      title="Clear assessment link"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {/* Form Inputs Grid schema */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Company Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Company / Organization Name
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      required
                      placeholder="e.g. Wiseman Systems Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red focus:ring-1 focus:ring-mars-red/40 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Representative Contact Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Enterprise Lead Name
                    </label>
                    <input
                      id="form-contact"
                      type="text"
                      required
                      placeholder="e.g. Alice Mitchell"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red focus:ring-1 focus:ring-mars-red/40 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Business Email Input */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Business Security Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. tech@wiseman.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red focus:ring-1 focus:ring-mars-red/40 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Secure Direct Phone */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Secure Direct Phone Number
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. 07793 113123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red focus:ring-1 focus:ring-mars-red/40 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none transition"
                    />
                  </div>

                  {/* Service Alignment Dropdown */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Select Primary Service Focus
                    </label>
                    <select
                      id="form-service-dropdown"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none transition cursor-pointer font-bold select-auto"
                    >
                      <option className="bg-mars-black text-white" value="mdr-siem">Managed Threat Detection & Response (MDR & SIEM Monitoring)</option>
                      <option className="bg-mars-black text-white" value="cloud-security">Cloud Security Assessments & CSPM Hardening</option>
                      <option className="bg-mars-black text-white" value="vuln-remediation">Proactive Vulnerability & Patch Remediation</option>
                      <option className="bg-mars-black text-white" value="other">General IT Infrastructure & Consulting Advisory</option>
                    </select>
                  </div>

                  {/* Date Picker Selector */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold flex items-center gap-1.5 pb-0.5">
                      <Calendar className="w-3.5 h-3.5 text-mars-red" />
                      Preferred Audit Date
                    </label>
                    <input
                      id="form-date"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none transition cursor-pointer font-bold invert-[0.85] hue-rotate-185"
                    />
                  </div>

                  {/* Time Picker Selector */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold flex items-center gap-1.5 pb-0.5">
                      <Clock className="w-3.5 h-3.5 text-mars-red" />
                      Preferred Time Slot (UK/GMT)
                    </label>
                    <input
                      id="form-time"
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none transition cursor-pointer font-bold invert-[0.85] hue-rotate-185"
                    />
                  </div>

                  {/* Special message context block */}
                  <div className="space-y-2 sm:col-span-2">
                    <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-extrabold pb-0.5">
                      Enterprise Environment Details (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="e.g. Please share details regarding current endpoints, Active Directory frameworks, or multi-cloud accounts..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-mars-black border border-mars-border focus:border-mars-red rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none font-medium"
                    />
                  </div>

                </div>

                {/* Error field lines */}
                {errorWord && (
                  <p className="font-mono text-xs text-mars-red bg-mars-red/5 border border-mars-red/20 p-3 rounded-lg flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-mars-red" />
                    {errorWord}
                  </p>
                )}

                {/* Corporate Incentive notice text */}
                <div className="bg-mars-dark p-4 border border-mars-border rounded-xl flex gap-3 text-xs text-slate-400 font-sans">
                  <Info className="w-4 h-4 text-mars-gold shrink-0 mt-0.5 animate-pulse" />
                  <p className="font-medium text-left">
                    <strong className="text-white font-bold">Wiseman Instant Ledger:</strong> Booking our 15-minute diagnostic session is totally free. We analyze threat-vectors on the spot and outline a CIS Controls-based cyber security maturity assessment report. No credit card or commitment required.
                  </p>
                </div>

                {/* Submit trigger button */}
                <button
                  id="form-submit-booking-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-mars-red to-orange-600 hover:from-mars-red/90 hover:to-orange-500 text-white font-sans text-xs sm:text-sm font-bold py-4 px-6 rounded-xl transition cursor-pointer shadow-lg shadow-mars-red/20 tracking-wider uppercase leading-none border border-mars-red/30"
                >
                  Confirm Auditing Slot
                  <Send className="w-4 h-4 shrink-0" />
                </button>

              </form>
            )}

          </div>

          {/* Form and ledger visual anchors */}
        </div>

      </div>
    </section>
  );
}
