import Sprite from '../base/Sprite.js';


const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
const BIRD_IMG = new Image();
BIRD_IMG.src = 'images/birds.png'; 
const a = 9.8;

export default class Bird {
  constructor(ctx) {

    this.index = 0; // 用于绘制小鸟扇动翅膀
    this.speed = 10;
  }

  update(frame) {
    if (frame % 8 === 0) {
      this.index++;
    }
    if(this.index > 2) {
      this.index = 0;
    }
    
  }
  draw(ctx) {
    ctx.drawImage(
      BIRD_IMG,
      52.5*this.index,0,
      50,35,
      screenWidth / 6,
      screenHeight / 2.5,
      50,
      35,
    );
  }
}