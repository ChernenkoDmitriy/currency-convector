import { TLanguages } from "./TLanguages";

export interface ILocalizationContext {
    language: TLanguages;
    t: (key: string) => string;
    setLanguage: (value: TLanguages) => void;
    availableLanguages: TLanguages[];
};