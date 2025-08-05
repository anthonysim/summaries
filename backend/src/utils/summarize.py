import openai
from IPython.display import display, Markdown

from src.utils.website import Website
from src.utils.prompts import messages

def summarize(url):
  website = Website(url)
  response = openai.chat.completions.create(
      model = "gpt-4o-mini",
      messages = messages(website)
  )
  return response.choices[0].message.content

def display_summary(url):
    summary = summarize(url)
    display(Markdown(summary))