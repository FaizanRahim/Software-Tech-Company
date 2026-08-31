import React from "react";
import { ArrowUpRight } from "lucide-react";

import financeImage from "../assets/finance.jpg";
import dashboardImage from "../assets/dashboard.png";
import officeImage from "../assets/meeting.jpg";

const projects = [
  {
    title: "Fintech Growth Dashboard",
    category: "Financial Analytics",
    image: dashboardImage,
    result: "Centralized reporting and management visibility.",
  },
  {
    title: "SME Accounting Platform",
    category: "Accounting Technology",
    image: financeImage,
    result: "Simplified bookkeeping workflows.",
  },
  {
    title: "Business Finance Transformation",
    category: "CFO Advisory",
    image: officeImage,
    result: "Improved financial planning and reporting.",
  },
];

function Portfolio() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
            Case Studies
          </span>

          <h1 className="mt-5 text-5xl md:text-7xl font-black max-w-4xl">
            Work that turns
            <span className="text-emerald-400">
              {" "}numbers into action.
            </span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-7 mt-16">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group rounded-3xl overflow-hidden border border-white/10 bg-white/3 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-87.5 object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <p className="text-emerald-400 text-sm">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      {project.title}
                    </h2>

                  </div>

                </div>

                <div className="p-7 flex items-center justify-between gap-5">

                  <p className="text-slate-400">
                    {project.result}
                  </p>

                  <button className="p-3 rounded-full bg-emerald-500">
                    <ArrowUpRight size={19} />
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Portfolio;