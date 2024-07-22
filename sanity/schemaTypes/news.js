export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'newsTitle',
      type: 'string',
      title: 'News Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (rule) =>
        rule.required().uri({
          allowRelative: false,
        }),
    },
  ],
}
