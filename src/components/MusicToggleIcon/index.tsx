import React, { useRef, useState } from "react";
import { HiMusicNote, HiVolumeOff } from "react-icons/hi";

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
      className="fixed bottom-4 z-[999] left-4 p-2 bg-wedding-deep rounded-full shadow-lg cursor-pointer transition-all duration-300 flex items-center space-x-2"
      onClick={toggleMusic}
    >
      <div
        className={`bars-container ${
          isPlaying ? "bars-active" : "bars-paused"
        }`}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bar"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
      {isPlaying ? (
        <HiMusicNote className="text-white text-3xl" />
      ) : (
        <HiVolumeOff className="text-white text-3xl" />
      )}
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
