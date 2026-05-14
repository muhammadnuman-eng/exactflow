import Link from "next/link";
import Heading from "../components/ui/heading";
import { Button } from "../components/ui/Button";

export default function ValueProposition() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-14 text-center font-sans">
      {/* Main Heading */}
      {/* <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#0a1c56] sm:text-5xl md:text-6xl">
          The Future of Growth Runs on Flow
        </h1> */}

      <Heading
        title=" The Future of Growth Runs on Flow"
        className="md:text-[48px] font-[400] text-[#2D3340] leading-[1.1] mt-1"
      />

      {/* Description Paragraph */}
      <p className="mx-auto max-w-3xl leading-relaxed text-[#4a5568] font-[Inter] font-[400] text-[18px] mt-4">
        Every hour lost to repetitive work slows your momentum. With AI
        automation, ExactFlow simplifies the details, minimizes costly slip-ups,
        and gives your team the power to focus on long-term growth.{" "}
        <Link
          href="#contact"
          className="text-[#1a56db] underline transition-colors hover:text-[#0a1c56]"
        >
          Contact Us
        </Link>{" "}
        today.
      </p>
      <Button href="/demo" variant="primary" className="mt-13 px-8 py-3.5 text-base font-[500] font-[Inter] tracking-wider text-white shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#d6131c] focus:ring-offset-2 uppercase">Book Your Demo Today</Button>
    </div>
  );
}
