'use client';
import { useState } from "react";

const tabs = [
  { label: "All", count: 4500 },
  { label: "Draft", count: 1203 },
  { label: "Pending", count: 890 },
  { label: "Published", count: 2432 },
  { label: "Archived", count: 320 },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-2 w-full p-2 bg-white rounded-lg  mx-2 my-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ease-in-out border ${
              isActive
                ? "bg-indigo-950 text-white border-indigo-950"
                : "bg-gray-100 text-gray-800 border-transparent hover:border-gray-300"
            }`}
          >
            <span>{tab.label}</span>
            <span className={`ml-1 ${isActive ? "text-white" : "text-gray-500"}`}>
              ({tab.count.toLocaleString()})
            </span>
          </button>
        );
      })}
    </div>
  );
}
