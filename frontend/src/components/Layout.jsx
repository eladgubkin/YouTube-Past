import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Layout = () => {
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <Sidebar collapsed={collapsed} toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <Dashboard
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
    </div>
  );
};

export default Layout;
