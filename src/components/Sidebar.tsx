import { SIDEBAR_ITEMS } from "./data";

interface SidebarProps {
  handleSidebarItemClick: (id: string) => void;
}

export function Sidebar({ handleSidebarItemClick }: SidebarProps) {
  return (
    <nav
      className={`hidden md:block fixed top-0 h-full p-4 lg:p-6 xl:p-8 2xl:p-10 bg-linear-to-b from-sky-800 to-sky-600`}
    >
      <div className="flex flex-col justify-center h-full text-center text-sky-50">
        {SIDEBAR_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block py-2 lg:py-6 xl:py-8 2xl:py-10 hover:text-sky-400 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            onClick={() => handleSidebarItemClick(item.id)}
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="relative">
        <a
          href="https://github.com/milliorn/true-hope-tutoring"
          className="text-sky-50 hover:text-sky-900"
          target="_blank"
          rel="noreferrer"
        >
          <p className="absolute inset-x-0 top-0 text-xs leading-[0] text-center">
            &copy; {new Date().getFullYear()} Source Code
          </p>
        </a>
      </div>
    </nav>
  );
}
