import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Volume2, Shapes, Split, Settings, Target, Trophy } from 'lucide-react';

export default function Learn() {
  const modules = [
    {
      id: 'alphabet',
      num: '01',
      title: 'Alfabe',
      description: 'Türkçenin temel yapı taşlarını öğren.',
      path: '/learn/alphabet',
      icon: <Book className="w-6 h-6 text-brand-500" />,
      completed: 0,
      locked: false
    },
    {
      id: 'vowels',
      num: '02',
      title: 'Sesler',
      description: 'Ünlüler ve Ünsüzler',
      path: '/learn/vowels',
      icon: <Volume2 className="w-6 h-6 text-brand-500" />,
      completed: 0,
      locked: true
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Türkçe Temelleri</h2>
        <p className="text-slate-500 mt-2">Türkçenin temel yapı taşlarını öğren.</p>
      </div>

      <div className="flex flex-col gap-4 relative">
        {modules.map((mod, index) => (
          <Link 
            key={mod.id} 
            to={mod.locked ? '#' : mod.path}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-300
              ${mod.locked 
                ? 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed' 
                : 'bg-white border-brand-100 hover:border-brand-300 hover:shadow-lg shadow-sm cursor-pointer'
              }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                {mod.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-brand-500">{mod.num}</span>
                  <h3 className="text-lg font-bold text-slate-800">{mod.title}</h3>
                </div>
                <p className="text-sm text-slate-500 mt-1">{mod.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
