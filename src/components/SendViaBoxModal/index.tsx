import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  GIFT_BOX_TITLE,
  GIFT_BOX_BUTTON_TEXT,
  BRIDE_GIFT_TITLE,
  BRIDE_GIFT_QR_CODE,
  BRIDE_GIFT_BANK_NAME,
  BRIDE_GIFT_ACCOUNT_NAME,
  BRIDE_GIFT_ACCOUNT_NUMBER,
  GROOM_GIFT_TITLE,
  GROOM_GIFT_QR_CODE,
  GROOM_GIFT_BANK_NAME,
  GROOM_GIFT_ACCOUNT_NAME,
  GROOM_GIFT_ACCOUNT_NUMBER,
} from "@/config/const";
import React from "react";

const SendViaBoxModal: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="btn mt-8 px-6 py-3 bg-wedding-cream text-wedding-brown text-lg md:text-xl font-semibold rounded-lg hover:bg-wedding-cream/90 transition">
        {GIFT_BOX_BUTTON_TEXT}
      </DialogTrigger>

      <DialogContent className="bg-wedding-cream p-4 sm:p-6 rounded-lg shadow-xl max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-wedding-brown text-center">
            {GIFT_BOX_TITLE}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
          {/* Box Cô Dâu */}
          <div className="border border-wedding-brown/20 bg-white p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-center text-lg sm:text-xl font-semibold text-wedding-brown mb-3 sm:mb-4">
              {BRIDE_GIFT_TITLE}
            </h3>
            <img
              src={BRIDE_GIFT_QR_CODE}
              alt="Cô Dâu"
              className="w-full max-w-[280px] sm:max-w-sm mx-auto h-auto object-contain mb-3 sm:mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-brown/80 text-sm sm:text-base">
              <span className="font-medium">Ngân hàng:</span>{" "}
              {BRIDE_GIFT_BANK_NAME} <br />
              <span className="font-medium">Tên:</span>{" "}
              {BRIDE_GIFT_ACCOUNT_NAME} <br />
              <span className="font-medium">STK:</span>{" "}
              {BRIDE_GIFT_ACCOUNT_NUMBER}
            </p>
          </div>

          {/* Box Chú Rể */}
          <div className="border border-wedding-brown/20 bg-white p-3 sm:p-4 rounded-lg shadow-md">
            <h3 className="text-center text-lg sm:text-xl font-semibold text-wedding-brown mb-3 sm:mb-4">
              {GROOM_GIFT_TITLE}
            </h3>
            <img
              src={GROOM_GIFT_QR_CODE}
              alt="Chú Rể"
              className="w-full max-w-[280px] sm:max-w-sm mx-auto h-auto object-contain mb-3 sm:mb-4 rounded-lg"
            />
            <p className="text-center text-wedding-brown/80 text-sm sm:text-base">
              <span className="font-medium">Ngân hàng:</span>{" "}
              {GROOM_GIFT_BANK_NAME} <br />
              <span className="font-medium">Tên:</span>{" "}
              {GROOM_GIFT_ACCOUNT_NAME} <br />
              <span className="font-medium">STK:</span>{" "}
              {GROOM_GIFT_ACCOUNT_NUMBER}
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <DialogTrigger asChild>
            <button className="px-4 sm:px-6 py-2 bg-wedding-brown text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-wedding-brown/90 transition-colors">
              Đóng
            </button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendViaBoxModal;
