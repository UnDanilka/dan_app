import "./App.css";
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import Todos from "../Todos/Todos";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import { Istore } from "../../types";

function App() {
  const theme = useSelector((state: Istore) => state.theme.theme);

  return (
    <div
      className={`app_default ${theme === "light" ? "app_light" : "app_dark"}`}
    >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
