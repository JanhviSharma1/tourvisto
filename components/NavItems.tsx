import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = () => {
  const user = {
    name: "Janhvi",
    email: "sjanhvi14@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="flex flex-col px-6 h-full">
      <Link
        to="/"
        className="flex items-center gap-1.5 py-10 border-b border-[#ecf2ef]"
      >
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1 className="text-base md:text-2xl font-bold text-[#1f1f36]">
          Tourvisto
        </h1>
      </Link>

      <div className="flex flex-col justify-between h-full">
        <nav className="flex flex-col gap-3.5 pt-9">
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn(
                    "group flex items-center text-xs md:text-lg font-normal cursor-pointer gap-2.5 py-[18px] px-3.5 rounded-lg text-[#141627] hover:bg-[#256ff1] hover:text-white",
                    {
                      "bg-[#256ff1] !text-white": isActive,
                    }
                  )}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-[#141627]"}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="flex items-center gap-2.5 pt-8">
          <img
            className="size-10 rounded-full aspect-square"
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "David"}
            referrerPolicy="no-referrer"
          />

          <article className="flex flex-col gap-[2px] max-w-[115px]">
            <h2 className="text-sm md:text-base font-semibold text-[#141627] truncate">
              {user?.name}
            </h2>
            <p className="text-[#7f7e83] text-xs md:text-sm font-normal truncate">
              {user?.email}
            </p>
          </article>
          <button className="cursor-pointer">
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
