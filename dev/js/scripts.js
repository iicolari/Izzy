import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

gsap.set("#logo", {scale:.75, transformOrigin:"center"});

function start(){
    let tl = gsap.timeline();

    tl.to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .1,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        delay: .1,
        duration:.1, 
        stagger: .1,
        y: 0, 
        ease:"power4.out"})
        
        .to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .1,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        duration:.1, 
        stagger: .1,
        y: 0, 
        ease:"power4.out"});

        return tl;
    }


function change(){
    let tl = gsap.timeline();

    tl.to("#logo", {
        delay: 1.75,
        duration:.85, 
        transformOrigin: "bottom left",
        rotate: -10,
        //scaleY: 0.9, 
        ease:"power4.out"})

        return tl;
    }

function transition(){
    let tl = gsap.timeline();

    tl.to("#dot-2", {
        delay: 1.8,
        duration:.25, 
        scale: 0,
        transformOrigin: "center"
    })

    .from("#mouth-1", {
        delay: 1.8,
        duration:.5, 
        scaleY: 0,
        transformOrigin: "center"
    }, 0)

    .to("#dot-1, #dot-3", {
        delay: 1.8,
        duration:.25, 
        y: -5
    }, 0)

    .from("#antenna", {
        delay: 1.9,
        duration:.25, 
        y: 20
    }, 0)

    .from("#left-ear", {
        delay: 2,
        duration:.25, 
        x: 5
    }, 0)

    .from("#right-ear", {
        delay: 2.1,
        duration:.25, 
        x: -5
    }, 0)

    .to("#logo", {
        duration:1, 
        transformOrigin: "bottom left",
        rotate: 0,
        //scaleY: 1, 
        ease:"power4.out"}), 0

        return tl;
    }

function blink(){
    let tl = gsap.timeline();

   tl.from("#signal", {
        delay: 3,
        duration: .25,
        scale: 0,
        transformOrigin: "center",
        opacity: 1, 
        ease: "rough({ strength: 1.5, points: 10, template: none.out, taper: none, randomize: true, clamp: false })",
        repeat: 2
    })

    .to("#mouth-1", {
        delay: 0,
        duration:.75, 
        scaleY: 0,
        transformOrigin: "center"
        })
    }


    function mouth(){
    let tl = gsap.timeline({delay: 2.5, repeat: 3});

   tl.from("#mouth-2", {
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

        return tl;
        }

function transitionback(){
    let tl = gsap.timeline();

   tl.to("#logo", {
    delay: 7,
    duration: .25,
    rotate: -10, 
    ease:"power4.out"
   })

    .to("#mouth-5", {
        duration: .25,
        scale: 0,
        transformOrigin: "center", 
        ease:"power4.out"
    })

    .to("#dot-2", {
        delay: 0,
        duration: .25,
        scale: 1, 
        ease:"power4.out"
    })

    .to("#dot-1, #dot-3", {
       delay: 0,
        y: 0,
        ease:"power4.out"
    })

    .to("#logo", {
        rotate: 0,
        duration: .25, 
        ease:"power4.out"
    })

}

/* 
function chat(){
    let tl = gsap.timeline();

   tl.to("#antenna", {
        delay: 0,
        y: 0
   })

   .to("#left-ear", {
        delay: 0,
        x: 0
   })

   .to("#right-ear", {
        delay: 0,
        x: 0
   })

    .to("#logo", {
        duration: 1,
        rotate: 0
   })
}
 */



let mainTl = gsap.timeline();
mainTl.add(start)
.add(change, ">")
.add(transition, ">")
.add(blink, ">")
.add(mouth, ">")
.add(transitionback, ">")
//.add(chat, ">")

;

GSDevTools.create();



/* to("#dot-1", {
        duration:0.15, 
        scaleY: 0.8,
        ease:"bounce.out"})

        .to("#dot-1", {
        duration:0.15})
     */