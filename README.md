# 💍 Wedding Invitation Website

Website thiệp cưới hiện đại, xây dựng bằng React + TypeScript + Vite + Tailwind CSS. Cho phép khách mời xem thông tin sự kiện, gửi lời chúc và xác nhận tham dự.

## 🚀 Tính năng

- Giao diện đẹp, responsive cho mọi thiết bị
- Gửi lời chúc tới cô dâu chú rể qua EmailJS
- Xác nhận tham dự sự kiện
- Hiển thị thông tin, hình ảnh, đếm ngược, thư cảm ơn, v.v.

## 🛠️ Công nghệ sử dụng

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## ⚡ Cài đặt & chạy local

```bash
# Clone project
git clone https://github.com/your-username/wedding-invitation.git
cd wedding-invitation

# Cài đặt dependencies
yarn install

# Chạy dev server
yarn dev
```

Truy cập [http://localhost:5173](http://localhost:5173) để xem website.

## 🔑 Cấu hình EmailJS

1. Đăng ký tài khoản tại [EmailJS](https://www.emailjs.com/)
2. Tạo Service, Template và lấy Public Key
3. Thêm các thông tin vào file `.env`:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

> **Lưu ý:** Không commit file `.env` lên repo công khai.

## 📁 Cấu trúc thư mục

```
src/
  assets/           # Hình ảnh, icon
  components/       # Các component UI, modal, form
  hooks/            # Custom hooks
  lib/              # Tiện ích dùng chung
  pages/            # Các section nội dung
public/             # Ảnh, favicon, tệp tĩnh
```

## 🧑‍💻 Phát triển

- Sử dụng ESLint, Prettier để giữ code sạch
- Tùy chỉnh theme, nội dung trong các file ở `src/pages/` và `src/components/`
- Thay đổi thông tin sự kiện trong các section tương ứng

## 🛡️ Lưu ý bảo mật

- Không để lộ Public Key, Service ID, Template ID của EmailJS trên repo công khai
- Sử dụng `.env.example` để hướng dẫn cấu hình
- Thêm `.env*` vào `.gitignore`

## 🌐 Deploy

Bạn có thể deploy lên Vercel, Netlify, hoặc bất kỳ dịch vụ static hosting nào:

```bash
yarn build
```

Sau đó upload thư mục `dist/` lên hosting.

## 📄 License

MIT
