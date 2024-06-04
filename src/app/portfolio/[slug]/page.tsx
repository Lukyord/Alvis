import groq from "groq"
import Image from "next/image"

import { client, urlFor } from "@/lib/sanity"
import { Portfolio } from "@/sanity/sanity.types"

async function getData(slug: string) {
  const query = groq`
  *[_type == 'portfolio' && slug.current == '${slug}'][0] {
    title,
    short_description,
    main_image,
    location,
    size,
    year,
    image_description_sets,
    plan_title_image_sets
  }`

  const data = await client.fetch(query)

  return data
}

export default async function Work({ params }: { params: { slug: string } }) {
  const data: Portfolio = await getData(params.slug)

  const imageDescriptionSets = data.image_description_sets
  const planTitleImageSets = data.plan_title_image_sets
  const year = new Date(data.year as string).getFullYear().toString()

  return (
    <div>
      <h1 className="mt-10 text-red-400">{data.title}</h1>
      <p>{data.short_description}</p>
      {data.main_image && (
        <Image
          src={urlFor(data.main_image).url()}
          alt={data.title || ""}
          width={500}
          height={500}
          className="h-[200px] rounded-t-lg object-cover"
        />
      )}
      <ul className="list-disc pl-10">
        <li>{data.location}</li>
        <li>{data.size}</li>
        <li>{year}</li>
      </ul>

      <ul className="my-10">
        {imageDescriptionSets?.map((set, index) => (
          <li key={index}>
            <h2>{set.title}</h2>
            <ul className="flex gap-3">
              {set.image_sets?.map((image, index) => (
                <li key={index}>
                  <Image
                    src={urlFor(image).url()}
                    alt={set.title || ""}
                    width={500}
                    height={500}
                    className="h-[200px] rounded-lg object-cover"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <ul className="mt-20">
        {planTitleImageSets?.map((plan, index) => (
          <li key={index}>
            <h2>{plan.title}</h2>
            <ul className="flex gap-3">
              {plan.image_sets?.map((image, index) => (
                <li key={index}>
                  <Image
                    src={urlFor(image).url()}
                    alt={plan.title || ""}
                    width={500}
                    height={500}
                    className="h-[200px] rounded-lg object-cover"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
