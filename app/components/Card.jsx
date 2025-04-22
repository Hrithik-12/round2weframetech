import { Eye, BarChart } from "lucide-react";

export const stories = [
  {
    id: 1,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    views: 428,
    image: "/img1.jpg"
  },
  {
    id: 2,
    title: "The Future of AI in Software Development",
    category: "TECHNOLOGY",
    date: "15 Sep 2022",
    status: "Draft",
    views: 1250,
    image: "/img2.jpg"
  },
  {
    id: 3,
    title: "Building Scalable Architecture for Growth",
    category: "ENGINEERING",
    date: "18 Sep 2022",
    status: "Published",
    views: 892,
    image: "/img3.jpg"
  },
  {
    id: 4,
    title: "UX Design Principles for Better Conversion",
    category: "DESIGN",
    date: "22 Sep 2022",
    status: "Pending",
    views: 675,
    image: "/img4.jpg"
  },
  {
    id: 5,
    title: "The Rise of No-Code Development",
    category: "TECHNOLOGY",
    date: "25 Sep 2022",
    status: "Published",
    views: 1102,
    image: "/img5.jpg"
  },
  {
    id: 6,
    title: "Mastering React Performance",
    category: "DEVELOPMENT",
    date: "28 Sep 2022",
    status: "Published",
    views: 934,
    image: "/img6.jpg"
  },
  {
    id: 7,
    title: "Data-Driven Decision Making",
    category: "ANALYTICS",
    date: "30 Sep 2022",
    status: "Draft",
    views: 445,
    image: "/img7.jpg"
  },
  {
    id: 8,
    title: "The Psychology of Product Design",
    category: "DESIGN",
    date: "1 Oct 2022",
    status: "Published",
    views: 778,
    image: "/img8.jpg"
  }
];

export default function StoryCard({ story }) {
  const { title, category, date, status, views, image } = story;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-emerald-100 text-emerald-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-emerald-100 text-emerald-800';
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md w-64 h-[400px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative h-full flex flex-col">
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="flex items-center bg-white/80 px-2 py-1 rounded-lg text-xs font-medium gap-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
          <div className="p-1.5 bg-white/80 rounded-lg">
            <BarChart className="w-3 h-3" />
          </div>
        </div>

        <div className="mt-auto">
          <div className="p-3">
            <h3 className="text-sm font-semibold truncate text-white">
              {title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1 text-xs text-gray-200 whitespace-nowrap">
                <span className="font-bold text-white">{category}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-lg font-medium ${getStatusColor(status)}`}>
                {status}
              </span>
            </div>
          </div>

          <div className="px-4 pb-4 gap-2 flex items-center justify-between">
            <button className="bg-white/90 text-indigo-900 px-6 py-2 rounded-lg font-medium text-sm w-[80%]">
              View
            </button>
            <button className="bg-white/90 px-3 py-1.5 rounded-lg">
              <span className="text-xl tracking-wider">⋯</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
