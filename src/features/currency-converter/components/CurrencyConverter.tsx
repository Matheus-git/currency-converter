import { useEffect, useState } from "react";
import { Currency } from "./currency";
import { getCurrencies } from "../api/currency-repository";
import { CurrencySet } from "../types/types";
import { fetchConvert } from "../helpers/currency-conversion-helper";

export const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<
    string[]
  >([]);

  const [currencyLeft, setCurrencyLeft] =
    useState<CurrencySet>({
      name: "BRL",
      value: 0,
    });

  const [currencyRight, setCurrencyRight] =
    useState<CurrencySet>({
      name: "USD",
      value: 0,
    });

  useEffect(() => {
    const fetchCurrencies = async () => {
      const data = await getCurrencies();
      setCurrencies(data);
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    fetchConvert(
      currencyLeft,
      currencyRight,
      setCurrencyRight
    );
  }, [currencyRight.name]);

  useEffect(() => {
    fetchConvert(
      currencyLeft,
      currencyRight,
      setCurrencyRight
    );
  }, [currencyLeft]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Currency
        currencies={currencies}
        name="currencyLeft"
        currency={currencyLeft}
        setCurrency={setCurrencyLeft}
      />
      <Currency
        currencies={currencies}
        name="currencyRight"
        currency={currencyRight}
        setCurrency={setCurrencyRight}
        valueDisabled={true}
      />
    </section>
  );
};
