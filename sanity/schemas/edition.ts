export default {
  name: 'edition',
  title: 'Edition',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      description: 'Primary theme color (hex)',
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',
    },
    {
      name: 'heroTitle',
      title: 'Hero Title Lines',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'chapter' }],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
