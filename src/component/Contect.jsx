import React from "react";

const Contect = () => {
  return (
    <div
      name="contect"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form action="" className="flex flex-col max-w-[600px] w-full rounded-md overflow-hidden">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-r-pink-600 text-gray-300">
            Contect
          </p>
          <p className="text-gray-300 py-4">submit form below </p>
        </div>
        <input
          className="bg-[#ccd6fc] outline-0"
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="my-2 p-2 bg-[#ccd6fc] outline-0"
          type="email"
          placeholder="email"
          name="email"
        />
        <textarea
          className="p-2  bg-[#ccd6fc] outline-0"
          name="message"
          placeholder="message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4  py-3 my-8 mx-auto flex items-center">
          lets colleborate
        </button>
      </form>
    </div>
  );
};

export default Contect;
