import { createRenderer } from "@vue/runtime-core";
import { Graphics } from "pixi.js";

const renderer = createRenderer({
  createElement(type) {
    let element;
    if (type === "rect") {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 500, 500);
      element.endFill();
    } else if (type === "circle") {
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }
    return element;
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  patchProp(el, key, prevValue, nextValue) {
    if (key === "x") {
      el.x = nextValue;
    }
    if (key === "y") {
      el.y = nextValue;
    }
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
