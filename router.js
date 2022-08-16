const router = require("express").Router();
const user = require("./schema");
const multer = require("multer");
const Movie = require("./movieSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Books = require("./bookSchema");
const Album = require("./albumSchema");
const Music = require("./musicSchema");




//register

router.post("/register", async (req, res) => {

    try {
        let emailExit = await user.findOne({ email: req.body.email })
        if (emailExit) {
            return res.status(400).json("Email already taken");
        }
        let psHash = await bcrypt.hash(req.body.password, 10);
        let CpsHash = await bcrypt.hash(req.body.confirmpassword, 10);
        const data = new user({
            name: req.body.name,
            email: req.body.email,
            password: psHash,
            confirmpassword: CpsHash,
        });
        let result = await data.save();
        res.json(result);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});


//login

router.post("/login", async (req, res) => {
    try {
        let userExit = await user.findOne({ email: req.body.email })
        if (!userExit) {
            return res.status(400).json("Your Email Wrong");
        }
        let passwordValidation = await bcrypt.compare(req.body.password, userExit.password);
        if (!passwordValidation) {
            return res.status(400).json("Your Password Wrong");
        }
        let userToken = jwt.sign({ email: userExit.email }, "userinfoSecretId");
        res.header("auth", userToken).send(userToken);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });

    }
})


//movies

router.post("/movies", async (req, res) => {
    try {
        const newdata = new Movie({
            title: req.body.title,
            poster: req.body.poster,
            video: req.body.video,
            genre: req.body.genre,
        });
        let store = await newdata.save();
        res.json(store);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

router.get("/allmovies", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});


//books

router.post("/books", async (req, res) => {
    try {
        const newdata = new Books({
            title: req.body.title,
            poster: req.body.poster,
            pdf: req.body.pdf,
            genre: req.body.genre,
        });
        let store = await newdata.save();
        res.json(store);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

router.get("/allbooks", async (req, res) => {
    try {
        const book = await Books.find();
        res.status(200).json(book);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

//Album

router.post("/albums", async (req, res) => {
    try {
        const newdata = new Album({
            title: req.body.title,
            poster: req.body.poster,
            album: req.body.album,
            genre: req.body.genre,
        });
        let store = await newdata.save();
        res.json(store);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

router.get("/allalbums", async (req, res) => {
    try {
        const album = await Album.find();
        res.status(200).json(album);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

//music

router.post("/musics", async (req, res) => {
    try {
        const newdata = new Music({
            title: req.body.title,
            poster: req.body.poster,
            songs: req.body.songs,
            artist: req.body.artist,
        });
        let store = await newdata.save();
        res.json(store);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

router.get("/allMusic", async (req, res) => {
    try {
        const musics = await Music.find();
        res.status(200).json(musics);

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});



module.exports = router;
