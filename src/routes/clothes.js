'use strict';
const express = require("express");
const { Clothes } = require("../models/index");
console.log({ Clothes });
const clothesRouter = express.Router();

clothesRouter.post("/", homePage);
clothesRouter.get("/clothes", getClothes);
clothesRouter.post("/clothes", addClothes);
clothesRouter.get("/clothes/:id", getOneClothes);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);

function homePage(req, res) {
    res.status(200).send("Hello From My DB");
    console.log(req.body);
}

async function getClothes(req, res) {
    let clothe = await Clothes.get();
    res.status(200).json(clothe);
}
async function addClothes(req, res) {
    let newClothes = req.body;
    let clothe = await Clothes.create(newClothes);
    res.status(201).json(clothe);
}
async function getOneClothes(req, res) {
    let clotheId = req.params.id;
    let clothe = await Clothes.get(clotheId);
    res.status(200).json(clothe);
}
async function updateClothes(req, res) {
    let clotheId = req.params.id;
    let updateClothes = req.body;
    let foundClothes = await Clothes.get(clotheId);
    if (foundClothes) {
        let updatedClothes = await foundClothes.update(updateClothes);
        res.status(201).json(updatedClothes);
    }
}
async function deleteClothes(req, res) {
    let clotheId = req.params.id;
    let deleteClothes = await Clothes.delete(clotheId);
    res.status(204).send('record has deleted');
}

module.exports = clothesRouter;