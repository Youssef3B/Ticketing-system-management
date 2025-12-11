import {
  IconBrandTabler,
  IconLogout2,
  IconTicket,
  IconUsers,
  IconSettings,
  IconCirclePlus,
} from "@tabler/icons-react";

function SideBar() {
  return (
    <div className="bg-gray-900 h-screen w-80 sticky left-0 p-6 flex flex-col">
      <h2 className="text-4xl text-white font-bold mb-9">
        Ticket<span className="text-primary">Hub</span>
      </h2>

      <ul>
        <li className="flex items-center space-x-2 bg-primary p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconBrandTabler stroke={2} />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconTicket stroke={2} />
          <span>All Tickets</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconCirclePlus stroke={2} />
          <span>New Ticket</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconUsers stroke={2} />
          <span>All Users</span>
        </li>
        <li className="flex items-center space-x-2 p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconSettings stroke={2} />
          <span>Settings</span>
        </li>
      </ul>

      <ul className="mt-auto">
        <li className="flex items-center space-x-2  p-2 rounded-sm text-white font-semibold cursor-pointer my-6">
          <IconLogout2 stroke={2} />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
