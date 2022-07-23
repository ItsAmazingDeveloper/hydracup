document.onscroll = function (){
    let q = document.body.scrollTop
    console.log(q);
    if (q > 950) {
         $(".back-prod").css("opacity", "1")
    }
    if (q > 1400) {
        $("#three1").css("opacity", "1")
        
    }
}

let left = document.getElementById('left');
let right = document.getElementById('right');
let image = document.getElementById('image');
let three = document.getElementById("three1");
let lrm = document.getElementById("lrm");
let threeName = document.getElementById("three-name");
let img = ['bottle4.png', 'bottle5.png', 'bottle6.png', 'bottle7.png'];
let back = ['#f7718c', '#7558a8', '#74d5cb', 'darkgray']
let text = ["Ultra Pink", "Atomic Purple", "Hi-Res Teal", "Everest White/Gold"]
image.style.backgroundImage = `url(${img[0]})`;
three.style.background = back[0]

three.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0036/7135/9599/t/6/assets/noise.png?v=17204573524274433751646833885)`;
// threeName.innerHTML(text[0])
image.style.backgroundSize = `cover`;
let gago = 0;
right.onclick = function () {
    gago++;
    if (gago == img.length) {
        gago = 0;
    }
    three.style.background = back[gago]
    image.style.backgroundImage = `url(${img[gago]})`;
    lrm.onmouseenter = function (){
        lrm.style.color  = back[gago]
    }
    lrm.onmouseleave = function (){
        lrm.style.color = "white";
    }
    three.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0036/7135/9599/t/6/assets/noise.png?v=17204573524274433751646833885)`;
    // threeName.innerHTML(text[gago])
}
left.onclick = function () {
    if (gago == 0) {
        gago = img.length;
    }
    gago--;
    image.style.backgroundImage = `url(${img[gago]})`;
    three.style.background = back[gago]
    lrm.onmouseenter = function (){
        lrm.style.color  = back[gago]
    }
    lrm.onmouseleave = function (){
        lrm.style.color = "white";
    }
    // threeName.innerHTML(text[gago])
    three.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0036/7135/9599/t/6/assets/noise.png?v=17204573524274433751646833885)`;
}

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });


  
