from fastapi import APIRouter, Depends
from app.models.task_model import TaskCreate, TaskUpdate
from app.controllers.task_controller import create_task, get_tasks, update_task, delete_task
from app.middleware.auth_middleware import get_current_user

router = APIRouter(prefix="/api/v1/tasks", tags=["Tasks"])


@router.post("/")
def create(task: TaskCreate, user=Depends(get_current_user)):
    return create_task(task, user)


@router.get("/")
def read(user=Depends(get_current_user)):
    return get_tasks(user)


@router.put("/{task_id}")
def update(task_id: str, task: TaskUpdate, user=Depends(get_current_user)):
    return update_task(task_id, task, user)


@router.delete("/{task_id}")
def delete(task_id: str, user=Depends(get_current_user)):
    return delete_task(task_id, user)