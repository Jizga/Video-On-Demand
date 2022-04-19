import React, { useEffect } from "react";
import { useAppContext } from "../../context/context";
import Carousel from "../../components/Carousel/Carousel";
import Switcher from "../../components/Switcher/Switcher";

export default function Home() {
  const { data, setData } = useAppContext();

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
      {data.length ? <Carousel data={data} /> : "Loading..."}
      <Switcher />
    </div>
  );
}
