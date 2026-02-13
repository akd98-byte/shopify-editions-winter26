export default {
  name: 'chapter',
  title: 'Chapter',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Accent color for this chapter (hex)',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'feature' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
    },
    prepare(selection: any) {
      const { title, order } = selection;
      return {
        title: `${order}. ${title}`,
      };
    },
  },
};
