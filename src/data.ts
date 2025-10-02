// Wedding Information Data
export const weddingData = {
  // Couple Information
  bride: {
    fullName: "Nguyễn Hoàng Trang",
    shortName: "Trang",
    photo: "/images/cd2.jpg",
  },
  groom: {
    fullName: "Lê Văn Sinh",
    shortName: "Sinh",
    photo: "/images/HNV_1945.jpg",
  },

  // Wedding Date & Time
  weddingDate: {
    date: "23.11.2025",
    time: "10 Giờ 30 Chủ Nhật",
    fullDateTime: "2025-11-29T07:20:00", // For countdown
    lunarDate: "Nhằm ngày 04 tháng 10 năm Ất Tỵ",
  },

  // Family Information
  brideFamily: {
    father: "NGUYỄN VIẾT THI",
    mother: "HUỲNH THỊ HÀ",
    address: "Chiên Đàn, TP. Đà Nẵng",
  },
  groomFamily: {
    father: "LÊ VĂN DIỆM",
    mother: "NGÔ THỊ HỒNG",
    address: "Cẩm Lệ, TP. Đà Nẵng",
  },

  // Venue Information
  venue: {
    name: "Nhà Hàng Tiệc Cưới Thịnh Phát",
    address: "98 Hùng Vương, Tam Kỳ, TP. Đà Nẵng",
    floor: "Sảnh Tầng 3",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15373.687962900527!2d108.45641434192662!3d15.56908658707388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dcde651ba12b%3A0xc08d55b86d48a34f!2zTmjDoCBIw6BuZyBU4buVIENo4bupYyBUaeG7h2MgQ8aw4bubaSBUaOG7i25oIFBow6F0!5e0!3m2!1svi!2s!4v1759407873143!5m2!1svi!2s",
  },

  // Bank Information for QR Code
  bankInfo: {
    accountNo: "5622408129",
    accountName: "NGUYEN HOANG TRANG",
    bankId: "BIDV",
    bankName: "Ngân hàng Thương mại Cổ phần Đầu tư và Phát triển Việt Nam",
    template: "compact",
    transferNote: "Mung cuoi Hoang Trang - Van Sinh",
  },

  // Gallery Images
  galleryImages: [
    // { src: "/images/v/HNV_0255.jpg", alt: "Wedding Photo 1", type: "wedding" },
    { src: "/images/v/HNV_0393 copy.jpg", alt: "Bride Photo 1", type: "bride" },
    { src: "/images/v/HNV_1658.jpg", alt: "Wedding Photo 4", type: "wedding" },
    { src: "/images/v/HNV_0510.jpg", alt: "Groom Photo 1", type: "groom" },
    // { src: "/images/v/HNV_0716.jpg", alt: "Wedding Photo 2", type: "wedding" },
    { src: "/images/v/HNV_0763.jpg", alt: "Bride Photo 2", type: "bride" },
    { src: "/images/v/HNV_1708.jpg", alt: "Wedding Photo 4", type: "wedding" },
    { src: "/images/v/HNV_1371.jpg", alt: "Groom Photo 2", type: "groom" },
    { src: "/images/v/HNV_1388.jpg", alt: "Wedding Photo 3", type: "wedding" },
    { src: "/images/v/HNV_1787.jpg", alt: "Wedding Photo 4", type: "wedding" },
  ],

  // Amount Presets for QR Code
  amountPresets: [150000, 200000, 300000, 500000],
};
