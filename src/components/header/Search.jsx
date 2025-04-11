import React from "react"
import search from "/assets/images/header/search.png"

export default function Search({ styles, placeholderText = "Search" }) {
  return (
    <div className={`${styles} items-center bg-white rounded-[5px]`}>
      <img className="ps-4" src={search} alt="search icon" />
      <input
        aria-label="search input"
        className="ps-1 text-[#BDBDBD] placeholder:text-[#BDBDBD] placeholder:text-xs outline-none w-full rounded-[5px]"
        type="text"
        placeholder={placeholderText}
      />
    </div>
  )
}
