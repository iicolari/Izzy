import {gsap} from "gsap"

//gsap.from("a", {scale:0, rotation:-90, delay:0.25});
//gsap.from("nav li", {duration:.5, alpha:0, stagger:0.05, y:"-=10", delay:0.25});
//gsap.from("#hero h1", {duration:.75, x:"-=800", delay:.5});
//gsap.from("#hero h2", {duration:1, x:"-=800", delay:.5});
//gsap.from("button", {duration:1.25, x:"-=800", delay:.5});


let mainTl = gsap.timeline({delay:0.25});

function nav(){

    let tl = gsap.timeline({delay:0.25});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.from("a", {scale:0, rotation:-90})
    .from("nav li", {
        duration:.5, 
        alpha:0, 
        stagger:0.05, 
        y:"-=10"})
    ;
    });

    mm.add("(min-width:768px)", () =>{ 
        tl.from("a", {scale:0, rotation:-90})
    .from("nav li", {
        duration:.5, 
        alpha:0, 
        stagger:0.05, 
        y:"-=10"}) //add stagger to this?
        ;
        });

    return tl;
}

function hero(){

    let tl = gsap.timeline({delay:.25});

    tl.from("#hero h1", {
        x:"-=800", 
        ease: "back.out(2)"
    })
    .from("#hero h2", {
        x:"-=800", 
        ease: "back.out(2)"
    })
    .from("button", {
        x:"-=800", 
        ease: "back.out(2)"
    })
    ;

    return tl;
}



mainTl.add(nav())
.add(hero(), 0)

;





//     stagger:{
//         //each:0.1,
//         amount:0.5,
//         grid:[3,4],
//         from:"start",//"start", "center", "edges","random", "end"
//         axis:"y"
//     }
// });