var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var fs = require('fs');


var PAGE_URL = "https://www.digitalocean.com";
var url = new URL(PAGE_URL);
var baseUrl = url.protocol + "//" + url.hostname;



var pagesVisited = {};
var pageCounter = 0;
var pagesToVisit = [];
var images = [];
var NUM_OF_PAGE_CAN_VISIT = 5;

pagesToVisit.push(PAGE_URL);
pageCrawl();

function pageCrawl() {
  if(pageCounter >= NUM_OF_PAGE_CAN_VISIT) {
    console.log("You reached the limit of pages can be visited");
    
    return;
  }
  var nextPage = pagesToVisit.pop();
  if (nextPage in pagesVisited) {
    // ALready visited this page, so repeat the pageCrawl
    pageCrawl();
  } else {
    // New page 
   console.log('page crawl has finished crawling'); 
  }
}


