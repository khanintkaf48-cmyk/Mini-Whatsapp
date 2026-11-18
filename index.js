const express = require('express');
const app = express();

console.dir(app);

let port = 3000;

app.listen(port,() => {
    console.log(`Listing is start${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello I am intkaf");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("Welcome back");
});




app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`<h1>this are the search result query ${q} </h1>`);

});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request Recived");
//     res.send("This is a basic repones come frome Intkaf khan");
// });