import { useContext } from "react";
import { ThemesContext } from ".";

export const useColorTheme = () => { return useContext(ThemesContext) };
