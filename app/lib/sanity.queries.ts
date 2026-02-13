import { groq } from 'next-sanity';

export const editionQuery = groq`
  *[_type == "edition"][0] {
    _id,
    title,
    slug,
    themeColor,
    "heroVideo": heroVideo.asset->url,
    heroTitle,
    publishedAt,
    "chapters": chapters[]-> {
      _id,
      title,
      slug,
      description,
      order,
      accentColor,
      "features": features[]-> {
        _id,
        title,
        slug,
        badge,
        description,
        thumbnail {
          asset-> {
            url,
            metadata {
              dimensions
            }
          }
        },
        "media": media.asset->url,
        gridSize,
        links,
        order
      } | order(order asc)
    } | order(order asc)
  }
`;

export const searchQuery = groq`
  *[_type == "feature" && (
    title match $query ||
    description match $query
  )] {
    _id,
    title,
    description,
    badge,
    "url": slug.current
  }[0...10]
`;
