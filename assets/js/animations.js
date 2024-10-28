// Inicializar GSAP y ScrollMagic

document.addEventListener("DOMContentLoaded", () => {
    // GSAP para animación de carga
    gsap.from(".animate", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // ScrollMagic para activar animaciones al hacer scroll
    const controller = new ScrollMagic.Controller();
    document.querySelectorAll(".animate").forEach((element) => {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9
        })
        .setTween(gsap.to(element, { opacity: 1, y: 0, duration: 1 }))
        .addTo(controller);
    });
});
