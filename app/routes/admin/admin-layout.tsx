import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
      <aside className="w-full h-full bg-light-200 pt-12 lg:pt-10">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
