function toThaiSlug(inputString) {
  let slug = inputString
    .replace(/\s+/g, '-')
    .replace(/%/g, 'เปอร์เซนต์')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\/\\]/g, '')
    .replace(/[.,;:!?"'@#$%^&*()\[\]{}<>|~\/\\+=]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')

  return slug
}

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog',
      options: {
        source: 'title',
        slugify: (input) => toThaiSlug(input),
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
      validation: (rule) => rule.required().max(180),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'release_date',
      title: 'Release Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/*',
            storeOriginalFilename: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
}
