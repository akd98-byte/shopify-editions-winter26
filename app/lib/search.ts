import FlexSearch from 'flexsearch';
import type { SearchResult, Feature } from './sanity.types';

let searchIndex: FlexSearch.Index | null = null;
let searchData: SearchResult[] = [];

export function initializeSearch(features: Feature[]) {
  searchIndex = new FlexSearch.Index({
    tokenize: 'forward',
    threshold: 1,
    resolution: 3,
  });

  searchData = features.map((feature) => ({
    id: feature._id,
    title: feature.title,
    description: feature.description || '',
    badge: feature.badge,
    url: feature.slug.current,
  }));

  searchData.forEach((item, idx) => {
    searchIndex?.add(idx, `${item.title} ${item.description}`);
  });
}

export function search(query: string): SearchResult[] {
  if (!searchIndex || !query) return [];

  const results = searchIndex.search(query, { limit: 10 });
  return results.map((idx) => searchData[idx as number]).filter(Boolean);
}
