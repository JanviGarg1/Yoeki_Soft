export const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

export const staggerTight = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}
