import Link from "next/link";

export default function NavBar() {
  return (
    <div className="mx-auto shadow-md top-0 z-50 bg-[#0F0F0F] sticky top-0">
      <div className="sticky max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-200  mx-20">
            <Link href="/" className="text-gray hover:text-emerald-500">
              Mohannad Milhem
            </Link>
          </div>
          <div className="space-x-6">
            <Link
              href="/experience"
              className="text-gray-200 hover:text-emerald-500 font-medium"
            >
              Experience
            </Link>
            <Link
              href="/education"
              className="text-gray-200 hover:text-emerald-500 font-medium"
            >
              Education
            </Link>
            <Link
              href="/projects"
              className="text-gray-200 hover:text-emerald-500 font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
