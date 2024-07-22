export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'styleName',
      title: 'Style Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'size',
      title: 'Size (sq.m)',
      type: 'string',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'string',
      validation: (rule) => rule.required()
    },
    {
      name: 'mainImage1',
      title: 'Main Image 1',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'mainImage2',
      title: 'Main Image 2',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'description1',
      title: 'Description 1',
      type: 'text',
    },
    {
      name: 'description2',
      title: 'Description 2',
      type: 'text',
    },
    {
      name: 'description3',
      title: 'Description 3',
      type: 'text',
    },
    {
      name: 'galleryImageSet',
      title: 'Gallery Image Set',
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
    {
      name: 'galleryImage1',
      title: 'Gallery Image 1',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'galleryImage2',
      title: 'Gallery Image 2',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'galleryImage3',
      title: 'Gallery Image 3',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'galleryImage4',
      title: 'Gallery Image 4',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'galleryImage5',
      title: 'Gallery Image 5',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
    },
    {
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'floorLevel',
              title: 'Floor Level',
              type: 'number',
              validation: (rule) => rule.required().positive(),
            },
            {
              name: 'floorPlanTitle',
              title: 'Title',
              type: 'string',
              hidden: true,
              readOnly: true,
            },
            {
              name: 'floorPlanImage',
              title: 'Floor Plan Image',
              type: 'image',
              options: {
                hotspot: true,
                accept: 'image/*',
                storeOriginalFilename: true,
              },
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'floorLevel',
              media: 'floorPlanImage',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: `Level ${title}`,
                media: media,
              };
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((floorPlans) => {
          if (!floorPlans) return true;

          const levels = floorPlans.map((plan) => plan.floorLevel);
          const uniqueLevels = new Set(levels);

          if (uniqueLevels.size !== levels.length) {
            return 'Each floor level must be unique.';
          }

          return true;
        }),
    },
  ],
}
