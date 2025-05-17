//Importing libs: 'http', 'url', that is native on node
const http = require ('http');
const { parse } = require('path');
const url = require ('url');

//Inside this arrow function, our server will be able to use all the functions described
http.createServer((request, response)=> {

    //Create a variable to parse the url
    const parsedUrl = url.parse(request.url, true)
    const pathName = parsedUrl.pathname
    const queryParams = parsedUrl.query 

    if (pathName === '/favicon.ico'){
        response.writeHead(404)
        response.end;
        return;
    }

    console.log(queryParams)


    if (request.method === 'GET'){
        response.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'})
        response.write('A soma de ' + queryParams.num1 + ' + ' + queryParams.num2 + ' é igual a: ' + (Number(queryParams.num1) + Number(queryParams.num2)));
        response.end();
    }

}).listen(9090)//Can be any port, unless it's an already in used port.