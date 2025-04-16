import React from "react"
import {
  PieChart,
  Pie,
  Label,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const COLORS = ["#71EDE2", "#003A92", "#83CFFF", "#E7F3F9"]

export default function StackedPieChart({ total, numbers }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={170}>
        <PieChart width={250} height={170}>
          <Pie
            data={numbers}
            cx={120}
            cy={90}
            startAngle={230}
            endAngle={-50}
            innerRadius={70}
            outerRadius={85}
            cornerRadius={40}
            paddingAngle={-10}
            fill="#8884d8"
            dataKey="value"
            stroke={0}
          >
            {numbers.map((entry, index) => (
              <Cell
                fill={
                  index === 0 || index === numbers.length - 1
                    ? COLORS[index % COLORS.length]
                    : "transparent"
                }
              />
            ))}
          </Pie>
          <Pie
            data={numbers}
            cx={120}
            cy={90}
            startAngle={230}
            endAngle={-50}
            innerRadius={70}
            outerRadius={85}
            cornerRadius={0}
            fill="#8884d8"
            dataKey="value"
            stroke={0}
          >
            <Label
              value={total}
              position="center"
              style={{ fontSize: "24px", fontWeight: "500" }}
              fill={COLORS[0]}
            />
            {numbers.map((entry, index) => (
              <Cell
                fill={
                  index === 0 || index === numbers.length - 1
                    ? "transparent"
                    : COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}
