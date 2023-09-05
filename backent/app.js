// const express = require("express");
import express from "express";
const app = express();
import cors from 'cors';
import mongoose from "mongoose";
import Contact from "./models/model.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//connect to mongo
mongoose.connect('mongodb+srv://mongodb200205:tKakEmQPy4JyRRVx@cluster0.u9hlpen.mongodb.net/amaliyot?retryWrites=true&w=majority');

//red
app.get('/', (req, res) => {
    res.send('Hello world');
});

//create route
app.post("/newContact", (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        descr: req.body.descr,
        number: req.body.number,
    });
    newContact.save();
  });

app.listen(5000, () => {console.log("Server has been 5000...")});
