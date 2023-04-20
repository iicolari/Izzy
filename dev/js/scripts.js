import {gsap} from "gsap"

gsap.from("a", {scale:0, rotation:-90, delay:0.25});
gsap.from("nav li", {duration:.5, alpha:0, stagger:0.05, y:"-=10", delay:0.25});
gsap.from("#hero h1", {duration:.75, x:"-=800", delay:.5});
gsap.from("#hero h2", {duration:1, x:"-=800", delay:.5});
gsap.from("button", {duration:1.25, x:"-=800", delay:.5});
