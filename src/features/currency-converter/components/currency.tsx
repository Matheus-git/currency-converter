import { Input } from "./input";
import { Select } from "./select";
import { CurrencySet } from "../types/types";

type SelectProps = {
  name: string;
  currencies: string[];
  currency: CurrencySet;
  setCurrency: React.Dispatch<
    React.SetStateAction<CurrencySet>
  >;
  valueDisabled?: boolean;
};

export const Currency = ({
  name,
  currencies,
  currency,
  setCurrency,
  valueDisabled,
}: SelectProps) => {
  const handleCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCurrency({
      name: e.target.value,
      value: currency.value,
    });
  };
  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCurrency({
      name: currency.name,
      value: parseFloat(e.target.value),
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <Select
        name={name}
        currencies={currencies}
        value={currency.name}
        onChange={handleCurrencyChange}
      />
      <Input
        disabled={valueDisabled}
        key={name}
        name={name}
        value={currency.value}
        onChange={handleValueChange}
      />
    </div>
  );
};
