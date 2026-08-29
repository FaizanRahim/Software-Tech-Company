import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Github,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2">

            <h2 className="text-2xl font-bold">
              BookKeeper
            </h2>

            <p className="mt-5 max-w-md text-slate-400 leading-relaxed">
              Modern accounting technology for businesses that want
              better financial visibility, smarter workflows and
              sustainable growth.
            </p>

            <div className="flex gap-3 mt-7">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <Github size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social"
              >
                <Twitter size={18} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <Link className="block hover:text-emerald-400" to="/about">
                About
              </Link>

              <Link className="block hover:text-emerald-400" to="/team">
                Our Team
              </Link>

              <Link className="block hover:text-emerald-400" to="/careers">
                Careers
              </Link>

              <Link className="block hover:text-emerald-400" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Services
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <p>Bookkeeping</p>
              <p>Financial Reporting</p>
              <p>Payroll Management</p>
              <p>Virtual CFO</p>
              <p>Tax Support</p>
            </div>
          </div>

        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-500">

          <p>
            © 2026 BookKeeper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;