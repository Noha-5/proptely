import React, { PureComponent } from "react"
import { PieChart, Pie, Label, ResponsiveContainer, Tooltip } from "recharts"

const completeionStatus = [{ name: "Group A", value: 1400 }]

export default function ProgressPieChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height={185}>
        <PieChart width={200} height={170}>
          <Pie
            dataKey="value"
            data={completeionStatus}
            startAngle={400}
            endAngle={0}
            cx={120}
            cy={90}
            innerRadius={78}
            outerRadius={80}
            fill="#E7F3F9"
            strokeWidth={0}
            cornerRadius={10}
          >
            <Label
              value="75%"
              position="center"
              style={{ fontSize: "24px", fontWeight: "500" }}
              fill="#71EDE2"
            />
          </Pie>
          <Pie
            dataKey="value"
            data={completeionStatus}
            startAngle={350}
            endAngle={50}
            cx={120}
            cy={90}
            innerRadius={70}
            outerRadius={80}
            fill="#71EDE2"
            cornerRadius={10}
            strokeWidth={0}
          >
            <Label
              value="75%"
              position="center"
              style={{ fontSize: "24px", fontWeight: "500" }}
              fill="#71EDE2"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}
