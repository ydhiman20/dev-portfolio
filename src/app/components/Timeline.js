import { TimeLineData } from "../constant/data";

function TimeLine() {
  return (
    <div className="mx-auto relative pl-3">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 dark:border-[#2c2c2c] h-full"></div>

      <ol className="relative border-s border-gray-200  dark:border-[#2c2c2c] ">
        {TimeLineData.map((item, index) => (
          <li className="mb-14 ms-4 pl-6" key={index}>
            <div className="loader absolute w-2 h-2 bg-primary rounded-full mt-0 -start-3 dark:border-[#ffbd5d] dark:bg-[#ffbd5d] "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <h3 className="text-xl py-1 font-semibold dark:text-white">
              {item.title}
            </h3>
            <h3 className="font-semibold dark:text-white">{item.org}</h3>

            <div className="flex flex-wrap mt-4">
              {item.skills.map((skill, idx) => (
                <span
                  className="border border-[#e2e2e2] text-sm rounded-full mr-2 px-4 py-2 mb-2 dark:text-white"
                  key={idx}
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
