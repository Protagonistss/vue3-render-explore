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

  createText(text) {
    return new Text(text);
  },

  setElementText(node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },

  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },

  insert(el, parent) {
    parent.addChild(el);
  },

  parentNode() {},

  nextSibling() {},

  createComment() {},
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
