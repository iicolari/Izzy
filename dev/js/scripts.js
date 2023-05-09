import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.from("button", {
    scrollTrigger: {
        trigger: "button",
        toggleActions: "restart pause resume pause"
},
    x: -200,
    scale: 2,
    start: "20px 80%",
    duration: 1
});

//gsap.utils.toArray(".panel").forEach((panel, i){};)
ScrollTrigger.create({
    animation: tl,
    trigger: "#section-2",
    start: "top top",
    pin: true,
    pinSpacing: false


})

// // Init
// gsap.set("#hero h1 span",{alpha:0.25});
// //gsap.set("#bg-img",{clipPath:"inset(25% 25%)"});

// //Timeline Controls
// //tl.pause();
// //tl.resume();
// //tl.seek(1.5);
// //tl.reverse();

// let trailBtn = document.querySelector("#trails-btn");
// //button timeline
// let heroBtnTl = gsap.timeline({paused:true});
// heroBtnTl.to("#trails-btn",{duration:0.25, scale:2, backgroundColor:"#881d02"}, "myLabel")
// .to("#first-line",{duration:0.25, alpha:0, y:50}, "myLabel")
// .to("#second-line",{duration:0.25, alpha:0, y:50}, "myLabel")
// .to("#trails-btn i",{duration:0.25, rotateY:0}, "-=0.15")
// ;


// trailBtn.addEventListener("mouseover", () => {
//     heroBtnTl.play();
// });

// trailBtn.addEventListener("mouseout", () => {
//     heroBtnTl.reverse();
// });


// function heroAnimation(){
//     let tl = gsap.timeline();
//     tl.from("#first-line",{duration:1,alpha:0, y:-100})
//     .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
//     .from("#trails-btn",{duration:1,y:100, alpha:0},"-=.5")
//     .from("#trails-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
//     return tl;
// }

// //scrollTrigger
// //scrollTrigger:{
// //trigger: ".myClass"
// //scrub:true, links timeline to scrollbar
// // markers:true
// //start:"center 70%", "(trigger element) (scroller/viewport)"
// //end:"center 10%",
// //}
// //pin:"#box" or true


// function boxAnimation(){
//     let tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: "#box",
//             start:"center 70%",
//             end:"center 10%",
//             scrub:true,
//             markers:false
//         }});
//     tl.from("#box",{duration:1, scale:2, rotation:180, x:"-=300%"})
//     ;

//     return tl;
// }

// function hikingAnimation(){
//     let tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: "#hiking",
//             start:"top 70%",
//             end:"bottom 10%",
//             scrub:true,
//             markers:false
//         }});
//     tl.from("#hiking aside div",{duration:1, scale:3, alpha:0},"hiking")
//     .from("#hiking h1",{duration:1, y:-100, alpha:0},"hiking")
//     .from("#hiking p",{duration:1, y:-100, alpha:0},"hiking")

//     ;

//     return tl;
// }

// function hero2Animation(){
//     let tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: "#hero-2",
//             start:"top 80%",
//             end:"top 40%",
//             scrub:true,
//             markers:true
//         }});
//     tl.from("#bg-img",{duration:1, clipPath:"inset(0 50%)"}, "herotwo")
//     .from("#hero-2 h1",{duration:1, scale:2, alpha:0}, "herotwo")
   

//     ;

//     return tl;
// }





// let mainTl = gsap.timeline();
// mainTl.add(heroAnimation())
//     .add(boxAnimation())
//     .add(hikingAnimation())
//     .add(hero2Animation())

// ;

// //Comments
// //single line
// /*
// multi
// line
// */

// //Keywords - to store data

// //var older avoid
// //const new ES6 cannot be updated or re-declared
// //let also new ES6 improved var "block-scoped{}"


// //variable syntax =  keyword referenceName assignmentOperator value;

// //General rules for reference name:
// // 1.	Names can contain letters, digits, underscores, and dollar signs.
// // 2.	Names must begin with a letter or can also begin with $ and _
// // 3.	Names are case sensitive (y and Y are different variables)
// // 4.	Reserved words (like JavaScript keywords) cannot be used as names

// //examples
// // let TweenDuration = "0.5";
//  //let someElement = document.querySelector('.red-box');
// // let allElementsWithClass = document.querySelectorAll('.box');
// // let mainTl = gsap.timeline();

// //GSAP Methods

