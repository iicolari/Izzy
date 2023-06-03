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

    tl.from("#dot-1", {duration:5, y:"-=500", ease:"none"})

}


let mainTl = gsap.timeline();
mainTl.add(start)

;

GSDevTools.create();