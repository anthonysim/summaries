from fastapi import FastAPI

from src.utils.summarize import display_summary

app = FastAPI()

@app.get("/summary")
def get_summary():
    return display_summary("")


