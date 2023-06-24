import React, {createContext} from "react";
import themes from "../../constant/themes";

interface ThemeContext {
  theme: string,
  setTheme: React.Dispatch<string>
}

const ThemeContext = createContext({} as ThemeContext);

export default ThemeContext;