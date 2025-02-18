import React, { useMemo, useState } from "react";
import styles from "./Slider.module.css";
import { motion } from "framer-motion";

interface SliderProps {
    data: { title: string; description: string; btn: string }[];
    row: number;
}

export default function Slider({ data, row }: SliderProps) {
    const [card, setCard] = useState(0);
    const showData = useMemo(() => data.slice(card, card + row), [data, card, row]);

    return (
        <div className={styles.sliderContainer}>
            {/* Navigation Buttons */}
            <button
                className={`${styles.button} ${styles.leftButton}`}
                onClick={() => card > 0 && setCard(card - 1)}
                disabled={card === 0}
            >
                ◀
            </button>

            <div className={styles.cards}>
                {showData.map((d, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.card} ${index === Math.floor(row / 2) ? styles.activeCard : ""}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <h2 className={styles.title}>{d.title}{Math.floor(row / 2)}</h2>
                        <p className={styles.description}>{d.description}</p>
                        <motion.button
                            className={styles.cardButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {d.btn}
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            <button
                className={`${styles.button} ${styles.rightButton}`}
                onClick={() => card + row < data.length && setCard(card + 1)}
                disabled={card + row >= data.length}
            >
                ▶
            </button>
        </div>
    );
}
