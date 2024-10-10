import Swiper from "swiper";

export function initQuize(wrapperSelector?: string) {
  const wrapper = document.querySelector<HTMLElement>(
    `${wrapperSelector || ""} .quize`,
  );
  if (!wrapper) {
    return;
  }

  const swiperContainer =
    wrapper.querySelector<HTMLElement>(".swiper.quize-form");
  const pagination = wrapper.querySelector<HTMLElement>(".quize-pag");

  if (swiperContainer) {
    const slides =
      swiperContainer.querySelectorAll<HTMLElement>(".swiper-slide");

    const swiper = new Swiper(swiperContainer, {
      spaceBetween: 100,
      allowTouchMove: false,
      pagination: {
        el: pagination,
      },
    });

    slides.forEach((slide) => {
      const inputs = slide.querySelectorAll("input");

      const prevBtn = slide.querySelector<HTMLButtonElement>("[data-prev]");
      const nextBtn = slide.querySelector<HTMLButtonElement>("[data-next]");

      prevBtn &&
        prevBtn.addEventListener("click", () => {
          swiper.slidePrev();
        });

      nextBtn &&
        nextBtn.addEventListener("click", () => {
          swiper.slideNext();
        });

      let checked = 0;
      inputs.forEach((input) => {
        input.addEventListener("change", () => {
          let checked = 0;
          inputs.forEach((input) => {
            if (input.checked) {
              checked++;
            }
          });

          if (checked > 0) {
            nextBtn && (nextBtn.disabled = false);
          } else {
            nextBtn && (nextBtn.disabled = true);
          }
        });
      });

      if (checked > 0) {
        nextBtn && (nextBtn.disabled = false);
      } else {
        nextBtn && (nextBtn.disabled = true);
      }
    });
  }
}
