'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    MessageCircle
} from 'lucide-react'

const menuItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        label: "Content",
        path: "/content",
        icon: NotebookText
    },
    {
        label: "User",
        path: "/user",
        icon: User
    },
    {
        label: "Tasks",
        path: "/tasks",
        icon: MonitorSmartphone
    },
    {
        label: "App/Web",
        path: "/app",
        icon: TvMinimalPlay
    },
    {
        label: "Analytics",
        path: "/analytics",
        icon: ChartLine
    },
    {
        label: "Media",
        path: "/media",
        icon: DiscAlbum
    },
    {
        label: "Customize",
        path: "/customize",
        icon: Columns3Cog
    },
    {
        label: "Notifications",
        path: "/notifications",
        icon: Bell
    },
    {
        label: "Subscription",
        path: "/subscription",
        icon: Settings
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings
    }
];

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="max-w-2xl h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
            

            {/* Navigation Links */}
            <div className="flex-1 py-8 px-4 mt-8 ">
                <nav className="space-y-1">
                    {menuItems.map(({ label, path, icon: Icon }) => {
                        const isActive = pathname === path
                        return (
                            <Link
                                key={label}
                                href={path}
                                className={`
                                    flex items-center gap-4 px-6 py-3 rounded-xl
                                    transition-all duration-200 ease-in-out
                                    ${isActive 
                                        ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }
                                `}
                            >
                                <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
                                <span>{label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>

            {/* Support Section */}
            <div className="p-4 border-t border-gray-100">
                <Link
                    href="/support"
                    className="flex items-center gap-4 px-6 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
                >
                    <MessageCircle size={20} className="text-gray-400" />
                    <span>Contact Support</span>
                </Link>
            </div>
        </aside>
    )
}

