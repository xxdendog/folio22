varying vec2 vUv;
uniform float uStrength;
uniform vec2 uViewportSizes;

void main() {
  float PI = 3.1415925;
  vec4 newposition = modelViewMatrix * vec4(position, 1.0);
  newposition.y = newposition.y + ((sin(uv.x * PI) * uStrength * 1.) * 10.125);
  //newposition.z += sin(newposition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength*10.;
  vUv = uv;
  gl_Position = projectionMatrix * newposition;
}





