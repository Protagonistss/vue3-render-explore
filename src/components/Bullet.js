import { defineComponent, h, toRefs } from "@vue/runtime-core";
import bulletImg from "../../assets/bullet.png";

export default defineComponent({
  props: ["x", "y"],
  setup(props) {
    // 响应式丢失的问题
    const { x, y } = toRefs(props);
    return {
      x,
      y,
    };
  },
  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Sprite", { texture: bulletImg }),
    ]);
  },
});
