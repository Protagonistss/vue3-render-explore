import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./components/Circle";
export default defineComponent({
  render() {
    const vnode = h("rect", { x: 100, y: 100 }, [h(Circle)]);
    return vnode;
  },
});
