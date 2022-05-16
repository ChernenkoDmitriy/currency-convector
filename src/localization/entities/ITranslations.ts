import { TLanguages } from "./TLanguages";

export interface ILanguagesObj {
    AVAILABLE_LANGUAGES: Array<TLanguages>;
    en: { [key: string]: object };
    ru: { [key: string]: object };
    ua: { [key: string]: object };
    INITIAL_LANGUAGE: TLanguages
};
