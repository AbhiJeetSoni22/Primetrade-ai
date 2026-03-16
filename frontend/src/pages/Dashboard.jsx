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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">

      {/* Header */}

      <div className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-5">
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Task Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Manage your daily tasks efficiently
            </p>
          </div>

          <div className="flex items-center gap-4">

            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {tasks.length} Tasks
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow"
            >
              Logout
            </button>

          </div>

        </div>
      </div>

      {/* Main Content */}

      <div className="max-w-5xl mx-auto p-6">

        {/* Task Form */}

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Add New Task
          </h2>

          <TaskForm create={handleCreate} />
        </div>

        {/* Task List */}

        <div className="mt-8">

          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Your Tasks
          </h2>

          {tasks.length === 0 && (
            <div className="text-center bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">
                No tasks yet. Add your first task 🚀
              </p>
            </div>
          )}

          <div className="grid gap-4">

            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex justify-between items-center bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {task.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">
                    {task.description}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition font-medium"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;