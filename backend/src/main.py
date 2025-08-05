from fastapi import FastAPI
import openai

from src.utils.summarize import display_summary

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

