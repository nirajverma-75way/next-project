import React, { useMemo, useState } from "react";
import styles from "./Slider.module.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

interface SliderProps {
    data: { title: string; description: string; btn: string }[];
    row: number;
}

export default function Slider({ data, row }: SliderProps) {
    const [card, setCard] = useState(0);
    const showData = useMemo(() => data.slice(card < 0 ? 0 : card, card + row), [data, card, row]);

    const slideInVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
    };


    return (
        <div className={styles.sliderContainer}>
            {/* Navigation Buttons */}
            <button
                className={`${styles.button} ${styles.leftButton}`}
                onClick={() => card >= 0 && setCard(card - 1)}
                disabled={card < 0}
            >
                <FaArrowLeftLong />
            </button>

            <div className={styles.cards}>
                {showData.map((d, index) => (
                    <div
                        key={index}
                        className={`${styles.card} ${card < 0 ? index === 0 && styles.activeCard : index === Math.floor(row / 2) && styles.activeCard}`}
                    >
                        <h2 className={styles.title}>{d.title}</h2>
                        <p className={styles.description}>{d.description}</p>
                        <button className={styles.cardButton}>{d.btn}</button>
                    </div>
                ))}
            </div>

            <button
                className={`${styles.button} ${styles.rightButton}`}
                onClick={() => card + row < data.length + 1 && setCard(card + 1)}
                disabled={card + row >= data.length + 1}
            >
                <FaArrowRightLong />
            </button>
        </div>
    );
}
