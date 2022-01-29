import { createApp } from "vue";

import Footer from "./Footer.vue";

const placeFooter = (el) => {
  createApp(Footer).mount(el);
};

export default placeFooter;
