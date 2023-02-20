import gsap from './gsap/gsap.min';
import { lerp, getMousePos } from './utils';

let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

class Cursor {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.el.style.opacity = 0;
        this.DOM.circleInner = this.DOM.el.querySelector('.cursor-inner');
        this.bounds = this.DOM.el.getBoundingClientRect();

        this.onResize = () => {
            this.bounds = this.DOM.el.getBoundingClientRect();
        };
        window.addEventListener('resize', this.onResize);

        this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.16 },
            ty: { previous: 0, current: 0, amt: 0.16 },
            radius: { previous: 30, current: 30, amt: 0.16 }
        };

        this.onMouseMoveEv = () => {
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;
            gsap.to(this.DOM.el, { duration: 3, delay: 1, ease: 'Expo.easeOut', opacity: 1 });
            requestAnimationFrame(() => this.render());
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);

        this.filterId = '#filter';
        this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`);
        this.primitiveValues = { turbulence: 0 };
        this.createNoiseTimeline();
    }
    enter() {
        this.renderedStyles['radius'].current = 60;
        this.tl.restart();
    }
    leave() {
        this.renderedStyles['radius'].current = 30;
        this.tl.progress(1).kill();
    }
    hide() {
        this.renderedStyles['radius'].current = 0;
    }
    createNoiseTimeline() {
        this.tl = gsap.timeline({
            paused: true,
            onStart: () => {
                this.DOM.circleInner.style.filter = `url(${this.filterId}`;
            },
            onUpdate: () => {
                this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence);
            },
            onComplete: () => {
                this.DOM.circleInner.style.filter = 'none';
            }
        })
            .to(this.primitiveValues, {
                duration: 0.4,
                ease: 'Expo.easeOut',
                startAt: { turbulence: 0 },
                turbulence: 0.5
            });
    }
    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`;
        this.DOM.circleInner.setAttribute('r', this.renderedStyles['radius'].previous);
        requestAnimationFrame(() => this.render());
    }
}

window.addEventListener('load', () => {
    const cursor = new Cursor(document.querySelector('.cursor'));

    [...document.querySelectorAll('a')].forEach(link => {
        if(link.classList.contains('cursor__hide')) {
            link.addEventListener('mouseenter', () => cursor.hide());
            link.addEventListener('mouseleave', () => cursor.leave());
        } else {
            link.addEventListener('mouseenter', () => cursor.enter());
            link.addEventListener('mouseleave', () => cursor.leave());
        }      
    });
});




