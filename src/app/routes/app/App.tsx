import { ContentLayout } from "@/components/layouts";
import { CurrencyConverter } from "@/features//currency-converter/components/CurrencyConverter";

const App = () => {
  return (
    <ContentLayout>
      <CurrencyConverter />
    </ContentLayout>
  );
};

export default App;
