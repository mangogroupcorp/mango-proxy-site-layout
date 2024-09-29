export function initHeaderMenu() {
  const btn = document.querySelector<HTMLElement>("[data-menu-btn]");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("_open-menu");
    });
  }
}
