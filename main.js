import App from "./src/App";
import { createApp } from "./src/runtime-canvas";
import { getRootContainer } from "./src/Game";
// render
createApp(App).mount(getRootContainer());
