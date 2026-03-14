from bson import ObjectId
from fastapi import HTTPException
from app.config.database import tasks_collection


def create_task(task, user):

    new_task = {
        "title": task.title,
        "description": task.description,
        "status": task.status,
        "user_id": str(user["_id"])
    }

    result = tasks_collection.insert_one(new_task)

    return {
        "message": "Task created successfully",
        "task_id": str(result.inserted_id)
    }


def get_tasks(user):

    if user["role"] == "admin":
        tasks = list(tasks_collection.find())
    else:
        tasks = list(tasks_collection.find({"user_id": str(user["_id"])}))

    for task in tasks:
        task["_id"] = str(task["_id"])

    return tasks


def update_task(task_id, task_data, user):

    task = tasks_collection.find_one({"_id": ObjectId(task_id)})

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    if user["role"] != "admin" and task["user_id"] != str(user["_id"]):
        raise HTTPException(status_code=403, detail="Not allowed")

    tasks_collection.update_one(
        {"_id": ObjectId(task_id)},
        {"$set": task_data.dict(exclude_unset=True)}
    )

    return {"message": "Task updated successfully"}


def delete_task(task_id, user):

    task = tasks_collection.find_one({"_id": ObjectId(task_id)})

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    if user["role"] != "admin" and task["user_id"] != str(user["_id"]):
        raise HTTPException(status_code=403, detail="Not allowed")

    tasks_collection.delete_one({"_id": ObjectId(task_id)})

    return {"message": "Task deleted successfully"}