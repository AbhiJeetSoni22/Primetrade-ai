from fastapi import HTTPException
from app.config.database import users_collection
from app.utils.hash_password import hash_password, verify_password
from app.utils.jwt_handler import create_access_token
from app.models.user_model import UserRegister, UserLogin


def register_user(user: UserRegister):

    existing_user = users_collection.find_one({"email": user.email})

    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = hash_password(user.password)

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password,
        "role": "user"
    }

    result = users_collection.insert_one(new_user)

    return {"message": "User registered successfully"}


def login_user(user: UserLogin):

    db_user = users_collection.find_one({"email": user.email})

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token({
        "user_id": str(db_user["_id"]),
        "role": db_user["role"]
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }