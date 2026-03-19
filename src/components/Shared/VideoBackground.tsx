'use client';

import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoSrc?: string;
  posterImage?: string;
  overlay?: 'dark' | 'light' | 'gradient-dark' | 'gradient-light' | 'none';
  opacity?: number;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  posterImage,
  overlay = 'gradient-dark',
  opacity = 1,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to play
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay blocked, will retry on interaction:', error);
      }
    };

    // Initial play
    playVideo();

    // Keep trying to play if paused
    const handlePause = () => {
      playVideo();
    };

    // Handle visibility change (when tab becomes visible)
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };

    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Interval to ensure video keeps playing
    const interval = setInterval(() => {
      if (video.paused) {
        playVideo();
      }
    }, 1000);

    return () => {
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  const overlayStyles = {
    'dark': 'bg-black/50',
    'light': 'bg-white/30',
    'gradient-dark': 'bg-gradient-to-b from-transparent via-black/30 to-black/70',
    'gradient-light': 'bg-gradient-to-b from-transparent via-white/20 to-white/50',
    'none': '',
  };

  return (
    <div className={`absolute inset-0 overflow-hidden -z-20 ${className}`}>
      {/* Video or Poster Image */}
      {videoSrc ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity }}
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : posterImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${posterImage})`,
            opacity
          }}
        />
      ) : null}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div
          className={`absolute inset-0 ${overlayStyles[overlay]} transition-opacity duration-1000 ease-in-out pointer-events-none z-10`}
        />
      )}
    </div>
  );
};
