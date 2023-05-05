import { gsap } from "gsap";

//QUIZ section 1




//QUIZ section 2




//QUIZ section 3




import { gsap } from "gsap";


//Comments
//single line
/*
multi
line
*/

//Keywords - to store data

//var older avoid
//const new ES6 cannot be updated or re-declared
//let also new ES6 improved var "block-scoped{}"


//variable syntax =  keyword referenceName assignmentOperator value;

//General rules for reference name:
// 1.	Names can contain letters, digits, underscores, and dollar signs.
// 2.	Names must begin with a letter or can also begin with $ and _
// 3.	Names are case sensitive (y and Y are different variables)
// 4.	Reserved words (like JavaScript keywords) cannot be used as names

//examples
// let TweenDuration = "0.5";
 //let someElement = document.querySelector('.red-box');
// let allElementsWithClass = document.querySelectorAll('.box');
// let mainTl = gsap.timeline();

//GSAP Methods

//.set
//gsap.to(".blue-box", {x:400});
//.to
//gsap.to(".blue-box", {duration:2, x:400});
//.from
//gsap.from(".blue-box", {duration:2, x:400});
//.fromTo
//gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});


//GSAP

//gsap.to(target, {duration, vars, ease});
//gsap.set(someElement,{x:200});
//gsap.set(".green-box",{scale:0.5, rotation:45});
//gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});
//gsap.to(".red-box", {duration:2, x:400});
//gsap.from(".green-box", {duration:2, scale:2, rotation:180});
//gsap.to([".red-box",".green-box"], {duration:2, x:200});
//gsap.to(".box", {duration:0.25, x:200, delay:1});

//.set 

//CSS
//gsap.to(".green-box", {duration:2, backgroundColor:"black", delay:1});

//Transforms = rotation, scaleX, scaleY, skewX, skewY, x, y, rotationX, and rotationY, alpha, autoalpha

//Special Properties = Duration, callbacks, delays, easing, staggers, repeat, yoyo, repeatDelay

//gsap.to(".box", {duration:0.25, x:200, delay:1, yoyo:true, repeat:5, repeatDelay:0.25});

//gsap.to(".box", {duration:0.25, x:200, delay:1, stagger:0.5});


//gsap.to(".box", {duration:0.25, rotation:"90deg", delay:1, stagger:0.5});
//gsap.to(".blue-box", {duration:0.25, rotation:"90_cw", delay:1, stagger:0.5});
//gsap.to(".green-box", {duration:0.25, rotation:"180_ccw", delay:1, stagger:0.5});
//gsap.set(".blue-box", {rotation:45});
//gsap.to(".blue-box", {duration:0.25, rotation:"90_short", delay:2});

//************   Day 2  ***************\\
//1. Absolute vs Relative Values
//gsap.set(".blue-box", {x:200});
//gsap.set(".green-box", {x:200});

// gsap.to(".blue-box", {duration:1, x:300, delay:1});
// gsap.to(".green-box", {duration:1, x:"-=100", delay:1});

//2. Origin
//transformOrigin:"200px 0px"
//transformOrigin:"0% 100%"
//gsap.to(".blue-box", {duration:1, rotation:"180_cw", delay:1, transformOrigin:"200px 0px"});


//3. Percentage-based translation
//xPercent
//yPercent
//gsap.set(".green-box",{xPercent:50, yPercent:50});

//4. Easing ( 	https://greensock.com/ease-visualizer   )
gsap.to(".red-box", {duration:1, x:200, ease:"back.out(4)"});
gsap.to(".blue-box", {duration:1, x:200, ease:"none"});
gsap.to(".green-box", {duration:1, x:200, ease:"power4.out"});



