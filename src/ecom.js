"strict";
//index.html page
const hamburger = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".nav-bar");
const closeNav = document.querySelector(".close-nav");
const cart = document.querySelector("#cart");
const closeCart = document.querySelector("#close-cart");
const cartDetail = document.querySelector("#cart-detail");
let productQty = document.querySelectorAll(".product-no");

//Open nav-bar
if (hamburger) {
  hamburger.addEventListener("click", function () {
    nav.classList.remove("hidden");
  });
}

//close nav-bar
closeNav.addEventListener("click", function () {
  nav.classList.add("hidden");
});

//singleproduct.hmtl page
let mainImage = document.querySelector("#main-image");
let minImage = document.querySelectorAll(".mini-image");

for (let i = 0; i < minImage.length; i++) {
  minImage[i].onclick = function () {
    mainImage.src = minImage[i].src;
  };
}

//Open and close cart
//show cart-detail
cart.addEventListener("click", function () {
  cartDetail.classList.remove("hidden");
});

//close cart-detail
closeCart.addEventListener("click", function () {
  cartDetail.classList.add("hidden");
});

/* add item cart
let addToCart = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCart.length; i++) {
  const addtoCart = addToCart[i];
  addtoCart.addEventListener("click", function (event) {
    cartBtn = event.target;
    let cartBtn_parent = cartBtn.parentElement;
    let cartBtn_grandparent = cartBtn.parentElement.parentElement;
    let cartBtn_greatgrandParent = cartBtn_grandparent.parentElement;

    const itemName = cartBtn_greatgrandParent.children[1].children[1].innerText;

    const itemPrice = cartBtn_grandparent.children[0].innerText;
    const itemImage = cartBtn_greatgrandParent.querySelector("img").src;

    let itemContainer = document.createElement("section");
    itemContainer.innerHTML = ` <main  class="flex flex-col items-center justify-center space-y-60">
        <article class=" pt-6 md:pt-8 ">
     <div class="w-[100%] h-[1px] bg-gray-400 "></div>
        <section class="flex flex-col md:flex-row items-center pt-4">

          <!--image-->
          <div class="flex flex-col items-center justify-center">
            <div class="h-[200px] w-[200px]">
              <img
                class="w-[100%] h-[180px] md:h-[200px] mx-auto"
                src="${itemImage}"
                alt=""
              />
            </div>

            <div class=" pt-[5px] md:pt-[10px] text-[16px] font-bold">
              ${itemName}            </div>
          </div>

      <div class="flex flex-col space-y-3 md:space-y-12">
            <div
            class="flex flex-row items-center justify-center space-x-8 px-5"
          >
            <div class="text-[20px]">${itemPrice}</div>
          <div
            class="h-[25px] w-[25px] rounded-full text-[20px] cursor-pointer flex items-center justify-center hover:bg-red-600 transition duration-300 ease-in-out hover:text-white"
          >
            <i class="fa fa-trash-o"></i>
          </div>
          </div>

           <div
            class="flex flex-row items-center justify-center space-x-8 px-5"
          >
           <input
              class="w-[80px] border text-center border-gray-400 outline-none py-1 text-[20px]"
              type="number"
              value="1"
            />
            <div class="text-[20px] font-bold">${itemPrice}</div>
          </div>
          </div>
      </div>
        </section>
      </article>
    </main>`;

    cartDetail.append(itemContainer);
  });

  //Working on the prudcut input numer
  for (let i = 0; i < productQty.length; i++) {
    const product_Qty = productQty[i];
    product_Qty.addEventListener("click", function (event) {
      productNo = event.target;
      let productNo_parent = productNo.parentElement;
      let productNo_secondgen = productNo_parentparentElement;
      let productNo_thirdgen = productNo_secondgen.parentElement;
      let productNo_fourthgen = productNo_thirdgen.parentElement;
      let productNo_fifthgen = productNo_fourthgen.parentElement;
      let productNo_sixthgen = productNo_fifthgen.parentElement;

      priceField = productNo_secondgen.querySelector(".price-field")[0];
      subTotalField = productNo_parent.querySelector("sub-total")[1];
      priceField_content = priceField.children[0].innerText;
      console.log(priceFieldField);
    });
  }
}
*/
