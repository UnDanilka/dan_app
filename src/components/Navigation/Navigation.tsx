import Theme from "../Theme/Theme";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

const Navigation = () => {
  const [drawer, setDrawer] = useState(false);

  const handleCloseDrawer = () => {
    setDrawer(false);
  };
  const handleOpenDrawer = () => {
    setDrawer(true);
  };

  const linksSmall = (
    <div
      onClick={handleCloseDrawer}
      style={{ display: "flex", flexDirection: "column" }}
    >
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
        <div style={{ width: "65px" }} />
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
        <div className="navigation_menu" onClick={handleOpenDrawer}>
          <MenuOutlined />
        </div>
        <Drawer
          width={200}
          closeIcon={
            <div>
              <CloseOutlined style={{ color: "white" }} />
            </div>
          }
          placement="left"
          onClose={handleCloseDrawer}
          visible={drawer}
        >
          {linksSmall}
        </Drawer>

        <Theme />
      </div>
    </>
  );
};

export default Navigation;
