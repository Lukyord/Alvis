import React from "react"

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "/about-us",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
  {
    name: "Catalogue",
    url: "/catalogue",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
]

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
