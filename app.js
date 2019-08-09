var express = require('express'),
    PORT = process.env.PORT || 3000,
    IP  = process.env.IP,
    app = express();

    app.use(express.static("views"));
    app.set("view engine", "ejs");

    app.get("/", function(req,res) {
        res.render("home", {title: "home"});
    });

    app.get("/movie", function(req,res) {
        res.render("movie", {title: "movie"});
    });

    app.get("*", function(req,res) {
        res.render("wrong-page", {title: "wrong-page"});
    });

    app.listen(PORT, IP, function() {
        console.log('listening on port ' + PORT);
    });
