/// <reference path="./global.d.ts" />
// @ts-nocheck

export function cookingStatus(time = -1) {
    if (time === -1) {
        return "You forgot to set the timer.";
    }
    if (time === 0) {
        return "Lasagna is done.";
    }
    return "Not done, please wait.";
}

export function preparationTime(layers, timePerLayer) {
    if (!(timePerLayer)) {
        timePerLayer = 2;
    }
    return layers.length * timePerLayer;
}

export function quantities(ingredients) {
    const obj = { sauce: 0, noodles: 0 };
    ingredients.forEach(ingredient => {
        if (ingredient === "sauce") {
            obj["sauce"] += 0.2;
        } else if (ingredient === "noodles") {
            obj["noodles"] += 50;
        }
    })
    return obj;
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, people) {
    if (!people) {
        people = 2;
    }
    people /= 2;

    const newRecipe = {};
    for (let ingredient in recipe) {
        newRecipe[ingredient] = recipe[ingredient] * people;
    }
    return newRecipe;
}