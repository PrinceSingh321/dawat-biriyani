let Htmlelement = document.querySelector('html');
var colorCode;

function colorDecide() {
  if (Htmlelement.classList.contains('dark-mode')) {
    colorCode = "#ffffff";
  } else {
    colorCode = "#393939";
  }
}

function InnerpageRunAnimation() {
  colorDecide(); // Update the colorCode based on the current class
  gsap.registerPlugin(SplitText);

  const split1 = new SplitText(".growth-subtext, .Com-subtext", {
    type: "words,chars"
  });


const aniGrowth = gsap
.timeline({
  scrollTrigger: {
    trigger: ".growth-section, .quotes-section",
      start: "25% 80%",
      end: "+=60%",
      scrub: true,
      pin:false,
      markers: false,
    // once: true
  },
}).set(
  split1.chars,
  {
    color: colorCode,

    stagger: 0.1
  },
  0.3
);
  

}

// Initial run
InnerpageRunAnimation()







  gsap.to("#governance .com_container", {
    scrollTrigger: {
      trigger: ".governLeft",
      start: "top 80px", // Start when the top of the container reaches the top of the viewport
      end: "bottom bottom", // End when the bottom of the container reaches the bottom of the viewport
      pin: true, // Pin the element
      pinSpacing: false // Do not add extra space when pinning
  
    }
  })


  gsap.to(".ourleadership-section .ourleadershipWrapper", {
    scrollTrigger: {
      trigger: ".ourleade-detail-left-sec",
      start: "top 80px", // Start when the top of the container reaches the top of the viewport
      end: "bottom bottom", // End when the bottom of the container reaches the bottom of the viewport
      pin: true, // Pin the element
      pinSpacing: false // Do not add extra space when pinning
  
    }
  })
