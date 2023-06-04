import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

gsap.set("#logo", {scale:.75, transformOrigin:"center"});

function start(){
    let tl = gsap.timeline();

    tl.to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .2,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .2,
        y: 0, 
        ease:"power4.out"})
        
        .to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .2,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .2,
        y: 0, 
        ease:"power4.out"});
    }


function change(){
    let tl = gsap.timeline();

    tl.to("#logo", {
        delay: 2,
        duration:1, 
        transformOrigin: "bottom left",
        rotate: -10,
        //ScaleY: .5, 
        ease:"power4.out"})
    }

function transition(){
    let tl = gsap.timeline();

    tl.to("#dot-2", {
        delay: 2,
        duration:.25, 
        scale: 0,
        transformOrigin: "center"
    })

    .from("#mouth-1", {
        delay: 2,
        duration:.5, 
        scaleY: 0,
        transformOrigin: "center"
    }, 0)

    .to("#dot-1, #dot-3", {
        delay: 2,
        duration:.25, 
        y: -5
    }, 0)

    .from("#antenna", {
        delay: 2,
        duration:.25, 
        y: 20
    }, 0)

    .from("#left-ear", {
        delay: 2.25,
        duration:.25, 
        x: 5
    }, 0)

    .from("#right-ear", {
        delay: 2.5,
        duration:.25, 
        x: -5
    }, 0)

    .to("#logo", {
        duration:1, 
        transformOrigin: "bottom left",
        rotate: 0,
        //ScaleY: .5, 
        ease:"power4.out"}), 0
    }

function final(){
    let tl = gsap.timeline();

   tl.from("#signal", {
        delay: 3.4,
        duration: .25,
        scale: 0,
        transformOrigin: "center",
        opacity: 1, 
        ease: "rough({ strength: 1.5, points: 10, template: none.out, taper: none, randomize: true, clamp: false })"
    })

    .to("#mouth-1", {
        delay: 0,
        duration:.1, 
        scaleY: 0,
        transformOrigin: "center"
        })

    .from("#mouth-2", {
        delay: 0,
        duration:.2, 
        scaleY: 0,
        transformOrigin: "center"
    })

    .to("#mouth-2", {
        delay: 0,
        duration:.1, 
        scaleY: 0,
        transformOrigin: "center"
        })

    .from("#mouth-3", {
        delay: 0,
        duration:.2, 
        scaleY: 0,
        transformOrigin: "center"
    })

    .to("#mouth-3", {
        delay: 0,
        duration:.1, 
        scaleY: 0,
        transformOrigin: "center"
        })

    .from("#mouth-4", {
        delay: 0,
        duration:.2, 
        scaleY: 0,
        transformOrigin: "center"
    })

    .to("#mouth-4", {
        delay: 0,
        duration:.1, 
        scaleY: 0,
        transformOrigin: "center"
        })

    .from("#mouth-5", {
        delay: 0,
        duration:.2, 
        scaleY: 0,
        transformOrigin: "center"
        })




        }




let mainTl = gsap.timeline();
mainTl.add(start)
.add(change, ">")
.add(transition, ">")
.add(final, ">")

;

GSDevTools.create();



/* to("#dot-1", {
        duration:0.15, 
        scaleY: 0.8,
        ease:"bounce.out"})

        .to("#dot-1", {
        duration:0.15})
     */