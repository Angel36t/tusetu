import React, { useRef, useEffect, useState } from "react";

const VideoJSPlayerPublic = ({ videoFile }) => {
  const videoRef = useRef(null);
  const hiddenVideoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(false);
  const [loadingThumbnail, setLoadingThumbnail] = useState(true);

  useEffect(() => {
    const detectDevTools = setInterval(() => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        setDevToolsOpen(true);
      } else {
        setDevToolsOpen(false);
      }
    }, 500);

    return () => clearInterval(detectDevTools);
  }, []);

  useEffect(() => {
    const hiddenVideo = hiddenVideoRef.current;

    const captureThumbnail = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = hiddenVideo.videoWidth;
      canvas.height = hiddenVideo.videoHeight;

      context.drawImage(hiddenVideo, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL("image/png");
      setThumbnail(imageDataUrl);
      setLoadingThumbnail(false);
    };

    const handleLoadedMetadata = () => {
      const randomTime = Math.floor(Math.random() * 61);
      hiddenVideo.currentTime = randomTime;
    };
    const handleSeeked = () => {
      captureThumbnail();
    };

    if (hiddenVideo) {
      hiddenVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
      hiddenVideo.addEventListener("seeked", handleSeeked);
      hiddenVideo.load();
    }

    return () => {
      if (hiddenVideo) {
        hiddenVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
        hiddenVideo.removeEventListener("seeked", handleSeeked);
      }
    };
  }, [videoFile]);

  const handleThumbnailClick = () => {
    setShowVideo(true);
    const video = videoRef.current;

    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn(
            "No se pudo reproducir el video automáticamente:",
            error
          );
        });
      }
    }
  };

  return (
    <div className="relative w-full aspect-video max-h-[410px]">
      {loadingThumbnail && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-20 rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
        </div>
      )}

      {!showVideo && thumbnail && !loadingThumbnail && (
        <div
          className="relative cursor-pointer w-full h-full"
          onClick={handleThumbnailClick}
        >
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="p-3 rounded-full shadow-lg"
              aria-label="Reproducir video"
            >
              <img
                src="/icon/play-button.svg"
                alt="Play Icon"
                className="w-16 h-16"
              />
            </button>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
          showVideo ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        src={videoFile}
        controls
        onContextMenu={(e) => e.preventDefault()}
      />

      <video
        ref={hiddenVideoRef}
        src={videoFile}
        style={{ display: "none" }}
        crossOrigin="anonymous"
        preload="metadata"
      />

      <canvas ref={canvasRef} style={{ display: "none" }} />

      {devToolsOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <p className="text-white text-lg">
            Grabación de pantalla no permitida
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoJSPlayerPublic;
