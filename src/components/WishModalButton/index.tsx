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
init("engo7mL1i7oAzFIgy"); // Thay bằng Public Key của bạn

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
      await send("service_qvdyek7", "template_12xrwrp", emailParams);

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

      <DialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-wedding-deep">
            Hãy để lại những lời chúc tốt đẹp dành cho cô dâu và chú rể
          </DialogTitle>
          <DialogDescription className="text-wedding-purple mt-4">
            Vui lòng điền tên và lời chúc của bạn cho cô dâu và chú rể.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-wedding-deep font-medium"
            >
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 p-3 w-full border border-wedding-purple rounded-lg focus:ring-2 bg-transparent focus:ring-wedding-deep"
              placeholder="Nhập tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-wedding-deep font-medium"
            >
              Lời chúc của bạn
            </label>
            <textarea
              id="message"
              className="mt-2 p-3 w-full h-32 border border-wedding-purple bg-transparent rounded-lg focus:ring-2 focus:ring-wedding-deep"
              placeholder="Nhập lời chúc của bạn"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <DialogTrigger
              type="submit"
              className="px-6 py-2 bg-wedding-deep text-wedding-light text-lg font-semibold rounded-lg"
            >
              Gửi Lời Chúc
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WishModalButton;
