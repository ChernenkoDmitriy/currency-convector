import { IColors } from "./IColors";
import { TTheme } from "./TTheme";

export interface IThemesContext {
    colors: IColors;
    theme: TTheme;
    setTheme: (value: TTheme) => void;
    availableThemes: TTheme[];
}