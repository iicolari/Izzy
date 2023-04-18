import {gsap} from "gsap"

gsap.from("logo", {duration:1, alpha:0, delay:0.5});
gsap.from("nav li", {duration:1, alpha:0, stagger: 0.1, y:"-=15", delay:0.5});
gsap.from("#hero article", {duration:1, alpha:0});
gsap.from("#hero h1", {duration:.45, alpha:0, y:"+=25", delay:.5});
gsap.from("#hero h2", {duration:.45, alpha:0, y:"+=25", delay:.5});