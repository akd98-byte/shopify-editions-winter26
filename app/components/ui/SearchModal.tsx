'use client';

import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useEditionStore } from '@/app/store/edition.store';
import { search } from '@/app/lib/search';
import { trackSearch } from '@/app/lib/analytics';
import type { SearchResult } from '@/app/lib/sanity.types';

export function SearchModal() {
  const { isSearchOpen, searchQuery, setIsSearchOpen, setSearchQuery } =
    useEditionStore();
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  useEffect(() => {
    if (searchQuery) {
      const searchResults = search(searchQuery);
      setResults(searchResults);
      trackSearch(searchQuery, searchResults.length);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  return (
    <Dialog.Root open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-[20vh] left-1/2 -translate-x-1/2 w-[90vw] max-w-[600px] z-50">
          <div className="bg-bg-secondary border border-border-subtle rounded-card overflow-hidden">
            <div className="p-4 border-b border-border-subtle">
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-text-primary placeholder:text-text-muted outline-none text-lg"
                autoFocus
              />
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {results.length > 0 ? (
                <ul>
                  {results.map((result) => (
                    <li key={result.id}>
                      <a
                        href={`#${result.url}`}
                        className="block p-4 hover:bg-white/5 transition-colors"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-text-primary font-medium">
                            {result.title}
                          </h3>
                          {result.badge && (
                            <span className="text-xs px-2 py-0.5 bg-accent-ai text-white rounded-full">
                              {result.badge}
                            </span>
                          )}
                        </div>
                        {result.description && (
                          <p className="text-text-muted text-sm line-clamp-2">
                            {result.description}
                          </p>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : searchQuery ? (
                <div className="p-8 text-center text-text-muted">
                  No results found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                <div className="p-8 text-center text-text-muted">
                  Type to search features...
                </div>
              )}
            </div>
            <div className="p-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
              <span>⌘K to open</span>
              <span>ESC to close</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
