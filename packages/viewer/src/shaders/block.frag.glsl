// Fragment shader placeholder
precision mediump float;

varying vec2 vUv;
varying vec4 vColor;

uniform sampler2D baseMap;

void main() {
  vec4 texColor = texture2D(baseMap, vUv);
  gl_FragColor = texColor * vColor;
}
