// Made with Chat GPT assistance
function parsearTiempo(tiempoString: string) {
  const partes = tiempoString.split(' ');

  let segundos = 0;

  for (const parte of partes) {
    if (parte.endsWith('s')) {
      segundos += parseFloat(parte);
    } else if (parte.endsWith('m')) {
      segundos += parseFloat(parte) * 60;
    } else if (parte.endsWith('h')) {
      segundos += parseFloat(parte) * 3600;
    }
  }

  return segundos;
}

export function desparsearTiempo(segundos: number) {
  let tiempoDesparseado = "";

  const horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  if (horas > 0) {
    tiempoDesparseado += `${horas}h `;
  }

  if (minutos > 0) {
    tiempoDesparseado += `${minutos}m `;
  }

  if (segundosRestantes > 0) {
    tiempoDesparseado += `${segundosRestantes.toFixed(3)}s`;
  }

  return tiempoDesparseado.trim();
}

export function menorTiempo(strings: string[]) {
  let menor = Infinity;

  for (const tiempoString of strings) {
    const segundos = parsearTiempo(tiempoString);
    if (segundos < menor) {
      menor = segundos;
    }
  }

  return menor;
}