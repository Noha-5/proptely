import React, { useEffect, useState } from "react"
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function StackedBarChart({ transactions, transactionsLegend }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <ResponsiveContainer
        width={windowWidth <= 500 ? "200%" : "100%"}
        height={224}
      >
        <ComposedChart
          width={500}
          height={400}
          data={transactions}
          margin={{
            top: 0,
            right: 20,
            bottom: 0,
            left: -10,
          }}
        >
          <XAxis
            className="text-[10px] font-light"
            dataKey="name"
            scale="band"
            tickLine={false}
            dx={22}
            dy={5}
            stroke="#E7F3F9"
            strokeWidth={1}
            tick={{ fill: "#BDBDBD" }}
          />
          <YAxis tick={false} stroke="#E7F3F9" strokeWidth={1} />
          <Tooltip />

          <Legend
            iconType="square"
            layout={windowWidth <= 500 ? "horizontal" : "vertical"}
            verticalAlign={windowWidth <= 500 ? "bottom" : "top"}
            align={windowWidth <= 500 ? "center" : "right"}
            formatter={(value, entry, index) => (
              <span className=" text-[10px] capitalize text-[#272729]">
                {value}
                <span
                  className={`flex flex-col ps-1 pe-2 font-medium ${
                    index === 0 && "text-blue-650"
                  } ${index === 1 && "text-[#71EDE2]"} ${
                    index === 2 && "text-[#1D90D8]"
                  } `}
                >
                  <span>{transactionsLegend[index].value}</span>
                </span>
              </span>
            )}
          />
          {/* Added another bar just for the billed legend */}
          <Bar name="billed" fill="#fff" />

          <Bar
            name="Paid"
            dataKey="paid"
            fill="#71EDE2"
            stackId="a"
            barSize={12}
            radius={[0, 0, 7, 7]}
          />
          <Bar
            name="Unpaid"
            dataKey="unpaid"
            barSize={12}
            stackId="a"
            fill="#1D90D8"
            radius={[7, 7, 0, 0]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  )
}
