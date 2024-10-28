// Animaciones con GSAP
document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".animate", { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.3 
    });
});

// ScrollMagic para activar efectos al hacer scroll
const controller = new ScrollMagic.Controller();

document.querySelectorAll(".animate").forEach(element => {
    new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.9
    })
    .setTween(gsap.to(element, { opacity: 1, y: 0, duration: 1 }))
    .addTo(controller);
});
