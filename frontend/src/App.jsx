import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Learn from './pages/Learn';
import Alphabet from './pages/Alphabet';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-screen-md px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brand-600">Türkçe Öğren</h1>
        </header>
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/alphabet" element={<Alphabet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
