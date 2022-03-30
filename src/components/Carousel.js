import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://test-data-interviews.s3.eu-west-1.amazonaws.com/accedoTest.json"
        );
        response = await response.json();
        setData(response);
      } catch (e) {
        console.error(`Error from database -- ${e}`);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {data.length
        ? data.map((dataElement) => (
            <Card id={dataElement.id} element={dataElement} />
          ))
        : "Loading..."}
    </div>
  );
}
