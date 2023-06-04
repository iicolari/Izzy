import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);


function start(){
    let tl = gsap.timeline();

    tl.from("#1-wing", {
        duration:1, 
        scale:0,
        rotate: 100});
    }




let mainTl = gsap.timeline();
mainTl.add(start)


;

GSDevTools.create();


