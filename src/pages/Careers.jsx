import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Calculator,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    icon: Code2,
    title: "Frontend Developer",
    type: "Full Time",
  },
  {
    icon: Calculator,
    title: "Senior Accountant",
    type: "Full Time",
  },
  {
    icon: Users,
    title: "HR Specialist",
    type: "Full Time",
  },
  {
    icon: Briefcase,
    title: "Financial Analyst",
    type: "Full Time",
  },
];

function Careers() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Careers
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black">
              Build the future
              <span className="text-emerald-400">
                {" "}of accounting.
              </span>
            </h1>

            <p className="mt-7 text-xl text-slate-400">
              Join a team where finance, technology and human expertise
              come together.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-16">

            {jobs.map((job) => {
              const Icon = job.icon;

              return (
                <div
                  key={job.title}
                  className="p-7 rounded-2xl border border-white/10 bg-white/3 hover:border-emerald-400/30 transition"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Icon className="text-emerald-400" />
                      </div>

                      <div>

                        <h2 className="font-bold">
                          {job.title}
                        </h2>

                        <p className="text-sm text-slate-500">
                          {job.type}
                        </p>

                      </div>

                    </div>

                    <ArrowRight className="text-emerald-400" />

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Careers;