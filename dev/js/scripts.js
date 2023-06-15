import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

gsap.set("#logo", {scale:.75, transformOrigin:"center"});

function start(){
    let tl = gsap.timeline();

    tl.from("#wing-one", {
        duration:1.25, 
        scale: 0,
        transformOrigin: "bottom right", 
        rotate: -50,
        ease:"power4.out"})

        .to("#wing-one", {
        duration:1.5, 
        scale: 0,
        transformOrigin: "bottom right", 
        rotate: -50,
        ease:"power4.out"})

        return tl;
    }

function first(){
    let tl = gsap.timeline();

    tl.from("#two", {
        delay: 2.5,
        duration:.3, 
        scale: 1,
        transformOrigin: "bottom right", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#three", {
        duration:.3, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#four", {
        duration:.3, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#five", {
        duration:.3, 
        scale: 0,
        transformOrigin: "top left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        return tl;
    }


function second(){
    let tl = gsap.timeline({delay: 4, duration:.5});

    tl.from("#wing-two", {
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-three", {
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-four", {
        scale: 0,
        transformOrigin: "top left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-five", {
        scale: 0,
        transformOrigin: "top right", 
        rotate: -50,
        ease:"back.out"}, 0)

        .to("#wing-one", {
        scale: 1,
        transformOrigin: "top right", 
        rotate: 0,
        y: -21,
        ease:"back.out"}, 0)

        return tl;
    }

function final(){
    let tl = gsap.timeline();

    tl.to("#logo", {
        delay: 4,
        duration:2, 
        transformOrigin: "center", 
        rotate: "360",
        ease:"power4.out"})

        return tl;
    }



let maintl = gsap.timeline();
maintl.add(start, "<")
.add(first, "<")
.add(second, "<")
.add(final)

;

GSDevTools.create();

