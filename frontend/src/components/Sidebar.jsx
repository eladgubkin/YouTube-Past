import React from "react";
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from "react-icons/fa";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";

const Sidebar = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          "sidebarTitle"
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">"new"</span>}>
            "dashboard"
          </MenuItem>
          <MenuItem icon={<FaGem />}>"components"</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu suffix={<span className="badge yellow">3</span>} title="withSuffix" icon={<FaRegLaughWink />}>
            <MenuItem>"submenu"</MenuItem>
            <MenuItem>"submenu"</MenuItem>
            <MenuItem>"submenu"</MenuItem>
          </SubMenu>
          <SubMenu prefix={<span className="badge gray">3</span>} title="withPrefix" icon={<FaHeart />}>
            <MenuItem>"submenu"</MenuItem>
            <MenuItem>"submenu"</MenuItem>
            <MenuItem>"submenu"</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>"submenu"</MenuItem>
            <MenuItem>"submenu"</MenuItem>
            <SubMenu title={`$"submenu" })} 3`}>
              <MenuItem>"submenu"</MenuItem>
              <MenuItem>"submenu"</MenuItem>
              <SubMenu title={`$"submenu" })} 3.3`}>
                <MenuItem>"submenu"</MenuItem>
                <MenuItem>"submenu"</MenuItem>
                <MenuItem>"submenu"</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>"viewSource"</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
