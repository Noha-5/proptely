import React from "react"
import Header from "../components/stats/units/Header"
import StackedBarChart from "../components/stats/StackedBarChart"
import Table from "../components/Table"
import LineGraph from "../components/stats/units/LineGraph"
import { useLoaderData } from "react-router-dom"
import StackedPieChart from "../components/stats/units/StackedPieChart"
import ProgressPieChart from "../components/stats/units/ProgressPieChart"
import StackedVerticalBarChart from "../components/stats/units/StackedVerticalBarChart"
import DetailsList from "../components/stats/units/DetailsList"

// icons
import arrowUp from "/assets/images/units/arrowUp.png"
import arrowDown from "/assets/images/units/arrowDown.png"
import edit from "/assets/images/icons/editWhite.png"

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
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-4 py-5 overflow-x-auto">
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
        <div className="mt-4 border border-[#EFF5F8] rounded-md py-5">
          <h2 className="font-medium text-sm px-[15px] mb-5">
            Rent/Sale Details
          </h2>
          <DetailsList>
            <li>Rent Type</li>
            {data.rentDetails.map((detail, index) => (
              <li key={index}>
                <span>{detail.name}</span>
                <span>AED {detail.value}</span>
              </li>
            ))}
          </DetailsList>
        </div>

        {/* Lease History Table */}
        <div className="mt-4 border border-[#EFF5F8] rounded-md px-4 py-5">
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
        <div className="mt-4 border border-[#EFF5F8] rounded-md px-4 py-5">
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
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-4 py-5 overflow-x-auto">
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
            <div className="w-1/2 lg:w-32 min-w-32">
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

        {/* Occupancy stats */}
        <div className="mt-4 border border-[#EFF5F8] rounded-md px-4 pt-3 overflow-x-auto">
          <div className="[&>div>h2]:before:content-[''] [&>div>h2]:before:inline-block [&>div>h2]:before:w-3 [&>div>h2]:before:h-3 [&>div>h2]:before:rounded-[2px] [&>div>h2]:before:bg-[#71EDE2] [&>div>h2]:before:me-1">
            <Header heading="Occupancy Stats" />
            <div className="w-64 mx-auto relative bottom-3">
              <StackedPieChart
                total={data.occupancyStatsTotal}
                numbers={data.occupancyStats}
              />
              <div className="px-16 absolute left-0 right-0 -bottom-1 flex justify-between items-center">
                <span className="text-[#BDBDBD] text-xs">0%</span>
                <span className="text-[#BDBDBD] text-xs">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Management */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-4 py-5 overflow-x-auto">
          <Header heading="Facility Management" />
          {/* vertical bar chart */}
          <div className="min-w-64">
            <StackedVerticalBarChart data={data.facilityStats} />
          </div>

          {/* Completion status */}
          <section className="flex justify-between items-center flex-wrap">
            <h4 className="pt-[62px] pb-[92px] text-sm font-medium">
              Completion Status
            </h4>
            <div className="min-w-64">
              <ProgressPieChart />
            </div>
          </section>
        </div>

        {/* Commission Snapshot */}
        <div className="mt-6 border border-[#EFF5F8] rounded-md px-4 py-5 overflow-x-auto">
          <Header heading="Commission Snapshot" />
          {/* vertical bar chart */}
          <div className="min-w-64">
            <StackedVerticalBarChart
              data={data.commissionSnapshot}
              stacked="true"
            />
          </div>
        </div>

        {/* Unit Information */}
        <div className="mt-4 border border-[#EFF5F8] rounded-md pt-[18px] [&>div]:pb-11 [&>div]:px-[9px] pb-6">
          <Header heading="Unit Information" icon={edit} />
          <DetailsList>
            {data.unitInfo.map((detail, index) => (
              <li key={index}>
                <span
                  className={
                    index === 18
                      ? "[&]:after:content-['Beds'] [&]:after:block [&]:after:text-[#BDBDBD] [&]:after:-mt-1"
                      : index === 19
                      ? "[&]:after:content-['Parking'] [&]:after:block [&]:after:text-[#BDBDBD] [&]:after:-mt-1"
                      : ""
                  }
                >
                  {detail.name}
                </span>
                <span
                  className={
                    index === 0 || index === 1 || index === 8
                      ? "text-[#1D90D8]"
                      : index === 10 || index === 11
                      ? "text-[#BDBDBD]"
                      : ""
                  }
                >
                  {detail.value}
                </span>
              </li>
            ))}
          </DetailsList>
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
