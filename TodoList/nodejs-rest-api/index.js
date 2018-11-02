var express = require("express");
var app = express();

var data = [{ id: '1', text: 'test1'}, { id: '2', text: 'test2'}];

app.get('/todolist', (req, res) => {
    // Populate with dummy data for now, but add call to mongodb later.
    //TODO: Add call to mongodb    
    // var data = [{ id: '1', text: 'test1'}, { id: '2', text: 'test2'}];

    console.log(data);
    res.end(JSON.stringify(data));
 });

app.post('/addtodolistitem', (req, res) => {
    // Populate with dummy data for now, but add call to mongodb later.
    //TODO: Use the request body from the POST if possible.
    //TODO: Add call to mongodb    
    data.push([{id: '3', text: 'test3'}])
    // data.push(req.body)

    // console.log(req.body);
    // console.log(data);    
    res.end(JSON.stringify(data));
});


var server = app.listen(3000, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})