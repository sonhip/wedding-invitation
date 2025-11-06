import { Stage } from "@/pages/about-us-section";

/**
 * config/const.ts
 * Các hằng số cấu hình dùng toàn cục cho trang invitation
 * - Chia rõ section và thêm comment tiếng Việt để dễ hiểu
 */

/* ===========================
    Basic Info (Tên & Mô tả)
    =========================== */
// Tên cô dâu
export const BRIDE_NAME = "Thanh Thư";
// Mô tả ngắn về cô dâu
export const BRIDE_DESCRIPTION = "Cô dâu xinh đẹp và dễ thương.";

// Tên chú rể
export const GROOM_NAME = "Mạnh Thắng";
// Mô tả ngắn về chú rể
export const GROOM_DESCRIPTION = "Chú rể đẹp trai và thông minh.";

/* ===========================
    Hero (Phần chính trang chủ)
    =========================== */
// Ngày & địa điểm chính của đám cưới hiển thị trên hero
export const WEDDING_DATE = "30/11/2025";
// Mảng ảnh hiển thị trong hero (carousel/background)
export const HERO_IMAGES = [
  "/images/gray-xy1.jpg",
  "/images/gray-xy3.jpg",
  "/images/pink-xy10.jpg",
  "/images/white-xy4.jpg",
  "/images/pink-xy7.jpg",
  "/images/red-xy1.jpg",
  "/images/red-xy3.jpg",
  "/images/white-xy2.jpg",
];

/* ===========================
    People (Ảnh & thông tin cô dâu/chú rể)
    =========================== */
// Ảnh đại diện cô dâu & chú rể dùng trong các section giới thiệu
export const BRIDE_IMAGE = "/images/white-x.jpg";
export const GROOM_IMAGE = "/images/white-y.jpg";

/* ===========================
    Countdown (Đếm ngược)
    =========================== */
// Tiêu đề cho phần đếm ngược
export const COUNTDOWN_TITLE = "Đếm ngược đến ngày cưới cùng chúng mình";

/* ===========================
    Event Details (Chi tiết sự kiện)
    =========================== */
// Tiêu đề & mô tả chung cho phần sự kiện
export const EVENT_SECTION_TITLE = "Sự Kiện Cưới";
export const EVENT_SECTION_DESCRIPTION =
  "Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày mệt mỏi.";

/* ---- Tiệc nhà gái ---- */
// Tiêu đề, ngày giờ, địa điểm và link bản đồ cho tiệc nhà gái
export const BRIDE_EVENT_TITLE = "Tiệc nhà gái được tổ chức vào";
export const BRIDE_EVENT_DATE = "30/11/2025";
export const BRIDE_EVENT_TIME = "10h40";
export const BRIDE_EVENT_LOCATION =
  "thôn An Cố Nam, xã An Tân, huyện Thái Thuỵ, tỉnh Thái Bình";
export const BRIDE_EVENT_MAP_LINK = "https://maps.app.goo.gl/PmmosgLui9XWDGJp6";

/* ---- Tiệc nhà trai ---- */
// Tiêu đề, ngày giờ, địa điểm và link bản đồ cho tiệc nhà trai
export const GROOM_EVENT_TITLE = "Tiệc nhà trai được tổ chức vào";
export const GROOM_EVENT_DATE = "30/11/2025";
export const GROOM_EVENT_TIME = "13h30";
export const GROOM_EVENT_LOCATION =
  "thôn Chè núi, xã Liên Bão, huyện Tiên Du, tỉnh Bắc Ninh";
export const GROOM_EVENT_MAP_LINK = "https://maps.app.goo.gl/tdL5wGEa2q3qEdRy9";

/* ===========================
    Thank You (Lời cảm ơn)
    =========================== */
export const THANK_YOU_TITLE = "Cảm ơn bạn!";
export const THANK_YOU_MESSAGE_1 =
  "Chúng tôi rất vui khi được chia sẻ khoảnh khắc đặc biệt này với bạn.";
export const THANK_YOU_MESSAGE_2 =
  "Mong rằng bạn sẽ luôn đồng hành cùng chúng tôi trong hành trình phía trước.";

/* ===========================
    Gallery (Album hình)
    =========================== */
