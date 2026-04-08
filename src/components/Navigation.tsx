import { useState } from "react";
import logo from "../assets/logo/logo.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [active, setActive] = useState("home");

  const leftMenu = [
    { name: "Home", page: "home" },
    { name: "Gallery", page: "gallery" },
  ];

  const rightMenu = [
    { name: "Projects", page: "projects" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  const handleClick = (page: string) => {
    setActive(page);
    onNavigate(page);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT MENU */}
          <div className="flex gap-8">
            {leftMenu.map((item) => (
              <button
                key={item.page}
                onClick={() => handleClick(item.page)}
                className={`text-sm uppercase tracking-wider ${
                  currentPage === item.page
                    ? "text-[#C9A45C]"
                    : "text-white hover:text-[#C9A45C]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CENTER LOGO */}
          <img
            src={logo}
            alt="logo"
            className="h-16 object-contain cursor-pointer"
            onClick={() => handleClick("home")}
          />

          {/* RIGHT MENU */}
          <div className="flex gap-8">
            {rightMenu.map((item) => (
              <button
                key={item.page}
                onClick={() => handleClick(item.page)}
                className={`text-sm uppercase tracking-wider ${
                  currentPage === item.page
                    ? "text-[#C9A45C]"
                    : "text-white hover:text-[#C9A45C]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}