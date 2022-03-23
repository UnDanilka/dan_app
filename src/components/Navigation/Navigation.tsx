import Theme from "../Theme/Theme";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Navigation = () => {
  const linksSmall = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link className="link_menu" to="/">
        About me
      </Link>
      <Link className="link_menu" to="/todos">
        Todos
      </Link>
      <Link className="link_menu" to="/contacts">
        Contacts
      </Link>
    </div>
  );

  return (
    <>
      <div className="navigation">
        <div className="links">
          <Link className="link" to="/">
            About me
          </Link>
          <Link className="link" to="/todos">
            Todos
          </Link>
          <Link className="link" to="/contacts">
            Contacts
          </Link>
        </div>
        <Theme />
      </div>
      <div className="navigation_small">
        <Tooltip
          overlayInnerStyle={{ borderRadius: "15px" }}
          color="#1d3b42c3"
          placement="bottomLeft"
          title={linksSmall}
        >
          <div className="navigation_menu">
            <MenuOutlined />
          </div>
        </Tooltip>

        <Theme />
      </div>
    </>
  );
};

export default Navigation;
