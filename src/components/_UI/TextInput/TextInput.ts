export const initPasswordInputs = (wrapperSelector?: string) => {
  const wrapper =
    wrapperSelector && document.querySelector<HTMLElement>(wrapperSelector);
  const containers = wrapper
    ? wrapper.querySelectorAll<HTMLElement>(".text-input[data-password]")
    : document.querySelectorAll<HTMLElement>(".text-input[data-password]");

  containers.forEach((container) => {
    const btn = container.querySelector<HTMLButtonElement>(".text-input__btn");
    const input =
      container.querySelector<HTMLInputElement>(".text-input__field");

    if (btn && input) {
      if (input.type === "password") {
        btn.classList.remove("show");
      } else {
        btn.classList.add("show");
      }

      btn.addEventListener("click", () => {
        if (input.type === "password") {
          btn.classList.add("show");
          input.type = "text";
        } else {
          btn.classList.remove("show");
          input.type = "password";
        }
      });
    }
  });
};

export const initClearInputs = (wrapperSelector?: string) => {
  const event = new Event("change", { bubbles: true });

  const list = document.querySelectorAll<HTMLElement>(
    `${wrapperSelector || ""} .text-input[data-clear]`,
  );

  list.forEach((container) => {
    const btn = container.querySelector<HTMLButtonElement>(".text-input__btn");
    const input =
      container.querySelector<HTMLInputElement>(".text-input__field");
    console.log(container);
    console.log(btn);
    console.log(input);

    if (btn && input) {
      btn.addEventListener("click", () => {
        console.log("click");

        input.value = "";
        input.dispatchEvent(event);
      });
    }
  });
};
