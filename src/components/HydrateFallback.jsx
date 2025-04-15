import React from "react"

export default function HydrateFallback() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
      <h1 className="ms-1 text-2xl">Loading Data...</h1>
    </div>
  )
}
