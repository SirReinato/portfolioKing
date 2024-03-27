const elementosComAnimacao = document.querySelectorAll('::after');

export function animacaoCores() {
    // console.log(elementosComAnimacao);
  elementosComAnimacao.forEach((elemento) => {
    const corAtual = elemento.style.backgroundColor;
    const novaCor = gerarCorAleatoria();

    elemento.style.backgroundColor = novaCor;

    // Animação de transição suave
    elemento.style.transition = 'background-color 0.5s ease-in-out';

    // Remover a transição após a animação
    setTimeout(() => {
      elemento.style.transition = '';
    }, 500);
  });
}

// Iniciar a animação a cada 3 segundos
setInterval(animacaoCores, 3000);

export function gerarCorAleatoria() {
  const letrasHex = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letrasHex[Math.floor(Math.random() * 16)];
  }
  return cor;
}
