const TodoForm = ({ handleSubmit, value, setValue }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-3 pr-4 sm:p-4 sm:pr-6 rounded-xl shadow-lg flex gap-2 sm:gap-4 w-full sm:w-sm lg:w-md"
    >
      <input
        type="text"
        placeholder="Enter your task here ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 min-w-0 text-sm md:text-base text-gray-700 outline-none"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 active:bg-purple-700 text-white shadow-black active:shadow-inner px-5 sm:px-8 xl:px-10 2xl:px-12 py-1.5 sm:py-2 text-sm md:text-base rounded-lg font-semibold transform"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
