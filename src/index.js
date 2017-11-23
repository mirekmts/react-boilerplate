import runtime from "offline-plugin/runtime";
import "./js/app";
import "./sass/style.sass";

if (process.env.NODE_ENV === "production") {
  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}

console.info(`%cVersion: ${process.env.VERSION}`, "color: #00F; font-weight: bold");
