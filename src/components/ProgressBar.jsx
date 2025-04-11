import React from "react"

export default function ProgressBar({ progress }) {
  return (
    <div className="bg-[#F6F6F6] rounded-xl h-2 mt-6 w-full">
      <div
        style={{ width: `${progress}%` }}
        className={`bg-[#B5DEF2] rounded-xl h-full`}
      ></div>
    </div>
  )
}
