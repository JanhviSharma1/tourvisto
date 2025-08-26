// @ts-nocheck

import { Link } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="lg:hidden flex flex-col gap-5 w-full wrapper">
      <header className="flex justify-between items-center border-b border-[#ecf2ef]">
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="size-[30px]"
          />

          <h1 className="text-base md:text-2xl font-bold text-dark-100">
            Tourvisto
          </h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};
export default MobileSidebar;
