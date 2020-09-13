import { createRenderer } from "@vue/runtime-core";
import { Application } from "pixi.js";
import App from "./src/App";
// render
const renderer = createRenderer({});

const game = new Application({
  width: 750,
  height: 1080,
});

console.log(game);

renderer.createApp(App).mount(game.stage);
