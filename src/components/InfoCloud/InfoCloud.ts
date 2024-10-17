import TagCloud, { type TagCloudOptions } from "TagCloud";

export function initInfoCloud() {
  document.querySelectorAll(".info-cloud [data-cloud]").forEach((container) => {
    const texts: string[] = [];
    container.querySelectorAll<HTMLElement>("[data-item]").forEach((item) => {
      texts.push(item.outerHTML);
    });

    container.innerHTML = "";

    const options: TagCloudOptions = {
      radius: 275,
      maxSpeed: "normal",
      initSpeed: "normal",
      useHTML: true,
      keep: false,
    };

    TagCloud(container, texts, options);
  });
}
