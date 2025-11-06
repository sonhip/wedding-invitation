import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { init, send } from "emailjs-com";
import { emailjsConfig, validateEmailjsConfig } from "@/config/emailjs";

// Khởi tạo EmailJS với Public Key từ environment variable
validateEmailjsConfig();
init(emailjsConfig.publicKey);

const WishModalButton: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      toast({
        title: "Lỗi!",
        description: "Vui lòng điền đầy đủ thông tin!",
        duration: 3000,
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
      });
      return;
    }

    // Định dạng dữ liệu thành một chuỗi duy nhất
    const emailParams = {
      message: `
        🎉 Lời chúc mới từ:
        - 👤 Tên: ${name}
        - 📝 Lời chúc: ${message}
        - 📅 Ngày gửi: ${new Date().toLocaleString()}
      `,
    };

    try {
      await send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailParams
      );

      toast({
        title: "Lời chúc đã được gửi!",
        description: "Cảm ơn bạn đã gửi lời chúc!",
        duration: 3000,
        className: "bg-green-500 text-white rounded-lg p-4 shadow-lg",
      });

      setName("");
      setMessage("");
    } catch (error) {
      console.error("Lỗi khi gửi email:", error);
      toast({
        title: "Lỗi!",
        description: "Có lỗi khi gửi dữ liệu!",
        duration: 3000,
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="btn mt-8 px-6 py-3 bg-wedding-deep text-wedding-light text-lg md:text-xl font-semibold rounded-lg transition">
        Gửi Lời Chúc
      </DialogTrigger>

      <DialogContent className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-[95vw] sm:max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-wedding-deep">
            Hãy để lại những lời chúc tốt đẹp dành cho cô dâu và chú rể
          </DialogTitle>
          <DialogDescription className="text-wedding-purple mt-2 sm:mt-4 text-sm sm:text-base">
            Vui lòng điền tên và lời chúc của bạn cho cô dâu và chú rể.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="mt-4 sm:mt-6 space-y-3 sm:space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-wedding-deep font-medium text-sm sm:text-base"
            >
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 p-2 sm:p-3 w-full border border-wedding-purple rounded-lg focus:ring-2 bg-transparent focus:ring-wedding-deep text-base"
              placeholder="Nhập tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-wedding-deep font-medium text-sm sm:text-base"
            >
              Lời chúc của bạn
            </label>
            <textarea
              id="message"
              className="mt-2 p-2 sm:p-3 w-full h-24 sm:h-32 border border-wedding-purple bg-transparent rounded-lg focus:ring-2 focus:ring-wedding-deep text-base"
              placeholder="Nhập lời chúc của bạn"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mt-4 sm:mt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 bg-wedding-deep text-wedding-light text-base sm:text-lg font-semibold rounded-lg hover:bg-wedding-deep/90 transition-colors"
            >
              Gửi Lời Chúc
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WishModalButton;
