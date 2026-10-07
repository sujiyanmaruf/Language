import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { alphabetData } from '../data/alphabet';
import AudioButton from '../components/AudioButton';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function Alphabet() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-4">
        <Link to="/learn" className="text-slate-500 hover:text-brand-500 flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Geri
        </Link>
        <div className="flex-1 px-4">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-brand-500 w-1/4"></div>
          </div>
        </div>
        <Link to="/learn/vowels" className="text-slate-500 hover:text-brand-500 flex items-center gap-1">
          Devam <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Türk Alfabesi</h2>
        <p className="text-slate-500 mt-2">Türkçe, Latin alfabesini temel alan 29 harf kullanır.</p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
        {alphabetData.map((item) => (
          <button
            key={item.letter}
            onClick={() => setSelectedLetter(item)}
            className={`aspect-square flex items-center justify-center text-2xl font-bold rounded-xl transition-all
              ${item.special 
                ? 'bg-brand-50 text-brand-600 border-2 border-brand-200 hover:border-brand-400 hover:shadow-md' 
                : 'bg-white text-slate-700 border-2 border-slate-100 hover:border-slate-300 hover:shadow-md'
              }`}
          >
            {item.letter}
          </button>
        ))}
      </div>

      {selectedLetter && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedLetter(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-500 mb-4 flex items-center justify-center gap-4">
                {selectedLetter.letter}
                <AudioButton text={selectedLetter.letter} />
              </div>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-2xl font-semibold text-slate-800">{selectedLetter.example}</span>
                  <AudioButton text={selectedLetter.example} />
                </div>
                <span className="text-slate-500">{selectedLetter.english}</span>
              </div>

              {selectedLetter.pronunciation && (
                <div className="text-left mt-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Pronunciation</h4>
                  <p className="text-slate-700">{selectedLetter.pronunciation}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
