import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { calculatorModel } from "../../src/entities/calculator/Calculator";
import { ratesModel } from "../../src/entities/rates/Rates";
import { fetchCurrency } from "../useCases/fetchCurrency";

export const useChoseCurrency = () => {
    const [isRateLoading, setIsRateLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const isFirst = useRoute<any>().params?.isFirst;
    const navigation = useNavigation<any>();

    const onRefreshRates = async () => {
        setIsRateLoading(true);
        const firstRate = await fetchCurrency(ratesModel.firstRate?.base_code);
        const secondRate = await fetchCurrency(ratesModel.secondRate?.base_code);
        ratesModel.firstRate = firstRate;
        ratesModel.secondRate = secondRate;
        setTimeout(() => setIsRateLoading(false), 500)

    }

    const getNewRate = (value: string) => {
        fetchCurrency(value)
            .then(response => {
                if (response?.rates) {
                    if (isFirst) {
                        ratesModel.firstRate = response;
                    } else {
                        ratesModel.secondRate = response;
                    }
                }
            })
    }

    const onChoseOppositeCurrency = () => {
        let tempCurrency = ratesModel.firstRate;
        ratesModel.firstRate = ratesModel.secondRate;
        ratesModel.secondRate = tempCurrency;
        calculatorModel.calculateRate()
    }

    const onChoseCurrency = (value: string) => {
        if (value === ratesModel.firstRate?.base_code || value === ratesModel.secondRate?.base_code) {
            onChoseOppositeCurrency();
        } else {
            getNewRate(value);
        }
        calculatorModel.calculateRate()
        navigation.goBack();
    }

    return { isRateLoading, searchText, onRefreshRates, setSearchText, onChoseCurrency, onChoseOppositeCurrency, getNewRate };

}