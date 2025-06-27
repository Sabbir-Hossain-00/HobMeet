import React, { use, useEffect, useState } from "react";
import {
  FaUsers,
  FaBoxOpen,
  FaClipboardList,
  FaChartLine,
  FaStar,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Loader } from "../Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

export const DashboardHome = () => {
  const { user } = use(AuthContext);
  const [myGroups, setMyGroups] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ongoingGroups = useLoaderData();
  const [allGroups, setAllGroups] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      `https://hobmeet-server.vercel.app/mygroups/${user.email}`
    );
    const data = await res.json();
    setIsLoading(false);
    setMyGroups(data);
  };

  const fetchingData = async () => {
    const res = await fetch(`https://hobmeet-server.vercel.app/groups`);
    const data = await res.json();
    setIsLoading(false);
    setAllGroups(data);
  };

  useEffect(() => {
    fetchData();
    fetchingData();
  }, []);

  

  if (isLoading) {
    return <Loader />;
  }
  console.log(myGroups);
  const topStats = [
    {
      title: "Total Groups",
      value: allGroups?.length,
      icon: <FaUsers className="text-2xl text-amber-400" />,
    },
    {
      title: "Ongoing Groups",
      value: ongoingGroups?.length,
      icon: <FaClipboardList className="text-2xl text-amber-400" />,
    },
    {
      title: "My Groups",
      value: myGroups?.length,
      icon: <FaBoxOpen className="text-2xl text-amber-400" />,
    },
    {
      title: "Engagement",
      value: "86%",
      icon: <FaChartLine className="text-2xl text-amber-400" />,
    },
  ];

  const pieData = [
    { name: "Fishing", value: 3 },
    { name: "Running", value: 1 },
    { name: "Photography", value: 2 },
    { name: "Drawing", value: 2 },
  ];

  const COLORS = ["#FDBA74", "#F59E0B", "#D97706", "#92400E"];

  const lineData = myGroups?.map((group) => ({
    name:
      group.groupName.length > 15
        ? group.groupName.slice(0, 15) + "…"
        : group.groupName,
    members: group.members || Math.floor(Math.random() * 50) + 5, // add fake members if missing
  }));

  const lineData2 = allGroups?.map((group) => ({
    name:
      group.groupName.length > 15
        ? group.groupName.slice(0, 15) + "…"
        : group.groupName,
    members: group.members || Math.floor(Math.random() * 50) + 5, // add fake members if missing
  }));

  const bottomStats = [
    {
      title: "Top Rated Group",
      value: "MusicVibe",
      icon: <FaStar className="text-2xl text-yellow-400" />,
    },
    {
      title: "Most Loved",
      value: "Art Circle",
      icon: <FaHeart className="text-2xl text-red-400" />,
    },
    {
      title: "Verified Groups",
      value: allGroups?.length,
      icon: <FaCheckCircle className="text-2xl text-green-500" />,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 rounded-xl px-4 md:px-10 py-10 space-y-16">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition duration-300"
          >
            <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Two Charts Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            My Groups
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="members"
                stroke="#F59E0B"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Group Categories
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bottomStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition duration-300"
          >
            <div className="bg-gray-100 p-3 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Full Width Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          All Groups Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="members"
              stroke="#F59E0B"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
