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

async function getData() {
  const query = groq`
  *[_type == 'portfolio'] | order(_createdAt desc) {
    name,
    "currentSlug": slug.current,
    short_description,
    main_image,
  }`

  const data = await client.fetch(query)

  return data
}

export default async function Portfolio() {
  const data: PortfolioCard[] = await getData()

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {data.map((work, index) => (
          <li key={index}>
            <Link href={`/portfolio/${work.currentSlug}`}>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>{work.name}</CardTitle>
                  <CardDescription>{work.short_description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {work.main_image && (
                    <Image
                      src={urlFor(work.main_image).url()}
                      alt={work.name}
                      width={500}
                      height={500}
                      className="h-[200px] rounded-t-lg object-cover"
                    />
                  )}
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
