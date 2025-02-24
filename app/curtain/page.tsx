'use client';

import { useState } from 'react';
import styles from './ImageReveal.module.css';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

export default function ImageReveal() {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Single Curtain */}
                <div
                    className={`${styles.curtain} ${revealed ? styles.revealed : ''}`}
                >
                    <Image
                        height={500}
                        width={900}
                        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
                        alt="Curtain"
                        className={styles.curtainImage}
                    />
                </div>

                {/* Wall Image behind the curtain */}
                <Image
                    height={500}
                    width={900}
                    src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
                    alt="Wall Image"
                    className={styles.wallImage}
                />
            </div>

            {/* Button to trigger the animation */}
            {!revealed && <div
                onClick={() => setRevealed(true)}
                className={styles.revealButton}
            >
                <FaArrowRightLong />
            </div>}
        </div>
    );
}
