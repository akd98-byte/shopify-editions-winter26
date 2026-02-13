'use client';

import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useEditionStore } from '@/app/store/edition.store';
import { trackVideoPlay } from '@/app/lib/analytics';

export function VideoModal() {
  const { isVideoModalOpen, currentVideoUrl, setIsVideoModalOpen, setCurrentVideoUrl } =
    useEditionStore();

  useEffect(() => {
    if (isVideoModalOpen && currentVideoUrl) {
      trackVideoPlay(currentVideoUrl, 'Feature Video');
    }
  }, [isVideoModalOpen, currentVideoUrl]);

  return (
    <Dialog.Root open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] z-50">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {currentVideoUrl && (
              <video
                src={currentVideoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            )}
            <Dialog.Close className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
