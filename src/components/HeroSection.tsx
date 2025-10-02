import { weddingData } from "../data";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="save-date">SAVE THE DATE</p>
        <h1 className="couple-names adelia-font">
          {weddingData.bride.fullName}
          <span className="heart-icon">♥</span>
          {weddingData.groom.fullName}
        </h1>
        <div className="wedding-date">
          <p>{weddingData.weddingDate.date}</p>
          <p style={{ fontSize: "1.2rem", marginTop: "10px", color: "#666" }}>
            {weddingData.bride.shortName.toUpperCase()} &{" "}
            {weddingData.groom.shortName.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
