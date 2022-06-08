'use strict';
const Food = (sequelize, DataTypes) =>
    sequelize.define('Food', {
        name: {
            type: DataTypes.STRING,
            alowNull:false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            alowNull:false,
        },
        isSpicy: {
            type: DataTypes.BOOLEAN,
        }
        
    })

module.exports = Food;