import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Pie,
  PieChart,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Table } from "antd";

/* ================== CHART DATA ================== */
const chartData = [
  { name: "Chrome", value: 275, color: "#6366f1" },
  { name: "Safari", value: 200, color: "#22c55e" },
  { name: "Firefox", value: 187, color: "#f97316" },
  { name: "Edge", value: 173, color: "#a855f7" },
  { name: "Other", value: 90, color: "#64748b" },
];

/* ================== TABLE DATA ================== */
const columns = [
  { title: "Name", dataIndex: "name", key: "name", width: 150 },
  { title: "Age", dataIndex: "age", key: "age", width: 100 },
  { title: "Address", dataIndex: "address", key: "address", width: 220 },
];

const data = Array.from({ length: 50 }, (_, i) => ({
  key: i,
  name: `John Doe ${i + 1}`,
  age: 20 + (i % 15),
  address: `Street ${i + 1}, New York`,
}));

const tableProps = {
  dataSource: data,
  columns,
  pagination: false,
  scroll: { x: 1000, y: 420 },
};

/* ================== COMPONENT ================== */
const ChartPieDonutActive = () => {
  return (
    <div className="w-full bg-[#020817] p-6 rounded-xl border border-slate-800 text-slate-100">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Order Status</h1>

        <div className="flex items-center gap-3">
          <select className="bg-[#0B1120] border border-slate-700 rounded px-3 py-1 text-sm text-slate-200">
            <option>All group</option>
          </select>
          <button className="bg-[#0B1120] border border-slate-700 rounded px-4 py-1 text-sm">
            2023
          </button>
        </div>
      </div>

      {/* ===== STATS + PIE ===== */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* STATS */}
        <div className="grid grid-cols-2 w-full lg:w-1/2 border border-slate-800 rounded-lg overflow-hidden">
          {[
            ["All", 50],
            ["New", 50],
            ["Pending", 50],
            ["Dispatched", 50],
            ["Delivered", 123],
            ["Cancelled", 50],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="p-6 border-b border-r border-slate-800 last:border-b-0 flex flex-col gap-1"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400">
                {label}
              </span>
              <span className="text-3xl font-bold text-white">{value}</span>
            </div>
          ))}
        </div>

        {/* PIE CHART */}
        <div className="w-full lg:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={6}
                stroke="none"
              >
                {chartData.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0B1120",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                  color: "#e5e7eb",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== TREND ===== */}
      <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
        Trending up by 5.2%
        <TrendingUp size={16} className="text-emerald-500" />
      </div>

      {/* ===== TABLES ===== */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0B1120] p-4 rounded-xl border border-slate-800">
          <Table className="dark-ant-table" virtual {...tableProps} />
        </div>
        <div className="bg-[#0B1120] p-4 rounded-xl border border-slate-800">
          <Table className="dark-ant-table" virtual {...tableProps} />
        </div>
      </div>

      <div className="mt-6 bg-[#0B1120] p-4 rounded-xl border border-slate-800">
        <Table className="dark-ant-table" virtual {...tableProps} />
      </div>

      {/* ===== BAR CHART ===== */}
      <div className="mt-8 bg-[#0B1120] p-6 rounded-xl border border-slate-800 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis tick={{ fill: "#94A3B8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#020817",
                border: "1px solid #1e293b",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="age" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPieDonutActive;
