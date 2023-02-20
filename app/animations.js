import gsap from './gsap/gsap.min';
import customEase from './gsap/gsap.customease.min';
import splitText from './gsap/gsap.splittext.min';

customEase.create('easing', '.13, 1, .32, 1');

const linkEnter = e => {
    let el = e.querySelector('span');
    gsap.killTweensOf(el);

    gsap.timeline()
        .to(el, 0.15, {
            ease: 'Power2.easeIn',
            opacity: 0,
            y: '-20%'
        })
        .to(el, 0.2, {
            ease: 'easing',
            opacity: 1,
            startAt: { y: '100%' },
            y: '0%'
        });
};

const linkOut = e => {
    let el = e.querySelector('span');
    gsap.killTweensOf(el);

    gsap.timeline()
        .to(el, 0.15, {
            ease: 'Power2.easeIn',
            opacity: 0,
            y: '20%'
        })
        .to(el, 0.2, {
            ease: 'easing',
            opacity: 1,
            startAt: { y: '-100%' },
            y: '0%'
        });
};

[...document.querySelectorAll('.link__hover')].forEach(link => {
    link.addEventListener('mouseenter', () => linkEnter(link));
    link.addEventListener('mouseleave', () => linkOut(link));
});

const overlayOut = (e, delay = 0, timeScale = 1) => {
    gsap.timeline()
        .set(e, {
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
        })
        .to(e, {
            duration: 0.435,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
        }, '<+' + delay)
        .to(e, {
            duration: 1.45,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        }).timeScale(timeScale);
}

const overlayIn = (e, timeScale = 1) => {
    gsap.timeline()
        .set(e, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        }, '<')
        .to(e, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
        }, '<')
        .to(e, {
            duration: 0.3,
            ease: 'power2.out',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
        }).timeScale(timeScale);
}

const wrap = (e) => {
    document.querySelectorAll(e).forEach(function (el) {
        el.outerHTML = '<div style="overflow:hidden">' + el.outerHTML + '</div>';
    });
}

const initMenu = () => {
    gsap.timeline({
        delay: 1.1
    })
        .from('.menu .link__hover', {
            opacity: 0, duration: 2, stagger: 0.1
        });
}

const initAnimation = () => {

    new splitText('.split__chars', { type: 'words, chars', charsClass: 's__char', wordsClass: 's__word' });
    new splitText('.split__lines', { type: 'lines', linesClass: 's__line' });
    wrap('.wrap__overflow .s__line');

    if (document.querySelector('.overlay')) {
        const overlayPath = document.querySelector('.overlay__path');
        overlayOut(overlayPath, '.7');

        gsap.timeline({
            delay: .7
        })
            .from(document.querySelectorAll('#canvas'), {
                yPercent: -50,
                duration: 1.885,
                ease: 'power4',
            }, '<')
            .from(document.querySelectorAll('#canvas'), {
                opacity: 0,
                duration: 0.1,
                ease: 'power4',
            }, '<')
    }

    gsap.utils.toArray('.case, .next__case').forEach(function (e) {

        gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth__scroll',
                trigger: e,
                start: 'top 50%',
                end: 'bottom 50%',
                toggleActions: 'play reverse play reverse',
                onToggle: ({ animation }) => {
                    let timeScale = animation.reversed() ? -3 : 1;
                    animation.timeScale(timeScale);
                    e.classList.toggle("active");
                }
            }
        })
            .from(e.querySelectorAll('.s__char:nth-child(odd)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.3')
            .from(e.querySelectorAll('.s__char:nth-child(even)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.2')
            .from(e.querySelectorAll('.case__description .s__line'), {
                yPercent: -100,
                duration: 1,
                ease: 'easing',
            }, '<+.2')
            .to(e.querySelectorAll('.title'), {
                pointerEvents: 'all'
            }, '<');
    });

    gsap.utils.toArray('.about__header').forEach(function (e) {

        gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth__scroll',
                trigger: e,
                start: 'top bottom',
                end: 'bottom 30%',
            }
        })
            .from(e.querySelectorAll('.normal .s__char:nth-child(odd)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.8')
            .from(e.querySelectorAll('.normal .s__char:nth-child(even)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.2')
            .from(e.querySelectorAll('.italic .s__char'), {
                yPercent: -20,
                opacity: 0,
                duration: 1.5,
                ease: 'easing',
                stagger: 0.04
            }, '<+.3')
            .from(e.querySelectorAll('.about__description .s__line'), {
                yPercent: 100,
                duration: 1,
                ease: 'easing',
            }, '<+.1')
            .from(e.querySelectorAll('.scroll__arrow svg'), {
                opacity: 0,
                duration: 1,
                ease: 'easing'
            }, '<+.1');

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (!isSafari) {
            let feTurbulence = document.querySelector(`#filter > feTurbulence`);
            let primitiveValues = { turbulence: 0 };

            gsap.timeline({
                onStart: () => {
                    e.querySelector('.italic').style.filter = 'url(#filter)';
                },
                onUpdate: () => {
                    feTurbulence.setAttribute('baseFrequency', primitiveValues.turbulence);
                },
                onComplete: () => {
                    e.querySelector('.italic').style.filter = 'none';
                },
                scrollTrigger: {
                    scroller: '.smooth__scroll',
                    trigger: e,
                    start: 'top bottom',
                    end: 'bottom 30%',
                }
            })
                .to(primitiveValues, {
                    duration: 0.4,
                    ease: 'easing',
                    startAt: { turbulence: 0 },
                    turbulence: 0.5
                }, '<+1.2');
        }
    });

    gsap.utils.toArray('.about__info').forEach(function (e) {

        gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth__scroll',
                trigger: e,
                start: 'top 70%',
                end: 'bottom top',
            }
        })
            .from(e.querySelectorAll('.text__l .s__line'), {
                yPercent: 100,
                duration: 1,
                ease: 'easing',
            }, '<+.2')
            .from(e.querySelectorAll('.about__awards__description .s__line'), {
                yPercent: 100,
                duration: 1,
                ease: 'easing',
            }, '<+.4')
            .from(e.querySelectorAll('.awards__item'), {
                yPercent: 30,
                opacity: 0,
                duration: 1,
                ease: 'easing',
                stagger: 0.08
            }, '<');
    });

    gsap.utils.toArray('.contact').forEach(function (e) {

        gsap.timeline({
            scrollTrigger: {
                scroller: '.smooth__scroll',
                trigger: e,
                start: 'top bottom',
                end: 'bottom 30%',
                toggleActions: 'play reverse play reverse',
                onToggle: ({ animation }) => {
                    let timeScale = animation.reversed() ? -3 : 1;
                    animation.timeScale(timeScale);
                },
            }
        })
            .from(e.querySelectorAll('.title .s__char:nth-child(odd)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.38')
            .from(e.querySelectorAll('.title .s__char:nth-child(even)'), {
                yPercent: i => i % 2 === 0 ? gsap.utils.random([100, -100]) : gsap.utils.random([100, -100]),
                duration: .7,
                ease: 'easing',
                stagger: 0.04
            }, '<+.2')
            .from(e.querySelectorAll('.description .s__line'), {
                yPercent: 100,
                duration: 1,
                ease: 'easing'
            }, '<+.3')
            .from(e.querySelectorAll('.button'), {
                opacity: 0,
                duration: 2.5,
                ease: 'easing'
            }, '<+.35');
    });
}

window.addEventListener('load', () => {
    initAnimation();
    initMenu();
});

export { linkEnter, linkOut, initAnimation, overlayIn, overlayOut };

