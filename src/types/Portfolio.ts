import { Portfolio } from "@/sanity/sanity.types"

export type PortfolioCard = {
  name: string
  currentSlug: string
  short_description: string
  main_image: Portfolio["main_image"]
}
