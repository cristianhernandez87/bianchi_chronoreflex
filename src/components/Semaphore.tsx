/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

export const Semaphore = () => {
  const { gameState, setGameState, addScore, currentPlayer, setCurrentPlayer } = useGameStore();
  const [displayTime, setDisplayTime] = useState<number | null>(null);
  
  const timeoutRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Iniciar la secuencia aleatoria cuando entra en WAITING
  useEffect(() => {
    if (gameState === 'WAITING') {
      setDisplayTime(null);
      const randomDelay = Math.floor(Math.random() * 4000) + 2000; 
      console.log(`[SEMAPHORE] Secuencia iniciada. Esperando ${randomDelay}ms...`);
      
      timeoutRef.current = window.setTimeout(() => {
        console.log('[SEMAPHORE] ¡Luz VERDE encendida!');
        setGameState('READY');
        startTimeRef.current = performance.now();
      }, randomDelay);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [gameState, setGameState]);

  // Manejador central de la reacción
  const handleReaction = useCallback(() => {
    console.log(`[ACCIÓN] handleReaction ejecutado. Estado actual: ${gameState}`);
    if (gameState === 'WAITING') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      console.log('[ACCIÓN] ❌ ¡Falso inicio detectado!');
      setGameState('EARLY_CLICK');
    } else if (gameState === 'READY') {
      const endTime = performance.now();
      const timeMs = Math.round(endTime - startTimeRef.current);
      console.log(`[ACCIÓN] ✅ ¡Reacción exitosa! Tiempo: ${timeMs}ms`);
      setDisplayTime(timeMs);
      setGameState('FINISHED');
      
      addScore({
        playerName: currentPlayer,
        date: new Date().toISOString(),
        reactionTimeMs: timeMs
      });
    } else if (gameState === 'EARLY_CLICK' || gameState === 'FINISHED') {
      console.log('[ACCIÓN] 🔄 Reiniciando ciclo de espera...');
      setGameState('WAITING');
    }
  }, [gameState, setGameState, addScore, currentPlayer]);

  const handleReset = () => {
    console.log('[HOME/RESET] 🏠 Clic izquierdo detectado. Volviendo a pantalla IDLE.');
    setGameState('IDLE');
    setCurrentPlayer('');
  };

  // Escuchar teclado (Espacio y Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        console.log('[TECLADO] ⌨️ Tecla ESPACIO presionada');
        e.preventDefault();
        handleReaction();
      } else if (e.code === 'Escape') {
        console.log('[TECLADO] ⌨️ Tecla ESCAPE presionada');
        e.preventDefault();
        handleReset();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleReaction]);

  // Manejar el clic derecho para la luz verde
  const handleContextMenu = (e: React.MouseEvent) => {
    console.log('[MOUSE] 🖱️ Clic DERECHO detectado (Acción Verde / Reacción)');
    e.preventDefault();
    handleReaction();
  };

  const isRedActive = gameState === 'WAITING' || gameState === 'EARLY_CLICK';
  const isGreenActive = gameState === 'READY' || gameState === 'FINISHED';

  return (
    <div 
      className="flex flex-col items-center gap-6 w-full max-w-3xl select-none"
      onContextMenu={handleContextMenu}
    >

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
        {/* Panel de Tiempo */}
        <div className="flex-1 border border-brand-orange/50 rounded-xl p-6 bg-app-surface shadow-lg text-center w-full min-h-[200px] flex flex-col justify-center">
          <h3 className="text-gray-400 font-display font-bold text-2xl mb-2 tracking-widest">TU TIEMPO</h3>
          
          {gameState === 'EARLY_CLICK' && (
            <span className="text-traffic-red font-display font-bold text-5xl">¡FALSO INICIO!</span>
          )}
          
          {gameState === 'FINISHED' && displayTime !== null && (
            <div className="text-brand-gold font-display font-bold text-7xl">
              {(displayTime / 1000).toFixed(3)}<span className="text-4xl">s</span>
            </div>
          )}

          {(gameState === 'WAITING' || gameState === 'READY') && (
            <span className="text-gray-600 font-display font-bold text-7xl">---</span>
          )}
          
          <p className="text-gray-400 font-light text-sm mt-4 uppercase tracking-wide">
            {gameState === 'FINISHED' || gameState === 'EARLY_CLICK' 
              ? 'Presione el boton Rojo' 
              : 'Presione el boton Verde'}
          </p>
        </div>

        {/* Columna Derecha: Panel de Luces + Botón Home */}
        <div className="flex flex-col gap-4 items-center" onContextMenu={(e) => e.stopPropagation()}>
          <div className="border border-brand-orange/50 rounded-xl p-6 bg-app-surface shadow-lg flex flex-col gap-4">
            <div className={`w-28 h-28 rounded-full border-4 border-black/50 transition-all duration-75 ${
              isRedActive 
                ? 'bg-traffic-red shadow-[0_0_40px_rgba(231,60,62,0.8)]' 
                : 'bg-traffic-red/20 shadow-none'
            }`} />
            
            <div className={`w-28 h-28 rounded-full border-4 border-black/50 transition-all duration-75 ${
              isGreenActive 
                ? 'bg-traffic-green shadow-[0_0_40px_rgba(101,196,102,0.8)]' 
                : 'bg-traffic-green/20 shadow-none'
            }`} />
          </div>

          <button 
            onClick={() => {
              console.log('[MOUSE] 🖱️ Clic IZQUIERDO detectado en botón Inicio');
              handleReset();
            }}
            title="Cambiar Piloto (Inicio - También tecla ESC)"
            className="w-full bg-app-surface border border-gray-700 text-gray-400 hover:text-brand-gold hover:border-brand-gold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-md group cursor-pointer"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 transition-transform group-hover:scale-110" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            <span>Inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
};