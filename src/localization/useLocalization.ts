import { useContext } from "react";
import { LocalizationContext } from ".";

export const useLocalization = () => { return useContext(LocalizationContext) };