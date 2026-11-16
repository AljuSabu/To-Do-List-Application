const TaskCard = ({ item, index, deleteTask, isComplete }) => {
  return (
    <div className="bg-slate-900 text-white rounded-lg p-4 sm:p-5 shadow-lg w-full sm:w-xs">
      <h2 className="font-bold text-lg sm:text-xl mb-5 sm:mb-8 wrap-break-word">
        {index + 1}. {item.task}
      </h2>
      <p className="text-sm md:text-base mb-6 sm:mb-10">
        Status:{" "}
        <span
          className={`font-semibold ${
            item.status ? "text-emerald-400" : "text-amber-400"
          }`}
        >
          {item.status ? "completed" : "pending"}
        </span>
      </p>
      <div className="flex flex-col gap-2 sm:gap-3">
        <button
          onClick={() => isComplete(item.id)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 py-1.5 sm:py-2 text-sm md:text-base rounded-md font-medium"
        >
          Update Status
        </button>
        <button
          onClick={() => deleteTask(item.id)}
          className="w-full bg-rose-600 hover:bg-rose-700 py-1.5 sm:py-2 text-sm md:text-base rounded-md font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
