import { Blog } from "@/sanity/sanity.types"

export type BlogCard = {
  title: string
  currentSlug: string
  author: string
  release_date: Date
  main_image: Blog["main_image"]
  short_description: Blog["short_description"]
}
