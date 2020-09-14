// start
import { defineComponent, h } from "@vue/runtime-core";
import endPageImg from "../../assets/endPage.jpg";
import reStartBtnImg from "../../assets/restartBtn.png";

export default defineComponent({
  setup(props, { emit }) {
    const onClick = () => {
      emit("changePage", "GamePage");
    };
    return {
      onClick,
    };
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", { texture: endPageImg }),
      h("Sprite", {
        texture: reStartBtnImg,
        x: "228",
        y: "514",
        interactive: true,
        onClick: ctx.onClick,
      }),
    ]);
  },
});
