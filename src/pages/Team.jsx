import React from "react";
import {
  Linkedin,
  Github,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import ceo from "../assets/ceo.jpg";
import cfo from "../assets/cfo.jpg";
import cto from "../assets/cto.jpg";
import hr from "../assets/hr.jpg";

const team = [
  {
    name: "Your CEO Name",
    role: "Chief Executive Officer",
    image: ceo,
    bio: "Leads company strategy, partnerships and long-term growth.",
    skills: ["Leadership", "Strategy", "Business Development"],
    linkedin: "https://linkedin.com",
    upwork: "https://upwork.com",
  },
  {
    name: "Your CFO Name",
    role: "Chief Financial Officer",
    image: cfo,
    bio: "Leads financial strategy, reporting and business planning.",
    skills: ["Accounting", "FP&A", "Financial Strategy"],
    linkedin: "https://linkedin.com",
    upwork: "https://upwork.com",
  },
  {
    name: "Your CTO Name",
    role: "Chief Technology Officer",
    image: cto,
    bio: "Builds the technology infrastructure behind the platform.",
    skills: ["React", "Cloud", "AI & Automation"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Your HR Name",
    role: "HR Director",
    image: hr,
    bio: "Builds culture, talent strategy and employee experience.",
    skills: ["Recruitment", "Culture", "People Operations"],
    linkedin: "https://linkedin.com",
  },
];

function Team() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Our Team
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black">
              Experts behind
              <span className="text-emerald-400">
                {" "}every number.
              </span>
            </h1>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {team.map((person) => (
              <article
                key={person.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >

                <div className="grid sm:grid-cols-2">

                  <div className="aspect-square sm:aspect-auto overflow-hidden">

                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                  </div>

                  <div className="p-7">

                    <p className="text-emerald-400 text-sm font-medium">
                      {person.role}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {person.name}
                    </h2>

                    <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                      {person.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {person.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                    <div className="flex gap-3 mt-7">

                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-500 transition"
                        >
                          <Linkedin size={17} />
                        </a>
                      )}

                      {person.github && (
                        <a
                          href={person.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-500 transition"
                        >
                          <Github size={17} />
                        </a>
                      )}

                      {person.upwork && (
                        <a
                          href={person.upwork}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-500 transition"
                        >
                          <Globe size={17} />
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default Team;