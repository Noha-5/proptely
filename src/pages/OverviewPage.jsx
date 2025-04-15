import React from "react"
import Header from "../components/stats/units/Header"
import StackedBarChart from "../components/stats/StackedBarChart"
import Table from "../components/Table"
// icons
import arrowUp from "/assets/images/units/arrowUp.png"
import arrowDown from "/assets/images/units/arrowDown.png"
import LineGraph from "../components/stats/units/LineGraph"
import { useLoaderData } from "react-router-dom"

export default function OverviewPage() {
  const leaseColumns = ["Name", "Status", "Start Date", "End Date", "Rent"]

  // function for styling different status for commission tables
  function statusStyled(status) {
    let styles = ""
    switch (status) {
      case "Active":
        styles = "bg-teal-450"
        break
      case "Paid":
        styles = "bg-teal-450"
        break
      case "Unpaid":
        styles = "bg-[#FFDE2199]"
        break
      case "Hold":
        styles = "bg-[#BDBDBD]"
        break
      case "Bad Debt":
        styles = "bg-[#ED1111]"
        break
      case "Overdue":
        styles = "bg-[#ED1111]"
        break
    }

    return (
      <div
        className={`px-1 py-[1px] text-white rounded-[3px] max-w-fit ${styles}`}
      >
        {status}
      </div>
    )
  }

  const tenatCommissionColumns = [
    "Description",
    "Amount",
    "Invoice Date",
    "Status",
    "Amount",
  ]

  const data = useLoaderData()

  if (!data) {
    return (
      <h1 className="text-2xl text-center mt-8">
        Data not available - Error fetching data
      </h1>
    )
  }

  return (
    <section className="flex flex-wrap mb-96 gap-4">
      {/* Column 1 */}
      <div className="w-full lg:w-1/2 ">
        {/* Recent Transactions */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-3 py-5 overflow-x-auto">
          <Header heading="Recent Transactions" />
          <p className="font-normal text-xs text-[#BDBDBD] leading-[0.5]">
            Jan24- Dec 24
          </p>
          <StackedBarChart
            transactions={data.transactions}
            transactionsLegend={data.transactionsSummary}
          />
        </div>

        {/* Rent / Sales Details */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-3 py-5">
          <h2 className="font-medium text-sm">Rent/Sale Details</h2>
          <ul className="[&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:text-[11px] [&>*]:font-normal [&>*]:py-[8.5px] [&>*]:px-[19px] [&>*:not(:last-child)]:border-b-[0.5px] [&>*]:border-[#EFF5F8] [&>*>span:first-child]:basis-8/12 md:[&>*>span]:basis-1/2">
            {data.rentDetails.map((detail, index) => (
              <li key={index}>
                <span>{detail.name}</span>
                <span>AED {detail.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lease History Table */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-3 py-5">
          <h2 className="font-medium text-sm">Lease History</h2>
          <Table
            columns={leaseColumns}
            data={data.LeaseHistory}
            currentRows={data.LeaseHistory}
            customColumn={statusStyled}
            customColumnName="status"
            customColumnIndex={1}
          />
        </div>

        {/* Comission Details table */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-3 py-5">
          <h2 className="font-medium text-sm">Commission Deatils</h2>
          <h3 className="text-xs font-medium mt-8">Tenant Commission</h3>
          <Table
            columns={tenatCommissionColumns}
            data={data.tenantCommission}
            currentRows={data.tenantCommission}
            customColumn={statusStyled}
            customColumnName="status"
            customColumnIndex={3}
          />
          <h3 className="text-xs font-medium mt-8">Owner Commission</h3>
          <Table
            columns={tenatCommissionColumns}
            data={data.tenantCommission}
            currentRows={data.tenantCommission}
            customColumn={statusStyled}
            customColumnName="status"
            customColumnIndex={3}
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className="lg:w-[40%] w-full">
        {/* Financial Snapshot */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-3 py-5 overflow-x-auto">
          <Header heading="Financials Snapshot" />
          <section className="flex gap-14">
            <div>
              {data.financialSnapshotSummary.map((legend, index) => {
                return (
                  <div key={index} className="mt-5  ms-2">
                    <div className="flex items-center">
                      <span className="font-normal text-[11px] ">
                        {legend.name}
                      </span>
                      <img
                        src={index === 0 ? arrowUp : arrowDown}
                        alt="up arrow"
                      />
                    </div>
                    <p
                      className={`text-[11px] font-medium ${
                        index === 0 && "text-[#71EDE2]"
                      } leading-[0.3]`}
                    >
                      {legend.value}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Line graphs */}
            <div className="w-1/2 lg:w-32 ">
              <div className="border-l border-b">
                <LineGraph
                  color="#71EDE2"
                  name="income"
                  data={data.incomeData}
                />
              </div>
              <div className="border-l border-b mt-3">
                <LineGraph
                  color="#ED1111"
                  name="expense"
                  data={data.expenseData}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

// Units Overview Loader
export async function overviewLoader() {
  try {
    const response = await fetch(
      "https://noha-5.github.io/proptely/data/unitsOverview.json"
    )
    if (response.ok && response.status === 200) {
      const data = await response.json()
      return data
    } else {
      throw new Error("Error fetching Data")
    }
  } catch (error) {
    console.error(error)
  }
}