// //.set
// //gsap.to(".blue-box", {x:400});
// //.to
// //gsap.to(".blue-box", {duration:2, x:400});
// //.from
// //gsap.from(".blue-box", {duration:2, x:400});
// //.fromTo
// //gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});


// //GSAP

// //gsap.to(target, {duration, vars, ease});
// //gsap.set(someElement,{x:200});
// //gsap.set(".green-box",{scale:0.5, rotation:45});
// //gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});
// //gsap.to(".red-box", {duration:2, x:400});
// //gsap.from(".green-box", {duration:2, scale:2, rotation:180});
// //gsap.to([".red-box",".green-box"], {duration:2, x:200});
// //gsap.to(".box", {duration:0.25, x:200, delay:1});

// //.set 

// //CSS
// //gsap.to(".green-box", {duration:2, backgroundColor:"black", delay:1});

// //Transforms = rotation, scaleX, scaleY, skewX, skewY, x, y, rotationX, and rotationY, alpha, autoalpha

// //Special Properties = Duration, callbacks, delays, easing, staggers, repeat, yoyo, repeatDelay

// //gsap.to(".box", {duration:0.25, x:200, delay:1, yoyo:true, repeat:5, repeatDelay:0.25});

// //gsap.to(".box", {duration:0.25, x:200, delay:1, stagger:0.5});


// //gsap.to(".box", {duration:0.25, rotation:"90deg", delay:1, stagger:0.5});
// //gsap.to(".blue-box", {duration:0.25, rotation:"90_cw", delay:1, stagger:0.5});
// //gsap.to(".green-box", {duration:0.25, rotation:"180_ccw", delay:1, stagger:0.5});
// //gsap.set(".blue-box", {rotation:45});
// //gsap.to(".blue-box", {duration:0.25, rotation:"90_short", delay:2});

// //************   Day 2  ***************\\
// //1. Absolute vs Relative Values
// //gsap.set(".blue-box", {x:200});
// //gsap.set(".green-box", {x:200});

// // gsap.to(".blue-box", {duration:1, x:300, delay:1});
// // gsap.to(".green-box", {duration:1, x:"-=100", delay:1});

// //2. Origin
// //transformOrigin:"200px 0px"
// //transformOrigin:"0% 100%"
// //gsap.to(".blue-box", {duration:1, rotation:"180_cw", delay:1, transformOrigin:"200px 0px"});


// //3. Percentage-based translation
// //xPercent
// //yPercent
// //gsap.set(".green-box",{xPercent:50, yPercent:50});

// //4. Easing ( 	https://greensock.com/ease-visualizer   )
// gsap.to(".red-box", {duration:1, x:200, ease:"back.out(4)"});
// gsap.to(".blue-box", {duration:1, x:200, ease:"none"});
// gsap.to(".green-box", {duration:1, x:200, ease:"power4.out"});











// import { gsap } from "gsap";


// //Comments
// //single line
// /*
// multi
// line
// */

// //Keywords - to store data

// //var older avoid
// //const new ES6 cannot be updated or re-declared
// //let also new ES6 improved var "block-scoped{}"


// //variable syntax =  keyword referenceName assignmentOperator value;

// //General rules for reference name:
// // 1.	Names can contain letters, digits, underscores, and dollar signs.
// // 2.	Names must begin with a letter or can also begin with $ and _
// // 3.	Names are case sensitive (y and Y are different variables)
// // 4.	Reserved words (like JavaScript keywords) cannot be used as names

// //examples
// // let TweenDuration = "0.5";
//  //let someElement = document.querySelector('.red-box');
// // let allElementsWithClass = document.querySelectorAll('.box');
// // let mainTl = gsap.timeline();

// //GSAP Methods

// //.set
// //gsap.to(".blue-box", {x:400});
// //.to
// //gsap.to(".blue-box", {duration:2, x:400});
// //.from
// //gsap.from(".blue-box", {duration:2, x:400});
// //.fromTo
// //gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});


// //GSAP

// //gsap.to(target, {duration, vars, ease});
// //gsap.set(someElement,{x:200});
// //gsap.set(".green-box",{scale:0.5, rotation:45});
// //gsap.fromTo(".blue-box", { x:200 },{duration:2, x:600, delay:1});
// //gsap.to(".red-box", {duration:2, x:400});
// //gsap.from(".green-box", {duration:2, scale:2, rotation:180});
// //gsap.to([".red-box",".green-box"], {duration:2, x:200});
// //gsap.to(".box", {duration:0.25, x:200, delay:1});

