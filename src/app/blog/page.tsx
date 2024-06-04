import groq from "groq"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { getImageDimensions } from "@sanity/asset-utils"

import { client, urlFor } from "@/lib/sanity"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { BlogCard } from "@/types/Blog"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

async function getData() {
  const query = groq`
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    "currentSlug": slug.current,
    author,
    release_date,
    main_image,
    blog_description
  }`

  const data = await client.fetch(query)

  return data
}

const SampleImageComponent = ({
  value,
  isInline,
}: {
  value: any
  isInline: boolean
}) => {
  const { width, height } = getImageDimensions(value)
  return (
    <Image
      src={urlFor(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      width={width}
      height={height}
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
  },
}

export default async function Blogs() {
  const data: BlogCard[] = await getData()

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {data.map((blog, index) => (
          <li key={index} className="w-fit">
            <Card className="w-[350px]">
              <Link href={`/blog/${blog.currentSlug}`}>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  {blog.main_image && (
                    <Image
                      src={urlFor(blog.main_image).url()}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="h-[200px] rounded-lg object-cover"
                    />
                  )}
                  {blog.blog_description ? (
                    <PortableText
                      value={blog.blog_description}
                      components={components}
                    />
                  ) : (
                    <p>No description available</p>
                  )}
                </CardContent>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
