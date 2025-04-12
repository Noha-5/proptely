import React from "react"
// images
import units from "/assets/images/stats/units.png"
import owners from "/assets/images/stats/owners.png"
import tenants from "/assets/images/stats/tenants.png"
import contracts from "/assets/images/stats/contracts.png"

export default function NumberSummary({ heading, companyNumbers }) {
  const icons = [units, owners, tenants, contracts]
  return (
    <>
      <h2 className="capitalize text-base font-medium mt-12">{heading}</h2>
      <ul className="grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] mt-5 gap-5">
        {companyNumbers &&
          companyNumbers.map((number, index) => (
            <li
              key={index}
              className="rounded-2xl border border-blue-550 py-4 px-3"
            >
              <img className="min-w-9 mb-3" src={icons[index]} alt="icon" />
              <h4 className="text-2xl font-semibold">{number.number}</h4>
              <h3 className="text-base font-medium">{number.name}</h3>
              <p className="text-xs font-medium text-[#0059FF]">
                +{number.profit}% from yesterday
              </p>
            </li>
          ))}
      </ul>
    </>
  )
}
