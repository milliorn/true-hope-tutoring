import { useState } from "react";
import { About } from "./components/About";
import { Availability } from "./components/Availability";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Portrait } from "./components/Portrait";
import { Qualifications } from "./components/Qualifications";
import { Rates } from "./components/Rates";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    setTimeout(() => {
      el?.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }, 200);
  };

  const handleSidebarItemClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="mx-auto scroll-behavior-smooth 2xl:container">
      {Navbar(toggleSidebar, isSidebarOpen, handleSidebarItemClick)}
      {Sidebar(handleSidebarItemClick)}
      <main className="w-full bg-sky-100 text-sky-950" id="home">
        <div className="md:grid md:grid-cols-1 md:grid-rows-6 md:grid-flow-col md:gap-4 md:pl-36 lg:pl-44 xl:pl-52 2xl:pl-60">
          <Portrait scrollToAbout={scrollToAbout} />
          <About />
          <Qualifications />
          <Availability />
          <Rates />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
