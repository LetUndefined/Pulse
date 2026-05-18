import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useNavigate } from "react-router";

const getStatusBadge = (status: string) => {
  const styles: Record<string, string> = {
    Live: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Rejected: "bg-red-500/20 text-red-400",
  };
  return `px-2 py-1 rounded-full text-xs font-medium ${styles[status] ?? ""}`;
};

const PartnerEvents = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, name: "Summer Fest", date: "2026-07-10", location: "Central Park", status: "Rejected" },
    { id: 2, name: "Jazz Night", date: "2026-08-05", location: "Blue Note", status: "Live" },
    { id: 3, name: "Food Fair", date: "2026-09-01", location: "Downtown", status: "Pending" },
  ];

  const columns = [
    { accessorKey: "name", header: "Event Name" },
    { accessorKey: "date", header: "Date" },
    { accessorKey: "location", header: "Location" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }: { getValue: () => unknown }) => <span className={getStatusBadge(getValue() as string)}>{getValue() as string}</span>,
    },
  ];

  const table = useReactTable({
    data: events,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="mb-md">
          <h1 className="text-text text-2xl mb-md">My Events</h1>
          <p className="text-text3">Manage and track your submitted events</p>
        </div>
        <div>
          <button onClick={() => navigate("/partner/create-event")} className="bg-neon px-md py-sm rounded-lg">
            Create Event
          </button>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-white/10">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3 bg-bg text-left text-sm font-semibold text-text3">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-white/10 last:border-0">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 bg-bg/80 text-left text-sm text-text">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerEvents;
