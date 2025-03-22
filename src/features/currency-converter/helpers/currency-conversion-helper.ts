import { CurrencySet } from "../types/types";
import { conversion } from "../api/currency-repository";

export const fetchConvert = async (
  from: CurrencySet,
  to: CurrencySet,
  setTo: React.Dispatch<
    React.SetStateAction<CurrencySet>
  >
) => {
  try {
    const result: number = await conversion(
      from.name,
      to.name,
      from.value
    );
    setTo({
      name: to.name,
      value: parseFloat(result.toFixed(2)),
    });
  } catch (error) {
    console.error(
      "Error during currency conversion:",
      error
    );
  }
};
