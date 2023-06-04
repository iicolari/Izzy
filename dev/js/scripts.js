import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);


gsap.set("#mouth-2", {autoAlpha:0});
gsap.set("#mouth-3", {autoAlpha:0});
gsap.set("#mouth-4", {autoAlpha:0});
gsap.set("#mouth-5", {autoAlpha:0});
gsap.set("#logo", {scale:.75, transformOrigin:"center"});

function start(){
    let tl = gsap.timeline();

    tl.to("#dot-1, #dot-2, #dot-3", {
        duration:.15, 
        stagger: .2,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        duration:.15, 
        stagger: .2,
        y: 0, 
        ease:"power4.out"})
        
        .to("#dot-1, #dot-2, #dot-3", {
        duration:.15, 
        stagger: .2,
        y: -10, 
        ease:"power4.out"})

        .to("#dot-1, #dot-2, #dot-3", {
        duration:.15, 
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
        delay: 3,
        duration:.5, 
        scale: 0,
        transformOrigin: "center"
    })

    .from("#mouth-1", {
        delay: 3,
        duration:.5, 
        scale: 0,
        transformOrigin: "center"
    }, 0)

    .to("#dot-1, #dot-3", {
        delay: 3,
        duration:.5, 
        y: -5
    }, 0)

    .to("#logo", {
        delay: 2,
        duration:1, 
        transformOrigin: "bottom left",
        rotate: 0,
        //ScaleY: .5, 
        ease:"power4.out"})


    }

function mouth(){
    let tl = gsap.timeline();

    tl.to("#mouth-2", {
        
    })
}




let mainTl = gsap.timeline();
mainTl.add(start)
.add(change, ">")
.add(transition, ">")
.add(mouth, ">")

;

GSDevTools.create();



/* to("#dot-1", {
        duration:0.15, 
        scaleY: 0.8,
        ease:"bounce.out"})

        .to("#dot-1", {
        duration:0.15})
     */