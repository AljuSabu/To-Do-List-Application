import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TaskCard from "./components/TaskCard";

const localList = () => {
  const list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [todoList, setTodoList] = useState(localList);
  const [newTask, setNewTask] = useState("");

  // LocalStorage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) {
      alert("Enter a task");
      return;
    }
    let num = todoList.length === 0 ? 1 : todoList.length + 1;
    let newEntry = { id: num, task: newTask, status: false };
    setTodoList([...todoList, newEntry]);
    setNewTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((item) => {
      return item.id != id;
    });
    setTodoList(newTodoList);
  };

  // Update Status
  const isComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return item;
        }
      }),
    );
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-start p-4 sm:p-8 md:p-12 xl:p-16 2xl:p-20 text-sm md:text-base 2xl:text-lg bg-linear-to-b from-purple-700 via-purple-800 to-purple-900">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white text-center tracking-tight mb-6 md:mb-8 2xl:mb-10">
            To-Do App
          </h1>
          <div className="flex justify-center mb-8 md:mb-10 2xl:mb-12">
            <TodoForm
              handleSubmit={addTask}
              value={newTask}
              setValue={setNewTask}
            />
          </div>
          {todoList.length === 0 ? (
            <p className="text-xl sm:text-2xl 2xl:text-3xl font-black text-purple-300 text-center pt-12 md:pt-20 2xl:pt-30">
              Let's Add Some Tasks
            </p>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 2xl:gap-8">
              {todoList.map((item, index) => {
                return (
                  <div key={item.id} className="w-full px-9 md:px-0 sm:w-auto">
                    <TaskCard
                      item={item}
                      index={index}
                      deleteTask={deleteTask}
                      isComplete={isComplete}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
