import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from "react";
import { HiMusicNote, HiVolumeOff } from "react-icons/hi";

const MusicToggleIcon: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái nhạc
  const [audio] = useState(
    new Audio(
      "https://lehau-thutrang-wedding.s3.ap-southeast-1.amazonaws.com/beautiful_in_white.mp3"
    )
  ); // Tạo instance Audio
  const [isLoaded, setIsLoaded] = useState(false); // Trạng thái nhạc đã sẵn sàng
  const { toast } = useToast();

  // Xử lý toggle nhạc
  const toggleMusic = () => {
    if (!isLoaded) {
      toast({
        title: "Đang tải nhạc",
        description: "Vui lòng chờ nhạc tải xong trước khi phát!",
        className: "bg-yellow-500 text-white rounded-lg p-4 shadow-lg",
        duration: 2000,
      });
      return;
    }

    if (!isPlaying) {
      audio.play().catch((error) => {
        console.error("Lỗi phát nhạc: ", error.message);
        toast({
          title: "Không thể phát nhạc",
          description: "Vui lòng thử lại!",
          className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
          duration: 2000,
        });
      });

      toast({
        title: "Nhạc đã bật",
        description: "Đang phát Beautiful In White.",
        className: "bg-green-500 text-white rounded-lg p-4 shadow-lg",
        duration: 2000,
      });
    } else {
      audio.pause();
      toast({
        title: "Nhạc đã tắt",
        description: "Nhạc đã được dừng.",
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
        duration: 2000,
      });
    }

    setIsPlaying((prev) => !prev);
  };

  // Đảm bảo nhạc tải xong trước khi cho phép phát
  useEffect(() => {
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      console.error("Lỗi tải nhạc.");
      toast({
        title: "Lỗi tải nhạc",
        description: "Không thể tải file nhạc.",
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
        duration: 2000,
      });
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("error", handleError);
      audio.pause(); // Dừng nhạc khi component bị unmount
    };
  }, [audio, toast]);

  // Giao diện
  return (
    <div
      onClick={toggleMusic}
      className="fixed bottom-2 left-4 p-4 bg-wedding-deep rounded-full shadow-lg cursor-pointer transition-all duration-300"
    >
      {isPlaying ? (
        <HiMusicNote className="text-white text-3xl" />
      ) : (
        <HiVolumeOff className="text-white text-3xl" />
      )}
    </div>
  );
};

export default MusicToggleIcon;