// Tiêu đề phần album và danh sách ảnh hiển thị trong gallery
export const GALLERY_TITLE = "Album Hình Cưới";
export const GALLERY_CAROUSEL = [
  "/images/gray-xy1.jpg",
  "/images/pink-xy1.jpg",
  "/images/white-xy1.jpg",
  "/images/red-xy1.jpg",
  "/images/gray-xy2.jpg",
  "/images/pink-xy2.jpg",
  "/images/white-xy2.jpg",
  "/images/red-xy2.jpg",
];
export const GALLERY_IMAGES = [
  "/images/gray-xy1.jpg",
  "/images/gray-xy2.jpg",
  "/images/gray-xy3.jpg",
  "/images/gray-xy4.jpg",
  "/images/gray-xy5.jpg",
  "/images/pink-xy1.jpg",
  "/images/pink-xy2.jpg",
  "/images/pink-xy3.jpg",
  "/images/pink-xy4.jpg",
  "/images/pink-xy5.jpg",
  "/images/pink-xy6.jpg",
  "/images/pink-xy7.jpg",
  "/images/pink-xy8.jpg",
  "/images/pink-xy9.jpg",
  "/images/pink-xy10.jpg",
  "/images/red-xy1.jpg",
  "/images/red-xy2.jpg",
  "/images/red-xy3.jpg",
  "/images/red-xy4.jpg",
  "/images/red-xy5.jpg",
  "/images/red-xy6.jpg",
  "/images/white-x.jpg",
  "/images/white-y.jpg",
  "/images/white-xy1.jpg",
  "/images/white-xy2.jpg",
  "/images/white-xy3.jpg",
  "/images/white-xy4.jpg",
  "/images/white-xy5.jpg",
  "/images/white-xy6.jpg",
  "/images/white-xy7.jpg",
];

/* ===========================
    Gift Box / Wedding Envelope (Hộp mừng cưới)
    =========================== */
// Tiêu đề modal hộp mừng cưới
export const GIFT_BOX_TITLE =
  "Gửi lời chúc qua hộp cưới tới cô dâu và chú rể!!!";
export const GIFT_BOX_BUTTON_TEXT = "Gửi lời chúc qua hộp cưới";

// Thông tin tài khoản cô dâu
export const BRIDE_GIFT_TITLE = "Mừng Cưới Tới Cô Dâu";
export const BRIDE_GIFT_QR_CODE = "/images/qrcode-bride.jpg";
export const BRIDE_GIFT_BANK_NAME = "VietinBank CN BAC HAI PHONG - HOI SO";
export const BRIDE_GIFT_ACCOUNT_NAME = "NGUYEN THI THANH THU";
export const BRIDE_GIFT_ACCOUNT_NUMBER = "0398138501";

// Thông tin tài khoản chú rể
export const GROOM_GIFT_TITLE = "Mừng Cưới Tới Chú Rể";
export const GROOM_GIFT_QR_CODE = "/images/qrcode-groom.jpg";
export const GROOM_GIFT_BANK_NAME = "VietinBank CN BAC HAI PHONG - HOI SO";
export const GROOM_GIFT_ACCOUNT_NAME = "NGUYEN MANH THANG";
export const GROOM_GIFT_ACCOUNT_NUMBER = "100867657407";

/* ===========================
    About / Story Stages (Các giai đoạn câu chuyện)
    =========================== */
// Mảng các giai đoạn để hiển thị phần "About us" hoặc timeline
export const STAGES: Stage[] = [
  {
    title: "Bắt đầu từ một ngày mùa xuân nào đó",
    description:
      "Cuộc hội ngộ của hai mảnh ghép đơn lẻ. Chúng mình đã vô tình tìm thấy nhau giữa biển người bao la rộng lớn. Và dù có những xa lạ và bỡ ngỡ ban đầu, chúng mình vẫn quyết định cùng cho nhau một cơ hội để nán lại tìm hiểu người kia thêm một chút. Và câu chuyện tình này bắt đầu..",
    image: "/images/white-x.jpg",
  },
  {
    title: "Cột mốc đáng nhớ",
    description:
      'Quyết định quan trọng. Giống như mọi bản nhạc đều sẽ có lúc thăng trầm, câu chuyện sẽ có lúc lên xuống, chúng mình đã cùng nhau trải qua những khoảnh khắc vui, buồn, giận, hờn bên nhau. Và rồi ngày đó đã đến, sau thời gian cùng nhau điều chỉnh, "mài giũa", hai mảnh ghép quyết định sẽ không xuôi theo dòng chảy của riêng mình nữa. Chúng mình quyết định dừng chân để là bến đỗ cuối cùng của nhau...',
    image: "/images/white-y.jpg",
  },
  {
    title: "30/11/2025 và sau nữa",
    description:
      'Ngày chung đôi. Câu chuyện khởi đầu vào mùa xuân, nên chúng mình muốn viết nên một cái kết hạnh phúc vào mùa đông. Để mùa xuân tiếp theo, chúng mình sẽ cùng nhau viết nên một câu chuyện khác, nhưng giờ với một vai trò mới, là "Vợ", là "Chồng". Vào ngày 30/11/2025 tới này, mong bạn đến chung vui và cùng chứng kiến cái kết hạnh phúc cho câu chuyện chúng mình, và cùng nhau mở ra một hành trình mới nhé!',
    image: "/images/white-xy3.jpg",
  },
];
