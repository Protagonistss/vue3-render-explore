import { createRenderer } from "@vue/runtime-core";
import { Container, Graphics, Sprite, Texture } from "pixi.js";

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
      default:
        break;
    }
    return element;
  },

  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      default:
        el[key] = nextValue;
    }
  },

  createComment() {},

  parentNode() {},
  nextSibling() {},
  remove() {},

  insert(el, parent) {
    parent.addChild(el);
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
