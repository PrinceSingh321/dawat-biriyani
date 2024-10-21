function fnRegisterHeading(){
    var windowWidth = $(window).width();
    if (windowWidth <= 992) {
      $('.register-right-sec .heading-wrap h1').insertAfter('.register-heading-mob');
    }
}

function fnFotterAccordian(){
    $(document).ready(function(){
        if ($(window).width() < 1024) {
        $(".footer-col").click(function() {
          var detailWrap = $(this).find(".footer-detail-wrap");
          if (detailWrap.length === 0) {
            $(".footer-detail-wrap:visible").slideUp();
          } else {
            $(".footer-detail-wrap").not(detailWrap).slideUp();
            detailWrap.slideToggle();
            
          }
        });
    }
      });
      
}

function fnScrollDown() {
    var scrollDownBtn = document.querySelector(".down-arrow");

    // Scroll down to the next section using GSAP
    function scrollToNextSection() {
        var nextSection = document.querySelector("#about-home"); // Adjust this selector to your next section
        if (nextSection) {
            gsap.to(window, {
                scrollTo: {
                    y: nextSection, // Target the next section
                    autoKill: false // Prevent killing the scroll on user interactions
                },
                duration: 1, // Adjust the duration as needed
                ease: "power2.inOut" // Adjust the easing function as needed
            });
        }
    }

    // Event listener for scroll down button
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener("click", scrollToNextSection);
    }
}

  




function fnbottomToTop(){
    if($(".backTopbtn").length > 0){
  var scrollToTopBtn = document.querySelector(".backTopbtn")
  var rootElement = document.documentElement
  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal ) > 0.20) {
      // Show button
      scrollToTopBtn.classList.add("active")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("active")
    }
  }
  
  function scrollToTop() {
    // Scroll to top logic
  //var webpageUrl = window.location.pathname; 
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop)
  document.addEventListener("scroll", handleScroll)
    }
  }

  function fnAnimation(){
    AOS.init({
        duration: 1200,
      })
  }

  function fnParllexBar() {
    if ($(".panel").length > 0) {
      if ($(window).width() > 1025) {
        let panels = gsap.utils.toArray(".panel");
        // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
        let tops = panels.map((panel) =>
          ScrollTrigger.create({ trigger: panel, start: "top 1px" })
        );
        
        panels.forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: () =>
              panel.offsetHeight < window.innerHeight
                ? "top top"
                : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
                //end:"bottom top",
            pin: true,
            pinSpacing: false,
  
          });
        });
  
  
        // ScrollTrigger.create({
        //   snap: {
        //     snapTo: (progress, self) => {
        //       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
        //           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
        //       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
        //     },
        //     duration: 1.3
        //   }
        // })
  
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        
  
    ScrollTrigger.defaults({
      toggleActions: "reverse pause",
      invalidateOnRefresh: true,
      scrub: false,
      // markers: { startColor: "red", endColor: "blue", fontSize: "18px", indent: 10 }
    });
  
    // create the smooth scroller
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: false,
    });
  
    const gsapTimeLine = gsap.timeline();
     
      }
    }
  
  
  
    //gsap.registerPlugin(SplitText, ScrollTrigger);
  
  
    // Animations
    if ($(window).width() > 1025){
    const title = document.querySelector('.banner.panel .text-wraper .title');
    const paragraph = document.querySelector('.banner.panel .text-wraper .pargraph');

    gsap.from(title, { 
        duration: 1, 
        opacity: 0, 
        y: -200, 
        ease: 'power3.out' 
    });
    gsap.from(paragraph, { 
        duration: 1, 
        opacity: 0, 
        y: 50, 
        ease: 'power3.out', 
        delay: 0.5 // Delay to stagger the animation
    });

//1 section
gsap.set("#about-home.panel .about-heading", { opacity: 0, y: "0" });
gsap.set("#about-home.panel .about-right-sec", { opacity: 0, x: "0" });

const gsapTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: "#about-home.panel",
        start: "top center",
        end: "+=30%",  // Increased the end for smoother scrolling
        scrub: 3,  // Increased scrub for even smoother scrolling
        once: true // Run once
    }
})
.fromTo("#about-home.panel .about-heading", 
    { opacity: 0, y: "-60", immediateRender: false },  // FROM values for scroll trigger
    { opacity: 1, y: "0", duration: 1.5, ease: "power1.out" }  // TO values
)
.fromTo("#about-home.panel .about-right-sec", 
    { opacity: 0, x: "60", immediateRender: false },  // FROM values for scroll trigger
    { opacity: 1, x: "0", duration: 1.8, ease: "power1.out" }  // TO values
);

      
   //2 section 
   gsap.set("#Com_fourCard.panel .heading-wrap", { opacity: 0, y: "0" });

const gsapTimeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#Com_fourCard.panel",
        start: "top center",
        end: "+=30%",  // Increased the end for smoother scrolling
        scrub: 3,  // Increased scrub for even smoother scrolling
        once: true // Run once
    }
})
.fromTo("#Com_fourCard.panel .heading-wrap", 
    { opacity: 0, y: "-60", immediateRender: false },  // FROM values for scroll trigger
    { opacity: 1, y: "0", duration: 1.5, ease: "power1.out" }  // TO values
)

      gsap.set(".fourCardSlider",{ x: "100%"})
      var tx = gsap.timeline({
        defaults: { duration: 80, ease: "none" },
        scrollTrigger: {
          trigger: ".fourCardSlider",
          scrub: true,
          once: true,
        start: "top bottom",
          end: "bottom bottom"
          //pin:true,
         // markers: true
        }
      })
      
      tx.to(".fourCardSlider", {x:0, duration: 1})

      //3 section

      gsap.set("#Com_threeCard.panel .heading-wrap", { opacity: 0, y: "0" });
      gsap.set("#Com_threeCard.panel .sub_heading", { opacity: 0, y: "0" });
      

      const gsapTimeLine3 = gsap.timeline({
          scrollTrigger: {
              trigger: "#Com_threeCard.panel",
              start: "top center",
              end: "+=30%",  // Increased the end for smoother scrolling
              scrub: 3,  // Increased scrub for even smoother scrolling
              once: true // Run once
          }
      })
      .fromTo("#Com_threeCard.panel .heading-wrap", 
          { opacity: 0, y: "-60", immediateRender: false },  // FROM values for scroll trigger
          { opacity: 1, y: "0", duration: 1.5, ease: "power1.out" }  // TO values
      )

      .fromTo("#Com_threeCard.panel .sub_heading", 
        { opacity: 0, y: "60", immediateRender: false },  // FROM values for scroll trigger
        { opacity: 1, y: "0", duration: 1.8, ease: "power1.out" }  // TO values
    )

    gsap.set(".threeCardSlider",{ x: "-100%"})
    var tx = gsap.timeline({
      defaults: { duration: 80, ease: "none" },
      scrollTrigger: {
        trigger: ".threeCardSlider",
        scrub: true,
        once: true,
      start: "top bottom",
        end: "bottom bottom"
        //pin:true,
       // markers: true
      }
    })
    
    tx.to(".threeCardSlider", {x:0, duration: 1})
      
    //4 section

    gsap.set("#Com_recipe_Section.panel .white", { opacity: 0, y: "0" });
    gsap.set("#Com_recipe_Section.panel .recipe-text-wrap", { opacity: 0, y: "0" });
    

    const gsapTimeLine4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#Com_recipe_Section.panel",
            start: "top center",
            end: "+=30%",  // Increased the end for smoother scrolling
            scrub: 3,  // Increased scrub for even smoother scrolling
            once: true // Run once
        }
    })
    .fromTo("#Com_recipe_Section.panel .white", 
        { opacity: 0, y: "-60", immediateRender: false },  // FROM values for scroll trigger
        { opacity: 1, y: "0", duration: 1.5, ease: "power1.out" }  // TO values
    )

    .fromTo("#Com_recipe_Section.panel .recipe-text-wrap", 
      { opacity: 0, y: "60", immediateRender: false },  // FROM values for scroll trigger
      { opacity: 1, y: "0", duration: 1.7, ease: "power1.out" }  // TO values
  )

  //5 section

  gsap.set("#Com_threeCard-home.panel .heading-wrap", { opacity: 0, y: "0" });
  gsap.set("#Com_threeCard-home.panel .sub_heading", { opacity: 0, y: "0" });
  gsap.set("#Com_threeCard-home.panel .card-container", { opacity: 0, y: "0" });
  

  const gsapTimeLine5 = gsap.timeline({
      scrollTrigger: {
          trigger: "#Com_threeCard-home.panel",
          start: "top center",
          end: "+=30%",  // Increased the end for smoother scrolling
          scrub: 3,  // Increased scrub for even smoother scrolling
          once: true // Run once
      }
  })
  .fromTo("#Com_threeCard-home.panel .heading-wrap", 
      { opacity: 0, y: "-60", immediateRender: false },  // FROM values for scroll trigger
      { opacity: 1, y: "0", duration: 1.5, ease: "power1.out" }  // TO values
  )

  .fromTo("#Com_threeCard-home.panel .sub_heading", 
    { opacity: 0, y: "60", immediateRender: false },  // FROM values for scroll trigger
    { opacity: 1, y: "0", duration: 1.7, ease: "power1.out" }  // TO values
)

.fromTo("#Com_threeCard-home.panel .card-container", 
    { opacity: 0, y: "60", immediateRender: false },  // FROM values for scroll trigger
    { opacity: 1, y: "0", duration: 1.9, ease: "power1.out" }  // TO values
)
 

 //6 section

 gsap.set("#register-section .rigster-left-sec", { opacity: 0, x: "0" });
 gsap.set("#register-section .register-right-sec", { opacity: 0, y: "0" });
 

 const gsapTimeLine6 = gsap.timeline({
     scrollTrigger: {
         trigger: "#register-section",
         start: "top center",
         end: "+=30%",  // Increased the end for smoother scrolling
         scrub: 3,  // Increased scrub for even smoother scrolling
         once: true // Run once
     }
 })
 .fromTo("#register-section .rigster-left-sec", 
     { opacity: 0, x: "-60", immediateRender: false },  // FROM values for scroll trigger
     { opacity: 1, x: "0", duration: 1.5, ease: "power1.out" }  // TO values
 )

 .fromTo("#register-section .register-right-sec", 
   { opacity: 0, x: "60", immediateRender: false },  // FROM values for scroll trigger
   { opacity: 1, x: "0", duration: 1.7, ease: "power1.out" }  // TO values
)
      
    }       
   
  }