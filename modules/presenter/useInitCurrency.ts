import { useEffect } from "react"
import { ratesModel } from "../../src/entities/rates/Rates";
import { fetchCurrency } from "../useCases/loadCurrencyList";

export const useInitCurrency = () => {

    const loadCurrencies = async () => {
        const responseUsd = await fetchCurrency();
        if (responseUsd?.rates) {
            ratesModel.ralesList = Object.keys(responseUsd?.rates);
        }
        if (!ratesModel.firstRate) {
            ratesModel.firstRate = responseUsd;
        }
        if (!ratesModel.secondRate) {
            const responseEur = await fetchCurrency('EUR');
            if (responseEur?.rates) {
                ratesModel.secondRate = responseEur;
            }
        }
    }

    useEffect(() => {
        loadCurrencies();
    }, []);

}