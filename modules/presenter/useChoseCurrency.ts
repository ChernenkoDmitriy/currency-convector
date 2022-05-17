import { useNavigation, useRoute } from "@react-navigation/native";
import { ratesModel } from "../../src/entities/rates/Rates";
import { fetchCurrency } from "../useCases/loadCurrencyList";

export const useChoseCurrency = () => {
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
    }

    const onChoseCurrency = (value: string) => {
        if (value === ratesModel.firstRate?.base_code || value === ratesModel.secondRate?.base_code) {
            onChoseOppositeCurrency();
        } else {
            getNewRate(value);
        }
        navigation.goBack();
    }

    return { onChoseCurrency };

}