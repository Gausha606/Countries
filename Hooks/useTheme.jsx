import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  return useContext(ThemeContext);
}

//we have made a custom hook to use the theme context so that we can use it in any component without importing the context
