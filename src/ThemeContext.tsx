import { createContext } from "react";
//tell TS that we have a strict ordering of string and function. 
const ThemeContext = createContext<[string, (theme: string) => void]>([
    "green",
    () => {},
  ]);

export default ThemeContext;
