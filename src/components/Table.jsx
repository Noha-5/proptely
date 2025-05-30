import React, { useEffect, useState } from "react"
// icons
import sort from "/assets/images/icons/sort.png"
import edit from "/assets/images/icons/edit.png"
import eye from "/assets/images/icons/eye.png"
export default function Table({
  columns,
  data,
  currentRows,
  customColumn = "",
  customColumnName = "action",
  customColumnIndex = -1,
}) {
  return (
    <div className=" overflow-x-auto">
      <table className="w-full border-separate border-spacing-0 border border-[#B5DEF2] rounded-md  mt-7">
        {/* Table Headings */}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="[&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-[#B5DEF2]"
              >
                <div className="flex items-center gap-1 p-2">
                  <h6
                    className="text-[11px] font-medium inline-block
                "
                  >
                    {column}
                  </h6>
                  <button>
                    <img className="max-w-4" src={sort} alt="sort icon" />
                  </button>
                </div>
              </th>
            ))}

            {/* Actions Column */}
            {customColumnName === "action" && (
              <th>
                <div className="flex items-center gap-1 p-2">
                  <h6
                    className="text-[11px] font-medium inline-block
                "
                  >
                    Actions
                  </h6>
                  <button>
                    <img className="max-w-4" src={sort} alt="sort icon" />
                  </button>
                </div>
              </th>
            )}
          </tr>
        </thead>

        {/* Table Content */}
        <tbody className=" [&>*:nth-child(2n+1)]:bg-blue-450">
          {data ? (
            currentRows.map((item, index) => (
              <tr
                key={index}
                className="[&>*:not(:last-child)]:border-r-2 [&>*:not(:last-child)]:border-[#B5DEF2]  [&>*]:text-[11px]  [&>*]:font-light [&>*]:p-2"
              >
                {Object.values(item).map((value, index) =>
                  customColumnIndex === index ? (
                    <td key={index}>{customColumn(value)}</td>
                  ) : (
                    <td key={index}>{value}</td>
                  )
                )}
                {customColumnName === "action" && (
                  <td className="text-center">
                    <button className="me-[1.5px] ">
                      <img src={edit} alt="edit icon" />
                    </button>
                    <button>
                      <img src={eye} alt="visibility icon" />
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={100}>
                <h3 className="text-center p-4">No Data Available</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
