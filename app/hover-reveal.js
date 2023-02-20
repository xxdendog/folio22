import gsap from './gsap/gsap.min';
import { map, lerp, clamp, getMousePos2 } from './utils';
import { overlayOut, overlayIn } from './animations';

let mousepos = {x: 0, y: 0};
let mousePosCache = mousepos;
let direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};

window.addEventListener('mousemove', ev => mousepos = getMousePos2(ev));

class hoverReveal {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.reveal = this.DOM.el.querySelector('.hover__reveal');
        this.DOM.revealInner = this.DOM.el.querySelector('.hover__reveal__inner');
        this.DOM.revealImage = this.DOM.el.querySelector('.hover__reveal__img');
        this.DOM.revealOverlay = this.DOM.el.querySelector('.overlay__path');

        this.animatableProperties = {  
            tx: {previous: 0, current: 0, amt: 0.08},
            ty: {previous: 0, current: 0, amt: 0.08},
            rotation: {previous: 0, current: 0, amt: 0.08},
            brightness: {previous: 1, current: 1, amt: 0.08}
        };
        this.initEvents();
    }
    initEvents() {
        this.mouseEnter = () => {
            this.showImage();
            this.loopRender();
            this.firstRAFCycle = true;
        };
        this.mouseLeave = () => {
            this.stopRendering();
            this.hideImage();
        };
        this.disable = () => {
            this.stopRendering();
            this.hideImage();
            this.DOM.el.removeEventListener('mouseenter', this.mouseEnter);
            this.DOM.el.removeEventListener('mouseleave', this.mouseLeave);
        }
        this.DOM.el.addEventListener('mouseenter', this.mouseEnter);
        this.DOM.el.addEventListener('mouseleave', this.mouseLeave);
        this.DOM.el.addEventListener('click',  this.disable);
    }
    showImage() {
        gsap.killTweensOf(this.DOM.revealInner);
        gsap.killTweensOf(this.DOM.revealImage);

        overlayOut(this.DOM.revealOverlay, '0', '1.25');
        
        this.tl = gsap.timeline({
            onStart: () => {
                this.DOM.reveal.style.opacity = 1;
            }
        })
        .to(this.DOM.revealInner, {
            opacity: 1,
            duration: 0.2,
        })
        .to(this.DOM.revealImage, {
            startAt: {
                yPercent: -50,
            },
            yPercent: 0,
            duration: 1.5,
            ease: 'power4',
        }, '<');
    }
    hideImage() {
        gsap.killTweensOf(this.DOM.revealInner);
        gsap.killTweensOf(this.DOM.revealImage);

       // overlayIn(this.DOM.revealOverlay, '2.5');

        this.tl = gsap.timeline({
            onComplete: () => {
                this.DOM.reveal.style.opacity = 0;
            }
        })
        .to(this.DOM.revealInner, {
            opacity: 0,
            duration: .2,
        })
        // .to(this.DOM.revealImage, {
        //     yPercent: -50,
        //     duration: 1.5,
        //     ease: 'power4',
        // }, '<');
    }
    loopRender() {
        if ( !this.requestId ) {
            this.requestId = requestAnimationFrame(() => this.render());
        }
    }
    stopRendering() {
        if ( this.requestId ) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    }
    calcBounds() {
        this.bounds = {
            el: this.DOM.el.getBoundingClientRect(),
            reveal: this.DOM.reveal.getBoundingClientRect()
        };
    }
    render() {
        this.requestId = undefined;
        
        if ( this.firstRAFCycle ) {
            this.calcBounds();
        }

        const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
        direction = {x: mousePosCache.x-mousepos.x, y: mousePosCache.y-mousepos.y};
        mousePosCache = {x: mousepos.x, y: mousepos.y};

        this.animatableProperties.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width/2;
        this.animatableProperties.ty.current = Math.abs(mousepos.y - this.bounds.el.top - window.scrollY) - this.bounds.reveal.height/2;
       
        this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX,0,100,0,direction.x < 0 ? 60 : -60);
        this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : map(mouseDistanceX,0,100,1,4);

        this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : lerp(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
        this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : lerp(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
        this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : lerp(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
        this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : lerp(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt);
        
        gsap.set(this.DOM.reveal, {
            x: this.animatableProperties.tx.previous,
            y: this.animatableProperties.ty.previous,
            rotation: this.animatableProperties.rotation.previous,
            filter: `brightness(${this.animatableProperties.brightness.previous})`
        });
        this.firstRAFCycle = false;
        this.loopRender();
    }
}

const initHoverReveal = () => {
    [...document.querySelectorAll('.reveal')].forEach(e => {
        new hoverReveal(e);
    });
    
}

initHoverReveal();

export { initHoverReveal };