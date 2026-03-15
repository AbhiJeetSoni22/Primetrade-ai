import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api/api";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const res = await getTasks(token);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
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

  const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">

      {/* Header */}

      <div className="max-w-4xl mx-auto flex justify-between items-center p-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Task Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

      {/* Main Card */}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">

        {/* Task Form */}

        <TaskForm create={handleCreate} />

        {/* Task List */}

        <div className="mt-6 space-y-4">

          {tasks.length === 0 && (
            <p className="text-center text-gray-500">
              No tasks yet. Add your first task 🚀
            </p>
          )}

          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
            >

              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {task.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {task.description}
                </p>
              </div>

              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;