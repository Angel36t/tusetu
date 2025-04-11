import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        responsive: true,
        fluid: true,
        controlBar: {
          pictureInPictureToggle: false, // Bloquea PiP
        },
        sources: [
          {
            src: videoSrc,
            type: "application/x-mpegURL", // Soporte nativo para HLS (.m3u8)
          },
        ],
      });

      // Bloquear clic derecho
      videoRef.current.addEventListener("contextmenu", (e) => e.preventDefault());
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoSrc]);

  return (
    <div className="flex justify-center items-center bg-black p-4 rounded-lg shadow-lg">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin w-full max-w-2xl rounded-lg"
        controlsList="nodownload" // Evita botón de descarga en algunos navegadores
      />
    </div>
  );
};

export default VideoPlayer;
