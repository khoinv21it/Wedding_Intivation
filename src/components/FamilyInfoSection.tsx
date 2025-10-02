import { weddingData } from "../data";

export default function FamilyInfoSection() {
  return (
    <section className="family-info-section scroll-reveal">
      <h2 className="section-title adelia-font" style={{ textAlign: "center" }}>
        Thông Tin Gia Đình
      </h2>
      <div className="family-container">
        <div className="family-card">
          <h3 className="family-label">Nhà Gái</h3>
          <p>
            <strong>Ông:</strong> {weddingData.brideFamily.father}
          </p>
          <p>
            <strong>Bà:</strong> {weddingData.brideFamily.mother}
          </p>
          <p>{weddingData.brideFamily.address}</p>
        </div>
        <div className="family-card">
          <h3 className="family-label">Nhà Trai</h3>
          <p>
            <strong>Ông:</strong> {weddingData.groomFamily.father}
          </p>
          <p>
            <strong>Bà:</strong> {weddingData.groomFamily.mother}
          </p>
          <p>{weddingData.groomFamily.address}</p>
        </div>
      </div>
    </section>
  );
}
