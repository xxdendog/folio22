import gsap from './gsap/gsap.min';
import trigger from './gsap/gsap.scrolltrigger.min';
import locomotiveScroll from 'locomotive-scroll';

export default smoothScroll = new locomotiveScroll({
    el: document.querySelector('.smooth__scroll'),
    smooth: true,
    touchMultiplier: 3,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    }
});

smoothScroll.on('scroll', trigger.update);

trigger.scrollerProxy('.smooth__scroll', {
    scrollTop(value) {
        return arguments.length ? smoothScroll.scrollTo(value, 0, 0) : smoothScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    fixedMarkers: true,
    pinType: document.querySelector('.smooth__scroll').style.transform ? 'transform' : 'fixed'
});

trigger.addEventListener('refresh', () => smoothScroll.update());
trigger.refresh();

const initScrollListener = () => {
    smoothScroll.on('scroll', () => {

        if (!document.querySelector('#target')) {
            let scrollY = smoothScroll.scroll.instance.scroll.y;
            let menu = document.querySelector('.menu');
    
            if (scrollY > 10) {
                menu.classList.add('hide');
            } else {
                menu.classList.remove('hide');
            }
        }
    });
}

initScrollListener();

export { initScrollListener };