
import React, { useState } from 'react';
import { Rocket, Moon, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Colors for nodes matching the reference image vibes
  const colors = ['#f43f5e', '#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#6366f1'];

  return (
    <div className="w-full relative py-20 px-4 bg-[#0a192f] rounded-[40px] overflow-hidden shadow-2xl min-h-[500px] flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 text-gray-400 opacity-20 pointer-events-none">
        <Moon className="w-24 h-24" />
      </div>
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Stars - Increased Count */}
      {[...Array(60)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      <div className="relative w-full max-w-6xl">
        {/* The Winding Path SVG */}
        <svg 
          viewBox="0 0 1000 300" 
          className="w-full h-auto drop-shadow-2xl"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Road */}
          <path 
            d="M 0 200 Q 150 200 250 220 T 450 180 T 650 150 T 850 100" 
            stroke="#fbbf24" 
            strokeWidth="24" 
            strokeLinecap="round"
            className="opacity-90"
          />
          {/* Inner Road Line */}
          <path 
            d="M 0 200 Q 150 200 250 220 T 450 180 T 650 150 T 850 100" 
            stroke="#fef3c7" 
            strokeWidth="2" 
            strokeDasharray="10 10"
            strokeLinecap="round"
          />

          {/* Interactive Nodes */}
          {TIMELINE_DATA.slice().reverse().map((item, index) => {
            // Mapping timeline items to points on our curve
            const points = [
              { x: 100, y: 200 },
              { x: 280, y: 215 },
              { x: 440, y: 185 },
              { x: 580, y: 165 },
              { x: 720, y: 135 },
              { x: 860, y: 100 }
            ];
            const pos = points[index] || { x: 0, y: 0 };
            const nodeColor = colors[index % colors.length];

            return (
              <g 
                key={item.id} 
                className="cursor-pointer group"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Node Glow */}
                <circle 
                  cx={pos.x} cy={pos.y} r="20" 
                  fill={nodeColor} 
                  className="opacity-0 group-hover:opacity-40 transition-opacity duration-300" 
                />
                {/* Main Node */}
                <circle 
                  cx={pos.x} cy={pos.y} r="14" 
                  fill="white" 
                  stroke={nodeColor} 
                  strokeWidth="6" 
                />
                
                {/* Text Label - Reverted to Sm/Xs for layout compactness */}
                <foreignObject 
                  x={pos.x - 110} 
                  y={index % 2 === 0 ? pos.y + 35 : pos.y - 120} 
                  width="220" 
                  height="110"
                >
                  <div className={`text-center p-2 rounded-xl transition-all duration-300 ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/50 mb-1">{item.period}</p>
                    <p className="text-sm font-bold text-white leading-tight drop-shadow-md">{item.company}</p>
                    <p className="text-[11px] font-medium text-indigo-300 leading-snug whitespace-normal">{item.role}</p>
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* Rocket at the end (Livekeeping Position) */}
          <g transform="translate(860, 100) rotate(-45)">
             {/* Engine Flame effect */}
             <circle cx="-18" cy="0" r="12" fill="#f97316" className="animate-pulse opacity-60" />
             <foreignObject x="-30" y="-30" width="70" height="70">
                <Rocket className="text-[#fbbf24] w-14 h-14 drop-shadow-[0_0_25px_rgba(251,191,36,0.95)] animate-bounce" />
             </foreignObject>
          </g>
        </svg>

        {/* Dynamic Detail Card (Desktop Only) */}
        {hoveredId && (
          <div className="absolute top-0 right-0 m-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-72 animate-in fade-in zoom-in duration-300 hidden lg:block z-[10]">
            {TIMELINE_DATA.find(t => t.id === hoveredId) && (() => {
              const item = TIMELINE_DATA.find(t => t.id === hoveredId)!;
              const isEducation = item.company.includes('IIT') || item.company.includes('IIM');
              const isCurrent = item.id === '1'; // Livekeeping

              return (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg">
                    <img 
                      src={item.logo} 
                      alt={item.company}
                      className="w-full h-full object-contain rounded-lg" 
                    />
                  </div>
                  <div>
                    <h5 className="text-white text-xl font-black">{item.company}</h5>
                    <p className="text-indigo-300 text-sm font-bold mt-1">{item.role}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <p className="text-white/80 text-xs flex items-center gap-2 font-bold uppercase tracking-wider">
                      {isEducation ? <GraduationCap className="w-4 h-4 text-emerald-400" /> : <Briefcase className="w-4 h-4 text-indigo-400" />}
                      {isEducation ? 'Educational Milestone' : 'Professional Milestone'}
                    </p>
                    {isCurrent && (
                      <p className="text-xs text-[#fbbf24] font-black animate-pulse flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        Current & Growing 🚀
                      </p>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Floating Earth Accent */}
      <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-green-500/20 rounded-full blur-[80px] pointer-events-none"></div>
    </div>
  );
};

export default Timeline;
