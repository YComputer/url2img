// const Screenshot = require('url-to-screenshot')
// const fs = require('fs')

// new Screenshot('http://baidu.com/')
//   .width(1024)
//   .height(600)
//   .clip()
//   .capture()
//   .then(img => {
//     fs.writeFileSync(__dirname + '/example.png', img)
//     console.log('open example.png')
//   })



var webshot = require('webshot');

var options = {
  screenSize: {
    width: 320
  , height: 480
  }
, shotSize: {
    width: 320,
    height: '600'
//   , height: 'all'
  }
// , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
//     + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

webshot('https://www.e-ai-edu.com/news/newsDetails/844dc170-9287-11ea-870a-e320751a2e70', 'news.jpeg', options, function(err) {
  // screenshot now saved to flickr.jpeg
});


// https://github.com/alvarcarto/url-to-pdf-api