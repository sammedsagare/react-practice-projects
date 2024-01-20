import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo() {
    if (newTodoTitle.trim() === "" || newTodoDescription.trim() === "") return;

    const newTodoObj = {
      title: newTodoTitle,
      description: newTodoDescription,
      id: Date.now(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodoObj]);
    setNewTodoTitle("");
    setNewTodoDescription("");
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="text-center text-3xl pt-5 text-white font-bold">
        ToDo App
      </div>

      <div className="flex">
        {/* div2 */}
        <div className="flex flex-col justify-start items-start mt-5 pl-5">
          <div className="flex flex-col">
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => {
                setNewTodoTitle(e.target.value);
              }}
              className="text-white border-2 bg-transparent rounded-md px-3 py-2 border-[#ff6b6b] focus:outline-none focus:border-2 focus:border-[#ff6b6b]"
              placeholder="Todo Title"
            />
            <input
              type="text"
              value={newTodoDescription}
              onChange={(e) => {
                setNewTodoDescription(e.target.value);
              }}
              className="text-white border-2 bg-transparent rounded-md mt-2 px-3 py-2 border-[#ff6b6b] focus:outline-none focus:border-2 focus:border-[#ff6b6b]"
              placeholder="Todo Description"
            />
            <button
              onClick={addTodo}
              className="bg-[#242424] cursor-pointer font-semibold px-2 py-1 rounded-md text-white ml-2"
            >
              Add Todo
            </button>
          </div>
        </div>

        {/* div1 */}
        <div className="flex flex-col items-center mt-2 pl-3 text-white">
          {todos.map((todo) => (
            <div key={todo.id} className="mt-3 ">
              <div className="font-semibold">Title: {todo.title}</div>
              <div className="font-semibold">
                Description: {todo.description}
              </div>
              <div className="font-semibold">ID: {todo.id}</div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-[#ff6b6b] cursor-pointer font-semibold rounded-md px-2 py-1 text-white mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
