import React from 'react';
import { MessageSquare, FileText, Video } from 'lucide-react';

interface VideoControlsProps {
  onChatToggle: () => void;
  onSummaryClick: () => void;
  onInterviewClick: () => void;
}

export function VideoControls({ onChatToggle, onSummaryClick, onInterviewClick }: VideoControlsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      <button
        onClick={onChatToggle}
        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">AI Chat</span>
      </button>

      <button
        onClick={onSummaryClick}
        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span className="hidden sm:inline">Get Summary</span>
      </button>

      <button
        onClick={onInterviewClick}
        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Video className="w-5 h-5" />
        <span className="hidden sm:inline">AI Interview</span>
      </button>
    </div>
  );
}