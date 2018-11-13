# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class N2NcrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass

class Update(object):
    def __init__(self):
        self.name = ""
        self.link = ""
        self.group = ""
        self.date = ""


class Project(scrapy.Item):
    id = scrapy.Field()
    name = scrapy.Field()
    name_alter = scrapy.Field()
    created_in = scrapy.Field()
    last_updated = scrapy.Field()
    author = scrapy.Field()
    artist = scrapy.Field()
    synopsis = scrapy.Field()
    rating = scrapy.Field()
    tags = scrapy.Field()
    genres = scrapy.Field()
    thumb_img = scrapy.Field()
    link = scrapy.Field()
    update_list = scrapy.Field()
