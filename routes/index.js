const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

router.get("/student", (req, res) => {
    const student = {
        name: "Аладдін Ібн Ясін",
        age: 21,
        university: "Київськи Політехніхні Інститут",
    };
    res.render("student", { student });
});

router.get("/stas", (req, res) => {
    const student = {
        name: "Станіслав",
        age: 18,
        university: "Київський Політехнічний Інститут",
    };
    res.render("student", { student });
});

module.exports = router;
