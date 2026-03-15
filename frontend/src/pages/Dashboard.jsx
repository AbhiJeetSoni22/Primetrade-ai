import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api/api";
import TaskForm from "../components/TaskForm";

function Dashboard() {

  const token = localStorage.getItem("token");

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (data) => {
    await createTask(data, token);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    loadTasks();
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-4">
        Task Dashboard
      </h1>

      <TaskForm create={handleCreate} />

      {tasks.map((task) => (
        <div
          key={task._id}
          className="border p-3 mb-2 flex justify-between"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>

          <button
            onClick={() => handleDelete(task._id)}
            className="bg-red-500 text-white px-3"
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default Dashboard;