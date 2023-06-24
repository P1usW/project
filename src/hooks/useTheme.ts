import { useContext } from "react";
import ThemeContext from '@src/providers/theme/ThemeContext';

export function useTheme() {
  return useContext(ThemeContext);
}