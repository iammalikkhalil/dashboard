import React from "react";
import { colors } from "./colors";
import Graph from "./Graph";


export default function ChartCard({props}){

return (
  // container
  <div
    style={{
      backgroundColor: colors.snow,
      borderRadius: "10px",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)",
    }}
  >
      <Graph props={props}/>
  </div>
)
}