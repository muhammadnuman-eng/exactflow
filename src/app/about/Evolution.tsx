import type { ReactNode } from "react";
import Heading from "../components/ui/heading";

interface TimelineItem {
  title: string;
  description: ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    title: "2023 - The Beginning",
    description:
      "We could see how the HR, finance, procurement, and support struggled, and based on those issues, the concept of digital teammates, with our initial working models beginning to emerge.",
  },
  {
    title: "2024 - Building the Agents",
    description:
      "We created departmental agents and cooperated with early adopters to make them sharper, faster, more efficient, and reliable, which saved businesses precious hours per week and prevented costly pitfalls.",
  },
  {
    title: "2025 - The Launch",
    description: (
      <>
        ExactFlow was transformed into a complete set of agents, and the
        companies could connect{" "}
        <a
          href="https://www.exactflow.com/en/nia-ai-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          HR
        </a>
        ,{" "}
        <a
          href="https://www.exactflow.com/en/raya-ai-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          finance
        </a>
        ,{" "}
        <a
          href="https://www.exactflow.com/en/tesa-ai-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          procurement
        </a>
        , and{" "}
        <a
          href="https://www.exactflow.com/en/axel-ai-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          support
        </a>{" "}
        into a single connected flow being driven by teammates who operate
        24/7.
      </>
    ),
  },
  {
    title: "Looking Ahead",
    description:
      "We are pushing to even smarteren our agents so that we can reach more industries and bring to the future a business where growing concerns will not be a heavy burden.",
  },
];

export default function Evolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <Heading title="From Idea To Reality" className="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mb-4 mt-1" />

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            A journey of building digital teammates that eCommerce businesses
            can use to transform how companies run.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div>
              {timelineData.map((item) => (
                <div key={item.title}>
                  <div className="ml-4 h-16 w-px bg-gray-300" />
                  <h3 className="font-bold text-[15px] text-[#061456] hover:text-[#db1521] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="ml-4 mt-3 border-l border-gray-200 pl-7 pb-12">
                    <p className="text-[16px] leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}