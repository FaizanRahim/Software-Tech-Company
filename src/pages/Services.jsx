import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Calculator,
  BarChart3,
  Receipt,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping",
    text: "Daily transaction management, reconciliation and clean financial records.",
  },
  {
    icon: Calculator,
    title: "Accounting",
    text: "Reliable accounting workflows built around your business needs.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    text: "Management reports that turn complex financial data into clear insights.",
  },
  {
    icon: Receipt,
    title: "Invoicing",
    text: "Professional invoicing and receivables management.",
  },
  {
    icon: Users,
    title: "Payroll",
    text: "Organized payroll processes for growing teams.",
  },
  {
    icon: TrendingUp,
    title: "Virtual CFO",
    text: "Strategic forecasting, budgeting and financial planning.",
  },
];

function Services() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Our Services
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black">
              Financial operations,
              <span className="text-emerald-400">
                {" "}without the chaos.
              </span>
            </h1>

            <p className="mt-7 text-xl text-slate-400">
              From everyday bookkeeping to strategic CFO support,
              we give businesses the financial infrastructure they need.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group p-8 rounded-3xl border border-white/10 bg-white/3 hover:border-emerald-400/30 hover:-translate-y-2 transition duration-500"
                >

                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="text-emerald-400" size={27} />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-emerald-400 text-sm">
                    Explore service
                    <ArrowRight size={16} />
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      <section className="py-24 bg-emerald-500">

        <div className="max-w-5xl mx-auto px-6 text-center text-slate-950">

          <h2 className="text-4xl md:text-6xl font-black">
            Need a financial partner?
          </h2>

          <p className="mt-5 text-slate-900/70 text-lg">
            Tell us where your business is today and where you want to go.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-slate-950 text-white rounded-xl font-semibold"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Services;