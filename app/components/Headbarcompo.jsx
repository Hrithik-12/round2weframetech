import { CalendarDays, Filter, Search } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between w-full bg-white  border-gray-200 px-6 py-4">
      {/* Search section - Takes up most of the space */}
      <div className="flex-1 max-w-2xl">
        <div className="relative ml-8 ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 text-sm"
          />
        </div>
      </div>

      {/* Actions section - Fixed width for consistency */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <CalendarDays className="text-indigo-950" size={20} />
          </button>
          <button className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="text-indigo-950" size={20} />
          </button>
        </div>
        <button className="bg-indigo-950 text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-900 transition-colors">
          Add New Story
        </button>
      </div>
    </div>
  );
}
