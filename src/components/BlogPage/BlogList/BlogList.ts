import Swiper from "swiper";

export function initBlogList() {
  const swiperContainer = document.querySelector<HTMLElement>(
    ".swiper.blog-list-nav",
  );
  if (swiperContainer) {
    const btns = swiperContainer.querySelectorAll(
      ".swiper-slide .blog-list-nav__btn",
    );

    const swiper = new Swiper(swiperContainer, {
      slidesPerView: "auto",
    });

    btns.forEach((btn, index) => {
      if (btn.classList.contains("_active")) {
        swiper.slideTo(index);
      }
    });
  }
}
