// FADE SLIDE ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  const elements = document.querySelectorAll(".fade-slide");
  elements.forEach((el) => observer.observe(el));
});
// FADE  SLIDE  ANIMATION END

// HAMBURGER
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navi = document.getElementById("navi");

  if (hamburger && navi) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navi.classList.toggle("open");

      if (!navi.classList.contains("open")) {
        document
          .querySelectorAll(".has-dropdown.open")
          .forEach((el) => el.classList.remove("open"));
      }
    });
  }

  document.querySelectorAll(".has-dropdown").forEach((has) => {
    const toggle = has.querySelector(".dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
      }

      const isOpen = has.classList.contains("open");

      document.querySelectorAll(".has-dropdown.open").forEach((el) => {
        el.classList.remove("open");
      });

      has.classList.toggle("open", !isOpen);
    });
  });
});
// HAMBURGER END
