import { weddingData } from "../data";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "var(--primary-color)",
        color: "white",
      }}
    >
      <p
        className="adelia-font"
        style={{ fontSize: "2rem", marginBottom: "10px" }}
      >
        Thank You
      </p>
      <p>
        {weddingData.bride.fullName} ♥ {weddingData.groom.fullName}
      </p>
      <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
        {weddingData.weddingDate.date}
      </p>
    </footer>
  );
}
