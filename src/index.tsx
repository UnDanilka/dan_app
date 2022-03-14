import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
