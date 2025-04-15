import React from "react"
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const DataFormater = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B"
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M"
  } else if (number > 1000) {
    return (number / 1000).toString() + "K"
  } else {
    return number.toString()
  }
}

export default function StackedBarLineChart({
  data,
  mainHeading,
  subHeading,
  graphTimeline,
}) {
  return (
    <section className="mt-8 mb-16">
      <h2 className="text-base font-medium mb-5">{mainHeading}</h2>
      <div className="max-w-xl rounded-md shadow-graph-card border border-[#EFF5F8] p-5">
        <h3 className="ms-5 font-medium text-sm">{subHeading}</h3>
        <h4 className="ms-5 text-xs">{graphTimeline}</h4>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 0,
            }}
          >
            <XAxis
              className="text-[10px] font-light text-[#272729]"
              dataKey="name"
              scale="band"
              tickLine={false}
              dx={15}
              dy={5}
            />
            <YAxis
              className="text-[10px] font-light text-[#272729]"
              label={{ angle: -90, position: "insideLeft" }}
              tickLine={false}
              tickFormatter={DataFormater}
              domain={[0, 900000]}
              tickCount={20}
            />
            <Tooltip />
            <Legend
              iconType="plainline"
              iconSize={25}
              formatter={(value, entry, index) => (
                <span className="text-[10px] capitalize text-[#272729]">
                  {value}
                  <span
                    className={`inline-block ps-1 pe-2 font-medium ${
                      index === 0 && "text-[#FF9293]"
                    } ${index === 1 && "text-[#71EDE2]"} ${
                      index === 2 && "text-[#1D90D8]"
                    } `}
                  >
                    $20876394
                  </span>
                </span>
              )}
            />
            <Bar
              name="Expense"
              dataKey="expense"
              barSize={12}
              stackId="a"
              fill="#FF9293"
              radius={[0, 0, 7, 7]}
            />
            <Bar
              name="Income"
              dataKey="income"
              fill="#71EDE2"
              stackId="a"
              barSize={12}
              radius={[7, 7, 0, 0]}
            />
            <Line
              name="Net Profit"
              type="linear"
              dataKey="net"
              stroke="#83CFFF"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
