import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Slider.module.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface SliderProps {
    data: { title: string; description: string; btn: string }[];
    row: number;
}

export default function Slider({ data, row }: SliderProps) {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    // Get the current visible cards
    const visibleCards = useMemo(() => data.slice(startIndex, startIndex + row), [data, startIndex, row]);

    // Slide animation variants
    const slideVariants = {
        enterLeft: { x: "-100%", opacity: 0 }, // Incoming from left
        enterRight: { x: "100%", opacity: 0 }, // Incoming from right
        center: { x: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }, // Fully visible
        exitLeft: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }, // Exiting left
        exitRight: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } } // Exiting right
    };
    const slideVariantsActive = {
        enterLeft: { x: "-100%", opacity: 0 }, // Incoming from left
        enterRight: { x: "100%", opacity: 0 }, // Incoming from right
        center: { x: "0%", opacity: 1, scale: 1.2, transition: { duration: 0.5, ease: "easeInOut" } }, // Fully visible
        exitLeft: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }, // Exiting left
        exitRight: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } } // Exiting right
    };

    // Next Slide
    const handleNext = () => {
        if (startIndex + row < data.length) {
            setDirection("right");
            setStartIndex((prev) => prev + 1);
        }
    };

    // Previous Slide
    const handlePrev = () => {
        if (startIndex > 0) {
            setDirection("left");
            setStartIndex((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            {/* Left Button */}
            <button className={styles.leftButton} onClick={handlePrev} disabled={startIndex === 0}>
                <FaArrowLeftLong />
            </button>

            {/* Card Container with AnimatePresence */}
            <div className={styles.cards}>
                <AnimatePresence mode="sync" initial={false}>
                    {visibleCards.map((d, index) => (
                        <motion.div
                            key={d.title + startIndex} // Unique key to re-trigger animation
                            className={`${styles.card} ${index === Math.floor(row / 2) ? styles.activeCard : ""}`}
                            variants={startIndex < 0 ? (index === 0 ? slideVariantsActive : slideVariants) : (index === Math.floor(row / 2) ? slideVariantsActive : slideVariants)}
                            initial={direction === "right" ? "enterRight" : "enterLeft"}
                            animate="center"
                            exit={direction === "right" ? "exitLeft" : "exitRight"}
                        >
                            <h2>{d.title}</h2>
                            <p>{d.description}</p>
                            <button>{d.btn}</button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Right Button */}
            <button className={styles.rightButton} onClick={handleNext} disabled={startIndex + row >= data.length}>
                <FaArrowRightLong />
            </button>
        </div>
    );
}
