from fastapi import FastAPI
from app.routes.auth_routes import router as auth_router

app = FastAPI(
    title="Backend Developer Assignment API",
    version="1.0"
)

app.include_router(auth_router)

@app.get("/")
def home():
    return {"message": "API is running"}