import MyButton from "./MyButton/index.js";
// import MyInput from "./MyInput/index";
import { version } from "../package.json";
import "./MyButton/index.scss";
// import "./MyInput/index.scss";
 
const components = [MyButton];
 
const install = function (app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { MyButton, install };
export default { version, install };

