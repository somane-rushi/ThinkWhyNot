
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/1ee8f271b9.js";
document.body.appendChild(script);

// Font Awesome KIT


/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => {
    const {
        clientX,
        clientY
    } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {
        duration: 3500,
        fill: "forwards"
    });
}


const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4.5 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 1500, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "scrollCard":
		return "<i class='fa-solid fa-arrow-up-right'></i>";
    case "services":
		return "<i class='fa-regular fa-arrows-left-right'></i>";
        //return "fa-regular fa-arrows-left-right";
    case "video":
		return "<i class='fa-regular fa-arrows-up-down'></i>";
    case "buttonLink":
      return "";
    case "link":
		return "<i class='fa-regular fa-arrows-up-down'></i>";
	case "readmore":
		return "Read More";
	case "knowmore":
		return "Know More";	
	case "viewwork":
		return "View Work";
	case "viewmore":
		return "View More";
  case "readstory":
      return "Read Story";    
    default:
      return ""; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  //const icon = document.getElementById("trailer-icon");
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    //icon.className = getTrailerClass(interactable.dataset.type);
	$("#trailer-icon").html(getTrailerClass(interactable.dataset.type));
  }
}

// //////

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.serviceScrollBlock',
        // pin: true,
        scrub: 1,
        // markers: true,
        // id: "serviceScrollBlock",
        start: 'top center',
        
        end: () => "+=" + document.querySelector(".serviceScrollBlock").offsetWidth,
          // end: () => "+=" + (imageSection.scrollWidth - document.documentElement.clientWidth),
        //   invalidateOnRefresh: true
    }
})
timeline.from('.my-boxes', {
    xPercent: 500,
    duration: 10,
    delay: 0.5,
    ease: "power1.out"

});

let boxes = gsap.utils.toArray(".serviceCard");

gsap.to(boxes, {

    xPercent: -100 * (boxes.length - 1.7),
    ease: "none",
    scrollTrigger: {
        trigger: "#service",
        // pin: true,
        // markers: true,
        // id: "serviceCard",
        scrub: 1,
        snap: 1 / (boxes.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        start: "25% center", // when the top of the trigger hits the top of the viewport
        end: "75% center",
    }
});

// Filter

let menuToggle = document.querySelector(".menuToggle");
	menuToggle.onclick = function () {
	menuToggle.classList.toggle("active");
	$(".menuToggle").css("background-color", "#fff");
	$(".menuToggle").css("color", "#000");
	$(".menuToggle .filtericon").css("color", "#000");
	$(".menuToggle").css("opacity", "1");
	$(".menuToggle .filtericon").html("<i class='fal fa-filter'></i>");
	$(".menuToggle.active").css("background-color", "#000");
	$(".menuToggle.active").css("color", "#fff");
	$(".menuToggle.active").css("opacity", "0.7");
	$(".menuToggle.active .filtericon").html("<i class='far fa-times'></i>");
	$(".menuToggle.active .filtericon").css("color", "#fff");
};




/////////////////////////////////

// Card Velocity script on scroll

// let proxy = { skew: 0 },
//   skewSetter = gsap.quickSetter(".card", "skewY", "deg"),
//   clamp = gsap.utils.clamp(-30, 30);

// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -500);
    
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       // console.log(skew)
//       // console.log(proxy.skew)
//       proxy.skew = skew;
//       gsap.to(proxy, {
//         skew: 0,
//         duration: 0.8,
//         ease: "power3",
//         overwrite: true,
//         onUpdate: () => skewSetter(proxy.skew)
//       });
//     }
//   }
// });

// gsap.set(".card", { transformOrigin: "left center", force3D: true });

