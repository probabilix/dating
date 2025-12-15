// src/data/faq.ts
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "How is DatingAdvice.io different from a traditional human coach?",
    answer: "Our platform offers 24/7 real-time advice from specialized AI models. This is instant, objective, and significantly more affordable than traditional coaching. You get immediate, private feedback on complex scenarios that a human coach cannot offer in the moment.",
  },
  {
    id: 2,
    question: "Is the voice and chat advice private and secure?",
    answer: "Absolutely. All conversations are end-to-end encrypted and kept strictly confidential. The AI uses the data only to improve its coaching algorithms and never shares your personal information or conversations with third parties.",
  },
  {
    id: 3,
    question: "How do I access the Chat Consultant?",
    answer: "Once you create your free account, you can instantly log in and access the Chat Consultant interface. There is no software to download; it works directly in your browser or through our mobile app.",
  },
  {
    id: 4,
    question: "When will the Video Consultant be available?",
    answer: "The Video Consultant is currently in advanced beta testing. We anticipate launching it in Q2 2026. You can sign up via the section above to be notified the moment early access is released.",
  },
  {
    id: 5,
    question: "What technology powers the AI advice?",
    answer: "Our platform uses a proprietary blend of large language models (LLMs) and specialized behavioral analysis engines, trained on millions of successful dating interactions to ensure the advice is both empathetic and effective.",
  },
];