import React from "react";
import { colors } from "./colors";
import logo from "./gradient.png";



export default function AsideCard({ props }) {
  return (
    <div
      style={{
        backgroundColor: colors.snow,
        borderRadius: "10px",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)",
        gap: 5,
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
        Event Name
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
      }}>{props.EventName || "event"}</text>
    </span>


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
        Date
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
      }}>{String(props.StartTime).split(" ")[0]}</text>
    </span>

    
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
        Start Time
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
      }}>{String(props.StartTime).split(" ")[1]}</text>
    </span>

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
        Close Time
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
      }}>{String(props.EndTime).split(" ")[1]}</text>
    </span>
    </div>
  );
}
