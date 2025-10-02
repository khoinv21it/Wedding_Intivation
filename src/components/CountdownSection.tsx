import { useState, useEffect } from "react";
import { weddingData } from "../data";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date(weddingData.weddingDate.fullDateTime).getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="countdown-section scroll-reveal">
      <h2 className="section-title adelia-font">Đếm Ngược Đến Ngày Cưới</h2>
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">Ngày</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.hours}</span>
          <span className="time-label">Giờ</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.minutes}</span>
          <span className="time-label">Phút</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.seconds}</span>
          <span className="time-label">Giây</span>
        </div>
      </div>
    </section>
  );
}
