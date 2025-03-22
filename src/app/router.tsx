import { Routes, Route } from "react-router";
import App from "./routes/app/App";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
