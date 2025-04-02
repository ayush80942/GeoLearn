import React from 'react';
import { Video } from '../types';
import { VideoNavigation } from './VideoNavigation';

interface VideoPlayerProps {
  video: Video;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function VideoPlayer({ video, onPrevious, onNext, hasPrevious, hasNext }: VideoPlayerProps) {
  const embedUrl = 'https://www.youtube.com/embed/vlVVaZhRAEA';

  return (
    <div className="w-full">
      <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="mt-4">
        <VideoNavigation
          onPrevious={onPrevious}
          onNext={onNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
      </div>
    </div>
  );
}