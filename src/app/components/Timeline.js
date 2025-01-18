import { TimeLineData } from "../constant/data";

function TimeLine() {
  // Array of gradient colors for chips
  const gradientColors = [
    "bg-gradient-to-tr from-pink-200 to-pink-400",
    "bg-gradient-to-tr from-blue-200 to-blue-400",
    "bg-gradient-to-tr from-green-200 to-green-400",
    "bg-gradient-to-tr from-purple-200 to-purple-400",
    "bg-gradient-to-tr from-yellow-200 to-yellow-400",
    "bg-gradient-to-tr from-orange-200 to-orange-400",
    "bg-gradient-to-tr from-teal-200 to-teal-400",
    "bg-gradient-to-tr from-red-200 to-red-400",
  ];

  return (
    <div className="mx-auto relative">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 dark:border-gray-900 h-full"></div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {TimeLineData.map((item, index) => (
          <li key={index} className="mb-16 ms-4">
            <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -start-1.5 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <h3 className="text-2xl md:text-3xl py-2 font-semibold dark:text-white">
              {item.title}
            </h3>
            <h3 className="md:text-lg font-semibold dark:text-white">
              {item.org}
            </h3>

            <div className="flex flex-wrap mt-4">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`font-semibold ${
                    gradientColors[idx % gradientColors.length]
                  } rounded-full text-gray-700 text-sm mr-2 px-4 py-2 mb-2 dark:text-black`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TimeLine;
