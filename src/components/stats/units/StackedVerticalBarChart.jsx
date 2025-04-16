import React from "react"
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts"

function CustomizedAxisTick(props) {
  const { x, y, stroke, payload } = props

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-7}
        textAnchor="start"
        fontSize="7px"
        fontWeight="300"
        fill="#272729"
      >
        {payload.value}
      </text>
    </g>
  )
}

const COLORS = ["#63DFD4", "#E7F3F9"]

export default function StackedVerticalBarChart({ data, stacked = "false" }) {
  return (
    <ResponsiveContainer width="70%" height={130}>
      <BarChart
        width={150}
        height={100}
        data={data}
        layout="vertical"
        margin={{
          top: 0,
          right: 20,
          bottom: 0,
          left: -60,
        }}
      >
        <XAxis type="number" tick={false} strokeWidth={0} />
        <YAxis
          type="category"
          dataKey="name"
          tickLine={false}
          tickMargin={-7}
          strokeWidth={0}
          tick={<CustomizedAxisTick />}
        />
        <Bar
          stackId="a"
          dataKey="value"
          fill="#63DFD4"
          barSize={7}
          radius={[7, 7, 7, 7]}
        ></Bar>

        {stacked === "true" && (
          <Bar
            stackId="a"
            dataKey="bg"
            fill="#E7F3F9"
            barSize={7}
            radius={[0, 7, 7, 0]}
          ></Bar>
        )}
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}
