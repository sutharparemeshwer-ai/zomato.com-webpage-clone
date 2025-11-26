gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content > *", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
});

gsap.from(".scroll-down", {
    opacity: 0,
    y: 5,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".scroll-down", {
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.from(".better-food-section h2, .better-food-section p, .better-food-section .stat", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".better-food-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    }
});

const foodImages = gsap.utils.toArray('.food-img');

const foodAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".better-food-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    }
});

foodAnimation
    .from(".food-burger", { x: -200, y: 100, opacity: 0, scale: 0.5, duration: 1 })
    .from(".food-pizza", { x: 200, y: -100, opacity: 0, scale: 0.5, duration: 1 }, "-=0.8")
    .from(".food-momos", { y: -200, opacity: 0, scale: 0.5, duration: 1 }, "-=0.8")
    .from(".food-leaf", { y: -200, opacity: 0, scale: 0.5, duration: 1 }, "-=0.8")
    .from(".food-tomato", { y: 200, opacity: 0, scale: 0.5, duration: 1 }, "-=0.8");

gsap.from(".feature-card", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".app-features-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    }
});

gsap.from(".phone-img", {
    scaleY: 0,
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".app-features-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    }
});
