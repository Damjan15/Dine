const NameInput = () => {
  return (
    <div className="relative z-0">
      <input
        type="text"
        id="name_input"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#8E8E8E] appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-codGray peer"
        placeholder=" "
      />
      <label
        htmlFor="name_input"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-codGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Name
      </label>
    </div>
  );
};

export default NameInput;
