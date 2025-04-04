let body = document.body
let input = document.querySelectorAll("input.price_range_input")
let  p = document.querySelector("#price_range")
let monitor_section = document.querySelector(".monitor_section")
let label = document.querySelectorAll('label')
let h3 = document.querySelectorAll("h3")
let monitor_plus = document.querySelectorAll(".plus_icon")
let cart =document.querySelector(".cart_number")
let clear_button = document.querySelectorAll(".clear_button")
let bill = document.querySelectorAll(".bill")
let filter = document.querySelector(".filter_section")
let coupenCode = document.querySelector(".coupen_code")
let totalPrice = document.querySelector(".total_price")
let countValue = document.querySelectorAll(".count_value")
let productPrice = document.querySelector(".product_price")


input.forEach((item)=>{
    item.oninput = function(){
        let span = item.nextElementSibling.childNodes[1] ;
        span.innerHTML = this.value;
        
    }
})

label.forEach((text) => {
    text.addEventListener("click",()=>{
        if( text.value == h3.value){
            monitor_section.style.display = "none"

        }
    })
})

monitor_plus.forEach((add)=>{
    add.addEventListener("click",(event)=>{
        event.preventDefault()
        cart.innerHTML++
    })
    
    
})

clear_button.forEach((cleared)=>{
    cleared.addEventListener("click",(event)=>{
       let parent = event.target.parentElement.parentElement.parentElement;
       parent.remove();
    })
})


let menu = document.querySelector(".menu")
let num = 1

menu.addEventListener('click',()=>{
    num++
    if(num  % 2 == 0){
        menu.style.transition = "0.4s"
        menu.style.transform ="rotate(90deg)"
        filter.style.display="none"
    }
    else{
        menu.style.transition = "0.4s"
         menu.style.transform ="rotate(0deg)"
        filter.style.display="unset"
    }

    // filter.classList.toggle("karvendhan")
})

let coupen = document.querySelector(".Add_coupen")
coupen.addEventListener('click',()=>{
    if (coupenCode.value == '2fh0jI684E'){
        let price =  totalPrice.innerText/2;
        totalPrice.innerHTML = price
  }
  else{
    alert("Enter The Coupen Code Correctly !!!")
  }
})



countValue.forEach((carter)=>{

    carter.addEventListener("input", (event)=>{

        if(event.target.value > 5){

            event.target.value = 1;
        
        }
        
        let priceParent = event.target.nextElementSibling
        let actualPrice = priceParent.querySelector(".actual_price").innerHTML

        let quantity = event.target
        let actualQuantity = quantity.value

        let updatePrice = priceParent.querySelector(".product_price")
        
        updatePrice.innerText =  Number( actualPrice ) * Number( actualQuantity )

        

    })

})
