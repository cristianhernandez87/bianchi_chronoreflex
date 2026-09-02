import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';

export const PlayerForm = () => {
  const [name, setName] = useState('');
  const { setCurrentPlayer, setGameState } = useGameStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      setCurrentPlayer(name.trim());
      setGameState('WAITING'); 
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col items-center gap-6 p-8 bg-app-surface rounded-xl border border-gray-800 shadow-2xl w-full max-w-md"
    >
      <h2 className="text-3xl font-display text-white tracking-wide">INGRESA TU NOMBRE</h2>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Piloto..."
        className="w-full bg-app-bg text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-brand-orange text-center text-xl transition-colors"
        autoFocus
      />
      
      <button
        type="submit"
        disabled={!name.trim()}
        className="w-full bg-brand-orange text-white font-bold py-4 rounded-md text-xl hover:bg-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        COMENZAR PRUEBA
      </button>
    </form>
  );
};