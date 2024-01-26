import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";

import { database } from "./firebase";
import FirstScreen from "./FirstScreen";

export default function App() {
  const [data, setData] = useState([]);
  const [dispData, setdispData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(database);
        const responseData = response.data;
        const array = Object.keys(responseData).map(element => responseData[element]);
        setData(array);
        setdispData(array[array.length-1])


        if (String(array[array.length-1].EndTime).toLowerCase().includes("progress")) {
          console.log("running again....");
          setTimeout(() => {
            fetchData()
          }, 1500);
        }

        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <FirstScreen props={{data, dispData, setdispData}} />
  );
}
