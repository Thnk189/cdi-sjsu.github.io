const toggleButton = document.querySelector("[data-hex-toggle]");
const closeTargets = document.querySelectorAll("[data-hex-close], .hex-rotor a");

function setOpen(isOpen) {
  document.body.classList.toggle("open", isOpen);
  toggleButton?.setAttribute("aria-expanded", String(isOpen));
  toggleButton?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

toggleButton?.addEventListener("click", () => {
  setOpen(!document.body.classList.contains("open"));
});

closeTargets.forEach((target) => {
  target.addEventListener("click", () => setOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setOpen(false);
  }
});
