// Vertex shader placeholder
attribute vec3 position;
attribute vec2 uv;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec4 vColor;

void main() {
  vUv = uv;
  vColor = color;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
