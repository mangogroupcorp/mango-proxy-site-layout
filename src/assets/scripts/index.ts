import { formValidateInit } from "./fv";
import Swiper from "swiper";
import {
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import LazyLoad from "vanilla-lazyload";
import { vBoxHandler } from "./vBox";
import { PopupController } from "./utils/popup";
import { initDropdownItems } from "./utils/dropdown";
import { initSwipers } from "./utils/swiper";
import { initHeaderMenu } from "@components/Header/Header";
import { initTabController } from "./utils/tabController";
import { initPricingSwiper } from "@components/Pricing/Pricing";
import { initQuize } from "@components/Popup/QuizePopup/QuizePopup";
import { initCode } from "@components/Code/Code";
import { initInfoCloud } from "@components/InfoCloud/InfoCloud";
import { initBlogList } from "@components/BlogPage/BlogList/BlogList";
import { initClearInputs } from "@components/_UI/TextInput/TextInput";
import Intercom from "@intercom/messenger-js-sdk";

declare var ym: any;

Swiper.use([Navigation, Thumbs, EffectFade, Pagination, Autoplay, Scrollbar]);

document.addEventListener("DOMContentLoaded", () => {
  Intercom({
    app_id: "cbn8entw",
  });

  const lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });
  lazyLoad.update();

  const popupController = new PopupController();
  (window as any).popupController = popupController;

  // Инициализация компонентов и обработчиков
  // общие
  formValidateInit(".fv");
  initDropdownItems();
  initSwipers();
  initTabController();
  initClearInputs();

  // компоненты
  initHeaderMenu();
  initPricingSwiper();
  initQuize();
  initCode();
  initInfoCloud();
  initBlogList();
  // <--

  // События
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    vBoxHandler(e, target);

    popupController.clickHandler(e, target);
  });

  document.addEventListener("vBoxContentLoaded", () => {
    lazyLoad.update();

    formValidateInit(".vbox-content .fv");
    initQuize(".vbox-content");
    initClearInputs(".vbox-content");
  });

  ["cta-purchase", "cta-quick-purchase"].forEach((className) => {
    const elements = document.querySelectorAll(`.${className}`);

    elements.forEach((element) => {
      element.addEventListener("click", () => {
        ym(98655610, "reachGoal", "click_site_purchase");
      });
    });
  });
});
