const express = require('express');
const mongoose = require('mongoose');
process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    process.exit();
});

process.on("SIGTERM", () => {
    console.log("Caught interrupt signal");
    process.exit();
});
/*
let n = 0;

 setInterval(() => {
     console.log('Counting' + n++);
 }, 1000);
*/
(async () => {
    const app = express();

    console.log("Connecting to MongoDB");
    await mongoose.connect("mongodb://mongodb:27017/ew-docker", { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Connected");

    app.get('/', (req, res) => {
        console.log("Got a request");
        res.json({ message: "Hey, I'm Tom, the API" });
    });

    app.listen(3000, () => {
        console.log("Server is running");
    });
})();
