import "./style.css";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const canvasW = canvas.width;
const canvasH = canvas.height;

const gl = canvas.getContext("webgl");

if (gl === null) {
  throw new Error(
    "Unable to initialize WebGL. Your browser or machine may not support it."
  );
}

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
