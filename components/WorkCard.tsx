
import React from 'react';
import { WorkItem } from '../types';
import { ICONS_MAP } from '../constants';

interface Props {
  item: WorkItem;
}

const WorkCard: React.FC<Props> = ({ item }) => {
  const colorSchemes = {
    indigo: 'border-indigo-200 bg-indigo-50 text-indigo-800',
    purple: 'border-purple-200 bg-purple-50 text-purple-800',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    rose: 'border-rose-200 bg-rose-50 text-rose-800'
  };

  const scheme = colorSchemes[item.color];

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      <div className={`p-6 flex-grow`}>
        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${scheme} mb-4`}>
          {item.tag}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 italic">
          {item.summary}
        </p>
        
        <div className="space-y-3 mt-4 border-t pt-4">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Impact</p>
            <p className="text-sm font-semibold text-gray-800">{item.impact}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.skills.map(s => (
              <span key={s} className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-md font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 flex items-center justify-between border-t border-gray-100">
        <div className="flex gap-2">
          {item.links.map(link => (
            <a 
              key={link.label}
              href={link.url} 
              className="p-2 bg-white rounded-lg text-gray-400 hover:text-indigo-600 shadow-sm border border-gray-100 transition-all hover:-translate-y-1"
              title={link.label}
            >
              {ICONS_MAP[link.type]}
            </a>
          ))}
        </div>
        <span className="text-[10px] font-bold text-gray-400 uppercase">Resources</span>
      </div>
    </div>
  );
};

export default WorkCard;
