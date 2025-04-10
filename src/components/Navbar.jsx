import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import Submenu from "./nav/Submenu"

export default function Navbar() {
  // All menu links
  const menuLinks = [
    {
      name: "home",
      imgName: "home",
      heading: "home",
    },
    {
      name: "stats",
      imgName: "stats",
      heading: "stats",
      links: [
        { name: "all", path: "all" },
        { name: "financial stats", path: "financial" },
        { name: "occupancy stats", path: "occupancy" },
        { name: "sales stats", path: "sales" },
        { name: "lease stats", path: "lease" },
        { name: "work order & facility stats", path: "facility" },
      ],
    },
    {
      name: "properties",
      imgName: "properties",
      heading: "portfolio",
      links: [
        { name: "properties", path: "index" },
        { name: "units", path: "units" },
        { name: "parkings", path: "parkings" },
      ],
    },
    {
      name: "contact",
      imgName: "contact",
      heading: "contacts",
    },
    {
      name: "document",
      imgName: "document",
      heading: "documents",
    },
    {
      name: "facility",
      imgName: "facility",
      heading: "facility",
    },
    {
      name: "bank",
      imgName: "bank",
      heading: "bank",
    },
    {
      name: "shop",
      imgName: "shop",
      heading: "shop",
    },
    {
      name: "graph",
      imgName: "graph",
      heading: "graph",
    },
    {
      name: "report",
      imgName: "report",
      heading: "report",
    },
    {
      name: "chat",
      imgName: "chat",
      heading: "chat",
    },
    {
      name: "note",
      imgName: "note",
      heading: "note",
    },
    {
      name: "search",
      imgName: "search",
      heading: "search",
    },
  ]

  // toggle submenu
  const [showSubmenu, setShowSubmenu] = React.useState(null)
  function toggleSubmenu(e, index) {
    setShowSubmenu((oldIndex) => (oldIndex === index ? null : index))
    console.log("clicked")
  }

  return (
    <nav className="h-full ms-[14px] flex w-full">
      <ul
        className={`bg-blue-450  pt-16 pb-24 ps-2 pe-[6px] mt-5 mb-5 rounded-2xl [&>*]:mb-6 [&>*>a]:px-5 [&>*>a]:py-[2.25px] [&>*>a]:block [&>*>a.active]:bg-[#B5DEF2] [&>*>a]:w-full [&>*>a]:rounded-sm [&>*>a>img]:min-w-4 ${
          showSubmenu ? "md:me-40" : "me-0"
        }`}
      >
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className="relative md:flex md:items-center"
            onClick={(e) => toggleSubmenu(e, index)}
          >
            {/* Display the first submenu link as the first page that opens on clickling the parent menu */}
            {link.links && link.links[0] ? (
              // Making sure the parent menu has active class when one of submenu link is clicked
              <NavLink
                className={() => {
                  const { pathname } = useLocation()
                  return pathname.split("/")[1].startsWith(link.name)
                    ? "active"
                    : ""
                }}
                to={`${link.name}/${link.links[0].path}`}
              >
                <img
                  src={`/images/nav/${link.imgName}.png`}
                  alt={`${link.imgName} page`}
                />
              </NavLink>
            ) : (
              <NavLink to={link.name}>
                <img
                  src={`/images/nav/${link.imgName}.png`}
                  alt={`${link.imgName} page`}
                />
              </NavLink>
            )}

            {/* Submenu */}
            {link.links && (
              <Submenu
                show={showSubmenu === index ? true : false}
                heading={link.heading}
                links={link.links}
                parentPath={link.name}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
