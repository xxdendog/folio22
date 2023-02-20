import * as THREE from 'three';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
import postvertex from './shaders/post-vertex.glsl';
import postfragment from './shaders/post-fragment.glsl';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

class Canvas {
    constructor() {
        this.scene = new THREE.Scene();
        this.container = document.getElementById('canvas');
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.camera = new THREE.PerspectiveCamera(70, this.width / this.height, 100, 2000);
        this.camera.position.z = 600;
        this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        this.images = [...document.querySelectorAll('img')];
        this.mouse = new THREE.Vector2();
        this.followMouse = new THREE.Vector2();
        this.prevMouse = new THREE.Vector2();
        this.speed = 0;
        this.targetSpeed = 0;

        this.addImages();
        this.setPositions();
        this.resize();
        this.mouseMovement();
        this.composerPass();
        this.render();
    }
    addImages() {
        this.materials = [];
        this.material = new THREE.ShaderMaterial({
            uniforms: {
                uImage: { value: 0 },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [0, 0] },
                uViewportSizes: { value: [this.width, this.height] },
                uStrength: { value: 0 },
            },
            fragmentShader: fragment,
            vertexShader: vertex,
            transparent: true
        })

        this.imagesStore = this.images.map(img => {
            let bounds = img.getBoundingClientRect();
            let geometry = new THREE.PlaneBufferGeometry(1, 1, 10, 10);
            let texture = new THREE.TextureLoader().load(img.src, () => {
                material.uniforms.uPlaneSizes.value = [bounds.width, bounds.height];
                material.uniforms.uImageSizes.value = [texture.image.width, texture.image.height];
            });
            texture.minFilter = THREE.LinearFilter;

            let material = this.material.clone();
            this.materials.push(material);
            material.uniforms.uImage.value = texture;

            let mesh = new THREE.Mesh(geometry, material);
            mesh.scale.set(bounds.width, bounds.height, 1);
            this.scene.add(mesh);

            return {
                img: img,
                mesh: mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height,
            }
        })
    }
    setPositions() {
        this.imagesStore.forEach(e => {
            e.mesh.position.y = smoothScroll.scroll.instance.scroll.y - e.top + this.height / 2 - e.height / 2;
            e.mesh.position.x = e.left - this.width / 2 + e.width / 2;
        })
    }
    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.fov = 2 * Math.atan((this.height / 2) / 600) * (180 / Math.PI);
        this.camera.updateProjectionMatrix();

        this.imagesStore.forEach(img => {
            let bounds = img.img.getBoundingClientRect();
            img.top = bounds.top + smoothScroll.scroll.instance.scroll.y;
            img.left = bounds.left;
            img.width = bounds.width;
            img.height = bounds.height;
            img.mesh.scale.set(bounds.width, bounds.height, 1);

            img.mesh.material.uniforms.uPlaneSizes.value = [img.width, img.height];
            img.mesh.material.uniforms.uImageSizes.value = [img.img.naturalWidth, img.img.naturalHeight];
        })
        this.setPositions();
        window.addEventListener('resize', this.resize.bind(this));
    }
    composerPass() {
        this.composer = new EffectComposer(this.renderer);
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(this.renderPass);

        this.myEffect = {
            uniforms: {
                "tDiffuse": { value: null },
                "resolution": { value: new THREE.Vector2(1., window.innerHeight / window.innerWidth) },
                "uMouse": { value: new THREE.Vector2(-10, -10) },
                "uVelo": { value: 0 },
                "uStrength": { value: 0 },
            },
            vertexShader: postvertex,
            fragmentShader: postfragment
        }
        this.customPass = new ShaderPass(this.myEffect);
        this.customPass.renderToScreen = true;
        this.composer.addPass(this.customPass);
    }
    mouseMovement() {
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / window.innerWidth);
            this.mouse.y = 1. - (event.clientY / window.innerHeight);
        }, false)
    }
    getSpeed() {
        this.speed = Math.sqrt((this.prevMouse.x - this.mouse.x) ** 2 + (this.prevMouse.y - this.mouse.y) ** 2);
        this.targetSpeed -= 0.1 * (this.targetSpeed - this.speed);
        this.followMouse.x -= 0.1 * (this.followMouse.x - this.mouse.x);
        this.followMouse.y -= 0.1 * (this.followMouse.y - this.mouse.y);

        this.prevMouse.x = this.mouse.x;
        this.prevMouse.y = this.mouse.y;
    }
    render() {
        this.getSpeed();

        this.previousScroll = this.currentScroll;
        this.currentScroll = smoothScroll.scroll.instance.scroll.y;

        if (Math.round(this.currentScroll) !== Math.round(this.previousScroll)) {
            this.speed = this.currentScroll - this.previousScroll;
            this.speed = Math.round((this.speed) * 100) / 100;
            this.setPositions();
        }

        this.materials.forEach(m => {
            m.uniforms.uStrength.value = this.speed / -14;
        })
        
        this.targetSpeed *= 0.999;

        this.customPass.uniforms.uVelo.value = Math.min(this.targetSpeed, 0.05);
        this.customPass.uniforms.uMouse.value = this.followMouse;
        this.customPass.uniforms.uStrength.value = this.speed / -14;

        this.composer.render();
        window.requestAnimationFrame(this.render.bind(this));
    }
}

let canvas;

window.addEventListener('load', () => {
    canvas = new Canvas();
});

export { canvas };

