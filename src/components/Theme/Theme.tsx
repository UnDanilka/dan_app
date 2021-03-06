import Switch from "./Switch/Switch";
import { setDark, setLight } from "../../Redux/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Theme.css";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Sun } from "./sun.svg";
import { Istore } from "../../types";
import { useCallback } from "react";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store: Istore) => store.theme.theme);
  const handleThemeChange = useCallback(
    (e: boolean) => {
      if (e) {
        dispatch(setDark());
      } else {
        dispatch(setLight());
      }
    },
    [dispatch]
  );

  return (
    <div className="switch_wrapper">
      {theme === "light" ? (
        <div>
          <Sun style={{ width: "20px", marginRight: "5px" }} />
        </div>
      ) : (
        <div>
          <Moon style={{ width: "20px", marginRight: "5px" }} />
        </div>
      )}
      <Switch onChange={handleThemeChange} />
    </div>
  );
};

export default Theme;
