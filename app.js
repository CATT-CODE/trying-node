const fs = require("fs"); //allows you to work with the file system in your computer
const http = require("http"); //allows you to transfer data using hyper text transfer protocol

const port =  process.env.PORT || 3000; // sets a specific port through env or defaults to 3000 if one is not specified

const server = http.createServer(function (req, res) { // creates a server on your computer
    
    if (req.url === "/celtics") { // if the domain /celtics is used, then...

    fs.readFile("index.html", function (err, data) { // reads the html file on your computer

        if (err) { // if there is a problem getting the data then it prints code 400 with a message
            res.writeHead(400).end("Sorry something is wrong");
            return res.end();
        }

        res.writeHead(200, {"Content-Type": "text/html"}); // formats the data into text or html
        res.write(data); // writes the data
        return res.end();
    });
} else { // if the domain you are looking for does not exist, it will return a 404 with a message
    res.writeHead(404, { "Content-Type": "text/plain"});
    res.end("Not Found");
}
});

server.listen(port, () => { // creates the server on the specified port defined in the port variable above.
    console.log(`Server is running on port: ${port}`);
});