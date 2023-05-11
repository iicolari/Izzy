import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);







// gsap.utils.toArray(".section-1").forEach(section => {
// 	let tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: section,
// 				start: "center center",
//         // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
// 				end: () => "+=" + section.offsetWidth, 
// 				scrub: true,
// 				pin: true,
//         anticipatePin: 1
// 			},
// 			defaults: {ease: "none"}
// 		});
// 	// animate the container one way...
// 	tl.fromTo(section.querySelector("#section-1"), { xPercent: 100, x: 0}, {xPercent: 0})
// 	  // ...and the image the opposite way (at the same time)
// 	  .fromTo(section.querySelector("h1"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
// });








gsap.from("button", {
    scrollTrigger: {
        trigger: "button",
        toggleActions: "restart pause resume restart",
        scrub: true
},
    x: -200,
    width: 600,
    start: "20px 80%",
    duration: .5
});








let delSections = document.querySelectorAll(".section-2");

delSections.forEach(section => {
  
  let imageAnim = gsap.to(section.querySelector("div"), {
    y: "-50vh",
    ease: "none",
    paused: true
  });
  
  let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
  
  gsap.to(section.querySelector(".item-2"), {
    y: "-20vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "100px 20%",
      end: "bottom top",
      onUpdate: self => progressTo(self.progress)
    }
  });

  gsap.to(section.querySelector(".item-3"), {
    y: "10vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "100px 20%",
      end: "bottom top",
      onUpdate: self => progressTo(self.progress)
    }
  });

  gsap.to(section.querySelector(".item-4"), {
    y: "40vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "100px 20%",
      end: "bottom top",
      onUpdate: self => progressTo(self.progress)
    }
  });

});






