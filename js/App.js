import DataBus from './DataBus';
import Background from './runtime/Background.js';
import Intro  from './runtime/Intro.js';
// import Bird from './runtime/Bird.js';
import Pipe from './runtime/Pipe.js';

let dataBus = null;
let bg = null;
let intro = null;
let bird = null;
let pipe1 = null;
let pipe2 = null;

let ctx = canvas.getContext('2d');


const start = () => {

  dataBus = new DataBus();
  bg = new Background(ctx);
  // intro = new Intro(ctx);
  pipe1 = new Pipe(ctx,320);

  loop();
};

/**
 * 开始下一次动画
 */
const startNextAnimation = () => {
  dataBus.aniId = window.requestAnimationFrame(loop, canvas);
};

/**
 * 停止动画
 */
const stopAnimation = () => {
  if (dataBus.aniId) {
    window.cancelAnimationFrame(dataBus.aniId);
  }
};

/**
 * 帧循环逻辑
 */
const loop = () => {
  dataBus.frame ++ ;
  update(dataBus.frame);
  render();
  startNextAnimation();
  // if(dataBus.frame % 30 === 0) {
  //   pipe = new Pipe();
  // }
};

/**
 * 更新逻辑
 */
const update = (frame) => {
  bg.update();
  // intro.update(frame);
  pipe1.update(frame);



};

/**
 * 绘制逻辑
 */
const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bg.render(ctx);
  // intro.render(ctx);
  pipe1.render(ctx);


};

/**
 * 游戏主函数
 * @type {{start()}}
 */
const App = {
  start,
};

export default App;
