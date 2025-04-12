import React from "react"
// icons
import calendar from "/assets/images/icons/calendar.png"
import filter from "/assets/images/icons/filter.png"
import NumberSummary from "../components/stats/NumberSummary"
import { useLoaderData } from "react-router-dom"

export default function FinancialStatsPage() {
  const data = useLoaderData()
  const companyNumbers = data?.companyNumbers
  if (!data || !companyNumbers)
    return (
      <h1 className="text-2xl text-center mt-8">
        Data not available - Error fetching data
      </h1>
    )

  return (
    <>
      <section className="flex flex-wrap justify-between items-center mt-7">
        <h1 className="text-base font-medium text-blue-650">Financial Stats</h1>
        <div className="flex items-center me-6">
          <button
            className="px-2 py-2 bg-teal-450 rounded"
            aria-label="calendar"
          >
            <img className="min-w-3" src={calendar} alt="calendar icon" />
          </button>
          <button
            className="ms-3 px-[6px] py-[6px] bg-teal-450 rounded"
            aria-label="filter"
          >
            <img className="min-w-3" src={filter} alt="filter icon" />
          </button>
        </div>
      </section>

      {/* Company portfolio size */}
      <NumberSummary
        heading="Company Portflio Size"
        companyNumbers={companyNumbers}
      />
    </>
  )
}

export async function financialStatsLoader() {
  try {
    const response = await fetch(
      "https://noha-5.github.io/proptely/data/financialStats.json"
    )
    if (response.ok && response.status === 200) {
      const data = await response.json()
      return data
    } else {
      const error = await response.json()
      throw error
    }
  } catch (error) {
    console.error(error)
  }
}
