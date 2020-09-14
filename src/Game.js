import { Application } from "pixi.js";

export const gameWidth = 750;
export const gameHeight = 800;

export const game = new Application({
  width: gameWidth,
  height: gameHeight,
});
document.body.append(game.view);

export function getRootContainer() {
  return game.stage;
}
