const EXCHANGE_RATE_API_TOKEN = import.meta.env
  .VITE_EXCHANGE_RATE_API_TOKEN;

export const getCurrencies = async function () {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_TOKEN}/latest/BRL`
    );
    const data = await response.json();

    if (data && data.conversion_rates) {
      const currencies = Object.keys(
        data.conversion_rates
      );
      return currencies;
    } else {
      throw new Error(
        "Não foi possível obter as moedas."
      );
    }
  } catch (error) {
    console.error(
      "Erro ao buscar moedas:",
      error
    );
    return [];
  }
};

export const conversion = async function (
  from: string,
  to: string,
  amount: number
) {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_TOKEN}/pair/${from}/${to}/${amount}`
    );
    const data = await response.json();

    if (
      data &&
      data.conversion_result != undefined
    ) {
      return data.conversion_result;
    } else {
      throw new Error(
        "Não foi possível obter as moedas."
      );
    }
  } catch (error) {
    console.error(
      "Erro ao buscar moedas:",
      error
    );
    return [];
  }
};
