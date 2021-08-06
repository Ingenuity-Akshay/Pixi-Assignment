import { Application, Container, Graphics, Resource, Sprite, Text, Texture, Ticker } from "pixi.js";

import { preloader } from "./preloader";
import list from './assets';
import { FOOD, food_Position, snake_eaten_food } from "./food";
import { drawSnake, gameOver, addBlock, move } from "./snake";
import { selectTexture } from "./texture";
export class Game {
    app: Application;
    stage: Container;
    fps: Text;
    image1: Sprite | undefined;
    index: number;
    food: Graphics | undefined;
    food_radi: number;
    snake: Container | undefined;
    cc: number | undefined;
    direction:string|undefined;
  
    constructor(app: Application) {
        this.index = 1;
        this.app = app;
        this.stage = app.stage;
        this.food_radi = 10;
        this.fps = this.createText("", 0, 0, 0);
        preloader(list, () => {
            
            this.food = FOOD(this.app, this.food_radi)
    
            console.log(this.snake);
            
        });
    }
    events(e: KeyboardEvent) {
        console.log(e);
      
        if (this.cc) {
            clearInterval(this.cc);
        }
        if (e.code == 'ArrowLeft') {
            this.direction='left';
            this.snake?.destroy();
            // this.snake=move_L();
            addBlock(-30,0);
            this.cc = Number(setInterval(() => move(), 200));
            // this.cc = Number(setInterval(() => move_L(), 400));
        }
        if (e.code == 'ArrowRight') {
            this.direction='right';
            this.snake?.destroy();
            // this.snake=move_R();
            addBlock(30,0);
            this.cc = Number(setInterval(() => move(), 200));
            // this.cc = Number(setInterval(() => move_R(), 400));
        }
        if (e.code == 'ArrowDown') {
            this.direction='down';
            this.snake?.destroy();
            // this.snake=move_D();
            addBlock(0,30);
            this.cc = Number(setInterval(() => move(), 200));
            // this.cc = Number(setInterval(() => move_D(), 400));
        }
        if (e.code == 'ArrowUp') {
            this.direction='up';
            this.snake?.destroy();
            // this.snake=move_U();
            addBlock(0,-30);
            this.cc = Number(setInterval(() => move(), 200));
            // this.cc = Number(setInterval(() => move_U(), 400));
        }
        

    }

    test() {
        
        console.log("test called");
        this.createGameOver();
    }
    createGameOver(): Text | undefined {
        if (gameOver()) {
            this.app.ticker.stop();
            let text = new Text("GAMEOVER");
            text.x = this.app.view.width / 2;
            text.y = this.app.view.height / 2;
            text.anchor.set(0.5);
            console.log(text);
            return this.stage.addChild(text);
        }
    }
    createText(entry: string, x: number, y: number, a: number): Text {
        let text: Text = new Text(entry);
        text.position.set(x, y);
        text.anchor.set(a);
        return this.stage.addChild(text);
    }
    createSprite(texture: Texture<Resource>, x: number, y: number): Sprite {
        let img = Sprite.from(texture);
        img.position.set(x, y);
        img.anchor.set(0.5);
        return this.stage.addChild(img);
    }
    animate() {
        this.fps.text = Ticker.shared.FPS.toFixed(0);
      

        if(this.food){
            this.food.destroy();
            this.food = FOOD(this.app,this.food_radi);
        }
        
        if (this.snake) {
            this.snake.destroy();
        }
        this.snake = drawSnake(this.app);


        this.createGameOver();

        if (this.food)
            snake_eaten_food();
    }
}