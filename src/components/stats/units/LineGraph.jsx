import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function LineGraph({ color, name, data }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={50}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -50,
            bottom: -50,
          }}
        >
          <XAxis dataKey="name" strokeWidth={0} tick={false} />
          <YAxis tick={false} strokeWidth={0} />
          <Tooltip />
          <Line
            name={name}
            type="linear"
            dataKey="value"
            stroke={color}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
