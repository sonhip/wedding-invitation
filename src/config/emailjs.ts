export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

// Kiểm tra xem tất cả config có được cung cấp không
export const validateEmailjsConfig = () => {
  if (!emailjsConfig.publicKey) {
    throw new Error(
      "VITE_EMAILJS_PUBLIC_KEY is not defined in environment variables"
    );
  }
  if (!emailjsConfig.serviceId) {
    throw new Error(
      "VITE_EMAILJS_SERVICE_ID is not defined in environment variables"
    );
  }
  if (!emailjsConfig.templateId) {
    throw new Error(
      "VITE_EMAILJS_TEMPLATE_ID is not defined in environment variables"
    );
  }
};
