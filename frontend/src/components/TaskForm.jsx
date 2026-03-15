import { useState } from "react";

function TaskForm({ create }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    create({
      title,
      description
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm">

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title Input */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Task Title
          </label>

          <input
            type="text"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>

          <textarea
            rows="3"
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          + Add Task
        </button>

      </form>

    </div>
  );
}

export default TaskForm;