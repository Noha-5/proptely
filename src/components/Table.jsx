import React from "react"
import sort from "/assets/images/icons/sort.png"
import edit from "/assets/images/icons/edit.png"
import eye from "/assets/images/icons/eye.png"

export default function Table({ columns, data }) {
  return (
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
        </tr>
      </thead>

      {/* Table Content */}
      <tbody className=" [&>*:nth-child(2n+1)]:bg-blue-450">
        {data ? (
          data.map((item, index) => (
            <tr
              key={index}
              className="[&>*:not(:last-child)]:border-r-2 [&>*:not(:last-child)]:border-[#B5DEF2]  [&>*]:text-[11px]  [&>*]:font-light [&>*]:p-2"
            >
              <td>{item.id}</td>
              <td>{item.property}</td>
              <td>{item.tags}</td>
              <td>{item.size}</td>
              <td>{item.units}</td>
              <td>{item.fees}</td>
              <td>{item.stage}</td>
              <td>{item.assignedTo}</td>
              <td className="text-center">
                <button>
                  <img src={edit} alt="edit icon" />
                </button>
                <button>
                  <img src={eye} alt="visibility icon" />
                </button>
              </td>
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
  )
}
