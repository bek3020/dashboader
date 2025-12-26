import React from "react";
import { TrendingUp } from "lucide-react";
// 1. BU YERDA 'Cell' QO'SHILDI
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Chrome", value: 275, color: "#3b82f6" },
  { name: "Safari", value: 200, color: "#22c55e" },
  { name: "Firefox", value: 187, color: "#f97316" },
  { name: "Edge", value: 173, color: "#a855f7" },
  { name: "Other", value: 90, color: "#64748b" },
];

const ChartPieDonutActive = () => {
  return (
    // 2. width: 350 O'RNIGA w-full YOKI KATTAROQ QIYMAT BERING
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
        {/* 1. STATS GRID */}
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

        {/* 2. CHART */}
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
                  // fill={entry.color} ekanligiga e'tibor bering
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
    </div>
  );
};

export default ChartPieDonutActive;
