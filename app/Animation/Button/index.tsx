import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Button.module.css";

const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
};

import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.button
            ref={ref}
            className={styles.button}
            variants={buttonVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            whileTap="tap"
        >
            {children}
            {isInView && (
                <motion.div
                    className={styles.shine}
                    initial={{ left: "-100%" }}
                    animate={{ left: "110%", transition: { duration: 1 } }}
                />
            )}
        </motion.button>
    );
};

export default Button;
