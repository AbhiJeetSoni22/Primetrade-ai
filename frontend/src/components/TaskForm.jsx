import { useState } from "react";

function TaskForm({ create }) {

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    create(task);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4"
    >
      <input
        className="border p-2"
        placeholder="Title"
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <input
        className="border p-2"
        placeholder="Description"
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <button className="bg-blue-500 text-white px-3">
        Add
      </button>
    </form>
  );
}

export default TaskForm;