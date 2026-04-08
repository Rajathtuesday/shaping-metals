import { useState } from "react";
import logo from "../assets/logo/logo.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [active, setActive] = useState("home");

  const menu = [
    { name: "Home", page: "home" },
    { name: "Gallery", page: "gallery" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <img
            src={logo}
            alt="Shaping Metals Logo"
            className="h-14 w-auto object-cover cursor-pointer"
            onClick={() => handleClick("home")}
          />
          <h1
            onClick={() => handleClick("home")}
            className="text-white font-serif text-2xl font-bold cursor-pointer"
          >
            Shaping<span className="text-[#C9A45C]">Metals</span>
          </h1>

          {/* Menu */}
          <div className="flex gap-10">
            {menu.map((item) => (
              <button
                key={item.page}
                onClick={() => handleClick(item.page)}
                className={`text-sm uppercase tracking-wider transition ${
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
