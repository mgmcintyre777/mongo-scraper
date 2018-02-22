const cheerio = require('cheerio');
const request = require('request');
const db = require('../models');

module.exports = (app) => {
    app.get('/api/scrape', (req, res) => {
        request.get('https://nytimes.com', (err, response, page) => {
            // Throw any potential error
            if(err) throw err;
            let articles = [];
            let $ = cheerio.load(page);
            
            $("h2.story-heading").each(function(index, element) {
                let title = $(this).children("a").text().trim();
                let url = $(this).children('a').attr('href'); 
                if(title !== '' && url !== '') {
                    articles.push({
                        title: title,
                        url: url,
                    });
                }
            });
            //
            res.json(articles);
        })
    })

    app.post('/api/addArticle', (req, res) => {
        
    })
}