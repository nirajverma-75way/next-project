
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./Slider.module.css";
import stylesX from "./SliderX.module.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const SliderX = ({ data = [], row = 3 }) => {

    const [activeIndex, setActiveIndex] = useState(0)
    if (!data.length) return null; // Prevent rendering if there's no data

    return (
        <div className={styles.sliderContainer}>.
            {/* Left Navigation Button */}
            <button className={`prevBtn ${styles.button} ${stylesX.navBtn} ${styles.leftButton}`} >
                <FaArrowLeftLong />
            </button>
            <Swiper
                modules={[Navigation]}
                loop={true}
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    nextEl: ".nextBtn",
                    prevEl: ".prevBtn",
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className={stylesX.swiper}
            >
                {data.map((d, index) => (
                    <SwiperSlide key={index} className={stylesX.slide}>
                        <div className={`${styles.card} ${index === activeIndex ? styles.activeCard : ""
                            }`}>
                            <h2 className={styles.title}>{d?.title}</h2>
                            <p className={styles.description}>{d?.description}</p>
                            <button className={styles.cardButton}>{d?.btn}</button>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            {/* Right Navigation Button */}
            <button className={`nextBtn ${styles.button} ${stylesX.navBtn} ${styles.rightButton}`}>
                <FaArrowRightLong />
            </button>
        </div>
    );
};

export default SliderX;
