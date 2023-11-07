let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('header .flex .navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;


const btn = document.querySelectorAll("button");
btn.forEach(function(button,index){
button.addEventListener("click", function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H3").innerText
    var productPrice = product.querySelector("span").innerText

    // console.log(productImg,productName,productPrice)

    addCart(productPrice,productImg,productName)
})
   

})

function addCart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
      var productT = document.querySelectorAll(".title")
      if(productT[i].innerHTML==productName){
        alrerE = "Sản phẩm của bạn đã có trong giỏ hàng"
        alert(alrerE)
        return
      }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;"src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>$</sup></p></td><td></td><td><input style="width:30px;outline: none;"type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0

    console.log(cartItem)
    for (var i = 0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input").value
      var productPrice = cartItem[i].querySelector(".prices").innerHTML
      totalA = inputValue * productPrice
      totalC = totalC + totalA
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".icons span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    console.log(totalC)

    inputchange() 
}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR= cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
    }

}
function inputchange(){
  var cartItem = document.querySelectorAll("tbody tr")
  for(var i=0;i<cartItem.length;i++){
      var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
        carttotal()
      })
      
  }

}

const cartbtn = document.querySelector(".cart-icon")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right="-100%"
})
