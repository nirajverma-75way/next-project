import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Div.module.css";

interface DivProps {
    direction?: "left" | "right" | "top" | "bottom";
    duration?: number;
    delay?: number;
    children?: React.ReactNode;
}

const Div: React.FC<DivProps> = ({ direction = "bottom", duration = 0.9, delay = 0.6, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    // Define initial positions based on direction
    const variants = {
        left: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
        right: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
        top: { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
        bottom: { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    };

    return (
        <motion.div
            ref={ref}
            className={styles.container}
            initial={variants[direction].initial}
            animate={isInView ? { ...variants[direction].animate, transition: { duration, delay } } : {}}
        >
            {children}
        </motion.div>
    );
};

export default Div;
