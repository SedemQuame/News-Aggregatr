Aggregator Scraper

This program, is created for the sole purpose of extracting the latest news, from a broad category.
Including the following, along with the sub-categories if any exist.

1. Entertainment
    * Celebs
    * Music

2. Sports
    * Football
    * Basketball

3. Lifestyle
    * Fashion
    * Beauty & Health
    * Relationships & Weddings
    * Food, Travel, Arts & Culture

4. Viral News

5. Business

6. News
    * Local
    * World

7. Politics

8. Technology

Below is a list of sites that data will be scraped from, and side note on what this sites specialise in and the techniques for scraping them.

1. Browngh.com
   * ``` Browngh displays news in a rather friendly an interesting way, with a broad spectrum of news, on various subjects, this site actually looks abit easy to extract data from with a simple crawler.```

2. Peacefmonline.com
    * ``` Peace fm online, online news publishing version of for the peace fm radio station, provides very interesting frequently and timely. With various assets including videos and images, that may quickly become and hussle to store. Their archives of past events and timelines of daily events may prove to be very essential. Their lazy loading sytle of presenting data, might be a problem, looks like site data is loaded using ajax. This might require using something like selenium to get the needed data.```

3. EOnlineGh.com
    * ``` EOnlineGh, seems to be concerned with celebrity and entertainment news. They keep an archive of information regarding relevant celebrities, they however don't display alot of the information at once. Which could lead to jumping between a dozen pages to get any information. Pages however seem to be loaded without the use of Ajax or any javascript induced calls.```

4. GhHeadlines.com
    * ``` GhHeadLines, seems like another aggregation site that primarily holds news about politics. ```
   
5. Mfidie.com
    * ```This blog type website deals with technology.```
   
6. fifty7tech

Data Representation
Data will be stored in JSON format, below are some fields of data that will be considered.
domain or source, date scraped, unique post id, original link, article title,
date published, article author, category, images, story paragraphs.

{
   dateScraped: '',
   sourceName: '',
   postId: '',
   postLink: '',
   article: {
      id: '',
      author: '',
      title: '',
      category: ''
      publishingDate: '',
      images: [
         {
            id: '',
            link: '',
            alt: ''
         },
         ...,
         {
            id: '',
            link: '',
            alt: ''
         }
      ], 
      paragraphs: [
         "paragraph1",
         "paragraph2",
         ...
         "paragraph3"
      ]  
   }
}
