import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "comparisons",
      icon: "laptop-code",
      prefix: "comparisons/",
      children: "structure",
    },
    {
      text: "NLP - LLM",
      icon: "book",
      prefix: "nlp-llm/",
      children: "structure",
    },
  ],
});
