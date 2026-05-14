import Heading from "../components/ui/heading";

export default function FreeDemoCTA() {
  return (
    <section className="pt-16 h-fit bg-white">
      <div className="max-w-6xl pb-6 mx-auto px-4 text-center">
      <Heading title="Transform Your Business – Get a Free Demo Today" className="text-[48px] font-[400] text-[#2D3340] leading-[1.1] mb-6 mt-1" />


        <p className="text-[#4A5568] text-[18px] font-[400] font-[Inter] mb-6 max-w-3xl mx-auto text-balance text-gray-600">
          More tools do not make your business grow. It grows with teammates
          that eliminate mistakes, save time and allow you to scale with
          confidence using AI agents for e-commerce and ecommerce automation.
        </p>

        <p className="text-[18px] mb-12 font-[400] font-[Inter] max-w-3xl mx-auto text-balance text-gray-600">
          So don&apos;t wait and meet them at ExactFlow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-4">
          <button
            className="whitespace-nowrap hover:bg-[#db1521] hover:text-white transition duration-300 font-medium text-[14px] sm:text-base rounded-full p-2 sm:px-8 sm:py-3 bg-[#db1521] text-white border border-[#db1521]"
            type="button"
          >
            GET A DEMO
          </button>
        </div>
      </div>
    </section>
  );
}