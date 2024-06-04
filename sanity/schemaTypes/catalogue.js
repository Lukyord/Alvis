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
        accept: '.jpg,.jpeg,.png',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
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
              name: 'model',
              title: 'Model',
              type: 'number',
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
              type: 'string',
              validation: (rule) =>
                rule
                  .required()
                  .custom((value) => {
                    const regex = /^\d+(\.\d+)?m\s*x\s*\d+(\.\d+)?m$/;
                    if (!regex.test(value)) {
                      return 'Please provide the area in the format "length (m) x width (m)", for example: 16.5m x 18.5m';
                    }
                    return true;
                  }),
            },
            {
              name: 'land_area_require',
              title: 'Land Area Require ',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            },
            {
              name: 'bedroom',
              title: 'Bedroom ',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            },
            {
              name: 'bathroom',
              title: 'Bathroom ',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            },
            {
              name: 'nulti_purpose_area',
              title: 'Multi-Purpose Area ',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (rule) => rule.required().positive(),
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
