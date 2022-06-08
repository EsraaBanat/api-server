'use strict';
const express = require("express");
const { Food } = require("../models/index");
console.log({ Food });
const foodRouter = express.Router();

foodRouter.get("/", homePage);
foodRouter.get("/food", getFood);
foodRouter.post("/food", addFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);

function homePage(req, res) {
    res.status(200).send("Hello From My DB");
}


async function getFood(req, res) {
    let food = await Food.get();
    res.status(200).json(food);
}
async function addFood(req, res) {
    let newFood = req.body;
    console.log({newFood});
    let food = await Food.create(newFood);
    res.status(201).json(food);
}
async function getOneFood(req, res) {
    let foodId = req.params.id;
    let food = await Food.get(foodId);
    res.status(200).json(food);
}
async function updateFood(req, res) {
    let foodId = req.params.id;
    let updateFood = req.body;
    let foundFood = await Food.get(foodId);
    if (foundFood) {
        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    }
}
async function deleteFood(req, res) {
    let foodId = req.params.id;
    let deleteFood = await Food.delete(foodId);
    res.status(204).send('record has deleted');
}

module.exports = foodRouter;