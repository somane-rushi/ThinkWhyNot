// var tl = gsap.timeline();

// tl
//     .from(".header-box", {
//         duration: 1,
//         y: -100,
//         //opacity: 0,
//         ease: "expo.inOut",
//         // pin: true,
//     })
//     .from(".csBanner", {
//         yPercent: 100,
//         duration: 1,
//         ease: "expo.inOut",
//         delay: -1,
//         // scrollTo: {y: "#overLay", offsetY: 100}  
//     });


// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Initialize Scroll To Plugin
gsap.registerPlugin(ScrollToPlugin);

// Animation on Scroll for Case Study Logo
// gsap.from('.caseStudyBannerLogo', {
//     duration: 1,
//     // y: 100,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '.caseStudyBannerLogo',
//         scroller: '.csBanner',
//         // scrub: 1,
//         start: 'top center',
//         end: 'bottom center',
//         // markers:true,    
//         id: "csLogo"
//     },
// })

// // Animation on scroll for Case Study Title
// gsap.to('.caseStudyTitleBox', {
//     scrollTrigger: {
//         trigger: '.caseStudyTitleBox',
//         scroller: '.csBanner',
//         // scrub: 1,
//         start: 'top 60%',
//         //end: 'bottom center',
//         // markers:true,    
//         id: "csBannerTitle"
//     },
//     opacity: 1,
//     duration: 3,
//     onStart: function () {
//         $(document).ready(function () {
//             $('.caseStudyTitleBox .caseStudyTitle').textillate({
//                 in: {
//                     effect: 'fadeInUp',
//                     sync: true,
//                 }
//             });
//         })
//     },
// })


// // Animation on scroll for Case Study Title
// gsap.to('.caseStudyTitleBox', {
//   scrollTrigger: {
//       trigger: '.caseStudyTitleBox',
//       scroller: '.csBanner',
//       // scrub: 1,
//       start: 'top 60%',
//       //end: 'bottom center',
//       // markers:true,    
//       id: "csBannerTitle"
//   },
//   opacity: 1,
//   duration: 1.5,
//   onStart: function () {
//       $(document).ready(function () {
//           $('.caseStudyTitleBox .caseStudyTitle').textillate({
//               in: {
//                   effect: 'fadeInUp',
//                   sync: true,
//               }
//           });
//       })
//   },
// })

let sections = gsap.utils.toArray(".snappoint");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
    duration: 0.3
  });
}

ScrollTrigger.defaults({
  // markers: true
});

sections.forEach((eachPanel, i) => {
  const mainAnim = gsap.timeline({ paused: true });

  ScrollTrigger.create({
    trigger: eachPanel,
    onEnter: () => goToSection(i)
  });

  ScrollTrigger.create({
    trigger: eachPanel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});

var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', {display: "flex"});

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+="+height+"%",
    scrub: true,
    id: "points",
  }
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapper",
    start: "top top",
    end: "+="+height+"%",
    scrub: true,
    pin: ".philosophie .wrapper",
    pinSpacing: true,
    id: "pinning",
    markers: false
  }
})



points.forEach(function(elem, i) {
  gsap.set(elem, {position: "absolute", top: 0});
if (i == 0) {
  tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
  tl.from(elem.querySelector('img'), {autoAlpha:1}, i)
  tl.from(elem.querySelector('article'), {autoAlpha:1, translateY: 0}, i)
  tl.from(elem.querySelector('.div100'), {autoAlpha:1, translateY: 0}, i)
}else{
  tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
  tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
  tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
  tl.from(elem.querySelector('.div100'), {autoAlpha:1, translateY: 0}, i)
}
  
  
  if (i != points.length-1) {
    tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
    tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
    tl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
    tl.from(elem.querySelector('.div100'), {autoAlpha:1, translateY: 0}, i)
  }
  
});