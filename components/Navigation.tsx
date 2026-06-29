import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/logo.png";


interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", page: "home" },
    { name: "Gallery", page: "gallery" },
    { name: "Projects", page: "projects" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  const handleClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/75 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO - ALWAYS VISIBLE */}
<div
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => handleClick("home")}
>
  <img
    src={logo}
    alt="logo"
    className="h-12 md:h-16 object-contain"
  />

  <div className="hidden sm:block">
    <h1 className="text-[#C9A45C] font-serif text-lg md:text-2xl tracking-wide">
      SHAPING METALS
    </h1>

    <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.2em]">
      Artistry In Metal
    </p>
  </div>
</div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleClick(item.page)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  currentPage === item.page
                    ? "text-[#C9A45C]"
                    : "text-white hover:text-[#C9A45C]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 transition-all duration-300 ${
          isOpen ? "opacity-100 visible h-auto py-8" : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleClick(item.page)}
              className={`text-base uppercase tracking-widest ${
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
    </nav>
  );
}