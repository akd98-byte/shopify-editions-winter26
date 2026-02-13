import { create } from 'zustand';
import type { Chapter } from '../lib/sanity.types';

interface EditionStore {
  activeChapter: string | null;
  searchQuery: string;
  isSearchOpen: boolean;
  isVideoModalOpen: boolean;
  currentVideoUrl: string | null;
  
  setActiveChapter: (chapterId: string | null) => void;
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
  setIsVideoModalOpen: (isOpen: boolean) => void;
  setCurrentVideoUrl: (url: string | null) => void;
}

export const useEditionStore = create<EditionStore>((set) => ({
  activeChapter: null,
  searchQuery: '',
  isSearchOpen: false,
  isVideoModalOpen: false,
  currentVideoUrl: null,
  
  setActiveChapter: (chapterId) => set({ activeChapter: chapterId }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  setIsVideoModalOpen: (isOpen) => set({ isVideoModalOpen: isOpen }),
  setCurrentVideoUrl: (url) => set({ currentVideoUrl: url }),
}));
