"""
Author: Sedem Quame Amekpewu
Date: Saturday, 23rd January 2021
Description: Script for getting categorical information on products from the peacefm servers.
"""
import requests
import numpy as np
from firebase import firebase
from bs4 import BeautifulSoup

def requestPage(Link):
    resp = requests.get(Link, timeout=45)
    # parse response text to beautiful soup
    return BeautifulSoup(resp.text, 'lxml')

# function to get unique values 
def unique(List): 
    x = np.array(List) 
    return(np.unique(x)) 

def findNavigation(Link):
    parsedPage = requestPage(Link)
    navigation = parsedPage.select(".jeg_menu_style_5")[0]
    # find all anchor tags
    linkLists = []
    for link in navigation.find_all("a")[1:-1]:
      if "#" not in link:
        linkLists.append(f'https://www.peacefmonline.com{link["href"]}')
    return(unique(linkLists[0:-1]))

def scrapeArticle(Link):
  try:
    print(f'** Working {Link}')
    parsedPage = requestPage(f'{Link}').select(".jeg_main_content")[0]

    title = parsedPage.select(".jeg_post_title")[0].string

    storyDate = parsedPage.select(".jeg_meta_date")[0].string

    category = parsedPage.select(".jeg_meta_category")[0].select("a")[0].string

    author = parsedPage.select(".peace_black_text_4")[0].select("a")[0].string

    image = parsedPage.select(".wp-image-133")[0]["src"]

    mainContent = parsedPage.select(".content-inner")[0]
    paragraphs = mainContent.find_all("p")
    
    data = {
      'source': "Peace Fm Online",
      'title': title,
      'category': category,
      'author': author,
      'storyDate': storyDate,
      'paragraphs': str(paragraphs),
      'image': image
    }
    firebase_connection = firebase.FirebaseApplication('https://aggregatr-7c2b7-default-rtdb.firebaseio.com/', None)
    post_result = firebase_connection.post('/articles', data)
    print(data)
    print(post_result)
    print("=====================================/n/n")

  except IndexError as err:
    print(f'*** Faulty {Link}')
    print(err)

def visitLinksInArchive(Link):
  parsedPage = requestPage(f'{Link}')
  jegBlockContainer = parsedPage.select(".arch_dataTable")[0].find_all("a")
  nestedArchives = []
  for anchor in jegBlockContainer:
      link = f'https://www.peacefmonline.com{anchor["href"]}'
      if(link.find("archives") > -1):
        nestedArchives.append(link)
      else:
        scrapeArticle(link)
    
def getArchiveLinks(Link):
  parsedPage = requestPage(Link)
  try:
    archiveTableContainer = parsedPage.select(".tagcloud")[0].find_all("a")
    for anchor in archiveTableContainer:
      link = f'https://www.peacefmonline.com{anchor["href"]}'
      if(link.find("archives") > -1):
        visitLinksInArchive(link)
      else:
        scrapeArticle(link)
  except IndexError as e:
    print(e)

def __main__(URL):
  try:
      # navigationAnchorLinks = findNavigation(URL)[1:-2]
      # for link in navigationAnchorLinks:
      #   getArchiveLinks(f'{link}archives/')
      getArchiveLinks("https://www.peacefmonline.com/pages/politics/archives/")
  except requests.HTTPError as e:
      print(e)

__main__("https://www.peacefmonline.com/")