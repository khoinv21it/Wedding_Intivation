import { useState, useEffect } from "react";
import { weddingData } from "../data";

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryImages = weddingData.galleryImages;

  // Gallery slider navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // Auto-play gallery slider - pause when user is scrolling
  useEffect(() => {
    const totalImages = galleryImages.length;
    let autoplayInterval: ReturnType<typeof setInterval>;
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let isScrolling = false;

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (!isScrolling) {
          setCurrentImageIndex((prev) => (prev + 1) % totalImages);
        }
      }, 4000); // Increased to 4 seconds for smoother experience
    };

    const handleScroll = () => {
      isScrolling = true;
      clearInterval(autoplayInterval);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        startAutoplay();
      }, 200);
    };

    startAutoplay();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(autoplayInterval);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [galleryImages.length]);

  // Touch and swipe handlers for mobile - optimized with threshold
  const minSwipeDistance = 75; // Increased threshold to avoid accidental swipes

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="gallery-section scroll-reveal">
      <h2 className="section-title adelia-font">Khoảnh Khắc Hạnh Phúc</h2>

      <div className="gallery-container">
        <button
          className="gallery-nav-btn prev-btn"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <span>‹</span>
        </button>

        <div
          className="gallery-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-slides">
            {galleryImages.map((image, index) => {
              const isActive = index === currentImageIndex;
              const isPrev =
                index ===
                (currentImageIndex - 1 + galleryImages.length) %
                  galleryImages.length;
              const isNext =
                index === (currentImageIndex + 1) % galleryImages.length;
              const isPrev2 =
                index ===
                (currentImageIndex - 2 + galleryImages.length) %
                  galleryImages.length;
              const isNext2 =
                index === (currentImageIndex + 2) % galleryImages.length;

              let className = "gallery-item";
              if (isActive) className += " active";
              else if (isPrev) className += " prev";
              else if (isNext) className += " next";
              else if (isPrev2) className += " prev-2";
              else if (isNext2) className += " next-2";
              else className += " hidden";

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="gallery-item-inner">
                    <img src={image.src} alt={image.alt} />
                    {/* {isActive && (
                      <div className="gallery-item-caption">
                        <p>{image.alt}</p>
                      </div>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="gallery-nav-btn next-btn"
          onClick={nextImage}
          aria-label="Next image"
        >
          <span>›</span>
        </button>
      </div>

      <div className="gallery-indicators">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
