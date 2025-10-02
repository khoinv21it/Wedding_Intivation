import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        setShowPrompt(false);

        // Thử phát nhạc sau khi có tương tác
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setShowPrompt(false);
            })
            .catch((error) => {
              console.log("Auto-play prevented:", error);
              // Nếu không phát được, hiển thị prompt
              setHasInteracted(false);
              setShowPrompt(true);
            });
        }
      }
    };

    // Hiển thị prompt sau 2 giây nếu chưa phát nhạc
    const promptTimer = setTimeout(() => {
      if (!hasInteracted && !isPlaying) {
        setShowPrompt(true);
      }
    }, 2000);

    // Lắng nghe nhiều loại tương tác cho mobile
    const events = ["click", "touchstart", "touchend", "scroll", "keydown"];

    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, {
        once: true,
        passive: true,
      });
    });

    return () => {
      clearTimeout(promptTimer);
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [hasInteracted, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setHasInteracted(true);
              setShowPrompt(false);
            })
            .catch((error) => {
              console.log("Play failed:", error);
            });
        }
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/snaptt.me-30516272.mp3"
        loop
        preload="auto"
      />

      {/* Music prompt notification */}
      {showPrompt && !isPlaying && (
        <div className="music-prompt" onClick={togglePlay}>
          <div className="music-prompt-content">
            <span className="music-prompt-icon">🎵</span>
            <span className="music-prompt-text">Nhấn để phát nhạc</span>
          </div>
        </div>
      )}

      {/* Music player button - only show when prompt is hidden */}
      {!showPrompt && (
        <button
          className="music-player-button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            // Pause icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor" />
            </svg>
          ) : (
            // Play icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
