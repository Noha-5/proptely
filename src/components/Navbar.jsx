import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import Submenu from "./nav/Submenu"
// All menu images
import home from "/assets/images/nav/home.png"
import stats from "/assets/images/nav/stats.png"
import properties from "/assets/images/nav/properties.png"
import contact from "/assets/images/nav/contact.png"
import document from "/assets/images/nav/document.png"
import facility from "/assets/images/nav/facility.png"
import bank from "/assets/images/nav/bank.png"
import shop from "/assets/images/nav/shop.png"
import graph from "/assets/images/nav/graph.png"
import report from "/assets/images/nav/report.png"
import chat from "/assets/images/nav/chat.png"
import note from "/assets/images/nav/note.png"
import search from "/assets/images/nav/search.png"

export default function Navbar() {
  // All menu links
  const menuLinks = [
    {
      name: "home",
      imgName: home,
      heading: "home",
    },
    {
      name: "stats",
      imgName: stats,
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
      imgName: properties,
      heading: "portfolio",
      links: [
        { name: "properties", path: "index" },
        { name: "units", path: "units" },
        { name: "parkings", path: "parkings" },
      ],
    },
    {
      name: "contact",
      imgName: contact,
      heading: "contacts",
    },
    {
      name: "document",
      imgName: document,
      heading: "documents",
    },
    {
      name: "facility",
      imgName: facility,
      heading: "facility",
    },
    {
      name: "bank",
      imgName: bank,
      heading: "bank",
    },
    {
      name: "shop",
      imgName: shop,
      heading: "shop",
    },
    {
      name: "graph",
      imgName: graph,
      heading: "graph",
    },
    {
      name: "report",
      imgName: report,
      heading: "report",
    },
    {
      name: "chat",
      imgName: chat,
      heading: "chat",
    },
    {
      name: "note",
      imgName: note,
      heading: "note",
    },
    {
      name: "search",
      imgName: search,
      heading: "search",
    },
  ]

  // toggle submenu
  const [showSubmenu, setShowSubmenu] = React.useState(null)
  function toggleSubmenu(e, index) {
    setShowSubmenu((oldIndex) => (oldIndex === index ? null : index))
  }

  return (
    <nav aria-label="main navigation" className="h-full ms-[14px] flex w-full">
      <ul
        className={`bg-blue-450  pt-16 pb-24 ps-2 pe-[6px] mt-5 mb-5 rounded-2xl [&>*]:mb-6 [&>*>a]:px-1 md:[&>*>a]:px-5 [&>*>a]:py-[2.25px] [&>*>a]:block [&>*>a.active]:bg-[#B5DEF2] [&>*>a]:w-full [&>*>a]:rounded-sm [&>*>a>img]:min-w-4 ${
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
              <NavLink
                aria-label={`${link.name} page`}
                className={() => {
                  // Checking the url to make sure the parent menu has active class when one of submenu link is clicked
                  const { pathname } = useLocation()
                  // 2 because the first part of url is the base i.e properties in this url 'noha.github.io/proptely/properties/index' is indexed at 2
                  return pathname.split("/")[2].startsWith(link.name)
                    ? "active"
                    : ""
                }}
                to={`${link.name}/${link.links[0].path}`}
              >
                <img src={link.imgName} alt={`${link.imgName} page`} />
              </NavLink>
            ) : (
              <NavLink aria-label={`${link.name} page`} to={link.name}>
                <img src={link.imgName} alt={`${link.imgName} page`} />
              </NavLink>
            )}

            {/* Submenu */}
            {link.links && (
              <Submenu
                araia-label={`${link.name} submenu`}
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
