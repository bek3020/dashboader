import React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Table } from "antd";
const chartData = [
  { name: "Chrome", value: 275, color: "#3b82f6" },
  { name: "Safari", value: 200, color: "#22c55e" },
  { name: "Firefox", value: 187, color: "#f97316" },
  { name: "Edge", value: 173, color: "#a855f7" },
  { name: "Other", value: 90, color: "#64748b" },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name", width: 150 },
  { title: "Age", dataIndex: "age", key: "age", width: 100 },
  { title: "Address", dataIndex: "address", key: "address", width: 200 },
];
const data = Array.from({ length: 1000 }, (_, i) => ({
  key: i,
  name: `John Doe ${i + 1}`,
  age: 30 + (i % 10),
  address: `1234 Elm St, City ${i + 1}`,
}));

const otherProps = {
  dataSource: data,
  columns,
  pagination: false,
  scroll: { x: 2000, y: 500 },
};
const ChartPieDonutActive = () => {
  return (
    <div className="w-full bg-[#020817] p-6 rounded-xl border border-slate-800 text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Order Status</h1>
        <div className="flex items-center gap-4 text-slate-900">
          <select className="bg-white border rounded px-2 py-1 text-sm">
            <option value="All group">All group</option>
          </select>
          <button className="bg-white border rounded px-4 py-1 text-sm font-medium">
            2023
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="grid grid-cols-2 w-full lg:w-1/2 border border-slate-800 rounded-lg overflow-hidden shrink-0">
          <div className="p-6 border-b border-r border-slate-800 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              All
            </span>
            <span className="text-white text-3xl font-bold">50</span>
          </div>
          <div className="p-6 border-b border-slate-800 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              New
            </span>
            <span className="text-white text-3xl font-bold">50</span>
          </div>
          <div className="p-6 border-b border-r border-slate-800 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Pending
            </span>
            <span className="text-white text-3xl font-bold">50</span>
          </div>
          <div className="p-6 border-b border-slate-800 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Dispatched
            </span>
            <span className="text-white text-3xl font-bold">50</span>
          </div>
          <div className="p-6 border-r border-slate-800 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Delivered
            </span>
            <span className="text-white text-3xl font-bold">123</span>
          </div>
          <div className="p-6 flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Cancelled
            </span>
            <span className="text-white text-3xl font-bold">50</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B1120",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
        Trending up by 5.2% <TrendingUp size={16} className="text-green-500" />
      </div>
      <div className="mt-8 bg-[#020817] p-6 rounded-xl border border-slate-800 flex items-center gap-3 text-white">
        <Table
          style={{ minWidth: 500, borderRadius: "8px" }}
          virtual
          scroll={{ x: 2000, y: 500 }}
          {...otherProps}
        />
        <Table
          style={{ minWidth: 500, borderRadius: "8px" }}
          virtual
          scroll={{ x: 2000, y: 500 }}
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default ChartPieDonutActive;
