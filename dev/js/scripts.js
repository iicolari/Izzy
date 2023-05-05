import { gsap } from "gsap";

//QUIZ section 1


/* gsap.from(".red", {duration:1, x:0, ease:"power1.out"})
gsap.to(".red", {duration:2, y:0, delay:2, ease:"power1.out"})

gsap.from(".blue", {duration:1, x:350, ease:"power1.out"})
gsap.to(".blue", {duration:2, y:300, delay:2, ease:"power1.out"}) */


//QUIZ section 2

/* gsap.from(".graph", {duration:2, alpha:0})
gsap.from(".green", {duration:5, scale:0, transformOrigin:"0px 0px"})


gsap.from(".red", {duration:1, x:0, ease:"power1.out"})
gsap.to(".red", {duration:2, y:0, delay:2, ease:"power1.out"})

gsap.from(".blue", {duration:1, x:350, ease:"power1.out"})
gsap.to(".blue", {duration:2, y:300, delay:2, ease:"power1.out"}) */

//QUIZ section 3

//mainTl.add(QuizAni())
// .add(red(), 0)
//I couldn't get this in a timeline.  Sorry!!!

gsap.from(".graph", {duration:2, alpha:0})
gsap.from(".green", {duration:6, scale:0, transformOrigin:"0px 0px"})


gsap.from(".red", {duration:1, x:0, delay:2, ease:"bounce.out"})
gsap.to(".red", {duration:2, y:0, delay:4, ease:"back.out", rotation:360})

gsap.from(".blue", {duration:1, x:350, delay:2, ease:"bounce.out"})
gsap.to(".blue", {duration:2, y:300, delay:4, ease:"back.out", rotation:360})

