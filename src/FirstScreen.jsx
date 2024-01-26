import React from "react";
import Dashboard from "./Dashboard";

export default function FirstScreen({ props }) {
  const handleSidebarClick = (element) => {
    props.setdispData(element);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          width: "15%",
          backgroundColor: "#FDF7FA",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "100px", marginBottom: "10px" }}>
          previous events
        </div>
        {props.data.slice().reverse().map((element, index) => (
          <div
            key={index} // Make sure to provide a unique key for each element
            onClick={() => {
              handleSidebarClick(element);
            }}
            style={{
              border: "1px solid #EFCB5A",
              display: "inline",
              padding: "2px",
              paddingRight: "6px",
              paddingLeft: "6px",
              fontSize: "20px",
              borderRadius: "5px",
              margin: "5px",
              color: "#F977BC",
              fontWeight: "normal",
              cursor: "pointer",
            }}
          >
            {String(element.EventName).toUpperCase() || "EVENTS"}
          </div>
        ))}
      </div>


      <div
        style={{
          width: "85%",
          marginLeft: "15%",
          cursor: "default",
        }}
      >
        <Dashboard props={props.dispData} />
      </div>
    </div>
  );
}
