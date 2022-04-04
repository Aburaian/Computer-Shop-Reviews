import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("chart.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-1 sm:grid-cols-1 justify-items-center my-7">
        {/*Bar Chart */}
        <div>
          <h2 className="text-2xl font-bold text-center my-4">
            Investment VS Revenue
          </h2>
          <BarChart width={730} height={350} data={charts} className="mb-5">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Bar dataKey="investment" fill="#E67E22"></Bar>
            <Bar dataKey="revenue" fill="#2ECC71"></Bar>
          </BarChart>
        </div>

        {/*Area Chart */}
        <div>
          <h2 className="text-2xl font-bold text-center my-2">
            Investment VS Revenue
          </h2>
          <AreaChart
            width={730}
            height={350}
            data={charts}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>

        {/*Composed Chart */}
        <div>
          <h2 className="text-2xl font-bold text-center my-2">
            Investment, Sell & Revenue
          </h2>
          <ComposedChart width={730} height={350} data={charts}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="investment"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
        </div>

        {/*Pie Chart */}
        <div>
          <h2 className="text-2xl font-bold text-center my-2">
            Investment VS Revenue
          </h2>
          <PieChart width={730} height={250}>
            <Pie
              data={charts}
              dataKey="sell"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={charts}
              dataKey="revenue"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
