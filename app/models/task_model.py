from pydantic import BaseModel
from typing import Optional


class TaskCreate(BaseModel):
    title: str
    description: str
    status: Optional[str] = "pending"


class TaskUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    status: Optional[str]

class TaskResponse(BaseModel):
    id: Optional[str]
    title: str
    description: str
    status: str
    user_id: str