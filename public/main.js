import "./style.css";
import { Elm } from "../src/Main.elm";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

const root = document.querySelector("#app div");
const app = Elm.Main.init({ node: root });
window.addEventListener("load", () => {
  const term = new Terminal({ cursorBlink: true });
  const fitAddon = new FitAddon();
  term.loadAddon(fitAddon);
  term.open(document.getElementById("terminal"));
  fitAddon.fit();
  term.onData;
  term.writeln("\x1b[1;32mWelcome to Hammurabi!");
  term.write("> ");
});
