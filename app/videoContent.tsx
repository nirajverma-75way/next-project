import { useState } from "react";
import styles from "./video.module.css";
import { motion } from "framer-motion";

const videos = [
    {
        id: 1,
        title: "Video 1",
        description: "This is the first video description.",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "Video 2",
        description: "This is the second video description.",
        src: "https://www.w3schools.com/html/movie.mp4",
    },
    {
        id: 3,
        title: "Video 3",
        description: "This is the third video description.",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

const VideoGallery = () => {
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    return (
        <div className={styles.container}>
            {/* Video Row */}
            <div className={styles.videoRow}>
                {videos.map((video) => (
                    <motion.video
                        key={video.id}
                        src={video.src}
                        controls
                        className={
                            video.id === activeVideo.id ? styles.activeVideo : styles.video
                        }
                        onClick={() => setActiveVideo(video)}
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: video.id === activeVideo.id ? 1 : 0.7 }}
                        whileHover={{ scale: 1.05 }}
                    />
                ))}
            </div>

            {/* Video Details */}
            <div className={styles.details}>
                <h2>{activeVideo.title}</h2>
                <p>{activeVideo.description}</p>
            </div>
        </div>
    );
};

export default VideoGallery;
