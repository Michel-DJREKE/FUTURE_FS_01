import type { Transition } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5, ease } satisfies Transition,
};
