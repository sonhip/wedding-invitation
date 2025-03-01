import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const SendViaBoxModal: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="btn mt-8 px-6 py-3 bg-wedding-deep text-wedding-light text-lg md:text-xl font-semibold rounded-lg transition">
        Gửi lời chúc qua hộp cưới
      </DialogTrigger>

      <DialogContent className="bg-white p-6 rounded-lg shadow-xl max-w-full sm:max-w-[800px] mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-wedding-deep text-center">
            Gửi lời chúc qua hộp cưới tới cô dâu và chú rể!!!
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 overflow-auto max-h-[450px]">
          {/* Box Cô Dâu */}
          <div className="border p-4 rounded-lg shadow-md mx-auto w-96">
            <h3 className="text-center text-xl font-semibold text-wedding-deep mb-4">
              Mừng Cưới Cô Dâu
            </h3>
            <img
              src={
                "https://res.cloudinary.com/db8mh2s66/image/upload/v1740788711/wedding-images/uxxy8g8ok0evugoiu4sy.jpg"
              }
              alt="Cô Dâu"
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-purple">
              Ngân hàng: TMCP Công Thương Việt Nam <br /> Tên: Bùi Minh Anh{" "}
              <br /> STK: 109875166812
            </p>
          </div>

          {/* Box Chú Rể */}
          {/* <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-center text-xl font-semibold text-wedding-deep mb-4">
              Mừng Cưới Chú Rể
            </h3>
            <img
              src={""}
              alt="Chú Rể"
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-purple">
              Ngân hàng: Techcombank <br /> Tên: Trần Văn Hiệp <br /> STK: 8888
            </p>
          </div> */}
        </div>

        <div className="mt-6 flex justify-center">
          <DialogTrigger asChild>
            <button className="px-6 py-2 bg-wedding-deep text-wedding-light text-lg font-semibold rounded-lg">
              Đóng
            </button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendViaBoxModal;
