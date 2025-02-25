import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Slider.module.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Slider = ({ data, row }) => {
    const [card, setCard] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    const nextSlide = () => {
        if (card + row < data.length) {
            setDirection(1);
            setCard((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (card > 0) {
            setDirection(-1);
            setCard((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            {/* Left Navigation Button */}
            <button className={`${styles.button} ${styles.leftButton}`} onClick={prevSlide} disabled={card === 0}>
                <FaArrowLeftLong />
            </button>

            <div className={styles.cards}>
                <AnimatePresence initial={false} custom={direction} mode="sync">

                    {data.map((d, index) => {
                        const relativeIndex = index - card; // Determine position in the visible range

                        if (relativeIndex < 0 || relativeIndex > row - 1) return null; // Show only `row` cards

                        return (
                            <motion.div
                                key={d.id || index} // Stable key
                                className={`${styles.card} ${relativeIndex === Math.floor(row / 2) ? styles.activeCard : ""
                                    }`}
                                custom={direction}
                                initial={{
                                    x: direction > 0 ? (relativeIndex === row - 1 ? 150 : 0) : relativeIndex === 0 ? -150 : 0,
                                    scale: 0.8,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: relativeIndex === Math.floor(row / 2) ? 1.2 : 1,
                                    x: relativeIndex === 0 ? -50 : relativeIndex === Math.floor(row / 2) ? 0 : 50,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: direction > 0 ? -150 : 150,
                                    scale: 0.7,
                                    opacity: 0,
                                }}
                                transition={{
                                    x: { type: "tween", duration: 0.15, ease: "easeInOut" },
                                    scale: { duration: 0.2, ease: "easeInOut" },
                                    opacity: { duration: 0.15, ease: "easeOut" },
                                }}
                            >
                                <h2 className={styles.title}>{d.title}</h2>
                                <p className={styles.description}>{d.description}</p>
                                <button className={styles.cardButton}>{d.btn}</button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Right Navigation Button */}
            <button className={`${styles.button} ${styles.rightButton}`} onClick={nextSlide} disabled={card + row >= data.length}>
                <FaArrowRightLong />
            </button>
        </div>
    );
};

export default Slider;
