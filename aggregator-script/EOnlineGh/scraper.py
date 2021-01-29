"""
Author: Sedem Quame Amekpewu
Date: Saturday, 23rd January 2021
Description: Script for getting categorical information on products from the browngh servers.
"""
import requests
from firebase import firebase
from bs4 import BeautifulSoup

def requestPage(Link):
    resp = requests.get(Link, timeout=45)
    # parse response text to beautiful soup
    return BeautifulSoup(resp.text, 'lxml')

def getLinkFromInlineCss(Text):
  urlTextStartPosition = (Text.find(" url( ") + 6)
  urlTextEndPosition = Text.find(" );")
  return(Text[urlTextStartPosition: urlTextEndPosition])

def scrapeArticle(Link):
  try:
    parsedPage = requestPage(Link)

    #article title
    title = parsedPage.select(".entry-title")[0].string

    if(title == None):
      #article header
      header = parsedPage.select("header.entry-header")[0]
      title = header.select(".entry-title")[0].string

    #article storyDate
    storyDate = parsedPage.select(".entry-date")[0].string

    #article paragraphs
    mainContent = parsedPage.select("div.entry-content")[0]
    paragraphs = mainContent.find_all("p")

    #article image_url
    image = getLinkFromInlineCss(parsedPage.select(".entry-media-row-05")[0].select("style")[0].string)

    # creating an object in python.
    data = {
      'source': "EOnlineGh.com",
      'title': title,
      'category': "Entertainment",
      'author': " ThePrinceLive",
      'storyDate': storyDate,
      'paragraphs': str(paragraphs),
      'image': image
    }

    firebase_connection = firebase.FirebaseApplication('https://aggregatr-7c2b7-default-rtdb.firebaseio.com/', None)

    post_result = firebase_connection.post('/articles', data)
    print(post_result)
  except requests.HTTPError as e:
    print(e)


def __main__(Link):
  for i in range(498):
    parsedPage = requestPage(f'{Link}{i}')
    articleLinks = parsedPage.select(".g1-gamma")
    for link in articleLinks:
      scrapeArticle(link.find("a")["href"])

__main__("https://www.eonlinegh.com/page/")
