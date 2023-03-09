import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // จัดเตรียม Redux Store เพื่อ React
  <Provider store={store}>
    <App />
  </Provider>
);
