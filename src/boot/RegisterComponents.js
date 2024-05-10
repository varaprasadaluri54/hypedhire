import "@nanoandrew4/vue3-carousel-3d/dist/style.css"; // Import styles globally

import { boot } from "quasar/wrappers";
import { Carousel3dPlugin } from "@nanoandrew4/vue3-carousel-3d";
import { MotionPlugin } from "@vueuse/motion";

export default boot(async ({ app }) => {
  app.use(Carousel3dPlugin);
  app.use(MotionPlugin);
});
