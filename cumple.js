const STORAGE_KEY = "kadimy_octubre_unlocked_days_v2";

function day26IsUnlocked() {
  try {
    const days = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return days.map(Number).includes(26);
  } catch {
    return false;
  }
}

if (!day26IsUnlocked()) {
  window.location.replace("index.html");
}

function createConfetti() {
  const host = document.querySelector(".confetti");
  if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#f3ddd8", "#dce3d4", "#ffffff", "#c99ca2", "#aab993"];
  for (let i = 0; i < 48; i++) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--drift", `${(Math.random() - .5) * 180}px`);
    piece.style.animationDuration = `${3.8 + Math.random() * 3.8}s`;
    piece.style.animationDelay = `${Math.random() * 1.4}s`;
    host.appendChild(piece);
  }
  setTimeout(() => host.replaceChildren(), 8500);
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = lightbox?.querySelector(".lightbox-image");
  const closeBtn = lightbox?.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll(".zoomable img");

  if (!lightbox || !lightboxImage || !triggers.length) return;

  const open = (img) => {
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || "Vista ampliada";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  };

  triggers.forEach((img) => {
    img.addEventListener("click", () => open(img));
    img.parentElement?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(img);
      }
    });
  });

  closeBtn?.addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

createConfetti();
setupLightbox();