// //.set 

// //CSS
// //gsap.to(".green-box", {duration:2, backgroundColor:"black", delay:1});

// //Transforms = rotation, scaleX, scaleY, skewX, skewY, x, y, rotationX, and rotationY, alpha, autoalpha

// //Special Properties = Duration, callbacks, delays, easing, staggers, repeat, yoyo, repeatDelay

// //gsap.to(".box", {duration:0.25, x:200, delay:1, yoyo:true, repeat:5, repeatDelay:0.25});

// //gsap.to(".box", {duration:0.25, x:200, delay:1, stagger:0.5});


// //gsap.to(".box", {duration:0.25, rotation:"90deg", delay:1, stagger:0.5});
// //gsap.to(".blue-box", {duration:0.25, rotation:"90_cw", delay:1, stagger:0.5});
// //gsap.to(".green-box", {duration:0.25, rotation:"180_ccw", delay:1, stagger:0.5});
// //gsap.set(".blue-box", {rotation:45});
// //gsap.to(".blue-box", {duration:0.25, rotation:"90_short", delay:2});

// //************   Day 2  ***************\\
// //1. Absolute vs Relative Values
// //gsap.set(".blue-box", {x:200});
// //gsap.set(".green-box", {x:200});

// // gsap.to(".blue-box", {duration:1, x:300, delay:1});
// // gsap.to(".green-box", {duration:1, x:"-=100", delay:1});

// //2. Origin
// //transformOrigin:"200px 0px"
// //transformOrigin:"0% 100%"
// //gsap.to(".blue-box", {duration:1, rotation:"180_cw", delay:1, transformOrigin:"200px 0px"});


// //3. Percentage-based translation
// //xPercent
// //yPercent
// //gsap.set(".green-box",{xPercent:50, yPercent:50});

// //4. Easing ( 	https://greensock.com/ease-visualizer   )
// gsap.to(".red-box", {duration:1, x:200, ease:"back.out(4)"});
// gsap.to(".blue-box", {duration:1, x:200, ease:"none"});
// gsap.to(".green-box", {duration:1, x:200, ease:"power4.out"});



// /* =============
//     Demo Timeline - Stagger - Match media
// ============= */

// import { gsap } from "gsap";


// //**********
// //STAGGER
// //*********

// //gsap.to(".box", {duration: 0.5, scale:0.5, delay:1, stagger:0.1});

// // gsap.to(".box", {
// //     duration: 0.5, 
// //     scale:0.5, 
// //     delay:1, 
// //     stagger:{
// //         //each:0.1,
// //         amount:0.5,
// //         grid:[3,4],
// //         from:"start",//"start", "center", "edges","random", "end"
// //         axis:"y"
// //     }
// // });

// //**********
// //TIMELINE
// //*********

// let mainTl = gsap.timeline({delay:1});//defaults:{duration:1, ease:"back.out"}

// //position
// //absolute 1,2,3
// //relative "-=1", "+=1"
// //Relative to previous tweens "<", ">", "<-0.5"
// //Percent "-=50%", "<25%"

//     // mainTl.to(".box", {duration:1, scale:0.5})
//     // .addLabel("myLabel","+=2")//we just added a label to 1 second
//     // .to(".red-box", {duration:1, backgroundColor:"#000"},"myLabel")
//     // .to(".blue-box", {duration:0.5, rotation:180},"myLabel")

//     // ;



// function blueBoxAni(){

//     let tl = gsap.timeline({delay:1});
//     let mm = gsap.matchMedia();

//     mm.add("(max-width:767px)", () =>{
//     tl.to(".blue-box", {duration:0.5, scale:0.5, ease:"bounce.out"})
//     .to(".blue-box", {duration:0.5, rotation:180})
//     ;
//     });

//     mm.add("(min-width:768px)", () =>{
//         tl.to(".blue-box", {duration:0.5, scale:1.5, ease:"bounce.out"})
//         .to(".blue-box", {duration:0.5, rotation:360, backgroundColor:"yellow"})
//         ;
//         });

//     return tl;
// }

// function redBoxAni(){

//     let tl = gsap.timeline({delay:1});

//     tl.to(".red-box", {duration:0.5, alpha:0.5})
//     .to(".red-box", {duration:0.5, y:"+=100"})
//     ;

//     return tl;
// }



// mainTl.add(blueBoxAni())
// .add(redBoxAni(), 0)

// ;


    