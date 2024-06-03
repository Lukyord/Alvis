import { client } from "@/lib/sanity"

async function getData() {
  const query = `
  *[_type == 'portfolio'] | order(_createdAt desc) {
    name,
    short_description
  }`

  const data = await client.fetch(query)

  return data
}

export default async function Blogs() {
  const data = await getData()

  console.log(data)

  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
