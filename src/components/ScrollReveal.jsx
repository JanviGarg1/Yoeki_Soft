import { motion, useReducedMotion } from 'framer-motion'
import { fadeLeft, fadeRight, fadeUp, scaleIn } from '../lib/motion'

const variantMap = {
    up: fadeUp,
    left: fadeLeft,
    right: fadeRight,
    scale: scaleIn,
}

/**
 * Tiny wrapper for “animate on scroll into view”.
 *
 * Usage: <ScrollReveal variant="up" className="...">...</ScrollReveal>
 */
export default function ScrollReveal({
    as = 'div',
    variant = 'up',
    once = true,
    amount = 0.25,
    className = '',
    children,
    ...rest
}) {
    const reduceMotion = useReducedMotion()
    const Comp = motion[as] ?? motion.div
    const variants = variantMap[variant] ?? fadeUp

    if (reduceMotion) {
        return (
            <Comp className={className} {...rest}>
                {children}
            </Comp>
        )
    }

    return (
        <Comp
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount }}
            className={className}
            {...rest}
        >
            {children}
        </Comp>
    )
}
