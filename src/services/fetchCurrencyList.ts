import { requester } from '../libraries/requester';

export const fetchCurrencyList = async () => {
    const url = 'https://api.coincap.io/v2/assets';
    const options = { method: 'GET', };

    const response = await requester.get(url, options);
    return response;
}