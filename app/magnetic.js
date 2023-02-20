import { distance, lerp, getMousePos } from './utils';
import { linkEnter, linkOut } from './animations';

let mouse = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

class Magnetic {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.text = this.DOM.el.querySelector('.button-text');
        this.DOM.textinner = this.DOM.el.querySelector('.button__text-inner');

        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1}
        };
        
        this.state = {
            hover: false
        };

        this.calculateSizePosition();   
        this.initEvents();
        requestAnimationFrame(() => this.render());
    }
    calculateSizePosition() {
        this.rect = this.DOM.el.getBoundingClientRect();
        this.distanceToTrigger = this.rect.width*0.8;
    }
    initEvents() {
        this.onResize = () => this.calculateSizePosition();
        window.addEventListener('resize', this.onResize);
    }
    render() {
        this.rect = this.DOM.el.getBoundingClientRect();
        const distanceMouseButton = distance(mouse.x+window.scrollX, mouse.y+window.scrollY, this.rect.left + this.rect.width/2, this.rect.top + window.scrollY + this.rect.height/2);

        let x = 0;
        let y = 0;

        if ( distanceMouseButton < this.distanceToTrigger ) {
            if ( !this.state.hover ) {
                this.enter();
            }
            x = (mouse.x + window.scrollX - (this.rect.left + this.rect.width/2))*.3;
            y = (mouse.y + window.scrollY - (this.rect.top + window.scrollY + this.rect.height/2))*.3;
        }
        else if ( this.state.hover ) {
            this.leave();
        }

        this.renderedStyles['tx'].current = x;
        this.renderedStyles['ty'].current = y;
        
        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.el.style.transform = `translate3d(${this.renderedStyles['tx'].previous}px, ${this.renderedStyles['ty'].previous}px, 0)`;
        this.DOM.text.style.transform = `translate3d(${-this.renderedStyles['tx'].previous*0.6}px, ${-this.renderedStyles['ty'].previous*0.6}px, 0)`;
        requestAnimationFrame(() => this.render());
    }
    enter() {
        this.state.hover = true;
        linkEnter(this.DOM.textinner);
    }
    leave() {
        this.state.hover = false;
        linkOut(this.DOM.textinner);
    }
}

const initMagnetic = () => {
    [...document.querySelectorAll('.button')].forEach(e => {
        new Magnetic(e);
    });
}

initMagnetic();

export { initMagnetic };