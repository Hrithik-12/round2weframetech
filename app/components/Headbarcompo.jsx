'use client';

import { CalendarDays, Filter, Search } from "lucide-react";

export default function Headbarcompo() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full px-4 sm:px-6 py-4 gap-4">
      
     
      <div className="w-full md:max-w-2xl">
        <div className="relative ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <button aria-label="calender" className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <CalendarDays className="text-indigo-950" size={20} />
          </button>
          <button aria-label="filter" className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="text-indigo-950" size={20} />
          </button>
        </div>
        <button className="bg-indigo-950 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-900 transition-colors w-full sm:w-auto">
          Add New Story
        </button>
      </div>
    </div>
  );
}
