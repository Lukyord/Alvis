import groq from "groq"
import { client } from "@/lib/sanity"
import { Portfolio } from "@/sanity/sanity.types"

async function getData(slug: string) {
  const query = groq`
  *[_type == 'portfolio' && slug.current == '${slug}']`

  const data = await client.fetch(query)

  return data
}

export default async function Work({ params }: { params: { slug: string } }) {
  const data: Portfolio = await getData(params.slug)

  console.log(data)

  return <div></div>
}
