export const templateAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.35 },
  },
};

export const letterAnim = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
