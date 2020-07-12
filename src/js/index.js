const fs = require('fs'); // file system 
const http = require('http');
const url = require('url'); //routing & params
const { template } = require('babel-core');

const json = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
//synchronous version - runs once on  app startup
let laptopdata = JSON.parse(json);
//parse json object from file system
//console.log(data);

const server = http.createServer((req,res)=>{
    
    const pathName = url.parse(req.url,true).pathname;    
    const id = url.parse(req.url,true).query.id;

    //express framework handles routing - TODO

    if(pathName === '/products' || pathName === '/'){

        res.writeHead(200, { 'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            let overviewOutput = data;
            
            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, data) => {
            
                const cardsOutput = laptopdata.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput); 
                
                res.end(overviewOutput);
            });
        });
       


    } else if (pathName === '/laptop' && id < laptopdata.length){

        res.writeHead(200,{'Content-type':'text/html'});
        //single thread also async version        
        fs.readFile(`${__dirname}/templates/template-laptop.html`,'utf-8',(err,data)=> {
            //template engine - express 
            const laptop = laptopdata[id];
            const output = replaceTemplate(data,laptop);
            res.end(output);
        });
   
    } else if ((/\.(jpg||jpeg||gif||png)$/i).test(pathName)) {
        //Async
        fs.readFile(`${__dirname}/data/img${pathName}`,(err,data) =>{
            res.writeHead(200,{'Content-type':'image/jpg'}); 
            //error handling 
            res.end(data);
        })
    
    } else {
        res.writeHead('404',{'Content-type':'text/html'}); 
        res.end('Page not found on server');
    }
    
  
});

server.listen(1337,'127.0.0.1',()=>{
     console.log('server waiting for requests');
});

function replaceTemplate(originalHtml,laptop){//reusable function
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g,laptop.productName)
    output = output.replace(/{%IMAGE%}/g,laptop.image)
    output = output.replace(/{%PRICE%}/g,laptop.price)
    output = output.replace(/{%SCREEN%}/g,laptop.screen)
    output = output.replace(/{%CPU%}/g,laptop.cpu)
    output = output.replace(/{%STORAGE%}/g,laptop.storage)
    output = output.replace(/{%RAM%}/g,laptop.ram)
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description)
    output = output.replace(/{%ID%}/g,laptop.id)
    return output;
}