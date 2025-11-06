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

const ConfirmModalButton: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      toast({
        title: "Lỗi!",
        description: "Vui lòng điền đầy đủ thông tin!",
        duration: 3000,
        className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
      });
      return;
    }

    // Định dạng toàn bộ thông tin thành một chuỗi duy nhất
    const emailParams = {
      message: `
      📌 Thông tin đăng ký:
      - 👤 Họ và tên: ${name}
      - 📞 Số điện thoại: ${phone}
      - 📝 Ghi chú: ${note || "Không có ghi chú"}
      - 📅 Ngày gửi: ${new Date().toLocaleString()}
    `,
    };

    send(emailjsConfig.serviceId, emailjsConfig.templateId, emailParams)
      .then(() => {
        toast({
          title: "Thông tin đã được gửi!",
          description: "Cảm ơn bạn đã gửi thông tin xác nhận!",
          duration: 3000,
          className: "bg-green-500 text-white rounded-lg p-4 shadow-lg",
        });

        setName("");
        setPhone("");
        setNote("");
      })
      .catch((error: any) => {
        console.error("Lỗi khi gửi email:", error);
        toast({
          title: "Lỗi!",
          description: "Không thể gửi email. Vui lòng thử lại!",
          duration: 3000,
          className: "bg-red-500 text-white rounded-lg p-4 shadow-lg",
        });
      });
  };

  return (
    <Dialog>
      <DialogTrigger className="btn mt-8 px-6 py-3 bg-wedding-deep text-wedding-light text-lg md:text-xl font-semibold rounded-lg transition">
        Xác nhận tham gia
      </DialogTrigger>

      <DialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-wedding-deep">
            Xác nhận thông tin của bạn
          </DialogTitle>
          <DialogDescription className="text-wedding-purple mt-4">
            Vui lòng điền tên, số điện thoại và ghi chú (nếu có) của bạn.
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
              htmlFor="phone"
              className="block text-wedding-deep font-medium"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              id="phone"
              className="mt-2 p-3 w-full border border-wedding-purple rounded-lg focus:ring-2 bg-transparent focus:ring-wedding-deep"
              placeholder="Nhập số điện thoại của bạn"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="note"
              className="block text-wedding-deep font-medium"
            >
              Ghi chú (nếu có)
            </label>
            <textarea
              id="note"
              className="mt-2 p-3 w-full h-32 border border-wedding-purple bg-transparent rounded-lg focus:ring-2 focus:ring-wedding-deep"
              placeholder="Nhập ghi chú của bạn"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <DialogTrigger asChild>
              <button
                type="submit"
                className="px-6 py-2 bg-wedding-deep text-wedding-light text-lg font-semibold rounded-lg"
              >
                Xác Nhận
              </button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModalButton;
