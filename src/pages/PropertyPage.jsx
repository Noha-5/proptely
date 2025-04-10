import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import Search from "../components/header/Search"
import Table from "../components/Table"
import download from "/assets/images/icons/download.png"
import filter from "/assets/images/icons/filter.png"

export default function PropertyPage() {
  const propertyData = useLoaderData()

  return (
    <>
      {/* pages header */}
      <section className="flex flex-wrap justify-between items-center mt-7">
        <h1 className="text-xl font-semibold">Properties</h1>
        <div className="flex items-center">
          <button className="px-2 py-2 bg-teal-450 rounded">
            <img className="min-w-3" src={download} alt="download icon" />
          </button>
          <button className="px-1 py-2 bg-blue-650 rounded text-white font-medium text-xs ms-1">
            Import Properties
          </button>
          <button className="px-1 py-2 bg-blue-650 rounded text-white font-medium text-xs ms-2">
            Add Properties
          </button>
        </div>
      </section>

      {/* tab & filter section */}
      <section className="flex flex-wrap items-center justify-between mt-16 ">
        {/* tabs */}
        <ul className="flex flex-wrap items-center gap-5 [&>*>button]:text-xs">
          <li>
            <button className="text-blue-650 font-semibold">All</button>
          </li>
          <li>
            <button>Residential</button>
          </li>
          <li>
            <button>Commercial</button>
          </li>
          <li>
            <button>Co Living</button>
          </li>
        </ul>

        {/* filters */}
        <div className="flex flex-wrap items-center gap-2">
          <Search
            styles="flex border border-[#EFF5F8] [&>input]:py-1"
            placeholderText="Search Properties"
          />
          <button className="bg-teal-450 px-2 py-2 rounded">
            <img className="min-w-[14px]" src={filter} alt="filter icon" />
          </button>
          <button className="px-3 py-2 text-xs rounded-[3px] border border-[#E7F3F9]">
            Edit Column
          </button>
          <button className="px-3 py-2 text-xs rounded-[3px] border border-[#E7F3F9]">
            Clear
          </button>
        </div>
      </section>

      {/* Table  */}
      <div className=" overflow-x-auto">
        <Table
          data={propertyData?.properties}
          columns={[
            "ID",
            "Property",
            "Tags",
            "Size",
            "No of Units",
            "Mangament Fees",
            "Stage",
            "Assigned To",
          ]}
        />
      </div>
    </>
  )
}

// Property Loader function
export const propertyLoader = async () => {
  try {
    const response = await fetch(
      "https://noha-5.github.io/proptely/data/property.json"
    )
    if (response.ok && response.status === 200) {
      {
        const data = await response.json()
        return data
      }
    } else {
      const error = await response.json()
      throw error
    }
  } catch (error) {
    console.error(error)
  }
}
