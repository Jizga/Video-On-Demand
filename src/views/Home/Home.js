import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  const { data, setData } = useContext(Context);

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
  }, [data, setData]);

  return <div>{data.length ? <Carousel data={data} /> : "Loading..."}</div>;
}
