from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage
todos = []
id_counter = 1

class Todo(BaseModel):
    name: str

@app.get("/items/")
def get_items():
    return todos

@app.post("/items/")
def add_item(todo: Todo):
    global id_counter
    item = {"id": id_counter, "name": todo.name}
    todos.append(item)
    id_counter += 1
    return item
