import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  apiVersion: "2024-06-03",
  dataset: "production",
  projectId: "8599fsdf",
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
