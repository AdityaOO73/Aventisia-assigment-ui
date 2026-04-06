import { useState } from "react";
import { UI_TEXT } from "../components/constants/ui";
import SearchInput from "./common/SearchInput";
import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";
import image from "../assets/image.png";

export default function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const [workspace, setWorkspace] = useState("Workspace 1");

  const options = ["Workspace 1", "Workspace 2", "Workspace 3"];

  return (
    <div className="w-full min-h-16 flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 md:px-6 py-2 bg-linear-to-r from-[#1E1B4B] to-[#4F46E5] text-white rounded-b-2xl shadow-sm">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button onClick={onMenuClick} className="md:hidden">
          <FiMenu size={20} />
        </button>

        <img
          src={image}
          alt="logo"
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-3xl object-contain shrink-0"
        />

        <h1 className="font-semibold text-xs sm:text-sm truncate">
          {UI_TEXT.appName}
        </h1>

        <div className="relative hidden sm:block">
          <div
            onClick={() => setOpen(!open)}
            className="bg-white/10 px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs flex items-center gap-1 cursor-pointer"
          >
            {workspace}
            <FiChevronDown size={12} />
          </div>

          {open && (
            <div className="absolute mt-2 w-32 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
              {options.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setWorkspace(item);
                    setOpen(false);
                  }}
                  className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full sm:flex-1 sm:max-w-md order-3 sm:order-0">
        <SearchInput
          placeholder={UI_TEXT.search}
          width="w-full"
          iconColor="text-white/70"
          inputClass="bg-transparent text-white placeholder-white/70 border border-white/20 focus:ring-1 focus:ring-white/80"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <div className="relative cursor-pointer">
          <FiBell size={18} className="text-white/80" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium">
          GK
        </div>
      </div>
    </div>
  );
}
