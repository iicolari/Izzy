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
        duration:.2, 
        scale: 1,
        transformOrigin: "bottom right", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#three", {
        duration:.2, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#four", {
        duration:.2, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        .from("#five", {
        duration:.2, 
        scale: 0,
        transformOrigin: "top left", 
        rotate: -50,
        alpha: 0,
        ease:"back.out"})

        return tl;
    }


function second(){
    let tl = gsap.timeline();

    tl.from("#wing-two", {
        delay: 3.5,
        duration:.34, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-three", {
        duration:.35, 
        scale: 0,
        transformOrigin: "bottom left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-four", {
        duration:.35, 
        scale: 0,
        transformOrigin: "top left", 
        rotate: -50,
        ease:"back.out"}, 0)

        .from("#wing-five", {
        duration:.35, 
        scale: 0,
        transformOrigin: "top right", 
        rotate: -50,
        ease:"back.out"}, 0)

        .to("#wing-one", {
        duration:.35, 
        scale: 1,
        transformOrigin: "top right", 
        rotate: 0,
        //x: -18,
        y: -20,
        ease:"back.out"}, 0)

        return tl;
    }

/* function final(){
    let tl = gsap.timeline();

    tl.to("#logo", {
        delay: 6,
        duration:2, 
        scale: 0,
        transformOrigin: "center", 
        rotate: "-125",
        ease:"power4.out"})

        return tl;
    } */



let maintl = gsap.timeline();
maintl.add(start)
.add(first)
.add(second)
//.add(final)

;

GSDevTools.create();

