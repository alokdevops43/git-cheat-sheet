// ======================================
// COPY COMMAND FUNCTIONALITY
// ======================================

const copyButtons = document.querySelectorAll(".copy-btn");
const toast = document.getElementById("toast");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.getAttribute("data-copy");

    navigator.clipboard.writeText(command);

    showToast();
  });
});

// ======================================
// TOAST NOTIFICATION
// ======================================

function showToast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ======================================
// ACTIVE NAVIGATION HIGHLIGHT
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {
      link.classList.add("active");
    }
  });
});

// ======================================
// SMOOTH PAGE LOAD EFFECT
// ======================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ======================================
// OPTIONAL CONSOLE MESSAGE
// ======================================

console.log("Git Cheat Sheet Loaded Successfully 🚀");