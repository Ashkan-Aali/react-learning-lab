import Darkmode from "../../components/Darkmode";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="fixed right-0 h-screen w-64 bg-blue-200 dark:bg-gray-900 shadow-lg">
      <div className="h-16 px-2 flex justify-between bg-blue-400 dark:bg-gray-700 rounded-t-lg items-center">
        <div>
          <h2>پنل مدیریت</h2>
        </div>
        <div>
          <span>
            <Darkmode />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1 p-4 bg-blue-200 dark:bg-gray-900 rounded-b-lg border-b border-b-blue-50">
        <ul>
          <SidebarItem  to={"/users"} Children={"کاربران"}/>
          <SidebarItem  to={"/posts"} Children={"پست ها"}/>
          <SidebarItem  to={"/comments"} Children={"کامنت ها"}/>
          <SidebarItem  to={"/tasks"} Children={"تسک ها"}/>
          <SidebarItem  to={"/gallery"} Children={"گالری"}/>
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;
