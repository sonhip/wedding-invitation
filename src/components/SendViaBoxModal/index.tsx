import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import imageQrBride from "../../assets/others/qr.png";

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

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto max-h-[450px]">
          {/* Box Cô Dâu */}
          <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-center text-xl font-semibold text-wedding-deep mb-4">
              Mừng Cưới Cô Dâu
            </h3>
            <img
              src={imageQrBride}
              alt="Cô Dâu"
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-purple">
              Ngân hàng: Vietcombank <br /> Tên: Phạm Thị Thu Trang <br /> STK:
              9367565924
            </p>
          </div>

          {/* Box Chú Rể */}
          {/* <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-center text-xl font-semibold text-wedding-deep mb-4">
              Mừng Cưới Chú Rể
            </h3>
            <img
              src={imageQrGroom}
              alt="Chú Rể"
              className="w-full h-auto object-cover mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-purple">
              Ngân hàng: Techcombank <br /> Tên: Nguyễn Trường Sinh <br /> STK:
              940311888888
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
