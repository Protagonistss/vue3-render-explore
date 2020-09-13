import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
  render() {
    const vnode = h("div");
    // v dom
    console.log(vnode);
  },
});
