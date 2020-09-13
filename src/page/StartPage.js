// start
import { defineComponent, h } from "@vue/runtime-core";
import StartPageImg from "../../assets/startPage.jpg";
import StartBtnImg from "../../assets/startBtn.png";

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
    // <div><img src="xxx"></div>
    return h("Container", [
      h("Sprite", { texture: StartPageImg }),
      h("Sprite", {
        texture: StartBtnImg,
        x: "228",
        y: "514",
        interactive: true,
        onClick: ctx.onClick,
      }),
    ]);
  },
});
