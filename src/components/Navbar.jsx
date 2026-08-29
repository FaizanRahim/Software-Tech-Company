import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BarChart3,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <BarChart3 size={24} />
            </div>

            <div>
              <div className="font-bold text-lg">
                BookKeeper
              </div>

              <div className="text-[9px] uppercase tracking-[3px] text-emerald-400">
                Accounting Technology
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 transition text-sm"
            >
              Let's Talk
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 transition text-sm font-semibold"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950 px-6 py-6">
          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <NavLink
                key={link.path}
                onClick={() => setOpen(false)}
                to={link.path}
                className="text-slate-300 hover:text-emerald-400"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="text-center py-3 rounded-xl bg-emerald-500 font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;