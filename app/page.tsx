'use client';

import { useEffect } from 'react';
import { GlobalHeader } from './components/layout/GlobalHeader';
import { StickyNav } from './components/layout/StickyNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { ChapterWrapper } from './components/chapters/ChapterWrapper';
import { VideoModal } from './components/ui/VideoModal';
import { SearchModal } from './components/ui/SearchModal';
import { ReducedMotionToggle } from './components/ui/ReducedMotionToggle';
import { initSmoothScroll, destroySmoothScroll } from '@/animations/smooth-scroll';
import { initializeSearch } from './lib/search';
import { trackScrollDepth } from './lib/analytics';
import type { Edition, Feature } from './lib/sanity.types';

// Mock data for demonstration
const mockEdition: Edition = {
  _id: '1',
  title: 'Shopify Editions Winter 2026',
  slug: { current: 'winter-2026' },
  publishedAt: '2026-02-13',
  heroTitle: ['Shopify', 'Editions', 'Winter 2026'],
  chapters: [
    {
      _id: 'ch1',
      title: 'AI & Commerce',
      slug: { current: 'ai-commerce' },
      description: 'Harness the power of AI to transform your commerce experience',
      order: 1,
      accentColor: '#7B61FF',
      features: [
        {
          _id: 'f1',
          title: 'AI-Powered Product Recommendations',
          slug: { current: 'ai-recommendations' },
          badge: 'new',
          description: 'Personalized product suggestions powered by advanced machine learning',
          gridSize: 'large',
          order: 1,
        },
        {
          _id: 'f2',
          title: 'Smart Inventory Management',
          slug: { current: 'smart-inventory' },
          badge: 'update',
          description: 'Automatically optimize stock levels with AI predictions',
          gridSize: 'small',
          order: 2,
        },
        {
          _id: 'f3',
          title: 'Conversational Commerce',
          slug: { current: 'conversational-commerce' },
          badge: 'beta',
          description: 'Chat-based shopping experiences with AI assistants',
          gridSize: 'small',
          order: 3,
        },
      ],
    },
    {
      _id: 'ch2',
      title: 'Checkout Excellence',
      slug: { current: 'checkout' },
      description: 'Create frictionless checkout experiences that convert',
      order: 2,
      accentColor: '#D4AF37',
      features: [
        {
          _id: 'f4',
          title: 'One-Click Checkout',
          slug: { current: 'one-click-checkout' },
          badge: 'new',
          description: 'Lightning-fast checkout with Shop Pay',
          gridSize: 'wide',
          order: 1,
        },
        {
          _id: 'f5',
          title: 'Custom Payment Methods',
          slug: { current: 'custom-payments' },
          description: 'Support for crypto, BNPL, and regional payment providers',
          gridSize: 'small',
          order: 2,
        },
        {
          _id: 'f6',
          title: 'Enhanced Fraud Detection',
          slug: { current: 'fraud-detection' },
          badge: 'update',
          description: 'ML-powered fraud prevention that protects your revenue',
          gridSize: 'small',
          order: 3,
        },
      ],
    },
    {
      _id: 'ch3',
      title: 'B2B Solutions',
      slug: { current: 'b2b' },
      description: 'Scale your wholesale and B2B operations globally',
      order: 3,
      features: [
        {
          _id: 'f7',
          title: 'Bulk Ordering Portal',
          slug: { current: 'bulk-ordering' },
          badge: 'new',
          description: 'Streamlined bulk ordering with custom pricing',
          gridSize: 'small',
          order: 1,
        },
        {
          _id: 'f8',
          title: 'Quote Management',
          slug: { current: 'quote-management' },
          description: 'Create and manage custom quotes for B2B customers',
          gridSize: 'wide',
          order: 2,
        },
      ],
    },
    {
      _id: 'ch4',
      title: 'Platform Enhancements',
      slug: { current: 'platform' },
      description: 'Developer tools and infrastructure improvements',
      order: 4,
      features: [
        {
          _id: 'f9',
          title: 'GraphQL API v2024',
          slug: { current: 'graphql-v2024' },
          badge: 'new',
          description: 'Faster, more powerful API with new capabilities',
          gridSize: 'small',
          order: 1,
        },
        {
          _id: 'f10',
          title: 'Hydrogen 2.0',
          slug: { current: 'hydrogen-2' },
          badge: 'update',
          description: 'Next-gen React framework for Shopify storefronts',
          gridSize: 'small',
          order: 2,
        },
        {
          _id: 'f11',
          title: 'App Extensions SDK',
          slug: { current: 'app-extensions' },
          description: 'Build powerful app extensions with ease',
          gridSize: 'wide',
          order: 3,
        },
      ],
    },
  ],
};

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll
    const lenis = initSmoothScroll();

    // Initialize search
    const allFeatures: Feature[] = (mockEdition.chapters || []).flatMap(
      (chapter) => chapter.features || []
    );
    initializeSearch(allFeatures);

    // Track scroll depth
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
        trackScrollDepth(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      destroySmoothScroll();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <GlobalHeader />
      
      <HeroSection title={mockEdition.heroTitle || []} />
      
      {mockEdition.chapters && mockEdition.chapters.length > 0 && (
        <>
          <StickyNav chapters={mockEdition.chapters} />
          
          <div id="features" className="pt-32">
            {mockEdition.chapters.map((chapter) => (
              <ChapterWrapper key={chapter._id} chapter={chapter} />
            ))}
          </div>
        </>
      )}

      <Footer />

      {/* Modals */}
      <VideoModal />
      <SearchModal />
      <ReducedMotionToggle />
    </main>
  );
}
