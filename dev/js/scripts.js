import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);


gsap.set("#mouth-1", {autoAlpha:0});
gsap.set("#mouth-2", {autoAlpha:0});
gsap.set("#mouth-3", {autoAlpha:0});
gsap.set("#mouth-4", {autoAlpha:0});
gsap.set("#mouth-5", {autoAlpha:0});


function start(){
    let tl = gsap.timeline();

    tl.to("#dot-1, #dot-2, #dot-3", {
        duration:.15, 
        stagger: .2,
        yoyo: true,
        y: -10, 
        ease:"power4.out"});


    }






let mainTl = gsap.timeline();
mainTl.add(start)

;

GSDevTools.create();



/* to("#dot-1", {
        duration:0.15, 
        scaleY: 0.8,
        ease:"bounce.out"})

        .to("#dot-1", {
        duration:0.15})
     */