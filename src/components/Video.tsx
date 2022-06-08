import React from "react";
import styles from "./Video.module.css";

interface Props {
  src: string;
  thumbnail?: string;
  title?: string;
}

const Video: React.FC<Props> = ({ src, title, thumbnail }) => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
