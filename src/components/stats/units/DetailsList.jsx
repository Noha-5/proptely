import React from "react"

export default function DetailsList({ children }) {
  return (
    <ul className="[&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:text-[11px] [&>*]:font-normal [&>*]:py-[8.5px] [&>*]:px-[19px] [&>*]:border-b-[0.5px] [&>*]:border-t-[0.5px] [&>*]:border-[#EFF5F8] [&>*>span:first-child]:basis-8/12 md:[&>*>span]:basis-1/2">
      {children}
    </ul>
  )
}
