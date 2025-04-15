import React, { useEffect } from "react"

// icons
import caretDown from "/assets/images/icons/caretDown.png"
import { Link, Outlet, useLocation } from "react-router-dom"

export default function UnitLayout() {
  const tabs = [
    { name: "Overview", path: "overview" },
    { name: "Financials", path: "financials" },
    { name: "Tickets", path: "tickets" },
    { name: "Work Orders", path: "work-orders" },
    { name: "Attachments", path: "attachments" },
    { name: "Listing", path: "listing" },
    { name: "Communication", path: "communication" },
    { name: "Legal", path: "legal" },
    { name: "Notes", path: "notes" },
    { name: "Inspection", path: "inspection" },
  ]

  const [activeTab, setActiveTab] = React.useState(0)
  const location = useLocation()

  // sets active tab according to current url
  useEffect(() => {
    const path = location.pathname.split("/")[4]
    const index = tabs.findIndex((link) => link.path === path)
    setActiveTab(index)
  }, [location])

  return (
    <section>
      <header>
        <section className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold mt-7">Unit No</h1>
            <p className="text-base font-normal">
              Status{" "}
              <span className="font-light text-white text-xs bg-teal-450 rounded-[3px] px-1 py-[1px]">
                Vacant
              </span>
            </p>
          </div>
          <button className="flex gap-2 bg-blue-650 py-2 px-5 rounded-[3px]">
            <span className="text-white">Action</span>
            <img src={caretDown} alt="Caret Down icon" />
          </button>
        </section>
        <ul className="flex justify-between flex-wrap gap-y-1 mt-5 bg-[#EFF5F880] border-b border-blue-550 [&>*>a]:text-sm [&>*>a]:font-medium [&>*>a]:text-blue-550 [&>*>a]:px-4 [&>*>a]:py-[10px] [&>*>a.active]:bg-blue-650 [&>*>a.active]:text-white [&>*>a.active]:px-4  [&>*>a.active]:py-[10px] [&>*>a.active]:rounded-t-md">
          {tabs.map((tab, index) => (
            <li className="py-[6px] " key={index}>
              <Link
                to={tab.path}
                className={`${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
    </section>
  )
}
