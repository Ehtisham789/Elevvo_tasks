import SummaryCard from "../components/SummaryCard";
import { summaryData, monthlyEarnings } from "../data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        {summaryData.map((item, index) => (
          <SummaryCard key={index} {...item} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 h-96">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Monthly Earnings
        </h2>

        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={monthlyEarnings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="earnings"
              radius={[8, 8, 0, 0]}
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}