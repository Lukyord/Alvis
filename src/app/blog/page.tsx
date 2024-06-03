import { client, urlFor } from "@/lib/sanity"
import { PortfolioCard } from "@/types/Portfolio"
import Image from "next/image"

async function getData() {
  const query = `
  *[_type == 'portfolio'] | order(_createdAt desc) {
    name,
    "currentSlug": slug.current,
    short_description,
    main_image,
  }`

  const data = await client.fetch(query)

  return data
}

export default async function Blogs() {
  const data: PortfolioCard[] = await getData()

  console.log(data)

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {data.map((blog, index) => (
          <li key={index}>
            <h2>{blog.name}</h2>
            <p>{blog.short_description}</p>
            {blog.main_image && (
              <Image
                src={urlFor(blog.main_image).url()}
                alt={blog.name}
                width={500}
                height={500}
                className="h-[200px] rounded-t-lg object-cover"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
