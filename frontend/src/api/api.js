import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000"
});

export const registerUser = (data) =>
  API.post("/api/v1/auth/register", data);

export const loginUser = (data) =>
  API.post("/api/v1/auth/login", data);

export const getTasks = (token) =>
  API.get("/api/v1/tasks", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const createTask = (data, token) =>
  API.post("/api/v1/tasks", data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteTask = (id, token) =>
  API.delete(`/api/v1/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });