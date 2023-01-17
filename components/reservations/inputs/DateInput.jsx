import React from "react";

const DateInput = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="mb-4">
        <span className="block text-xl leading-7 text-codGray">
          Pick a date
        </span>
      </div>

      <div className="flex items-center justify-between md:space-x-8">
        <div class="relative z-0 w-[73px]">
          <input
            type="text"
            id="month_input"
            class="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#8E8E8E] appearance-none focus:outline-none focus:ring-0 focus:border-codGray peer"
            placeholder=" "
          />
          <label
            for="month_input"
            class="absolute text-center text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-codGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            MM
          </label>
        </div>

        <div class="relative z-0 w-[73px]">
          <input
            type="text"
            id="date_input"
            class="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#8E8E8E] appearance-none focus:outline-none focus:ring-0 focus:border-codGray peer"
            placeholder=" "
          />
          <label
            for="date_input"
            class="absolute w-full text-center text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-codGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            DD
          </label>
        </div>

        <div class="relative z-0 w-[73px]">
          <input
            type="text"
            id="year_input"
            class="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#8E8E8E] appearance-none focus:outline-none focus:ring-0 focus:border-codGray peer"
            placeholder=" "
          />
          <label
            for="year_input"
            class="absolute w-full text-center text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-codGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            MM
          </label>
        </div>
      </div>
    </div>
  );
};

export default DateInput;
