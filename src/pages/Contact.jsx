import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
                Contact
              </span>

              <h1 className="mt-5 text-5xl md:text-7xl font-black">
                Let's talk about
                <span className="text-emerald-400">
                  {" "}your numbers.
                </span>
              </h1>

              <p className="mt-7 text-lg text-slate-400 leading-relaxed">
                Tell us about your business, your current financial
                workflow and where you want to go next.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <Mail className="text-emerald-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-500">
                      hello@yourcompany.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-emerald-400" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-500">
                      +1 000 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-emerald-400" />
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-slate-500">
                      Your City, Your Country
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <form className="p-8 rounded-3xl border border-white/10 bg-white/3">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your name"
                  className="input"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="input"
                />

              </div>

              <input
                type="text"
                placeholder="Company"
                className="input mt-5"
              />

              <select className="input mt-5">
                <option>Select a service</option>
                <option>Bookkeeping</option>
                <option>Accounting</option>
                <option>Financial Reporting</option>
                <option>Virtual CFO</option>
                <option>Payroll</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="input mt-5 resize-none"
              />

              <button
                type="button"
                className="mt-5 w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold transition"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;