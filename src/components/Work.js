
import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";

export default function Work() {
  return (
    <section id="work">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Leveraging my industry experience, I translate knowledge into impactful contributions. Discover my latest work and internship experiences below.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience, index) => (
            <div key={index} className="p-4 lg:w-1/2" style={{ height: "270px" } }>
              <div className="flex flex-grow pl-6 border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col h-full">
              <BriefcaseIcon className="w-8 h-8 text-purple-500 mr-4" />
              <div className="flex-grow pl-6">
                  <h1 className="text-grey-900 text-lg title-font font-medium mb-2">{experience.title}</h1>
                  <p className="leading-relaxed text-purple-900">{experience.company}</p>
                  <p className="leading-relaxed text-base">{experience.duration}</p>
                  <br />
                  <p className="leading-relaxed text-base">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

