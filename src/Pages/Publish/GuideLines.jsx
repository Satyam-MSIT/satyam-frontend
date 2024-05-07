import authorGuidelines from "../../../bin/guidelinesdata";
import { FaArrowLeft } from "react-icons/fa";
export default function GuideLines() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6366F1] to-[#EC4899]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Guidelines for Authors
              </h1>
              <p className="text-lg md:text-2xl font-bold text-white">
                Authors' Guidelines and Paper Acceptance Procedure
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 lg:py-18">
        <ul className="list-disc p-8">
          {authorGuidelines.map((guideline, index) => (
            <li key={index} className="text-lg my-5 sm:text-xl font-semibold">
              {guideline}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
