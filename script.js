// PROJECT TOGGLE
function toggleProject(card) {
  const allCards = document.querySelectorAll(".project-card");

  allCards.forEach(c => {
    if (c !== card) c.classList.remove("active");
  });

  card.classList.toggle("active");
}

// FADE ANIMATION
const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  observer.observe(sec);
});

// NAV ACTIVE LINK
const navLinks = document.querySelectorAll(".navbar a");
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// =====================
// CERTIFICATE MODAL
// =====================

function openCert(path) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certImg");

  img.src = path;
  modal.style.display = "flex";
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("certModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
