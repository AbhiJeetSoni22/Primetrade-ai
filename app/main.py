from fastapi import FastAPI, Depends
from app.routes.auth_routes import router as auth_router
from app.middleware.auth_middleware import get_current_user
from app.routes.task_routes import router as task_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="Backend Developer Assignment API",
    version="1.0"
)

origins = [
    "http://localhost:5173",
    "https://primetrade-ai-zeta.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(task_router)

@app.get("/")
def home():
    return {"message": "API is running"}


@app.get("/api/v1/dashboard")
def dashboard(user=Depends(get_current_user)):

    return {
        "message": "Welcome to protected dashboard",
        "user": {
            "id": str(user["_id"]),
            "name": user["name"],
            "email": user["email"],
            "role": user["role"]
        }
    }

@app.get("/test")
def test():
    return {"message": "test working"}