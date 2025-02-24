import { useState } from "react";
import styles from "./video.module.css";

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

    const handleMouseEnter = (video, event) => {
        console.log(video, event)
        const videoElement = event.target;

        if (activeVideo.id !== video.id) {
            const prevActiveVideo = document.querySelector(`.${styles.activeVideo}`);
            if (prevActiveVideo) (prevActiveVideo as HTMLVideoElement).pause(); // Pause previous video
        }

        videoElement.play(); // Play hovered video
        setActiveVideo(video); // Set active video ID
    };

    return (
        <div className={styles.container}>
            {/* Video Row */}
            <div className={styles.videoRow}>
                {videos.map((video) => (
                    <video
                        key={video.id}
                        src={video.src}
                        controls
                        className={video.id === activeVideo.id ? styles.activeVideo : styles.video}
                        onMouseEnter={(e) => handleMouseEnter(video, e)}
                        muted // Ensure autoplay works
                    />
                ))}
            </div>

            {/* Video Details */}
            <div className={styles.details}>
                <h2>{activeVideo?.title}</h2>
                <p>{activeVideo?.description}</p>
            </div>
        </div>
    );
};

export default VideoGallery;
