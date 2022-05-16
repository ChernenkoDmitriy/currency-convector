import { ratesModel } from '../../src/entities/rates/Rates';
import { requester } from '../../src/libraries/requester';

export const fetchCurrencyList = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    const options = { method: 'GET', };

    const response = await requester.get(url, options);

    if (response.data) {
        ratesModel.ralesList = response?.data
    }
}