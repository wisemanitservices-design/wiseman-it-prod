/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { WISEMAN_BLOGS } from '../data';
import { BlogArticle } from '../types';
import { Search, Calendar, Clock, ArrowRight, X, User, ExternalLink, Shield } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  const categories = ['All', 'Vulnerability Management', 'Cloud Security', 'Threat Detection'];

  const filteredBlogs = WISEMAN_BLOGS.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-24 bg-mars-dark text-slate-100 relative border-b border-mars-border">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mars-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header Column */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-mars-gold uppercase tracking-widest block font-bold">
            Wiseman cyber intelligence
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white border-none">
            Defense & Threat Intel
          </h2>
          <p className="font-sans text-sm text-slate-400 font-semibold leading-relaxed">
            Frontline engineering perspectives on managed SIEM orchestration, cloud configuration hardening (CSPM), and threat-prioritized patch management.
          </p>
        </div>

        {/* Searching & Categorization filter rails */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-mars-border pb-8">
          
          {/* Categories Pill Stack */}
          <div id="blog-category-filter" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-sans text-xs font-bold px-4 py-2 rounded-full cursor-pointer transition ${
                  selectedCategory === cat
                    ? 'bg-mars-red text-white shadow-lg shadow-mars-red/20'
                    : 'bg-mars-black text-slate-400 hover:bg-mars-card hover:text-white border border-mars-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Keyword Search Input box */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="blog-search-query"
              type="text"
              placeholder="Search threat reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-mars-black border border-mars-border rounded-xl pl-10 pr-4 py-2.5 font-sans text-sm text-white placeholder-slate-500 focus:outline-none focus:border-mars-red focus:ring-1 focus:ring-mars-red transition"
            />
          </div>

        </div>

        {/* Search Results count indicator */}
        {filteredBlogs.length === 0 && (
          <div id="blog-empty-state" className="text-center py-16 space-y-3 bg-mars-black rounded-2xl border border-mars-border">
            <span className="block font-mono text-xs text-slate-500 font-bold">No telemetry logs found matching your query</span>
            <p className="text-sm font-sans text-slate-400 font-semibold">Try adjusting your filters or search keywords.</p>
          </div>
        )}

        {/* Blogs grid layout */}
        <div id="blogs-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => setActiveArticle(blog)}
              className="group bg-mars-card border border-mars-border hover:border-mars-red/45 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Meta details header line */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-mars-gold font-bold uppercase tracking-wider">{blog.category}</span>
                  <span className="flex items-center gap-1 font-bold">
                    <Clock className="w-3 h-3" />
                    {blog.readingTime}
                  </span>
                </div>

                {/* Article Name */}
                <h3 className="font-sans text-lg font-bold text-white group-hover:text-mars-gold transition-colors duration-200">
                  {blog.title}
                </h3>

                {/* Short Paragraph excerpt */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed line-clamp-3 font-semibold">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author & date footer row */}
              <div className="pt-6 border-t border-mars-border mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-8 h-8 rounded-full border border-mars-border object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block text-xs font-bold text-slate-200 leading-none">
                      {blog.author.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-1 leading-none font-bold">
                      {blog.author.role}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-mars-red hover:text-mars-gold font-bold uppercase">
                    Read Report
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULL READ MODAL COMPONENT WINDOW */}
      {activeArticle && (
        <div id="blog-modal-mask" className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            id="blog-modal-content"
            className="relative bg-mars-card border border-mars-border max-w-4xl w-full rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto text-left text-slate-100"
          >
            {/* Close button modal spacer */}
            <button
              id="blog-modal-close"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-300 hover:text-white bg-mars-black border border-mars-border hover:border-mars-red p-2 rounded-xl transition duration-150 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading Article block */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-450">
                <span className="bg-mars-red/10 border border-mars-red/20 text-mars-gold px-3 py-1 rounded font-bold">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1 font-bold text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {activeArticle.publishDate}
                </span>
                <span className="flex items-center gap-1 font-bold text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {activeArticle.readingTime}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {activeArticle.title}
              </h3>

              {/* Author Banner */}
              <div className="flex items-center gap-3 bg-mars-black border border-mars-border p-4 rounded-xl">
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  className="w-12 h-12 rounded-full border border-mars-border object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="block text-sm font-bold text-slate-200">
                    Written by {activeArticle.author.name}
                  </span>
                  <span className="block text-xs text-slate-400 mt-1 font-semibold">
                    {activeArticle.author.role} — 20+ Years Cyber Engineering Experience
                  </span>
                </div>
              </div>

              {/* Content rendering element */}
              <div className="prose prose-invert max-w-none pt-4 text-slate-300 font-sans leading-relaxed space-y-6 text-sm sm:text-base border-t border-mars-border">
                
                {activeArticle.content.split('\n\n').map((para, pIdx) => {
                  const cleaned = para.trim();
                  if (!cleaned) return null;

                  // Render H3 Headings
                  if (cleaned.startsWith('###')) {
                    return (
                      <h4 key={pIdx} className="font-sans text-lg sm:text-xl font-bold text-white pt-3 border-b border-mars-border pb-2 text-left">
                        {cleaned.replace('###', '').trim()}
                      </h4>
                    );
                  }

                  // Render Horizontal Line
                  if (cleaned === '---') {
                    return <hr key={pIdx} className="border-mars-border my-6" />;
                  }

                  // Render Bullet Points lists
                  if (cleaned.startsWith('*')) {
                    const lines = cleaned.split('\n');
                    return (
                      <ul key={pIdx} className="space-y-2.5 text-slate-300 pl-2 text-left border-l-2 border-mars-red/40 py-1">
                        {lines.map((line, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-mars-gold shrink-0 mt-2" />
                            <span className="text-slate-200 font-semibold leading-relaxed text-sm">
                              {line.replace('*', '').trim()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Render Ordered Steps list
                  if (cleaned.startsWith('1.')) {
                    const lines = cleaned.split('\n');
                    return (
                      <ol key={pIdx} className="list-decimal list-inside space-y-2 text-slate-305 pl-2 animate-fade-in text-left">
                        {lines.map((line, lIdx) => (
                          <li key={lIdx}>
                            <span className="text-slate-200 font-semibold">
                              {line.substring(2).trim()}
                            </span>
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  // Render ASCII Code Diagram (Strategic Tech-Look Contrast module)
                  if (cleaned.startsWith('```')) {
                    return (
                      <pre key={pIdx} className="bg-black/90 border border-mars-border rounded-xl p-4 overflow-x-auto text-xs font-mono text-mars-gold leading-normal select-none">
                        <code>{cleaned.replace(/```/g, '').trim()}</code>
                      </pre>
                    );
                  }

                  // Render Table layouts
                  if (cleaned.startsWith('|')) {
                    const rows = cleaned.split('\n');
                    return (
                      <div key={pIdx} className="overflow-x-auto border border-mars-border rounded-xl my-6 bg-mars-dark/90 shadow-2xl">
                        <table className="min-w-full divide-y divide-mars-border text-left font-sans text-xs sm:text-sm">
                          <tbody className="divide-y divide-mars-border">
                            {rows.map((row, rIdx) => {
                              const cells = row.split('|').filter(c => c.trim() !== '');
                              // Skip alignment separator row
                              if (row.includes(':---') || row.includes('---:')) return null;
                              
                              const isHeader = rIdx === 0;
                              return (
                                <tr key={rIdx} className={isHeader ? 'bg-mars-black font-bold text-mars-gold' : ''}>
                                  {cells.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-4 text-slate-300 font-sans font-semibold">
                                      {cell.trim()}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  // Standard paragraphs text
                  return (
                     <p key={pIdx} className="font-sans leading-relaxed text-slate-300 font-semibold text-left">
                       {cleaned}
                     </p>
                  );
                })}

              </div>

              {/* Close and CTA buttons footer */}
              <div className="pt-8 border-t border-mars-border flex items-center justify-between gap-4">
                <button
                  id="modal-close-foot-btn"
                  onClick={() => setActiveArticle(null)}
                  className="bg-mars-black text-slate-300 hover:text-white hover:bg-mars-dark px-5 py-2.5 border border-mars-border hover:border-mars-red rounded-xl font-sans text-sm cursor-pointer font-bold shadow-md"
                >
                  Close Article
                </button>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-mars-red animate-pulse" />
                  <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
                    Wiseman Def Sec Node
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
