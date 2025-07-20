// Animaciones de entrada con Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-animate]").forEach(el => {
    el.classList.add("opacity-0", "translate-y-10", "transition", "duration-700");
    observer.observe(el);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg-video");
  if (bg) {
    // Algunos navegadores requieren play() explícito
    bg.play().catch(() => {
      //  Si falla (modo ahorro datos, batería, etc.), deja el póster
      console.warn("Autoplay bloqueado");
    });
  }
});
});