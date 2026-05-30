import { useState } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({
  user,
  title,
  onLogout,
  children,
}) => {

    const [collapsed, setCollapsed] =
    useState(false);

  return (
    <div
      style={{
        display: "flex",
        background: "#F3F4F6",
        minHeight: "100vh",
      }}
    >

      {/* SIDEBAR */}
      <Sidebar
  user={user}
  collapsed={collapsed}
  onCollapse={() =>
    setCollapsed(!collapsed)
  }
/>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,

          marginLeft: collapsed
            ? 72
            : 250,

          transition:
            "margin-left 0.25s ease",
        }}
      >

        {/* TOPBAR */}
        <Topbar
          user={user}
          title={title}
          onLogout={onLogout}
        />

        {/* PAGE CONTENT */}
        <main
          style={{
            padding: 24,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
