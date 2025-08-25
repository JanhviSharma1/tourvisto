import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = () => {
  return (
    <div>
      <section className="flex flex-col px-6 h-full">
        <Link
          to="/"
          className="flex items-center gap-1.5 py-10 border-b border-light-100"
        >
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1 className="text-base md:text-2xl font-bold text-dark-100">
            Tourvisto
          </h1>
        </Link>

        <div className="flex flex-col gap-9 mt-2.5">
          <nav className="">
            {" "}
            {sidebarItems.map(({ id, href, icon, label }) => (
              <NavLink to={href} key={id}>
                {({ isActive }: { isActive: boolean }) => (
                  <div
                    className={cn("group nav-items", {
                      "bg-[#256ff1] !text-white": isActive,
                    })}
                  >
                    <img
                      src={icon}
                      alt={label}
                      className={`group-hover:brightness-0 size-0 group-hover:invert $isActive?'brightness-0 invert':'text-dark-200'}`}
                    ></img>
                    {label}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
};
export default NavItems;
