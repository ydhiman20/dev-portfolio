"use client";

import Heading from "../components/Heading";
import { useState } from "react";
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
                required
                className="mt-1 block w-full px-8 py-5 rounded-full border"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                type="text"
                value={formData.name}
              />
            </div>

            <div>
              <input
                required
                className="mt-1 block w-full px-8 py-5 rounded-full border"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                value={formData.email}
              />
            </div>

            <div>
              <textarea
                required
                className="mt-1 block w-full px-8 py-5 rounded-full border"
                name="message"
                onChange={handleChange}
                placeholder="Message..."
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
