import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header onMenuClick={() => setOpen(true)} />

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`fixed inset-0 z-40 md:hidden ${open ? "block" : "hidden"}`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-64 h-full bg-white">
            <Sidebar />
          </div>
        </div>

        <div className="hidden md:block w-64 shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
