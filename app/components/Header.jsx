'use client'
import Link from 'next/link'
import { ArrowLeft, ChevronDown } from 'lucide-react'

export const Header = () => {
  return (
    <header className="flex items-center justify-between pl-0 pr-6 py-4 bg-white border-b border-gray-200 shadow-sm w-full">
      {/* Left side: Back arrow and title */}
      <div className="flex items-center gap-3 pl-6">
        <Link href="/stories">
          <ArrowLeft size={24} className="text-gray-700 hover:text-gray-900" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Written Stories</h1>
      </div>

      {/* Right side: Profile dropdown */}
      <div className="flex items-center justify-between p-2 rounded-xl border border-gray-200 bg-white shadow-sm max-w-lg cursor-pointer hover:bg-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-purple-100">
            <img
              src="/user.jpg"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-gray-500">Welcome back,</p>
            <p className="text-sm font-semibold text-gray-800">Akshita Patel</p>
          </div>
        </div>
        <ChevronDown size={20} className="text-gray-600 ml-4" />
      </div>
    </header>
  )
}