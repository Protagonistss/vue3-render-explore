import { defineComponent, h, toRefs } from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";

export default defineComponent({
  props: ["x", "y"],
  setup(props, { emit }) {
    // 响应式丢失的问题
    const { x, y } = toRefs(props);
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        console.log("shot");
        emit("attack", {
          x: props.x + 90,
          y: props.y + 30,
        });
      }
    });
    return {
      x,
      y,
    };
  },
  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Sprite", { texture: planeImg }),
    ]);
  },
});
