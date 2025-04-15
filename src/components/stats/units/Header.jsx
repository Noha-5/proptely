import React from "react"
// icons
import filter from "/assets/images/icons/filter.png"

export default function Header({ heading }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-medium text-sm">{heading}</h2>
      <button className="px-1 py-[3px] bg-teal-450 rounded" aria-label="filter">
        <img className="min-w-4" src={filter} alt="filter icon" />
      </button>
    </div>
  )
}
