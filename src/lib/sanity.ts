import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  apiVersion: "2024-06-03",
  dataset: process.env.SANITY_STUDIO_DATASET,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  perspective: "published",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
