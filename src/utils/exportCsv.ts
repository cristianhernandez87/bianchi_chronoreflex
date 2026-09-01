import { type ReactionScore } from '../store/gameStore';

export const downloadScoresCSV = (scores: ReactionScore[]) => {
  if (scores.length === 0) {
    alert('No hay datos registrados aún.');
    return;
  }

  const headers = 'Jugador,Fecha,Tiempo_Reaccion_ms';
  const rows = scores.map(
    (score) => `${score.playerName},${score.date},${score.reactionTimeMs}`
  );
  
  const csvContent = [headers, ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'resultados_reflejos.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};