import { useState } from "react";
import { weddingData } from "../data";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    numberOfGuests: "1",
    accompaniedBy: "",
    guestOf: "Cô dâu",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  // QR Modal states
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [qrCode, setQrCode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Sử dụng Web3Forms - Miễn phí, không cần backend
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "Xác nhận tham dự đám cưới - " + formData.name,
          from_name: formData.name,
          name: formData.name,
          message: formData.message,
          numberOfGuests: formData.numberOfGuests,
          accompaniedBy: formData.accompaniedBy,
          guestOf: formData.guestOf,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          message: "",
          numberOfGuests: "",
          accompaniedBy: "",
          guestOf: "Cô dâu",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // QR Modal handlers
  const openQRModal = () => {
    setIsQRModalOpen(true);
    // Tạo QR code cố định không cần số tiền
    const { accountNo, accountName, bankId, template, transferNote } =
      weddingData.bankInfo;
    const qrUrl = `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.png?addInfo=${encodeURIComponent(
      transferNote
    )}&accountName=${encodeURIComponent(accountName)}`;
    setQrCode(qrUrl);
  };

  const closeQRModal = () => {
    setIsQRModalOpen(false);
    setQrCode("");
  };

  return (
    <section className="rsvp-section scroll-reveal">
      <h2 className="section-title adelia-font">Xác Nhận Tham Dự</h2>

      <div className="rsvp-intro">
        <p>
          Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị
          <br />
          đón tiếp một cách chu đáo nhất. Trân trọng!
        </p>
      </div>

      <div className="rsvp-form-container">
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label className="form-label">
              Tên của bạn <span className="required-star">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên của bạn"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Gửi lời nhắn đến cô dâu chú rể</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Viết lời nhắn của bạn..."
              rows={4}
              className="form-input form-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                Bạn sẽ đến chứ? <span className="required-star">*</span>
              </label>
              <select
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
                className="form-input form-select"
              >
                <option value="">-- Chọn --</option>
                <option value="Có, tôi sẽ đến">Có, tôi sẽ đến</option>
                <option value="Rất tiếc, tôi không thể đến">Rất tiếc, tôi không thể đến</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Bạn đi cùng ai?</label>
              <input
                type="text"
                name="accompaniedBy"
                value={formData.accompaniedBy}
                onChange={handleChange}
                placeholder="Ví dụ: Gia đình, Bạn bè..."
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Bạn là khách mời của ai?</label>
            <select
              name="guestOf"
              value={formData.guestOf}
              onChange={handleChange}
              className="form-input form-select"
            >
              <option value="Cô dâu">Cô dâu</option>
              <option value="Chú rể">Chú rể</option>
              <option value="Cả hai">Cả hai</option>
            </select>
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-rsvp-button"
            >
              {isSubmitting ? "Đang gửi..." : "GỬI LỜI NHẮN"}
            </button>

            <button type="button" onClick={openQRModal} className="gift-button">
              MỪNG CƯỚI
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="submit-message success">
              <p>✓ Cảm ơn bạn đã xác nhận! Chúng mình rất mong được gặp bạn.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="submit-message error">
              <p>✗ Có lỗi xảy ra. Vui lòng thử lại sau.</p>
            </div>
          )}
        </form>
      </div>

      {/* QR Modal */}
      {isQRModalOpen && (
        <div className="qr-modal-overlay" onClick={closeQRModal}>
          <div
            className="qr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="qr-modal-close" onClick={closeQRModal}>
              ×
            </button>

            <h3 className="qr-modal-title adelia-font">Gửi Lời Chúc Mừng</h3>
            <p className="qr-modal-subtitle">
              Quét mã QR bên dưới để gửi lời chúc mừng đến cô dâu chú rể
            </p>

            <div className="qr-result">
              <img src={qrCode} alt="QR Code" />
              <div className="qr-bank-info">
                <p>
                  <strong>Ngân hàng:</strong> {weddingData.bankInfo.bankName}
                </p>
                <p>
                  <strong>Số tài khoản:</strong>{" "}
                  {weddingData.bankInfo.accountNo}
                </p>
                <p>
                  <strong>Chủ tài khoản:</strong>{" "}
                  {weddingData.bankInfo.accountName}
                </p>
                <p className="qr-note">💝 Cảm ơn tình cảm của bạn</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
