import React from "react";
import EventCard from "./EventCard";
import AsideCard from "./AsideCard";

import Graph from "./Graph";

import { data } from "./data";
import "./Dashboard.css";
import ChartCard from "./ChartCard";
export default function Dashboard({props}) {

  let remaining = props.PersonEntered - props.PersonExit;
  if (remaining<0) {
    remaining = 0;
  }

  return (
    <div className="body">
      {/* <Graph data={data}/> */}
      <h2> Event Log</h2>

      {/* container */}
      <div className="container">
        {/* section */}
        <div className="section">
          {/* card 1,2,3 */}
          <div className="card-1-2-3">
            <div className="card">
              <EventCard data={{ heading: "Total In", value: props.PersonEntered }} />
            </div>
            <div className="card">
              <EventCard data={{ heading: "Total Out", value: props.PersonExit }} />
            </div>
            <div className="card">
              <EventCard data={{ heading: "Present Audience", value: remaining }} />
            </div>
          </div>

          {/* card 4 */}
          <div className="card">
            {/* <EventCard data={{ heading: "card 4", value: "200" }} /> */}
            <ChartCard props={{totalIn: props.PersonEntered, totalOut: props.PersonExit, EventName: props.EventName}}/>
          </div>
        </div>

        {/* aside */}
        <div className="card" style={{ flex: 3 }}>
          <AsideCard props={props} />
        </div>
      </div>

      {/* container end */}
    </div>
  );
}
