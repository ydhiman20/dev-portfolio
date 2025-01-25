"use client";

import { useState } from "react";

import Heading from "../components/Heading";
const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto container max-w-[600px] min-h-vh">
      <Heading
        heading="Let's Chat"
        subHeading="If you'd like to talk about a potential project or just say hi, send me a message or email me at ydhiman20@gmail.com!"
      />

      <div className="flex flex-col max-w-[600px] m-auto mt-10 my-20">
        {/* Left Column (30%) */}

        {/* Right Column (70%) */}
        <div className="">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                className="mt-1 block w-full px-8 md:py-5 py-3 rounded-full border"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                required
                type="text"
                value={formData.name}
              />
            </div>

            <div>
              <input
                className="mt-1 block w-full px-8 md:py-5 py-3 rounded-full border"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                required
                type="email"
                value={formData.email}
              />
            </div>

            <div>
              <textarea
                className="mt-1 block w-full px-8 md:py-5 py-3 rounded-full border"
                name="message"
                onChange={handleChange}
                placeholder="Message..."
                required
                rows="4"
                value={formData.message}
              />
            </div>

            <button
              className="w-full px-4 btn-theme-cta text-sm py-5 rounded-full hover:bg-opacity-85 uppercase text-gray-700"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
