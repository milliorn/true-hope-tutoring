import { NAVBAR_TITLE, SIDEBAR_ITEMS } from "./data";

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  handleSidebarItemClick: (id: string) => void;
}

export function Navbar({
  toggleSidebar,
  isSidebarOpen,
  handleSidebarItemClick,
}: NavbarProps) {
  return (
    <nav
      className={`md:hidden fixed top-0 w-full bg-gradient-to-b from-sky-800 to-sky-600`}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="text-2xl text-sky-50 sm:text-3xl">{NAVBAR_TITLE}</div>
        <button
          onClick={toggleSidebar}
          className="border rounded text-sky-200 hover:text-sky-100 focus:outline-none focus:text-sky-100 border-sky-200"
          aria-label="Toggle Sidebar"
        >
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v1H4zm0 5h16v1H4zm0 5h16v1H4z"
              />
            )}
          </svg>
        </button>
      </div>
      
      <ul
        className={`${
          isSidebarOpen
            ? "max-h-screen opacity-100 transition-all duration-1000 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-1000 ease-in-out"
        } overflow-hidden text-sky-50 ml-4`}
      >
        {SIDEBAR_ITEMS.map((item) => (
          <li className="mb-2" key={item.id}>
            <a
              href={`#${item.id}`}
              className="block py-2 text-xs hover:text-sky-400 sm:text-base"
              onClick={() => handleSidebarItemClick(item.id)}
            >
              {item.text}
            </a>
          </li>
        ))}
        {isSidebarOpen && (
          <div className="text-xs text-center sm:text-sm">
            <a
              href="https://github.com/milliorn/true-hope-tutoring"
              className="text-sky-50 hover:text-sky-900"
              target="_blank"
              rel="noreferrer"
            >
              <span className="">
                &copy; {new Date().getFullYear()} Source Code
              </span>
            </a>
          </div>
        )}
      </ul>
    </nav>
  );
}
