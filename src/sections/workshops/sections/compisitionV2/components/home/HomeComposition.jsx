import React, { useState } from "react";

const HomeComposition = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);

  const columns = {
    Relacional: ["Relación 1", "Relación 2", "Relación 3", "Relación 4", "Relación 5", "Relación 6", "Relación 7", "Relación 8", "Relación 9", "Relación 10"],
    Recreacional: ["Recreación 1", "Recreación 2", "Recreación 3", "Recreación 4", "Recreación 5", "Recreación 6", "Recreación 7", "Recreación 8", "Recreación 9", "Recreación 10", "Recreación 11", "Recreación 12", "Recreación 13", "Recreación 14", "Recreación 15"],
    Profesional: ["Profesión 1", "Profesión 2", "Profesión 3", "Profesión 4", "Profesión 5", "Profesión 6", "Profesión 7", "Profesión 8", "Profesión 9", "Profesión 10", "Profesión 11", "Profesión 12", "Profesión 13", "Profesión 14", "Profesión 15", "Profesión 16", "Profesión 17"]
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setHasWatchedVideo(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Composition</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {Object.keys(columns).map((key) => (
          <div key={key} style={{ flex: 1 }}>
            <h2>{key}</h2>
            <ul>
              {columns[key].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={openModal} style={{ marginTop: "20px" }}>
        Ver Video
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative", width: "80%", height: "80%" }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              style={{ width: "100%", height: "100%" }}
              allow="autoplay; fullscreen"
            ></iframe>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {hasWatchedVideo && (
        <button style={{ marginTop: "20px" }} onClick={() => alert("Siguiente paso iniciado")}>
          Siguiente Paso
        </button>
      )}
    </div>
  );
};

export default HomeComposition;
