import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./SliderX.module.css";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < items.length - visibleItems ? prev + 1 : prev));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className={styles.sliderContainer}>
            <button className={styles.navButton} onClick={prevSlide}>
                Left
            </button>
            <div className={styles.sliderWrapper}>
                <motion.div
                    className={styles.slider}
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.slideItem}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <button className={styles.navButton} onClick={nextSlide}>
                Right
            </button>
        </div>
    );
};

export default Slider;
