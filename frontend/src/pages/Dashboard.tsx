import CardStat from "@/components/CardStat";
import { Button } from "@/components/ui/button";
import { IconCirclePlus } from "@tabler/icons-react";

function Dashboard() {
  return (
    <div className="py-14">
      {/* head of Dashboard  */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-black font-bold text-4xl">Dashboard</h3>
          <p className="mt-2 text-gray-800 text-xl">
            Overview of your support team's performance.
          </p>
        </div>
        <Button className="cursor-pointer  py-6">
          <IconCirclePlus stroke={2} />
          <span>Create New Ticket</span>
        </Button>
      </div>
      {/* stats of dashboard  */}
      <div className="grid grid-cols-4 gap-6">
        <CardStat />
        <CardStat />
        <CardStat />
        <CardStat />
      </div>
    </div>
  );
}

export default Dashboard;
