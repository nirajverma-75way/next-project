'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImageReveal() {
    const [revealed, setRevealed] = useState(false);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div style={{
                position: 'relative',
                width: '100vw',
                height: '80vh',
                overflow: 'hidden',
                margin: 'auto',
                perspective: '1500px', // Add depth to simulate 3D unfolding
            }}>
                {/* Single Curtain */}
                <motion.div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        backgroundColor: 'white',
                        left: 0,
                        top: 0,
                        zIndex: 2,
                        transformOrigin: 'center center',
                        overflow: 'hidden',
                    }}
                    initial={{
                        width: '0%',
                        scaleX: 0.6, // Compression for folds
                        rotateY: 15, // Start slightly rotated to simulate folds
                        opacity: 0.8,
                    }}
                    animate={{
                        width: revealed ? '100%' : '0%', // Unfold to full width
                        scaleX: revealed ? 1 : 0.6, // Unfold and smooth out
                        rotateY: revealed ? 0 : 15, // Remove the rotation as it opens
                        opacity: revealed ? 1 : 0.8, // Fade in
                    }}
                    transition={{
                        duration: 2, // Longer to make it more gradual
                        ease: 'easeInOut',
                    }}
                >
                    <img
                        src="https://www.shutterstock.com/image-photo/tree-trunk-wood-podium-display-260nw-2496326895.jpg"
                        alt="Curtain"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transformOrigin: 'center center',
                            boxShadow: revealed ? '5px 0px 15px rgba(0,0,0,0.3)' : 'none', // Add depth with shadow
                        }}
                    />
                </motion.div>

                {/* Wall Image behind the curtain */}
                <img
                    src="https://t3.ftcdn.net/jpg/03/17/76/14/360_F_317761488_lUO7Enkcskj6wppf9Ycf5zck5Jm2Y2b9.jpg"
                    alt="Wall Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1, // Keep it behind the curtain
                    }}
                />
            </div>

            {/* Button to trigger the animation */}
            <button
                onClick={() => setRevealed(true)} // Trigger the animation
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Reveal Image
            </button>
        </div>
    );
}
