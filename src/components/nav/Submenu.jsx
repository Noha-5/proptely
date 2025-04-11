import React from "react"
import { NavLink } from "react-router-dom"

export default function Submenu({ show, heading, links, parentPath }) {
  return (
    // stop event propagation so the menu doesn't close when child links are clicked. Only toggle when parent menu is clicked
    <section
      onClick={(e) => e.stopPropagation()}
      className={`${
        show ? "block" : "hidden"
      } max-w-40 md:w-40 mt-2 md:mt-0  md:absolute top-0 left-[4.3rem]`}
    >
      <h2 className="text-blue-650 text-base font-bold ps-4 capitalize">
        {heading}
      </h2>
      <ul>
        {links &&
          links.map((link, index) => (
            <li
              className="[&>*]:block [&>*]:px-7 [&>*]:py-1 [&>*.active]:bg-blue-450 [&>*.active]:font-medium [&>*]:capitalize [&>*]:text-sm"
              key={index}
            >
              <NavLink
                aria-label={`${link.name} page`}
                to={`${parentPath}/${link.path}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </section>
  )
}
