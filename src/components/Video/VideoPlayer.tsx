'use client';

import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'youtube' | 'embed' | 'local';
  youtubeId?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  isOpen,
  onClose,
  type = 'youtube',
  youtubeId,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 bg-dark-bg rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-700 hover:bg-slate-800 text-cream transition-colors"
          aria-label="Close video"
        >
          <MdClose size={24} />
        </button>

        {/* Video Container */}
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
          {type === 'youtube' && youtubeId ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : type === 'local' ? (
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Title */}
        <div className="p-4 bg-slate-900">
          <h3 className="text-lg font-bold text-cream">{title}</h3>
        </div>
      </div>
    </div>
  );
};
