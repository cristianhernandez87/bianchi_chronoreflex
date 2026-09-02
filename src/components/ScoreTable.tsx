// src/components/ScoreTable.tsx
import { useGameStore } from '../store/gameStore';

export const ScoreTable = () => {
  const scores = useGameStore((state) => state.scores);
  const lastScore = scores.length > 0 ? scores[scores.length - 1].reactionTimeMs / 1000 : null;
  const isAlucinante = lastScore !== null && lastScore >= 0.031 && lastScore <= 0.237;
  const isSorprendente = lastScore !== null && lastScore > 0.237 && lastScore <= 0.381;
  const isRapido = lastScore !== null && lastScore > 0.381 && lastScore <= 0.601;
  const isTardo = lastScore !== null && lastScore > 0.601;

  return (
    <div className="w-full max-w-2xl mt-12 border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-brand-orange py-3 text-center">
        <h2 className="text-white font-display text-2xl tracking-widest">
          RANGOS DE REACCIÓN
        </h2>
      </div>

      <div className="flex flex-col bg-app-surface text-lg">
        <div className={`grid grid-cols-2 border-b border-gray-700 transition-all duration-300 ${
          isAlucinante ? 'bg-traffic-green/30 border-l-4 border-l-traffic-green shadow-[inset_0_0_20px_rgba(101,196,102,0.2)]' : ''}`}>
          <div className="p-4 flex items-center gap-4 font-bold border-r border-gray-700">
            <span className="text-2xl">🤯</span> Alucinante {isAlucinante && '✨'}
          </div>
          <div className="p-4 flex items-center justify-center font-mono">
            0.031 - 0.237 s
          </div>
        </div>

        <div className={`grid grid-cols-2 border-b border-gray-700 transition-all duration-300 ${
          isSorprendente ? 'bg-traffic-green/30 border-l-4 border-l-traffic-green shadow-[inset_0_0_20px_rgba(101,196,102,0.2)]' : ''}`}>
          <div className="p-4 flex items-center gap-4 font-bold border-r border-gray-700/30">
            <span className="text-2xl">⚡</span> Sorprendente {isSorprendente && '⭐'}
          </div>
          <div className="p-4 flex items-center justify-center font-mono font-bold">
            0.237 - 0.381 s
          </div>
        </div>

        <div className={`grid grid-cols-2 border-b border-gray-700 transition-all duration-300 ${
          isRapido ? 'bg-brand-orange/30 border-l-4 border-l-brand-orange shadow-[inset_0_0_20px_rgba(224,89,41,0.2)]' : ''
        }`}>
          <div className="p-4 flex items-center gap-4 font-bold border-r border-gray-700">
            <span className="text-2xl">💨</span> Rápido {isRapido && '✨'}
          </div>
          <div className="p-4 flex items-center justify-center font-mono">
            0.381 - 0.601 s
          </div>
        </div>

        <div className={`grid grid-cols-2 transition-all duration-300 ${
          isTardo ? 'bg-traffic-red/30 border-l-4 border-l-traffic-red shadow-[inset_0_0_20px_rgba(231,60,62,0.2)]' : ''
        }`}>
          <div className="p-4 flex items-center gap-4 font-bold border-r border-gray-700">
            <span className="text-2xl">🐢</span> Tardo {isTardo && '⚠️'}
          </div>
          <div className="p-4 flex items-center justify-center font-mono">
            0.601 s o más
          </div>
        </div>
      </div>
    </div>
  );
};