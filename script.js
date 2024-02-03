function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loading();

function loco(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
  })
  document.querySelector("#footer i").addEventListener("click",()=>{
    scroll.scrollTo(0)
  })
  
  var elems = document.querySelectorAll(".elem")
  var page2 = document.querySelector("#page2")
  elems.forEach(function(ele){
      ele.addEventListener("mouseenter",function(){
          var bgimg = ele.getAttribute("data-img")
          page2.style.backgroundImage = `url(${bgimg})`
      })
  })  
}

loco();

let count = 0;
let navi = document.querySelector( "#nav i")
let navi1 = document.querySelector( "#nav #slide")
let navi2 = document.querySelector( "#nav ul")

  navi.addEventListener("click", () => {
    if(count === 0)
    {
      navi.style.transform = 'rotate(45deg) scale(1.5)'
      count=1;
      navi1.style.right = '10%';
      navi2.style.opacity = '1';
    } 
    
    // transform: rotate(45deg) scale(1.2);
    else{
      navi2.style.opacity = '0';
       navi1.style.right = '-15%';
      navi.style.transform = 'rotate(180deg) scale(1)'
      count = 0;
    }
  });