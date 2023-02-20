import barba from '@barba/core';

import { initAnimation, overlayIn } from './animations';
import { initScrollListener } from './scroll';
import { initHoverReveal } from './hover-reveal';
import { initMagnetic } from './magnetic';
import { canvas } from './canvas';


barba.init({
    transitions: [{
        name: 'case',
        from: {
            namespace: ['from-case']
        },
        leave(data) {
            return gsap.timeline()
                .from(data.current.container.querySelectorAll('.active .s__char:nth-child(odd)'), {
                    yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                    duration: .7,
                    ease: 'easing',
                    stagger: 0.04
                })
                .from(data.current.container.querySelectorAll('.active .s__char:nth-child(even)'), {
                    yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                    duration: .7,
                    ease: 'easing',
                    stagger: 0.04
                }, '<+.2')
                .from(data.current.container.querySelectorAll('.active .case__description .s__line'), {
                    yPercent: 100,
                    duration: 1,
                    ease: 'easing'
                }, '<+1')
                .progress(1)
                .timeScale(2)
                .reverse();
        },
        beforeLeave(data) {
            smoothScroll.destroy();
            const e = data.current.container.querySelector('.overlay__path');
            overlayIn(e);
        },
        enter() {
            smoothScroll.init();
        }
    },
    {
        name: 'info',
        from: {
            namespace: ['from-info']
        },
        leave(data) {
            return gsap.timeline()
                .from(data.current.container.querySelectorAll('.normal .s__char:nth-child(odd)'), {
                    yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                    duration: .7,
                    ease: 'easing',
                    stagger: 0.04
                }, '<+.8')
                .from(data.current.container.querySelectorAll('.normal .s__char:nth-child(even)'), {
                    yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                    duration: .7,
                    ease: 'easing',
                    stagger: 0.04
                }, '<+.2')
                .progress(1)
                .timeScale(2)
                .reverse();
        },
        beforeLeave(data) {
            smoothScroll.destroy();
            const e = data.current.container.querySelector('.overlay__path');
            overlayIn(e);
        },
        enter() {
            smoothScroll.init();
        }
    }
]
});
barba.hooks.after((data) => {
    smoothScroll.update();
    initScrollListener();
    initAnimation();
    
    canvas.imagesStore.forEach(img => {
        canvas.scene.remove(img.mesh);
    })
    canvas.images = [...document.querySelectorAll('img')];
    canvas.addImages();
    canvas.setPositions();

    initHoverReveal();
    initMagnetic();
    document.querySelector('.menu').classList.remove('hide');

    if (document.querySelector('.about__header')) {
        document.querySelector('body').classList.add('page__about');
    } else {
        document.querySelector('body').classList.remove('page__about');
    }
});