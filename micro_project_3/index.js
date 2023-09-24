// import foodData from "./food.json" assert { type: "json" }; this will work when my extension will index.mjs,because it will treated as es6
const sample = require ('./food.json');
// console.log(sample);

// task1-list all the food items
function allFoodItems(arr){
    arr.forEach((item)=>{
        console.log(item);
    });
}
allFoodItems(sample);

// task2-list all the food items with category vegetables
// function vegetables(arr){
//     return arr.filter(item=>item.category==='Vegetable');
// }
// console.log(vegetables(sample));
let vegetable=sample.filter(item=>item.category==='Vegetable')
console.log(vegetable);

// task3-list all the food items with category fruit
let fruit=sample.filter(item=>item.category==='Fruit')
console.log(fruit);

// task4-list all the food items with category protien
let protien=sample.filter(item=>item.category==='Protein')
console.log(protien);

// task5-list all the food items with category nuts
let nuts=sample.filter(item=>item.category==='Nuts')
console.log(nuts);

// task6-list all the food items with category grains
let grains=sample.filter(item=>item.category==='Grain')
console.log(grains);

// task7-list all the food items with category dairy
let dairy=sample.filter(item=>item.category==='Dairy')
console.log(dairy);

// task8-list all the food items with calorie above 100
let calAbove100=sample.filter(item=>item.calorie>100)
console.log(calAbove100);

// task9-list all the food items with calorie below 100
let calBelow100=sample.filter(item=>item.calorie<100)
console.log(calBelow100);

// task10-list all the food items with highest protien content to lowest
let highToLowProtein=sample.sort((a,b)=>b.protiens-a.protiens);
sample.forEach((item)=>{
    return highToLowProtein;
});
console.log(highToLowProtein);

// task11-list all the food items with lowest cab content to highest
let lowToHighCab=sample.sort((a,b)=>a.cab-b.cab);
sample.forEach((item)=>{
    return lowToHighCab;
});
console.log(lowToHighCab);

