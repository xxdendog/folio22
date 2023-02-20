varying vec2 vUv;
uniform vec2 resolution;
uniform vec2 uMouse;
uniform float uVelo;
uniform float uStrength;
uniform sampler2D tDiffuse;

float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
    uv -= disc_center;
    uv*=resolution;
    float dist = sqrt(dot(uv, uv));
    return smoothstep(disc_radius+border_size*2., disc_radius-border_size, dist);
}
        
float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
        
float remap(float value, float inMin, float inMax, float outMin, float outMax) {
    return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);
}
        
float hash12(vec2 p) {
    float h = dot(p,vec2(127.1,311.7));	
    return fract(sin(h)*43758.5453123);
}
        
vec2 hash2d(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx+19.19);
    return fract((p3.xx+p3.yz)*p3.zy);
}

void main()	{
    vec2 newUV = vUv;
    vec4 color = vec4(1.,0.,0.,1.);
                
    // float c = circle(newUV, uMouse, 0.0, 0.2);
    // float r = texture2D(tDiffuse, newUV.xy += c * (uVelo * .5)).x;
    // float g = texture2D(tDiffuse, newUV.xy += c * (uVelo * .525)).y;
    // float b = texture2D(tDiffuse, newUV.xy += c * (uVelo * .55)).z;
    // float a = texture2D(tDiffuse, newUV.xy += c * (uVelo * .55)).a;
    // color = vec4(r, g, b, a);
            
    // float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.6)*40.*uVelo;
    // vec2 offsetVector = normalize(uMouse - vUv);
    // vec2 warpedUV = mix(vUv, uMouse, c * 0.2); //power
    // color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);
            
    float hash = hash12(vUv*10.);
    float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.01)*10.*uVelo;
    vec2 offsetVector = normalize(uMouse - vUv);
    vec2 warpedUV = vUv + vec2(hash - 0.5)*c; //power
    float area = smoothstep(vUv.y,0.,0.777);
    warpedUV.y -= (hash * abs(uStrength)/1.)*1.*area/1.;
    color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);
    
    gl_FragColor = color;
}