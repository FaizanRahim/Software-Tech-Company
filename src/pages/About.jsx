import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import teamImage from "../assets/team.jpg";

function About() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              About BookKeeper
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black">
              Accounting technology
              <span className="text-emerald-400"> built around people.</span>
            </h1>

            <p className="mt-7 text-xl text-slate-400 leading-relaxed">
              We help ambitious businesses understand their numbers,
              automate financial operations and make smarter decisions.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-14 mt-20 items-center">

            <img
              src={teamImage}
              alt="BookKeeper team"
              className="rounded-3xl border border-white/10"
            />

            <div>

              <h2 className="text-4xl font-bold">
                More than bookkeeping.
              </h2>

              <p className="mt-6 text-slate-400 leading-relaxed">
                BookKeeper brings accounting, technology and strategic
                thinking together. Our goal is to turn financial data
                into something useful, understandable and actionable.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <Target className="text-emerald-400" />
                  <h3 className="mt-4 font-bold">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Simplify financial operations for growing businesses.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <Eye className="text-emerald-400" />
                  <h3 className="mt-4 font-bold">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Make financial intelligence accessible to every business.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-24 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl">

            <ShieldCheck className="text-emerald-400" size={36} />

            <h2 className="mt-5 text-4xl font-bold">
              Trust is part of the product.
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Financial information deserves careful handling,
              transparent processes and responsible technology.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;