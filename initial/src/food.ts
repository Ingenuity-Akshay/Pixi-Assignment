import { Application, Graphics } from "pixi.js";
import { eat_and_grow, snake } from "./snake";
import{Game}from "./Game";

let score: number = 0;
let time: number = 20;
let can: Application;
let radius: number;
let scr = document.getElementById("score") as HTMLHeadingElement;
let timer = document.getElementById("timer") as HTMLHeadingElement;
export let x: number = 100;
export let y: number = 100;
export function food_Position(app: Application, radi: number) {

    radius = radi;
    x = 10 + Math.random() * (app.view.width - 10);
    y = Math.random() * app.view.height + 10;
    // console.log(x,y);

    return FOOD(app, radi);
}
export function FOOD(app: Application, radi: number): Graphics {
    can = app;
    scr.innerHTML = `SCORE : ${String(score)}`;
    timer.innerHTML = `Time Left : ${String(time)}`;
    let food = new Graphics();
    food.beginFill(0xff00ff);
    food.drawCircle(x, y, radi);
    food.endFill()
    return app.stage.addChild(food);
}
export function snake_eaten_food() {
    let dis = Math.sqrt(Math.pow(Math.abs(snake[0].x - x), 2) + Math.pow(Math.abs(snake[0].y - y), 2));
    if (dis < 25) {
        score++;
        timeUpdate();
        console.log("111")
        eat_and_grow();
        console.log("333")
        console.log("eaten");
        food_Position(can, radius);
       
    }
}
 export function timeUpdate(){
 time--;
 if(time<0){
     time=20;
    food_Position(can,radius);
 }
}
