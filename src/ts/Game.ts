import {
  Application, Container,Sprite
} from 'pixi.js';

import { preLoader } from './PreLoader';
import assets from './assets';
import { Emitter } from './Emitter';

export class Game {
    private stage: Container;

    private readonly app: Application;

    private isInitialized = false;

    private emitter: Emitter | undefined;

    constructor(app:Application) {
      this.app = app;
      this.stage = app.stage;

      

      preLoader(assets, () => {
        const sprite = new Sprite(getTexture("fountain")as Texture);
        sprite.scale.set(1)
       sprite.position.set(this.app.view.width/2,this.app.view.height/2);
        sprite.anchor.set(0.5);
         this.stage.addChild(sprite);

        this.isInitialized = true;
        this.emitter = new Emitter(1000, { scale: true });
        this.stage.addChild(this.emitter);
        this.emitter.start();
        this.emitter.x = this.app.view.width / 2;
        this.emitter.y = this.app.view.height / 2;
      });
      console.warn(this.app);
    }

    public update(delta:number):void {
      if (this.isInitialized && this.emitter) {
        this.emitter.update(delta);
      }
    }
}
