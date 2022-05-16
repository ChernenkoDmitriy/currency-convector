export type IColors = {
    background: string;
    border: string;
    regularText: string;
    buttonEdit: string;
    buttonOperation: string;
    buttonNumber: string;
}

export interface IColorsController {
    theme: 'dark' | 'light';
    colors: IColors;
    saveTheme: (data: 'dark' | 'light') => void;
}
