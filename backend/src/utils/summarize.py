import os
import openai
from dotenv import load_dotenv
from IPython.display import display, Markdown

from src.utils.website import Website
from src.utils.prompts import messages

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def summarize(url):
  website = Website(url)
  response = openai.chat.completions.create(
      model = "gpt-4o-mini",
      messages = messages(website)
  )
  return response.choices[0].message.content

def display_summary(url):
    summary = summarize(url)
    return summary
    #display(Markdown(summary))