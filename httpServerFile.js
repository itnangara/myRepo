var http = require('http'); //declare http module
server = http.createServer(function (req, res) { //create server, you can assign to variable
    if(req.url === '/home') { 
        //res.writeHead(200,{'Content-Type': 'text/plain'
        res.end("Hello There, My name is Isaac");
    }
    if(req.url === '/about') {
        //res.writeHead(200,{'Content-Type': 'text/plain'
        res.end("I existed for 27 years");
    }
    else {
        res.end(
            //res.writeHead(200,{'Content-Type': 'text/plain'
            `<h1>Error Occurred</h1>
            <p>please navigate back to the home screen</p>
            <a href="/">home</a>`
        )
    }
})
server.listen(5500);