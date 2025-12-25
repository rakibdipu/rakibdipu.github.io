// Toggle hamburger menu (mobile)
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu || !icon) return; // safety check

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
