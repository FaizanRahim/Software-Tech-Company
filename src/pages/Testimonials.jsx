import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Client Name",
    company: "Startup Founder",
    text: "The team completely changed how we manage our financial operations. Reporting is clearer and our leadership team finally has visibility.",
  },
  {
    name: "Client Name",
    company: "Agency Owner",
    text: "Professional, responsive and incredibly organized. BookKeeper helped us move away from spreadsheets and build a much better process.",
  },
  {
    name: "Client Name",
    company: "SME Director",
    text: "The combination of accounting expertise and technology made a huge difference for our business.",
  },
  {
    name: "Client Name",
    company: "Founder",
    text: "We now understand our numbers much better and can make decisions faster.",
  },
];

function Testimonials() {
  return (
    <main className="pt-20">

      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold">
              Client Stories
            </span>

            <h1 className="mt-5 text-5xl md:text-7xl font-black">
              Trusted by teams
              <span className="text-emerald-400">
                {" "}building what's next.
              </span>
            </h1>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">

            {reviews.map((review) => (
              <article
                key={review.name + review.company}
                className="p-8 rounded-3xl border border-white/10 bg-white/3"
              >

                <div className="flex gap-1 text-emerald-400">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <blockquote className="mt-7 text-xl leading-relaxed text-slate-200">
                  "{review.text}"
                </blockquote>

                <div className="mt-8">

                  <div className="font-semibold">
                    {review.name}
                  </div>

                  <div className="text-sm text-slate-500 mt-1">
                    {review.company}
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

export default Testimonials;