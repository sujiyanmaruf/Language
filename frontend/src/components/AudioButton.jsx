import React from 'react';
import { Volume2 } from 'lucide-react';

export default function AudioButton({ text }) {
  const playAudio = (e) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'tr-TR';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={playAudio}
      className="p-2 rounded-full hover:bg-brand-50 text-brand-500 transition-colors"
      title="Listen"
    >
      <Volume2 className="w-5 h-5" />
    </button>
  );
}
