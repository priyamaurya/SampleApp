Web Crawler in Javascript
===============================

This is simple web crawler developed in javascript and node js. 

Features:

1.This will crawl internal links from the start page given in variable PAGE_URL.

2.We can set the number of pages to crawl in variable NUM_OF_PAGE_CAN_VISIT.

3.All links in this page domain will be saved in "site_domain_links.json" file in same directory. 

4. In console log we can see the page visited. 

5. All external links of the page will be saved in ""external_links.json" file in same directory.

6. All links to image on the page will be saved in "images.json" file in same directory. 


To build and run this solution
====================================

There are two methods for to build and run this solution .

1. Checkout this repo,install dependencies, then start the gulp process with the following:

 >  git clone https://github.com/priyamaurya/SampleApp.git
    > cd SampleApp
    > npm install
    > node web_crawler.js

2. Download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

    > npm install
    > node web_crawler.js


======================================



