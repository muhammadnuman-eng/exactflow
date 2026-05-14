import React from "react";
import Heading from "../components/ui/heading";

interface StatItem {
  id: number;
  value: string;
  label: string;
  paths: string[];
}

const stats: StatItem[] = [
  {
    id: 1,
    value: "500+",
    label: "businesses supported",
    paths: [
      "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z",
    ],
  },
  {
    id: 2,
    value: "11",
    label: "countries with a global presence",
    paths: [
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    ],
  },
  {
    id: 3,
    value: "125K+",
    label: "orders processed yearly",
    paths: [
      "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    ],
  },
  {
    id: 4,
    value: "100%",
    label: "focus on making eCommerce smarter",
    paths: [
      "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 4h2l3.6 7.59L3.62 17H19v-2H7l1.1-2h8.64l4.97-9H5.21l-.94-2H1v2zm16 14c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
      "M18 4.5C18 3.12 16.88 2 15.5 2S13 3.12 13 4.5V9l-1-.75L9 10.5l3 2.25V17h2V4.5z",
    ],
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
       <Heading title="The Power of ExactFlow in Numbers" className="text-[48px] font-[400] text-[#2D3340] mb-6 leading-[1.1] mt-1" />
        <p className="text-[#4A5568] text-[18px] font-[400] font-[Inter] mb-12 max-w-3xl mx-auto text-gray-600">
          Our platform provides the scale and flexibility that today&apos;s businesses
          require through seamless order management to an integrated, hybrid
          workforce.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-[#4A5568] text-[18px] font-[400] font-[Inter]"
            >
              <div className="text-[#db1521]">
                <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4">
                  {stat.paths.map((path) => (
                    <path key={path} fill="currentColor" d={path} />
                  ))}
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-[#db1521]">
                {stat.value}
              </div>
              <p className="font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;