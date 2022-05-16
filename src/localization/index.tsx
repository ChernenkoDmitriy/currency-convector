import React, { createContext, useState, useMemo, FC } from 'react';
import i18n from 'i18n-js';
import { ILanguagesObj } from './entities/ITranslations';
import { ILocalizationContext } from './entities/ILanguagesContext';
import { TLanguages } from './entities/TLanguages';

const LOCALIZATION_JSON: ILanguagesObj = require('./localization.json');
i18n.fallbacks = true;
// @ts-ignore
i18n.translations = LOCALIZATION_JSON;

export const LocalizationContext = createContext<ILocalizationContext>({
    language: LOCALIZATION_JSON.INITIAL_LANGUAGE,
    t: (_) => '',
    setLanguage: (_) => { },
    availableLanguages: LOCALIZATION_JSON.AVAILABLE_LANGUAGES,
});

export const LocalizationProvider: FC = ({ children }) => {
    const [availableLanguages, setAvailableLanguages] = useState<TLanguages[]>(LOCALIZATION_JSON.AVAILABLE_LANGUAGES);
    const [language, setLanguage] = useState<TLanguages>(LOCALIZATION_JSON.INITIAL_LANGUAGE);

    const onSetLanguage = (value: TLanguages) => {
        setLanguage(value);
        i18n.locale = value;
    };

    const localizationContext = useMemo(() => ({
        language,
        t: (key: string) => i18n.t(key, { language }),
        setLanguage: onSetLanguage,
        availableLanguages
    }), [language, availableLanguages]);

    return (
        <LocalizationContext.Provider value={localizationContext}>
            {children}
        </LocalizationContext.Provider>
    );
};