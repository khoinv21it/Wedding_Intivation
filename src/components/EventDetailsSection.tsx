import { weddingData } from "../data";

export default function EventDetailsSection() {
  return (
    <section className="event-details-section scroll-reveal">
      <h2 className="section-title adelia-font" style={{ textAlign: "center" }}>
        Trân Trọng Kính Mời
      </h2>
      <div className="event-card">
        <div className="bride-groom-photos">
          <div className="bride-photo">
            <img src={weddingData.bride.photo} alt="Cô dâu" />
          </div>
          <div className="groom-photo">
            <img src={weddingData.groom.photo} alt="Chú rể" />
          </div>
        </div>
        <span className="heart-icon">♥</span>
        <h3>{weddingData.venue.name}</h3>
        <p>
          <strong>Địa chỉ:</strong> {weddingData.venue.address}
        </p>
        <p>({weddingData.venue.floor})</p>
        <p>
          <strong>Thời gian:</strong> {weddingData.weddingDate.time}
        </p>
        <p>
          <strong>Ngày:</strong> {weddingData.weddingDate.date}
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          ({weddingData.weddingDate.lunarDate})
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            marginTop: "15px",
            fontStyle: "italic",
          }}
        >
          Sự hiện diện của Quý Khách
          <br />
          là niềm vinh hạnh cho
          <br />
          gia đình chúng tôi.
        </p>
        <p style={{ marginTop: "20px" }}>
          <strong>KÍNH MỜI!</strong>
        </p>
      </div>
    </section>
  );
}
