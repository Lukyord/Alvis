import React from "react"

export default function Blog({ params }: { params: { slug: string } }) {
  console.log(params.slug)

  return <div></div>
}
