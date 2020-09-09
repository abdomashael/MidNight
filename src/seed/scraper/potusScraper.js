const puppeteer = require('puppeteer');
const fs = require('fs');

const scrapeImages = async () => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
    await page.goto('https://shahid.mbc.net/ar/');


    // Login form
    await page.screenshot({path:__dirname+'/output/1.png'});

    // await page.type('[name=username]', 'fireship_dev');

    // await page.type('[name=password]', 'some-pa$$word');

    // await page.screenshot({path: '2.png'});

    // await page.click('[type=submit]');

    // // Social Page

    await page.waitFor(10000);
    await page.screenshot({path: __dirname+'/output/2.png'});


    // await page.goto(`https://www.instagram.com/${username}`);

    await page.waitForSelector('._11L-LS6ZO_g0XWtlHtYNrk > img ', {
        visible: true,
    });


    await page.screenshot({path: __dirname+'/output/3.png'});


    // Execute code in the DOM
    const data = await page.evaluate( () => {

        const images = document.querySelectorAll('._11L-LS6ZO_g0XWtlHtYNrk > img');

        const urls = Array.from(images).map(v => v.src);

        return urls
    });
  
    await browser.close();

    // console.(data);


    return data;
}

(async()=>{
    let data = await scrapeImages()

    

    fs.writeFile(__dirname+'/output/thumbnails',
    data.join('\n'),
    function (err) { console.log('Extract saved successful'); }
);
    // fs.writeFileSync("thubmnails",data)   
})()


// const rp = require('request-promise');
// const $ = require('cheerio');
// var fs = require('fs');

// const puppeteer = require('puppeteer');

// const url = 'https://shahid.mbc.net/ar/';


// (async () => {
//     try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
//       await page.goto('https://shahid.mbc.net/ar/');
//       await page.waitForSelector('.image-gallery-thumbnail', { timeout: 60000 });
  
//       const body = await page.evaluate(() => {
//         return document.querySelector('body').innerHTML;
//       });
//       console.log(body);
  
//       await browser.close();
//     } catch (error) {
//       console.log(error);
//     }
//   })();

// // rp(url)
// //   .then(function(html){
// //     //success!

// //     // console.log($('.image-gallery-thumbnail',html));
// //     // console.log(html);

// //     fs.appendFile("test.html",html,(err)=>{
// //         console.log(err);
// //     })
// //   })
// //   .catch(function(err){
// //     //handle error
// //   });