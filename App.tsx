
import React, { useState } from 'react';
import { ArrowRight, Download, Send, Linkedin, Github, Mail, Twitter, ExternalLink } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import Timeline from './components/Timeline';
import WorkCard from './components/WorkCard';
import AIChatAgent from './components/AIChatAgent';
import { WORK_DATA, BLOG_POSTS, SKILLS_DATA, ICONS_MAP } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'projects'>('case-studies');

  const filteredWork = WORK_DATA.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-inter selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
              V
            </div>
            <h1 className="text-xl font-outfit font-black text-gray-900 hidden sm:block">
              Vikas Singh <span className="text-indigo-600 font-medium">Product</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">About</a>
            <a href="#work" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Work</a>
            <a href="#blog" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Blog</a>
            <a href="#skills" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">Skills</a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest">Available for exciting roles</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-outfit font-black text-gray-900 leading-[1.1]">
              Shipping <span className="text-indigo-600">High-Impact</span> Products with Clarity.
            </h2>
            
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
              I turn complex user problems into intuitive product solutions. Growth-focused PM with a passion for data, design, and delivery at scale.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#work" 
                className="group px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center gap-2 shadow-2xl"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/vikas-singh-iimu/" 
                target="_blank"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 font-bold rounded-2xl hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center gap-2 shadow-sm"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about" className="py-24 bg-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-outfit font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                The Product Journey
              </h3>
              <p className="text-gray-500 font-medium text-lg">
                Visualizing the path from engineering fundamentals to strategic product leadership.
              </p>
            </div>
            <a 
              href="https://docs.google.com/document/d/1bo6ua67P7c06RUkKBHmQbaAkCxhkjRc8LYbIy9vZ0i0/edit?tab=t.0" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-sm"
            >
              <Download className="w-5 h-5 text-indigo-600" />
              Download Resume
            </a>
          </div>
          
          <Timeline />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-outfit font-black text-gray-900">Featured Work</h3>
            <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg">
              A collection of product strategy cycles, from problem identification to data-backed results.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex gap-1">
              <button 
                onClick={() => setActiveTab('case-studies')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'case-studies' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-indigo-600'}`}
              >
                Case Studies
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'projects' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-indigo-600'}`}
              >
                Projects
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWork.map(item => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <h3 className="text-3xl font-outfit font-black text-gray-900 mb-12 flex items-center gap-3">
            <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
            Insights & Writing
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map(post => (
              <a 
                key={post.id} 
                href={post.url}
                className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">{post.date}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-outfit font-black">My PM Toolkit</h3>
            <p className="text-gray-400 font-medium">Equipped for every stage of the product lifecycle.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.map(group => (
              <div key={group.category} className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700/50 hover:bg-gray-800 transition-colors">
                <h4 className="text-indigo-400 font-black mb-6 uppercase tracking-widest text-xs">
                  {group.category}
                </h4>
                <ul className="space-y-4">
                  {group.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-gray-300 font-medium group cursor-default">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Subtle, Elite, Fancy */}
      <section id="contact" className="py-32 bg-gray-50 relative border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Centered Heading */}
          <div className="text-center space-y-6 mb-20">
            <h3 className="text-4xl md:text-5xl font-outfit font-extrabold text-gray-900 tracking-tight">
              Let's create something <span className="text-indigo-600">extraordinary</span>.
            </h3>
            <p className="text-sm md:text-base text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
              Open for strategic product ventures, leadership opportunities, or insightful discussions on the intersection of AI, SaaS, and high-impact growth. My inbox is always open for professionals pushing the boundaries of what's possible.
            </p>

            {/* Subtle Links Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
              <a 
                href="mailto:vikas.singh.2023@iimu.ac.in" 
                className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-all"
                title="Send an Email"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email</span>
              </a>

              <a 
                href="https://linkedin.com/in/vikas-singh-iimu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-all"
                title="Connect on LinkedIn"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-indigo-600 transition-all"
                title="Follow on Twitter"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all">
                  <Twitter className="w-4 h-4" />
                </div>
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Centered Form Area */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.04)]">
              <div className="space-y-8">
                <div className="space-y-2 text-center">
                  <h4 className="text-xl font-bold text-gray-900">Direct Message</h4>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Expected reply within 24h</p>
                </div>

                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Jane Doe" 
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-gray-900" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="jane@company.com" 
                        className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-gray-900" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Your Message</label>
                    <textarea 
                      placeholder="What's on your mind?" 
                      rows={4} 
                      className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-gray-900"
                    ></textarea>
                  </div>
                  <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-indigo-100 hover:shadow-indigo-200">
                    Send Proposal
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-sm">V</div>
            <p className="text-sm font-bold text-gray-400">&copy; 2025 Vikas Singh. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors" title="LinkedIn">{ICONS_MAP.linkedin}</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors" title="Github">{ICONS_MAP.github}</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors" title="Twitter">{ICONS_MAP.twitter}</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAgent />
    </div>
  );
};

export default App;
