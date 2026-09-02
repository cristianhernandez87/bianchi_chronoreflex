import { useGameStore } from './store/gameStore';
import { PlayerForm } from './components/PlayerForm';
import { Semaphore } from './components/Semaphore';
import { ScoreTable } from './components/ScoreTable';
import { downloadScoresCSV } from './utils/exportCsv';

function App() {
  const { gameState, scores } = useGameStore();

  return (
    <main className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-screen relative">

      <header className="mb-8 text-center select-none">
        <h1 className="text-6xl font-display font-black text-brand-gold flex items-center justify-center gap-4">
          <span>🏁</span> BIANCHI REACTION TIME <span>🏁</span>
        </h1>
        <p className="text-2xl text-gray-400 mt-2 italic font-light">
          ¿Tienes reflejos de piloto?
        </p>
      </header>

      {gameState === 'IDLE' ? (
        <PlayerForm />
      ) : (
        <div className="flex flex-col items-center w-full">
          <Semaphore />
          <ScoreTable />
        </div>
      )}

      {scores.length > 0 && (
        <button
          onClick={() => downloadScoresCSV(scores)}
          className="fixed bottom-6 right-6 bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700 transition-colors font-mono text-sm shadow-lg"
        >
          📥 Exportar CSV ({scores.length})
        </button>
      )}
    </main>
  );
}

export default App;