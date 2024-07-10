# Currency Converter

A simple and easy-to-use npm package to convert currencies using the latest exchange rates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Installation

You can install this package using npm:

```bash
npm install rs-currency-converter
```
## Usage
Basic Usage
```bash
import convertCurrency from "rs-currency-converter"

convert('USD', 'EUR', 100)
  .then(result => {
    console.log(`Converted amount: ${result} EUR`);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

```
## API

### `convertCurrency(fromCurrency, toCurrency, units)`

Converts an units from one currency to another using the latest exchange rates.

### Parameters

`fromCurrency` (string): The currency code of the original currency (e.g., 'USD').

`toCurrency` (string): The currency code of the target currency (e.g., 'EUR').

`units` (number): The units of money to convert.

### Returns

A promise that resolves to the converted amount in the target currency.
