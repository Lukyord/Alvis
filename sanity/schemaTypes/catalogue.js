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
      name: 'fixedImage1',
      title: 'Fixed Image 1',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'fixedImage2',
      title: 'Fixed Image 2',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'landDirection',
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
      name: 'bedRoom',
      title: 'Bedroom',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'bathRoom',
      title: 'Bathroom',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'multiPurposeArea',
      title: 'Multi-Purpose Area',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    },
    {
      name: 'otherRooms',
      title: 'Other Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'roomTitle',
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
      name: 'imageSet',
      title: 'Image Set',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
        hotspot: true,
        accept: 'image/*',
        storeOriginalFilename: true,
      },
      validation: (rule) => rule.required(),
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
};
