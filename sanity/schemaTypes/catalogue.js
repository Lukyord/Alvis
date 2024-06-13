export default {
  name: 'catalogue',
  title: 'Catalogue',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      validation: (rule) => rule.required(),
    },
    {
      name: 'recommend_land_direction',
      title: 'Recommend Land Direction',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'area',
      title: 'Area (sq.m.)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'land_area_require',
      title: 'Land Area Requirement',
      type: 'string',
      description:
        'Please provide the area in the format "length(m) x width(m)" e.g., 16.5m x 18.5m',
      validation: (rule) =>
        rule.required().custom((value) => {
          const regex = /^\d+(\.\d+)?m\s*x\s*\d+(\.\d+)?m$/
          if (!regex.test(value)) {
            return 'Area does not match the required format'
          }
          return true
        }),
    },
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'room_title',
              title: 'Room Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (rule) => rule.required().positive().integer(),
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'model_sets',
      title: 'Model sets',
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
                hotspot: true,
                accept: 'image/*',
                storeOriginalFilename: true,
              },
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
