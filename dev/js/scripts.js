import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline();

tl .to(".portfolio div", {
    scrollTrigger: {
        trigger: ".portfolio div",
        toggleActions: "restart pause resume restart",
        scrub: true,
        start: 'top 60%',
        end: 'top 5%'
},
    y: 1000,
    stagger: 1
    
})

.from("button", {
    scrollTrigger: {
        trigger: "button",
        toggleActions: "restart pause resume restart",
        scrub: true,
        markers:true
},
    x: -200,
    width: 600,
    start: 'top 60%',
    end: 'top 40%'
})


function Anim (){
    let gallery = document.querySelectorAll("#section-2");

gallery.forEach(section => {
  
  let imageAnim = gsap.to(section.querySelector("div"), {
    y: "-50vh",
    ease: "none",
    paused: true
  });
  
  let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});
  
  gsap.to(section.querySelector(".item-2"), {
    y: "-30vh",
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
}

tl.add(Anim)







