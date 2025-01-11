import { useToast } from "@/hooks/use-toast";
import React, { useState, useEffect } from "react";
import { HiMusicNote, HiVolumeOff } from "react-icons/hi"; // Icon của react-icons
import beautifulInWhite from "../../assets/beautiful_in_white.mp3";

const MusicToggleIcon: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái nhạc (mặc định là không phát)
  const [audio] = useState(new Audio(beautifulInWhite)); // Đường dẫn đến file nhạc
  const { toast } = useToast();

  // Hàm toggle nhạc (mở/tắt)
  const toggleMusic = () => {
    if (!isPlaying) {
      // Nếu nhạc chưa được bật, cố gắng phát nhạc khi người dùng nhấn vào biểu tượng
      audio.play().catch((error) => {
        console.error("Error playing audio: ", error);
        toast({
          title: "Lỗi phát nhạc",
          description: "Có lỗi khi phát nhạc!",
          className: "bg-red-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho lỗi
          duration: 2000,
        });
      });

      toast({
        title: "Nhạc đã bật",
        description: "Nhạc đang phát!",
        className: "bg-green-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho thành công
        duration: 2000,
      });
    } else {
      // Nếu nhạc đang phát, dừng nhạc
      audio.pause();
      toast({
        title: "Nhạc đã tắt",
        description: "Nhạc đã được tắt!",
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho thành công
        duration: 2000,
      });
    }

    // Đảo trạng thái của nhạc
    setIsPlaying((prev) => !prev);
  };

  // Tự động phát nhạc nếu cần sau khi người dùng nhấn vào biểu tượng
  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio: ", error);
        toast({
          title: "Lỗi phát nhạc",
          description: "Có lỗi khi phát nhạc!",
          className: "bg-red-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho lỗi
          duration: 2000,
        });
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause(); // Dừng nhạc khi component bị unmount
    };
  }, [isPlaying, audio]); // Khi isPlaying thay đổi, phát nhạc

  return (
    <div
      onClick={toggleMusic}
      className="fixed bottom-4 left-4 p-4 bg-wedding-deep rounded-full shadow-lg cursor-pointer transition-all duration-300"
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
