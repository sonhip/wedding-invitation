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

const WishModalButton: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || message.trim() === "") {
      // Thông báo lỗi
      toast({
        title: "Lỗi!",
        description: "Vui lòng điền đầy đủ thông tin!",
        duration: 3000, // Thời gian hiển thị của toast
        className: "bg-orange-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho lỗi
      });
      return;
    }

    setName("");
    setMessage("");

    // Thông báo gửi thành công
    toast({
      title: "Lời chúc đã được gửi!",
      description:
        "Cảm ơn bạn đã gửi lời chúc tốt đẹp dành cho cô dâu và chú rể!",
      duration: 3000, // Thời gian hiển thị của toast
      className: "bg-green-500 text-white rounded-lg p-4 shadow-lg", // Tailwind class cho thành công
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="btn mt-8 px-6 py-3 bg-wedding-deep text-wedding-light text-lg md:text-xl font-semibold rounded-lg transition">
          Gửi Lời Chúc
        </button>
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
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 bg-transparent focus:ring-wedding-deep"
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
              className="mt-2 p-3 w-full h-32 border bg-transparent rounded-lg focus:ring-2 focus:ring-wedding-deep"
              placeholder="Nhập lời chúc của bạn"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <DialogTrigger asChild>
              <button
                type="submit"
                className="px-6 py-2 bg-wedding-deep text-wedding-light text-lg font-semibold rounded-lg"
              >
                Gửi Lời Chúc
              </button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WishModalButton;
