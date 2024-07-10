import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_pBl32eUKIikMZk0VahityxmIFmKtfmcjCWDIE7RI');

export default async function convertCurrency(fromCurrency, toCurrency, units) {
    const result = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = result.data[toCurrency];
    return units * multiplier;
}