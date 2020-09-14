// start
import {
  defineComponent,
  h,
  reactive,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import { game } from "../Game";
import { hitTestObject } from "../utils";

export default defineComponent({
  setup(_, { emit }) {
    const { planeInfo } = usePlane();

    // 对方
    const { enemyPlanes, moveEnemyPlanes } = useEnemyPlanes();

    const handleTicker = () => {
      moveEnemyPlanes();
      // 检测碰撞
      enemyPlanes.forEach((enemy) => {
        if (hitTestObject(enemy, planeInfo)) {
          // game over
          emit("changePage", "EndPage");
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });

    return {
      planeInfo,
      enemyPlanes,
    };
  },
  render(ctx) {
    const createEnemyPlanes = () => {
      return ctx.enemyPlanes.map((info) => {
        return h(EnemyPlane, { x: info.x, y: info.y });
      });
    };
    return h("Container", [
      h(Map),
      h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
      ...createEnemyPlanes(),
    ]);
  },
});

function useEnemyPlanes() {
  const enemyPlanes = reactive([
    { x: 10, y: 10, width: 308, height: 207 },
    { x: 100, y: 200, width: 308, height: 207 },
  ]);

  const moveEnemyPlanes = () => {
    enemyPlanes.forEach((enemy) => {
      enemy.y++;
    });
  };
  return { enemyPlanes, moveEnemyPlanes };
}

function usePlane() {
  const planeInfo = reactive({ x: 100, y: 500, width: 258, height: 364 });
  // 按键盘移动飞机
  const speed = 10;
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        console.log("arrow up");
        planeInfo.y -= speed;
        break;
      case "ArrowDown":
        planeInfo.y += speed;
        break;
      case "ArrowLeft":
        planeInfo.x -= speed;
        break;
      case "ArrowRight":
        planeInfo.x += speed;
        break;
      default:
        break;
    }
  });
  return { planeInfo };
}
