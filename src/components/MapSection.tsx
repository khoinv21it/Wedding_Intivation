import { weddingData } from "../data";

export default function MapSection() {
  return (
    <section className="map-section scroll-reveal">
      <h2 className="section-title adelia-font">Địa Điểm Tổ Chức</h2>
      <div className="map-container">
        <iframe
          src={weddingData.venue.mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Location"
        ></iframe>
      </div>
    </section>
  );
}
