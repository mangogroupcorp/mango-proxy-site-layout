import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import php from "highlight.js/lib/languages/php";
import "highlight.js/styles/stackoverflow-dark.min.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("php", php);

export function initCode() {
  document.querySelectorAll(".code .code-box").forEach((wrapper) => {
    const copyBtn = wrapper.querySelector<HTMLElement>("[data-copy]");
    const code = wrapper.querySelector<HTMLElement>("[data-code]");

    if (code && copyBtn) {
      const text = code.textContent || "";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(text);
      });
    }
  });
  hljs.highlightAll();
}
