import React, {createContext} from "react";
import themes, { ThemesType } from "../../constant/themes";

interface ThemeContext {
  theme: ThemesType,
  setTheme: React.Dispatch<ThemesType>
}

const ThemeContext = createContext({} as ThemeContext);

export default ThemeContext;