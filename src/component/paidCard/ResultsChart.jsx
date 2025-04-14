import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    student_id: "S1001",
    name: "Alice",
    physics: 88,
    chemistry: 76,
    math: 90,
  },
  {
    student_id: "S1002",
    name: "Bob",
    physics: 72,
    chemistry: 81,
    math: 85,
  },
  {
    student_id: "S1003",
    name: "Charlie",
    physics: 95,
    chemistry: 89,
    math: 93,
  },
  {
    student_id: "S1004",
    name: "Diana",
    physics: 78,
    chemistry: 84,
    math: 88,
  },
  {
    student_id: "S1005",
    name: "Ethan",
    physics: 91,
    chemistry: 90,
    math: 87,
  },
  {
    student_id: "S1006",
    name: "Fiona",
    physics: 85,
    chemistry: 79,
    math: 91,
  },
  {
    student_id: "S1007",
    name: "George",
    physics: 69,
    chemistry: 74,
    math: 82,
  },
  {
    student_id: "S1008",
    name: "Hannah",
    physics: 92,
    chemistry: 88,
    math: 95,
  },
  {
    student_id: "S1009",
    name: "Ian",
    physics: 76,
    chemistry: 80,
    math: 78,
  },
  {
    student_id: "S1010",
    name: "Julia",
    physics: 89,
    chemistry: 85,
    math: 94,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"physics"}></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
