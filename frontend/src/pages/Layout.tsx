import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <section className="flex ">
      <SideBar />
      <div className="flex flex-1 flex-col  bg-slate-200">
        <NavBar />
        <div className="px-14">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Layout;
