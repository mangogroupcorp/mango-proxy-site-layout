import hljs from "highlight.js/lib/core";

import javascript from "highlight.js/lib/languages/javascript";
import csharp from "highlight.js/lib/languages/csharp";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import perl from "highlight.js/lib/languages/perl";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import vbscript from "highlight.js/lib/languages/vbscript";
import vbnet from "highlight.js/lib/languages/vbnet";
// import "highlight.js/styles/stackoverflow-dark.min.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("go", go);
hljs.registerLanguage("java", java);
hljs.registerLanguage("perl", perl);
hljs.registerLanguage("php", php);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("vbscript", vbscript);
hljs.registerLanguage("vbnet", vbnet);

export function initCode() {
  document.querySelectorAll(".code-box").forEach((wrapper) => {
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
