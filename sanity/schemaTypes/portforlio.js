export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    // Name
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    // Short Description (use at https://www.alvis.co.th/portfolio)
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
      validation: (rule) => rule.required().max(180),
    },
    // Main Image
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
      options: {
        accept: '.jpg,.jpeg,.png',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    // Location
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    // Year
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      validation: (rule) => rule.required(),
    },
    // Size
    {
      name: 'size',
      title: 'Size (sq.m.)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },

    // Image and Description Sets
    {
      name: 'img_description_sets',
      title: 'Image and Description Sets',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'image_sets',
              title: 'Image Sets',
              type: 'array',
              of: [{type: 'image'}],
              options: {
                layout: 'grid',
              },
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'plan_title_image_sets',
      title: 'Plan Title and Image Sets',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'image_sets',
              title: 'Image Sets',
              type: 'array',
              of: [{type: 'image'}],
              options: {
                layout: 'grid',
              },
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
