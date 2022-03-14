import { Switch } from "antd";
import { setDark, setLight } from "../../Redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Theme.css";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Sun } from "./sun.svg";
import { Istore } from "../../types";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store: Istore) => store.theme.theme);
  const handleThemeChange = (e: boolean) => {
    if (e) {
      dispatch(setDark());
    } else {
      dispatch(setLight());
    }
  };

  return (
    <div className="switch">
      {theme === "light" ? (
        <Sun style={{ width: "20px", marginRight: "5px" }} />
      ) : (
        <Moon style={{ width: "20px", marginRight: "5px" }} />
      )}
      <Switch onChange={handleThemeChange} />
    </div>
  );
};

export default Theme;
