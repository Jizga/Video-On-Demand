import React, { useEffect } from "react";
import { useAppContext } from "../Context/Context";

export default function UseTheme(elementsBySearch) {
  const { isLigthTheme, setIsLigthTheme } = useAppContext();

  console.log('elementsBySearch -- ', elementsBySearch);

  useEffect(() => {
    const [rootApp] = elementsBySearch;
    console.log(isLigthTheme, rootApp);

    const replaceClass = () => {
      if (isLigthTheme) {
        rootApp.classList.add("ligth");
        rootApp.classList.replace("dark", "ligth");
      } else {
        rootApp.classList.replace("ligth", "dark");
      }
    };

    replaceClass();
  }, [isLigthTheme]);

}
