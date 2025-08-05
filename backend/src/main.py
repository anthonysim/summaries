from fastapi import FastAPI

from src.utils.summarize import display_summary

app = FastAPI()

@app.get("/summary")
def get_summary():
    return display_summary("https://www.nbcnews.com/news/us-news/chi-alpha-texas-abuse-allegations-christian-missionary-sex-offender-rcna220069")


