import React from "react";
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "components";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      {/* Mobile sidebar visible only on small screens */}
      <aside className="block lg:hidden w-full max-w-[270px]">
        MobileSidebar
      </aside>

      {/* Desktop sidebar visible only on large screens */}
      <aside className="hidden lg:block w-full max-w-[270px]">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      {/* Main content */}
      <aside className="w-full h-full bg-light-200 pt-12 lg:pt-10">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
