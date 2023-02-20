uniform sampler2D uImage;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
varying vec2 vUv;

void main()	{
    vec2 ratio = vec2(
        min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
        min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
    );
 
    vec2 vUv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    gl_FragColor = vec4(1.,1.,1.,0.);
    gl_FragColor = texture2D(uImage, vUv );
}