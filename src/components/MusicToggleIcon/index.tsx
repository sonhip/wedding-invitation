import React, { useRef, useState } from "react";

const MusicToggleIcon: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio: ", error);
      });
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className={`fixed bottom-4 z-[999] left-4 p-3 bg-wedding-brown rounded-full border-2 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
        isPlaying ? "ring-4 ring-white/30 animate-pulse" : ""
      }`}
      onClick={toggleMusic}
    >
      <img
        src={
          isPlaying
            ? "/images/boxes/on-music.svg"
            : "/images/boxes/off-music.svg"
        }
        alt={isPlaying ? "Music On" : "Music Off"}
        className={`w-8 h-8 transition-all duration-300 ${
          isPlaying ? "animate-bounce" : ""
        }`}
      />
      <audio
        loop
        ref={audioRef}
        src="https://res.cloudinary.com/db8mh2s66/video/upload/v1740788713/wedding-images/sdzf6yvqexdms4r0v8li.mp3"
        preload="auto"
      />
    </div>
  );
};

export default MusicToggleIcon;
