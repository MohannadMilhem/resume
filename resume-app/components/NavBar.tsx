import Link from "next/link";

export default function NavBar() {
  return (
    <div className="mx-auto shadow-md top-0 z-50 bg-white">
      <div className="sticky max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800 mx-20">
            Mohannad Milhem
          </div>
          <div className="space-x-6">
            <Link
              href="/experience"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Experience
            </Link>
            <Link
              href="/education"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Education
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
