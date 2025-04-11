import { CheckCircleIcon } from "@heroicons/react/24/solid";

import VideoJSPlayer from "./VideoJSPlayer";

const WhatYouWillLearn = ({name}) => {
  const learningItems = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  return (
    <div className="flex flex-col h-auto overflow-y-auto">
      {/* Video */}
      <div className="rounded-lg overflow-hidden shadow-sm mb-4">
        <VideoJSPlayer />
      </div>

      {/* Acerca del curso */}

      <div className="flex items-center space-x-2 pb-4 justify-start bg-white rounded-md border border-gray-200 p-4 mb-4">
        {/* <img src="/icon/camera.svg" className="w-4 h-4" /> */}
        <div className="text-center o-b text-fs-18">{name} - Alexander Assad K.</div>
      </div>

      <div className="bg-white rounded-md border border-gray-200 p-4 mb-4">
        <h2 className="w-b inline-block tracking-wider px-4 py-1 rounded-md text-sm font-semibold text-gray-800 bg-[#E2E2E2] mb-4">
          Acerca del curso
        </h2>

        <p className="text-gray-600 text-xs leading-relaxed mb-1 w-m ">
          Lorem ipsum dolor sit amet consectetur. Ultricies quis vitae et felis.
          Urna odio viverra aliquam fringilla quam platea. Sed vel laoreet
          vehicula eu odio.
        </p>
        <p className="text-gray-600 text-xs leading-relaxed w-m">
          Non et vulputate nam etiam eget a pellentesque in fermentum. Augue
          ultricies viverra faucibus nulla mi diam feugiat enim.
        </p>
        {/* <button className="mt-2 text-xs font-semibold text-green-600 hover:underline">
          Ver más
        </button> */}
      </div>

      {/* ¿Qué aprenderás? */}
      <div className="bg-white rounded-md border border-gray-200 p-4">
        <h2 className="w-b inline-block tracking-wider px-4 py-1 rounded-md text-sm font-semibold text-gray-800 bg-[#E2E2E2] mb-4">
          ¿Qué aprenderás?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {learningItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-xs text-gray-600 w-m"
            >
              <span className="text-green-500 text-base mr-2">
                <CheckCircleIcon className="h-6 w-6 text-[#5D7556]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
