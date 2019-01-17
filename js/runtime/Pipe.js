// import Sprite from '../base/Sprite.js';

const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
const PIPE_DOWN = new Image();
PIPE_DOWN.src = 'images/pipe_down.png';
const PIPE_UP = new Image();
PIPE_UP.src = 'images/pipe_up.png';
const [PIPE_WIDTH, PIPE_MOVE_STEP] = [52, 2];

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export default class Pipe {
  constructor(ctx,x) {
    this.gap = 130;
    this.pipeDownHeight = getRandomIntInclusive(50, 250);
    this.left = x; // 管子1最开始在屏幕右侧
    this.w = x;
  }
  update(frame,x) {
    this.left -= PIPE_MOVE_STEP;
    if (this.left < -PIPE_WIDTH) {
      this.left = this.w;
      this.pipeDownHeight = getRandomIntInclusive(50, 250);
    }
  }
  render(ctx) {
    ctx.drawImage(
      PIPE_DOWN,
      0,
      320 - this.pipeDownHeight,
      PIPE_WIDTH,
      this.pipeDownHeight,
      this.left,
      0,
      PIPE_WIDTH,
      this.pipeDownHeight,
    );
    ctx.drawImage(
      PIPE_UP,
      0,
      0,
      PIPE_WIDTH,
      456 - this.gap - this.pipeDownHeight,
      this.left,
      this.pipeDownHeight + this.gap,
      PIPE_WIDTH,
      456 - this.gap - this.pipeDownHeight,
    );
  }
};