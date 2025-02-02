import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Comparisons",
    icon: "code-compare",
    prefix: "/comparisons/",
    children: [
      "midjourney-vs-sd",
    ],
  },
  {
    text: "NLP - LLM",
    icon: "text",
    prefix: "nlp-llm/",
    children: [
        "deepseek-r1",
        "deepseek-r1-rag",
        "enhancing-generation",
    ]
  }
]);
