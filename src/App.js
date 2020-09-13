import { computed, defineComponent, h, ref } from "@vue/runtime-core";
import StartPage from "./page/StartPage";
import GamePage from "./page/GamePage";
export default defineComponent({
  setup() {
    const currentPageName = ref("StartPage");
    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      } else if (currentPageName.value === "GamePage") {
        return GamePage;
      }
    });
    return {
      currentPageName,
      currentPage,
    };
  },
  render(ctx) {
    return h("Container", [
      h(ctx.currentPage, {
        onChangePage(page) {
          ctx.currentPageName = page;
          console.log("page", page);
        },
      }),
    ]);
    // return h("Container", [h(GamePage)]);
  },
});
