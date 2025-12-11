import { IconTicket } from "@tabler/icons-react";
function CardStat() {
  return (
    <div className="border  rounded-lg bg-white p-6 my-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl text-gray-400">Total Tickets</p>
        <div className="bg-primary/20 flex justify-center items-center rounded-full p-2 text-primary">
          <IconTicket stroke={2} />
        </div>
      </div>
      <h3 className="text-3xl font-bold">1,284</h3>
      <p className="mt-2 text-gray-700">+12.5% from last month</p>
    </div>
  );
}

export default CardStat;
