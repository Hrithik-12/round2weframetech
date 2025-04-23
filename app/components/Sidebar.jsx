"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  NotebookText,
  User,
  MonitorSmartphone,
  ChartLine,
  DiscAlbum,
  Columns3Cog,
  Bell,
  TvMinimalPlay,
  Settings,
  MessageCircle,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Content",
    path: "/content",
    icon: NotebookText,
  },
  {
    label: "User",
    path: "/user",
    icon: User,
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: MonitorSmartphone,
  },
  {
    label: "App/Web",
    path: "/app",
    icon: TvMinimalPlay,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: ChartLine,
  },
  {
    label: "Media",
    path: "/media",
    icon: DiscAlbum,
  },
  {
    label: "Customize",
    path: "/customize",
    icon: Columns3Cog,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    label: "Subscription",
    path: "/subscription",
    icon: Settings,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];


export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-4 shadow-md ">
      <nav className="flex-1 space-y-2 mt-8">
        {menuItems.map(({ label, path, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={label}
              href={'/'}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

<div className="mt-auto border border-gray-200 rounded-full hover:bg-indigo-950 hover:text-white transition-colors">
  <Link
    href="/"
    className="flex items-center gap-2 px-4 py-2 rounded-full"
  >
    <MessageCircle size={20} className="text-gray-400 group-hover:text-white transition-colors" />
    <span className="text-sm">Contact Support</span>
  </Link>
</div>


    </div>
  );
}

