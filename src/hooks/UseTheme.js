import { useEffect } from "react";
import { useAppContext } from "../context/Context";

export default function UseTheme(elementsBySearch) {
  const { isLightTheme } = useAppContext();

  useEffect(() => {
    const [rootApp] = elementsBySearch;

    const replaceClass = () => {
      if (isLightTheme) {
        rootApp.classList.add("ligth");
        rootApp.classList.replace("dark", "ligth");
      } else {
        rootApp.classList.replace("ligth", "dark");
      }
    };

    replaceClass();
  }, [elementsBySearch, isLightTheme]);
}
