import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
      name: "portfolio",
      imgName: properties,
      heading: "portfolio",
      links: [
        { name: "properties", path: "properties" },
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

  const navigate = useNavigate()
  const location = useLocation()

  const [activeMenu, setActiveMenu] = React.useState(0)
  // toggle submenu
  const [showSubmenu, setShowSubmenu] = React.useState(null)
  function toggleSubmenu(e, index) {
    setShowSubmenu((oldIndex) => (oldIndex === index ? null : index))
  }

  // sets active menu according to current url
  useEffect(() => {
    const path = location.pathname.split("/")[2]
    const index = menuLinks.findIndex((link) => link.name === path)

    setActiveMenu(index)
  }, [location])

  return (
    <nav aria-label="main navigation" className="h-full ms-[14px] flex w-full">
      <ul
        className={`bg-blue-450  pt-16 pb-24 ps-2 pe-[6px] mt-5 mb-5 rounded-2xl [&>*]:mb-6 [&>*>button]:px-1 md:[&>*>button]:px-5 [&>*>button]:py-[2.25px] [&>*>button]:block [&>*>button.active]:bg-[#B5DEF2] [&>*>button]:w-full [&>*>button]:rounded-sm [&>*>button>img]:min-w-4 ${
          showSubmenu ? "md:me-40" : "me-0"
        }`}
      >
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className="relative md:flex md:items-center"
            onClick={(e) => toggleSubmenu(e, index)}
          >
            {link.links ? (
              <button
                aria-label={`${link.name} page`}
                className={`${activeMenu === index ? "active" : ""}`}
              >
                <img src={link.imgName} alt={`${link.imgName} page`} />
              </button>
            ) : (
              <button
                aria-label={`${link.name} page`}
                onClick={() => {
                  navigate(`${link.name}`)
                }}
                className={`${activeMenu === index ? "active" : ""}`}
              >
                <img src={link.imgName} alt={`${link.imgName} page`} />
              </button>
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
