import React from "react";
import { colors } from "./colors";
import logo from "./gradient.png";

export default function EventCard({data}){

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
      //   border: "2px solid black",
    }}
  >


    {/* div containing heading */}
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <img
        src={logo}
        alt="nothing.."
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "2px",
          marginRight: "10px",
        }}
      />
      <span style={{ color: colors.skyMagenta, fontWeight: "bold" }}>
        {data.heading}
      </span>
    </div>
    <span
      style={{
        color: colors.englishViolet,
        display: "flex",
        padding: "15px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <text style={{
        color: colors.englishViolet,
        fontSize: "25px",
        textAlign: "center",
        fontWeight: "bold"
      }}>{data.value}</text>
    </span>

    
  </div>
)
}