import { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../data';
import { ShieldCheck, ShieldAlert, RefreshCw, AlertTriangle, ArrowRight, Play, CheckCircle } from 'lucide-react';

interface AuditToolProps {
  onPreFillBooking: (riskScore: number, preFillMessage: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function AuditTool({ onPreFillBooking, onScrollToSection }: AuditToolProps) {
  const [started, setStarted] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const startQuiz = () => {
    setStarted(true);
    setCurrIndex(0);
    setSelectedAnswers([]);
    setCompleted(false);
  };

  const selectAnswer = (optionScore: number) => {
    const updated = [...selectedAnswers];
    updated[currIndex] = optionScore;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrIndex(currIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  // Compute stats
  const totalScore = selectedAnswers.reduce((sum, score) => sum + score, 0);
  // Max score is 5 questions * 5 points each = 25
  const normalizedScore = Math.round((totalScore / 25) * 100);

  let statusTitle = '';
  let statusColor = '';
  let statusBg = '';
  let statusDesc = '';

  if (normalizedScore <= 45) {
    statusTitle = 'CRITICAL EXPOSURE (Severe Breach Risk)';
    statusColor = 'text-mars-red border-mars-red/30 bg-mars-red/10';
    statusBg = 'bg-mars-red';
    statusDesc = 'Your infrastructure contains immediate, systemic vulnerability windows frequently exploited by active ransomware networks. Instant technical remediation is highly recommended.';
  } else if (normalizedScore <= 75) {
    statusTitle = 'MODERATE EXPOSURE (Operational Drift)';
    statusColor = 'text-amber-500 border-amber-500/30 bg-amber-500/10';
    statusBg = 'bg-amber-500';
    statusDesc = 'Your system defenses are decent, but vulnerability scanning intervals, missing automated cloud guardrails, or partial backups present open exposure surface areas.';
  } else {
    statusTitle = 'OPTIMAL POSTURE (Resilient Framework)';
    statusColor = 'text-mars-gold border-mars-gold/30 bg-mars-gold/10';
    statusBg = 'bg-mars-gold';
    statusDesc = 'Excellent job. Your organization has established robust, multi-layered security controls aligned with elite industry frameworks. Monitor closely for modern configuration drift.';
  }

  // Pre-fill content trigger
  const triggerConsultation = () => {
    const customMemo = `Completed Wiseman Posture assessment. Posture Grade: ${normalizedScore}%. System Risk Status: ${statusTitle}. Pre-filing consultation request for a free CIS Controls-based cyber security maturity assessment.`;
    onPreFillBooking(normalizedScore, customMemo);
    onScrollToSection('contact');
  };

  const currentQuestion = ASSESSMENT_QUESTIONS[currIndex];
  const hasSelected = selectedAnswers[currIndex] !== undefined;

  return (
    <section id="audit" className="py-24 bg-mars-black border-y border-mars-border text-slate-100 relative">
      <div className="absolute inset-0 bg-radial-gradient from-mars-red/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header elements */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest block font-bold">
            Interactive Security Governance
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white animate-fade-in">
            Security Posture Grader
          </h2>
          <p className="font-sans text-sm text-slate-400 font-semibold leading-relaxed">
            Assess your organization’s immediate vulnerability exposure in 60 seconds. Receive a personalized threat report and diagnostic security blueprint instantly.
          </p>
        </div>

        {/* Dynamic State Layout Container */}
        <div className="bg-mars-card/90 border border-mars-border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between backdrop-blur-md">
          
          {/* STATE 1: Intro Screen */}
          {!started && !completed && (
            <div id="survey-intro" className="flex flex-col items-center justify-center text-center py-10 space-y-8">
              <div className="bg-mars-red/10 border border-mars-red/30 w-16 h-16 rounded-full flex items-center justify-center text-mars-red relative shadow-lg">
                <ShieldAlert className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-3 max-w-lg">
                <h3 className="font-sans text-xl font-bold text-white">Calculate Your System Exposure Score</h3>
                <p className="font-sans text-sm text-slate-350 font-semibold leading-normal">
                  Five targeted architecture evaluations mapped specifically to CIS standards, cloud compliance governance, and reactive vector isolation profiles.
                </p>
              </div>

              <button
                id="audit-start-btn"
                onClick={startQuiz}
                className="group flex items-center gap-3 bg-mars-red hover:bg-mars-red-hover text-white font-sans font-black py-3.5 px-8 rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-mars-red/20 border border-mars-red"
              >
                Start Free System Assessment
                <Play className="w-4 h-4 fill-white text-white" />
              </button>

              <div className="flex flex-wrap justify-center items-center gap-5 pt-2 font-mono text-[11px] text-slate-400 font-bold">
                <span className="flex items-center gap-1.5 bg-mars-dark/60 border border-mars-border px-3 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-mars-gold" />
                  100% Anonymous
                </span>
                <span className="flex items-center gap-1.5 bg-mars-dark/60 border border-mars-border px-3 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-mars-gold" />
                  Takes 1 Minute
                </span>
                <span className="flex items-center gap-1.5 bg-mars-dark/60 border border-mars-border px-3 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-mars-gold" />
                  Instant Ledger
                </span>
              </div>
            </div>
          )}

          {/* STATE 2: Active Quiz Screen */}
          {started && !completed && (
            <div id="survey-active-questions" className="space-y-6">
              
              {/* Question Header & Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="uppercase text-mars-gold tracking-wider font-extrabold">
                    Category: {currentQuestion.category}
                  </span>
                  <span className="font-bold">
                    Question {currIndex + 1} of {ASSESSMENT_QUESTIONS.length}
                  </span>
                </div>
                <div className="w-full bg-mars-black border border-mars-border/30 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-mars-red to-mars-gold h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-sans text-lg sm:text-xl font-bold leading-snug text-white text-left">
                {currentQuestion.text}
              </h3>

              {/* Options Stack */}
              <div id="survey-options" className="space-y-3.5 pt-2">
                {currentQuestion.options.map((opt, oIdx) => {
                  const isSelected = selectedAnswers[currIndex] === opt.score;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => selectAnswer(opt.score)}
                      className={`w-full text-left font-sans text-sm p-4 sm:p-5 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between relative ${
                        isSelected
                          ? 'bg-mars-red/10 border-mars-red text-mars-gold shadow-md shadow-mars-red/15'
                          : 'bg-mars-dark/65 border-mars-border text-slate-200 hover:bg-mars-dark hover:border-mars-red/40'
                      }`}
                    >
                      <span className="pr-4 font-bold text-left">{opt.text}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-mars-red bg-mars-red text-white' : 'border-mars-border bg-mars-black'
                      }`}>
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action and Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-mars-border">
                <button
                  id="survey-prev-btn"
                  onClick={handlePrev}
                  disabled={currIndex === 0}
                  className={`font-sans text-sm font-semibold py-2.5 px-5 rounded-lg border transition ${
                    currIndex === 0
                      ? 'border-mars-border/40 text-slate-600 cursor-not-allowed'
                      : 'border-mars-border text-slate-400 hover:border-mars-red/40 hover:text-white cursor-pointer'
                  }`}
                >
                  Back
                </button>

                <button
                  id="survey-next-btn"
                  onClick={handleNext}
                  disabled={!hasSelected}
                  className={`group flex items-center gap-2 font-sans text-sm font-black py-2.5 px-6 rounded-lg transition ${
                    hasSelected
                      ? 'bg-mars-red hover:bg-mars-red-hover text-white cursor-pointer shadow-md shadow-mars-red/10'
                      : 'bg-mars-dark text-slate-500 border border-mars-border cursor-not-allowed'
                  }`}
                >
                  {currIndex === ASSESSMENT_QUESTIONS.length - 1 ? 'Finish Assessment' : 'Next Question'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* STATE 3: Completion and Report PDF Simulation */}
          {completed && (
            <div id="survey-result-ledger" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-6 border-b border-mars-border">
                
                {/* Score Chart Circle */}
                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* SVG Progress Circle Background */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        className="stroke-mars-dark"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        className="stroke-mars-red"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * normalizedScore) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="font-sans text-3xl font-extrabold text-white">{normalizedScore}%</span>
                      <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 font-bold">Posture Grade</span>
                    </div>
                  </div>
                </div>

                {/* Status Assessment & Analysis Text */}
                <div className="md:col-span-8 space-y-3 text-left">
                  <div className={`inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-mono font-bold ${statusColor}`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                    STATUS: {statusTitle}
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">Your Security Assessment Scorecard</h3>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-semibold">
                    {statusDesc}
                  </p>
                </div>
              </div>

              {/* Detailed Recommendations Checklist */}
              <div className="text-left space-y-4">
                <h4 className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest">
                  Personalized Defensive Blueprints Needed:
                </h4>
                <div id="posture-recommendations" className="space-y-3">
                  {ASSESSMENT_QUESTIONS.map((q, idx) => {
                    // Match standard choices to provide live assessment feedback
                    const selectedScore = selectedAnswers[idx];
                    const selectedOption = q.options.find((o) => o.score === selectedScore);
                    const isHighRisk = selectedScore !== undefined && selectedScore <= 2;
                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-xl border flex gap-3 text-sm leading-relaxed ${
                          isHighRisk
                            ? 'bg-mars-red/10 border-mars-red/30 text-slate-300'
                            : 'bg-mars-dark/70 border-mars-border text-slate-300'
                        }`}
                      >
                        <div className={`mt-0.5 shrink-0 ${isHighRisk ? 'text-mars-red' : 'text-mars-gold'}`}>
                          {isHighRisk ? <AlertTriangle className="w-4 h-4 text-mars-red" /> : <ShieldCheck className="w-4 h-4 text-mars-gold" />}
                        </div>
                        <div className="space-y-1">
                          <span className="block font-sans font-bold text-white text-xs">{q.category} Assessment</span>
                          <span className="block text-xs text-slate-400 font-medium">{selectedOption?.recommendation}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Conversion Box Call to Action */}
              <div className="bg-gradient-to-br from-mars-dark to-mars-card border border-mars-border rounded-xl p-5 sm:p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 pt-5 shadow-xl">
                <div className="space-y-1.5 mb-4 sm:mb-0">
                  <span className="font-mono text-[10px] text-mars-gold font-bold uppercase tracking-widest block font-bold">Immediate Engagement Incentive</span>
                  <h4 className="font-sans text-base font-bold text-white leading-tight">Let's schedule your 15-minute audit today and secure your systems instantly.</h4>
                  <p className="font-sans text-xs text-slate-450 font-semibold">Coordinate directly with a principal security consultant to review configurations, remediate vulnerabilities, and get a solid ROI breakdown.</p>
                </div>
                <button
                  id="result-cta-schedule"
                  onClick={triggerConsultation}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-gradient-to-r from-mars-red to-orange-600 hover:from-mars-red/90 hover:to-orange-500 text-white font-sans text-sm font-bold py-3.5 px-6 rounded-lg transition duration-200 border border-mars-red/30 shadow-md shadow-mars-red/25 cursor-pointer hover:scale-102"
                >
                  Book Free Audit
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Retry Assessment */}
              <div className="text-center pt-2">
                <button
                  onClick={startQuiz}
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-slate-500 hover:text-white transition cursor-pointer font-bold"
                >
                  <RefreshCw className="w-3 h-3" />
                  Re-evaluate Posture Matrix
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
