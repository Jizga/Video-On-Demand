import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from './Carousel.module.css'; 


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
    <div className={styles.carousel}>
      {data.length
        ? data.map((dataElement) => (
            <Card key={dataElement.id} element={dataElement} />
          ))
        : "Loading..."}
    </div>
  );
}
