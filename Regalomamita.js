function playCelebration() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Confeti repetido
  let count = 3;
  let interval = setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    count--;
    if (count <= 0) clearInterval(interval);
  }, 1000);
}
