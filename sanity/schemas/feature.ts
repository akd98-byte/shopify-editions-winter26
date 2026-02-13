export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(80),
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
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Update', value: 'update' },
          { title: 'Beta', value: 'beta' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'media',
      title: 'Media (Video/Animation)',
      type: 'file',
    },
    {
      name: 'gridSize',
      title: 'Grid Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small (1x1)', value: 'small' },
          { title: 'Wide (2x1)', value: 'wide' },
          { title: 'Large (2x2)', value: 'large' },
        ],
      },
      initialValue: 'small',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      badge: 'badge',
    },
    prepare(selection: any) {
      const { title, badge } = selection;
      return {
        title: badge ? `[${badge.toUpperCase()}] ${title}` : title,
        media: selection.media,
      };
    },
  },
};
