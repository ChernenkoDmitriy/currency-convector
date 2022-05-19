import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { calculatorModal } from "../../src/entities/calculator/Calculator";
import { ratesModel } from "../../src/entities/rates/Rates";
import { fetchCurrency } from "../useCases/fetchCurrency";

export const useChoseCurrency = () => {
    const [searchText, setSearchText] = useState('');
    const isFirst = useRoute<any>().params?.isFirst;
    const navigation = useNavigation<any>();

    const getNewRate = (value: string) => {
        fetchCurrency(value).then(response => {
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
        calculatorModal.calculateRate()
    }

    const onChoseCurrency = (value: string) => {
        if (value === ratesModel.firstRate?.base_code || value === ratesModel.secondRate?.base_code) {
            onChoseOppositeCurrency();
        } else {
            getNewRate(value);
        }
        calculatorModal.calculateRate()
        navigation.goBack();
    }

    return { searchText, setSearchText, onChoseCurrency, onChoseOppositeCurrency };

}