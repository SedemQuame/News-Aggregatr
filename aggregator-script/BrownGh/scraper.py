"""
Author: Sedem Quame Amekpewu
Date: Saturday, 23rd January 2021
Description: Script for getting categorical information on products from the browngh servers.
"""
import requests
from firebase import firebase
from bs4 import BeautifulSoup

paginatedArticles = []
articleLinks = []

def requestPage(Link):
    resp = requests.get(Link, timeout=45)
    # parse response text to beautiful soup, for parsing into an object.
    return BeautifulSoup(resp.text, 'lxml')

def findNavigation(Link):
    parsedPage = requestPage(Link)
    navigation = parsedPage.select("#menu-main-navigation-1")
    # find all anchor tags
    return navigation[0].find_all('a')

def scrapeArticle(Link):
    try:
      #scrape and store data in firebase
      parsedPage = requestPage(Link)

      #article header
      header = parsedPage.select("header.td-post-title")[0]

      #article title
      title = header.select("h1")[0].string

      #article category
      category = parsedPage.select(".entry-category")[0].find("a").string

      print(category)

      #article author
      author = parsedPage.select(".td-post-author-name")[0].find("a").string

      #article storyDate
      storyDate = parsedPage.select(".td-post-date")[0].find("time").string

      #article paragraphs
      mainContent = parsedPage.select("div.td-ss-main-content")[0]
      post_content = mainContent.select(".td-post-content")[0]
      paragraphs = post_content.find_all("p")

      #article image_url
      image = parsedPage.select(".td-post-featured-image")[0].find("img")["src"]

      # creating an object in python.
      data = {
        'source': "BrownGh.com",
        'title': title,
        'category': category,
        'author': author,
        'storyDate': storyDate,
        'paragraphs': str(paragraphs),
        'image': image
      }
      firebase_connection = firebase.FirebaseApplication('https://aggregatr-7c2b7-default-rtdb.firebaseio.com/', None)
      post_result = firebase_connection.post('/articles', data)
      print(post_result)
      print("\n\n")
    except IndexError:
      print("Error occured do nothing")

def scrapePage(Link, hasPaginatedLinks, isArticle): 
    parsedPage = requestPage(Link)
    articleContainers = parsedPage.select(".td-module-image")
    for container in articleContainers:
        # print(container.find("a")["href"])
        articleLinks.append(container.find("a")["href"])
        if(isArticle):
            # scrape article data
            scrapeArticle(container.find("a")["href"])
            
    print("-----------------------------------------------------------\n")
    if(hasPaginatedLinks):
        extractPaginated(Link)        

def extractPaginated(Link):
    parsedPage = requestPage(Link)
    paginatedLinkContainer = parsedPage.select(".page-nav")
    if len(paginatedLinkContainer) != 0:
        # page ranges.
        firstPage = 1
        lastPage = int(paginatedLinkContainer[0].select(".last")[0].string)
        for i in range(firstPage, (lastPage + 1)):
            # paginatedArticles.append(f"{Link}page/{i}")
            scrapePage(f"{Link}page/{i}", False, True)
 
def __main__(URL):
    try:
        navigationAnchorLinks = findNavigation(URL)
        for link in navigationAnchorLinks:
            scrapePage(link['href'], True, False)
        print("-----------------------------------------------------------\n")
        print(articleLinks)
    except requests.HTTPError as e:
        print(e)

__main__(f'https://www.browngh.com/')