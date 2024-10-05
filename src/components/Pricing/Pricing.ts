import Swiper from "swiper";

export function initPricingSwiper() {
  document.querySelectorAll<HTMLElement>(".pricing").forEach((wrapper) => {
    const swiperContainer =
      wrapper.querySelector<HTMLElement>("[data-swiper]") || wrapper;
    const scrollbarContainer =
      wrapper.querySelector<HTMLElement>("[data-scrollbar]");
    const paginationContainer =
      wrapper.querySelector<HTMLElement>("[data-pagination]");

    if (swiperContainer) {
      const slides = swiperContainer.querySelectorAll(".swiper-slide");
      const swiper = new Swiper(swiperContainer, {
        spaceBetween: 60,
        slidesPerView: 1,
        effect: "fade",
        scrollbar: {
          el: scrollbarContainer,
          draggable: true,
          dragSize: 8,
        },
        pagination: {
          el: paginationContainer,
          bulletClass: "pricing-scrollbar__step",
          renderBullet(index, className) {
            const bullet = document.createElement("div");
            bullet.className = className;
            const slide = slides[index];
            const info =
              slide && slide.querySelector<HTMLElement>("[data-info]");
            if (info) {
              bullet.appendChild(info);
            }
            return bullet.outerHTML;
          },
        },
        on: {
          progress(swiper, progress) {
            wrapper.style.setProperty("--progress", progress * 100 + "%");
          },
          scrollbarDragStart() {
            wrapper.classList.add("_drag");
          },
          scrollbarDragEnd() {
            wrapper.classList.remove("_drag");
          },
        },
        breakpoints: {
          601: {
            scrollbar: {
              dragSize: 16,
            },
          },
        },
      });
    }
  });
}
