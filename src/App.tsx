/* eslint-disable react/no-array-index-key */
import "./App.css";

import { HeaderComponent } from "./components/HeaderComponent";
import { MainRoutes } from "./routes/MainRoutes";

export function App() {
  return (
    <main>
      <HeaderComponent />
      <MainRoutes />
    </main>
  );
}
