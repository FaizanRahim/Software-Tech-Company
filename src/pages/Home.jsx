import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Play,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Zap,
  FileText,
  Users,
  Wallet,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react";

import heroImage from "../assets/hero-accounting.jpg";
import dashboardImage from "../assets/dashboard.png";
import officeImage from "../assets/office.jpg";

function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-[130px] right-10 top-32 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm backdrop-blur-md">
              <Sparkles size={15} />
              Intelligent accounting for modern businesses
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95]">

              Finance should
              <span className="block text-emerald-400">
                move your business.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-300 leading-relaxed">
              BookKeeper combines bookkeeping, financial reporting,
              automation and expert advisory into one powerful
              accounting technology platform.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="group flex items-center gap-3 px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold transition hover:-translate-y-1"
              >
                Book a Consultation
                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-3 px-7 py-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition"
              >
                <Play size={17} />
                Explore Platform
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                Secure workflows
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                Real-time reporting
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={17} />
                Expert support
              </div>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-slate-950 to-transparent" />

      </section>


      {/* TRUST STRIP */}

      <section className="bg-slate-950 border-y border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-3xl font-bold text-white">
                500+
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Businesses supported
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-white">
                12K+
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Reports processed
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-white">
                98%
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Client satisfaction
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-white">
                24/7
              </div>
              <p className="text-sm text-slate-500 mt-1">
                Platform availability
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            <div>

              <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
                What we do
              </span>

              <h2 className="mt-4 text-4xl md:text-6xl font-bold">
                One financial
                <span className="text-emerald-400"> command center.</span>
              </h2>

            </div>

            <Link
              to="/services"
              className="flex items-center gap-2 text-emerald-400"
            >
              View all services
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {[
              {
                icon: Wallet,
                title: "Bookkeeping",
                text: "Accurate books, reconciliations and transaction management.",
              },
              {
                icon: BarChart3,
                title: "Financial Reporting",
                text: "Understand cash flow, profit and business performance.",
              },
              {
                icon: TrendingUp,
                title: "Virtual CFO",
                text: "Strategic financial planning for ambitious businesses.",
              },
              {
                icon: FileText,
                title: "Invoicing",
                text: "Professional invoices, payment tracking and receivables.",
              },
              {
                icon: Users,
                title: "Payroll",
                text: "Streamlined payroll workflows for growing teams.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance",
                text: "Organized financial processes that reduce operational risk.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group p-8 rounded-3xl border border-white/10 bg-white/3 hover:bg-emerald-500/5 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-2"
                >

                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition">
                    <Icon
                      size={26}
                      className="text-emerald-400"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-400 leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-6 text-sm text-emerald-400 flex items-center gap-2">
                    Learn more
                    <ArrowRight size={15} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* DASHBOARD */}

      <section className="py-28 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
                Built for clarity
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold">
                See your business
                <span className="text-emerald-400"> differently.</span>
              </h2>

              <p className="mt-6 text-slate-400 text-lg leading-relaxed">
                Replace spreadsheets and fragmented workflows with a
                clear financial picture that helps your team make
                better decisions.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Automated financial workflows",
                  "Custom business reports",
                  "Real-time performance visibility",
                  "Expert accounting support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-emerald-400"
                    />
                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-9 text-emerald-400 font-semibold"
              >
                Discover our approach
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="relative">

              <div className="absolute -inset-5 bg-emerald-500/10 blur-3xl" />

              <img
                src={dashboardImage}
                alt="Accounting dashboard"
                className="relative rounded-3xl border border-white/10 shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>


      {/* TEAM PREVIEW */}

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Leadership
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              People behind the numbers.
            </h2>

            <p className="mt-5 text-slate-400">
              A multidisciplinary team combining accounting expertise,
              technology and business strategy.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              ["CEO", "Aqib Javeed", "ceo.jpeg"],
              ["CFO", "Your Name", "cfo.jpg"],
              ["CTO", "Your Name", "cto.jpg"],
              ["HR Director", "Your Name", "hr.jpg"],
            ].map(([role, name, image]) => (
              <div
                key={role}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/3"
              >

                <div className="aspect-4/5 overflow-hidden">

                  <img
                    src={`/src/assets/${image}`}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-5">

                  <p className="text-emerald-400 text-sm">
                    {role}
                  </p>

                  <h3 className="mt-1 text-lg font-bold">
                    {name}
                  </h3>

                </div>

              </div>
            ))}

          </div>

          <div className="text-center mt-10">

            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-emerald-400"
            >
              Meet the full team
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* TESTIMONIAL */}

      <section className="py-28 bg-slate-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="flex justify-center gap-1 text-emerald-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} fill="currentColor" />
            ))}
          </div>

          <blockquote className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
            "BookKeeper gave our leadership team the financial
            visibility we needed to make decisions with confidence."
          </blockquote>

          <p className="mt-8 text-slate-400">
            — Client testimonial placeholder
          </p>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 mt-8 text-emerald-400"
          >
            View client stories
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>


      {/* OFFICE IMAGE */}

      <section className="relative h-150">

        <img
          src={officeImage}
          alt="BookKeeper team office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div>

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Build better. Grow smarter.
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-bold">
              Let's build your
              <span className="text-emerald-400"> financial future.</span>
            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 px-7 py-4 bg-emerald-500 hover:bg-emerald-400 rounded-xl font-semibold transition"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;