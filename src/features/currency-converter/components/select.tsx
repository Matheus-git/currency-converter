import cc from "currency-codes";

type SelectProps = {
  name: string;
  currencies: string[];
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export const Select = ({
  name,
  currencies,
  value,
  onChange,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 rounded-lg bg-white outline-none border-2 focus:border-orange-500"
      name={name}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency} -{" "}
          {cc.code(currency)?.currency}
        </option>
      ))}
    </select>
  );
};
