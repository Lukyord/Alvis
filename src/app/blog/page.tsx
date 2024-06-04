import groq from "groq"
import Image from "next/image"

import { client, urlFor } from "@/lib/sanity"
import { PortfolioCard } from "@/types/Portfolio"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { BlogCard } from "@/types/Blog"

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

export default async function Blogs() {
  const data: BlogCard[] = await getData()

  console.log(data)

  return <div></div>
}
