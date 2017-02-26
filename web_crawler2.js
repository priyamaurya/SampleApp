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

function checkPage(pageUrl, callback) {
    // Add page to our set
    pagesVisited[pageUrl] = true;
    pageCounter++;
    console.log("Visiting page " + pageUrl);
    saveInfoToFile("site_domain_links", pagesToVisit);

    request(pageUrl, function(error, response, body) {
        // Check status code (200 is HTTP OK)
        if (!error && response.statusCode == 200) {
            console.log("Status code: " + response.statusCode);
            var $ = cheerio.load(body);
            $('a').each(function() {
               if(checkURLDomain($(this).attr('href')) && removeDuplicates(pagesToVisit, $(this).attr('href'))){
                      pagesToVisit.push($(this).attr('href'));
                }              
            });

            findExternalLink($); // finds all external links in page
            saveImagesOfPage($); // function to get all images links of the page
            callback(); // callback is  pageCrawl function

        } else {
            console.log("error returned " + error);
            callback();
            return;
        }
    });
}


