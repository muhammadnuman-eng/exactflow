import Heading from "../components/ui/heading";

export default function WhyChoose() {
  return (
    <section className="pt-10 h-fit bg-white">
      <div className="max-w-6xl pb-6 mx-auto px-4 text-center">
      <Heading title="Why Choose Us" className="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mb-5 mt-1" />


        <p className="text-[#4A5568] text-[18px] mb-6 font-[400] font-[Inter]  max-w-3xl mx-auto text-balance text-gray-600">
          The future of eCommerce lies with the brands that are fast-paced and
          error-free. ExactFlow makes this future real through the introduction
          of smart AI agents and convenient marketplace integration. Each agent
          has major but time-consuming jobs like HR, finance, purchasing and
          customer service so that your team will work on what is important.
        </p>

        <p className="mb-12 text-[#4A5568] text-[18px] font-[400] font-[Inter]  max-w-3xl mx-auto text-balance text-gray-600">
          At the same time, our platform brings together all the marketplaces
          under a single system, and confusion becomes clarity. The result is an
          eCommerce business that runs smoothly, grows with flexibility, and
          stays ahead of the competition through e-commerce automation and AI
          agents for eCommerce.{" "}
          <a
            href="https://www.exactflow.com/en/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contact us
          </a>{" "}
          today.
        </p>
      </div>
    </section>
  );
}