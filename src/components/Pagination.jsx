import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import Table from "../components/Table"
// icons
import previous from "/assets/images/icons/chevron_left.png"
import next from "/assets/images/icons/chevron_right.png"

export default function Pagination({ columns, data }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalRows = data.length || 0 // Total number of rows
  const [rowsPerPage, setRowsPerPage] = useState(10) // Number of rows per page
  const [pageCount, setPageCount] = useState(0) // Total number of pages

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  // rows per page handler
  function handleRowsPerPage(e) {
    setCurrentPage(1)
    console.log("current page", currentPage, "page count", pageCount)
    setRowsPerPage(parseInt(e.target.value))
  }

  // calculate number of pages to show in pagination
  useEffect(() => {
    setPageCount(Math.ceil(totalRows / rowsPerPage))
  }, [rowsPerPage, totalRows])

  // sets the current page on page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1) // +1 because page index starts from 0
  }

  // pagination buttons
  const previousBtn = (
    <button
      className={`${
        currentPage === 1 ? "bg-[#EFF5F8]" : "bg-blue-650 rotate-180"
      } rounded-sm p-1`}
    >
      <img
        className="min-w-4"
        src={`${currentPage === 1 ? previous : next} `}
        alt="previous icon"
      />
    </button>
  )

  const nextBtn = (
    <button
      className={`${
        currentPage === pageCount ? "bg-[#EFF5F8] -rotate-180 " : "bg-blue-650 "
      }} rounded-sm p-1`}
    >
      <img
        className="min-w-4"
        src={`${currentPage === pageCount ? previous : next} `}
        alt="next icon"
      />
    </button>
  )

  return (
    <>
      {/* Table component */}
      <Table columns={columns} data={data} currentRows={currentRows} />

      {/* Pagination */}
      <section className="flex flex-wrap gap-y-3 gap-x-[10%] md:gap-[20%] items-center mt-5 mb-14">
        {/* rows per page dropdown */}
        <div>
          <select
            aria-label="rows per page"
            className="flextext-[10px] rounded p-2 me-[10px] border border-[#EFF5F8] text-xs"
            name="rowsPerPage"
            id="rowsPerPage"
            onChange={(e) => handleRowsPerPage(e)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <label className="text-xs" htmlFor="rowsPerPage">
            Displaying Units {indexOfFirstRow + 1}-
            {currentRows.length + indexOfFirstRow} of {totalRows} total
          </label>
        </div>

        {/* page buttons */}
        <ReactPaginate
          className={`flex items-center gap-2 text-xs  [&>li:not(:first-child):not(:last-child)>a]:border [&>*>a]:border-[#EFF5F8] [&>*>a]:rounded-sm [&>li.active>a]:border-blue-650 [&>*>a.active]:text-white [&>*>a]:py-1 [&>*>a]:px-2`}
          previousLabel={previousBtn}
          nextLabel={nextBtn}
          breakLabel={null}
          pageCount={pageCount} // Total number of pages
          forcePage={currentPage - 1} // Current page
          marginPagesDisplayed={1} // How many pages to show at the beginning and end
          pageRangeDisplayed={3} // How many pages to show around the current page
          onPageChange={handlePageClick} // What happens when a page is clicked
          activeClassName={"active"} // CSS class for the active page
        />
      </section>
    </>
  )
}
