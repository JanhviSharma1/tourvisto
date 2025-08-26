import React from "react";
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "components";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <aside className="block lg:hidden w-full max-w-[270px]">
        <MobileSidebar />
      </aside>
      <aside className="hidden lg:block w-full max-w-[270px] gap-4 items-center">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="w-full h-full bg-[#f9fbfc] pt-12 lg:pt-10">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
