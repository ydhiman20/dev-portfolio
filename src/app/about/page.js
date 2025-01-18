import Heading from "../components/Heading";
import Image from "next/image";
import { ABOUT_PAGE_CONTENT, techSkills } from "../constant/data";

function Page() {
  // Array of gradient colors to assign different colors dynamically
  const gradientColors = [
    "bg-gradient-to-tr from-pink-200 to-pink-400",
    "bg-gradient-to-tr from-blue-200 to-blue-400",
    "bg-gradient-to-tr from-green-200 to-green-400",
    "bg-gradient-to-tr from-yellow-200 to-yellow-400",
    "bg-gradient-to-tr from-purple-200 to-purple-400",
    "bg-gradient-to-tr from-teal-200 to-teal-400",
    "bg-gradient-to-tr from-red-200 to-red-400",
    "bg-gradient-to-tr from-orange-200 to-orange-400",
  ];

  return (
    <div className="container m-auto">
      <div className="min-h-[400px]">
        {/* About Section */}
        <Heading
          heading={ABOUT_PAGE_CONTENT.aboutHeading}
          subHeading={ABOUT_PAGE_CONTENT.aboutSubHeading}
        />

        <Image
          alt="About Image"
          className="m-auto block mt-8 grayscale"
          height={400}
          src="https://picsum.photos/800/400"
          width={800}
        />

        <p className="mb-20 mt-8 max-w-[700px] m-auto text-center leading-6">
          {ABOUT_PAGE_CONTENT.aboutDescription}
        </p>
      </div>

      <hr className="dark:border-[#08233b] border-[solid] border-[#072844] border-[1px] w-full mx-[0] mt-20 mb-20" />

      {/* Tech Stack Section */}
      <Heading
        heading={ABOUT_PAGE_CONTENT.techStackHeading}
        subHeading={ABOUT_PAGE_CONTENT.techStackSubHeading}
      />

      <div>
        <div className="w-full flex flex-wrap space-y-6 lg:space-y-0">
          {techSkills.map((section, sectionIndex) => (
            <div key={sectionIndex} className="w-full space-y-6">
              <div className="z-[1] md:p-8 space-y-2 md:space-y-0 md:flex md:items-center relative overflow-hidden">
                <div className="md:w-[15%] text-white">
                  <span className="font-outfit text-2xl md:text-3xl font-medium">
                    {section.index}
                  </span>
                </div>
                <div className="md:w-[40%] text-white">
                  <i className={`${section.icon} text-2xl md:text-3xl`}></i>
                  <h3 className="inline-flex md:pl-3 font-outfit font-medium text-2xl md:text-3xl">
                    {section.title}
                  </h3>
                </div>
                <div className="md:w-[50%] flex flex-wrap">
                  {section.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`font-semibold ${
                        gradientColors[
                          (sectionIndex * section.skills.length + idx) %
                            gradientColors.length
                        ]
                      } rounded-full text-gray-700 text-sm mr-2 px-4 py-2 mb-2`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
