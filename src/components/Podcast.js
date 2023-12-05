import React from "react";
import { PlayIcon } from "@heroicons/react/solid"; // Assuming you have a PlayIcon or a suitable icon for your podcast
import {podcastEpisode} from "../data"
export default function Spotlights() {

  return (
    <section id="spotlights">
      <div className="container px-5 py-10 mx-auto text-center">
        <PlayIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Media Spotlights
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I have been honored to participate in several social media projects. Explore some of them below.
        </p>
        <br />
        <div className="flex flex-wrap justify-center m-4">
          <div className="p-4 w-full md:w-1/2 lg:w-1/2 xl:w-2/3">
            <div
              className="episode-embed"
              dangerouslySetInnerHTML={{ __html: podcastEpisode.embedCode }}
            />
            <div className="inline-flex items-center mt-4">
              <span className="flex-grow flex flex-col">
                <span className="title-font font-medium text-black">
                  {podcastEpisode.title}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
