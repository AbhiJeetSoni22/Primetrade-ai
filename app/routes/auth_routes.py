from fastapi import APIRouter
from app.models.user_model import UserRegister, UserLogin
from app.controllers.auth_controller import register_user, login_user

router = APIRouter(prefix="/api/v1/auth", tags=["Authentication"])


@router.post("/register")
def register(user: UserRegister):
    return register_user(user)


@router.post("/login")
def login(user: UserLogin):
    return login_user(user)