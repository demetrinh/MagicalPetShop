"use strict";

let largePets = [
  {
    type: "Asian Lung Dragon",
    quantity: 2,
    price: 1200,
    experience: "expert",
    img: "images/asianlung.png",
  },
  {
    type: "European Long-tail Dragon",
    quantity: 4,
    price: 1000,
    experience: "expert",
    img: "images/europeanlongtail.png",
  },
  {
    type: "Unicorn",
    quantity: 3,
    price: 750,
    experience: "beginner",
    img: "images/unicorn.svg",
  },
  {
    type: "Pegasus",
    quantity: 7,
    price: 900,
    experience: "intermediate",
    img: "images/pegasus.png",
  },
  {
    type: "Griffin",
    quantity: 1,
    price: 4000,
    experience: "expert",
    img: "images/griffin.jpg",
  },
  {
    type: "Castle-born Gargoyle",
    quantity: 4,
    price: 50,
    experience: "beginner",
    img: "images/castlegargoyle.png",
  },
];

let smallPets = [
  {
    type: "Wyvern",
    quantity: 10,
    price: 100,
    experience: "intermediate",
    img: "images/wyvern.jpg",
  },
  {
    type: "Autumnal Fairy",
    quantity: 15,
    price: 600,
    experience: "beginner",
    img: "images/autumnalfairy.png",
  },
  {
    type: "Vernal Fairy",
    quantity: 15,
    price: 650,
    experience: "intermediate",
    img: "images/vernalfairy.png",
  },
  {
    type: "Chapel-born Gargoyle",
    quantity: 7,
    price: 150,
    experience: "beginner",
    img: "images/chapelgargoyle.png",
  },
  {
    type: "Cat Familiar",
    quantity: 10,
    price: 300,
    experience: "beginner",
    img: "images/cat.jpg",
  },
  {
    type: "Baby Yoda",
    quantity: 1,
    price: 12000,
    experience: "expert",
    img: "images/yodasilhouette.jpg",
  },
];

// let imgArray = new Array();
// imgArray[0] = new Image();
// imgArray[0].src = "asianlung.png";

let menuContainer = document.querySelector(".menu");

let largeContainer = document.querySelector(".large");

const display = () => {
  largePets.forEach((largePet, index) => {
    let newImage = document.createElement("img");
    newImage.classList.add("image");
    newImage.setAttribute("src", largePet.img);
    let card = document.createElement("div");
    card.classList.add("card");
    let typeSection = document.createElement("p");
    typeSection.innerText = largePet.type;
    typeSection.classList.add("card-text");
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${largePet.quantity}`;
    quantitySection.classList.add("card-text");
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${largePet.price}`;
    priceSection.classList.add("card-text");
    let experienceSection = document.createElement("p");
    experienceSection.innerText = largePet.experience;
    experienceSection.classList.add("card-text");
    let addButton = document.createElement("button");
    addButton.setAttribute("data-index", index);
    addButton.setAttribute("data-type", "large");
    addButton.innerText = "Add to Wagon";
    addButton.classList.add("cart-button");
    let imageDiv = document.createElement("div");
    imageDiv.append(newImage);
    imageDiv.classList.add("image-container");
    card.append(
      imageDiv,
      typeSection,
      quantitySection,
      priceSection,
      experienceSection,
      addButton
    );
    largeContainer.append(card);
  });
};
display();

let smallContainer = document.querySelector(".small");

const smallDisplay = () => {
  smallPets.forEach((smallPet, index) => {
    let newImage = document.createElement("img");
    newImage.classList.add("image");
    newImage.setAttribute("src", smallPet.img);
    let card = document.createElement("div");
    card.classList.add("card");
    let typeSection = document.createElement("p");
    typeSection.innerText = smallPet.type;
    typeSection.classList.add("card-text");
    let quantitySection = document.createElement("p");
    quantitySection.innerText = `qty: ${smallPet.quantity}`;
    quantitySection.classList.add("card-text");
    let priceSection = document.createElement("p");
    priceSection.innerText = `price: ¥${smallPet.price}`;
    priceSection.classList.add("card-text");
    let experienceSection = document.createElement("p");
    experienceSection.innerText = smallPet.experience;
    experienceSection.classList.add("card-text");
    let smallImage = document.createElement("img");
    let addButton = document.createElement("button");
    addButton.setAttribute("data-index", index);
    addButton.setAttribute("data-type", "small");
    addButton.innerText = "Add to Wagon";
    addButton.classList.add("cart-button");
    let imageDiv = document.createElement("div");
    imageDiv.append(newImage);
    imageDiv.classList.add("image-container");

    card.append(
      imageDiv,
      typeSection,
      quantitySection,
      priceSection,
      experienceSection,
      addButton
    );
    smallContainer.append(card);
  });
};
smallDisplay();

let cartArray = [];
let checkoutArrayContainer = document.querySelector(".checkout-array");
let checkoutContainer = document.querySelector(".checkout");
let amount = document.querySelector(".tendered");
let form = document.querySelector(".checkout-form");
let cardEntry = document.querySelector(".credit-card");

let sum = 0;
let tax = 0;
let total = 0;
let change = document.querySelector(".change");

menuContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart-button")) {
    let index = e.target.getAttribute("data-index");
    let type = e.target.getAttribute("data-type");
    if (type === "large") {
      cartArray.push(largePets[index]);
      console.log(cartArray);
    } else {
      cartArray.push(smallPets[index]);
      console.log(cartArray);
    }
  }
  checkoutArrayContainer.innerHTML = "";
  total = 0;
  sum = 0;
  tax = 0;
  cartArray.forEach((object) => {
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-item");
    let typeSection = document.createElement("p");
    typeSection.innerText = object.type;
    typeSection.classList.add("checkout-pet");
    let priceSection = document.createElement("p");
    priceSection.innerText = `¥${object.price}`;
    priceSection.classList.add("checkout-pet");
    checkoutArrayContainer.append(cartDiv);
    cartDiv.append(typeSection, priceSection);
    let card = document.createElement("div");
    card.classList.add("checkout-card");
    card.append(cartDiv);
    checkoutArrayContainer.append(card);
    sum += object.price;
    tax = sum * 0.06;
    total = sum + tax;
    let subTotal = document.querySelector(".subtotal");
    subTotal.innerText = `Subtotal: ¥${sum}`;
    let taxes = document.querySelector(".taxes");
    taxes.innerText = `Tax: ¥${tax}`;
    let totally = document.querySelector(".total");
    totally.innerText = `Total: ¥${total}`;
  });
  console.log(sum);
  console.log(tax);
  console.log(total);
});

let cartButton = document.querySelector(".cart");

cartButton.addEventListener("click", () => {
  checkoutContainer.classList.remove("hide");
});

let exit = document.querySelector(".exit");
exit.innerText = "Keep Shopping";
exit.addEventListener("click", () => {
  checkoutContainer.classList.add("hide");
});

function show1() {
  document.getElementById("cash-input").style.display = "block";
}
function show2() {
  document.getElementById("credit-input").style.display = "block";
}

let cashForm = document.querySelector(".cash-form");
// let receiptContainer = document.querySelector(".popup");
// let receiptButton = document.querySelector(".receipt");
// receiptButton.addEventListener("submit", (e) => {
//   receiptContainer.classList.remove("hide");
// });

let receiptButton = document.querySelector(".receipt-button");

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutArrayContainer.innerHTML = "";
  let data = new FormData(cashForm);
  let cashValue = data.get("payment");
  let changeAmount = cashValue - total;
  console.log(cashValue);
  console.log(total);
  change.innerText = `Change: ¥${changeAmount}`;
  receiptButton.classList.remove("hide");
  receiptButton.innerText = "Receipt";
});

let popup = document.querySelector(".popup");
let span = document.querySelector(".span");
let checkoutBox = document.querySelector(".checkout-box");
receiptButton.addEventListener("click", (e) => {
  popup.classList.remove("hide");
  checkoutBox.classList.add("hide");
  console.log("hi");
  popup.append(checkoutArrayContainer, span);
  checkoutArrayContainer.innerHTML = "";
  total = 0;
  sum = 0;
  tax = 0;
  cartArray.forEach((object) => {
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-item");
    let typeSection = document.createElement("p");
    typeSection.innerText = object.type;
    typeSection.classList.add("checkout-pet");
    let priceSection = document.createElement("p");
    priceSection.innerText = `¥${object.price}`;
    priceSection.classList.add("checkout-pet");
    checkoutArrayContainer.append(cartDiv);
    cartDiv.append(typeSection, priceSection);
    let card = document.createElement("div");
    card.classList.add("checkout-card");
    card.append(cartDiv);
    checkoutArrayContainer.append(card);
    sum += object.price;
    tax = sum * 0.06;
    total = sum + tax;
    let subTotal = document.querySelector(".subtotal");
    subTotal.innerText = `Subtotal: ¥${sum}`;
    let taxes = document.querySelector(".taxes");
    taxes.innerText = `Tax: ¥${tax}`;
    let totally = document.querySelector(".total");
    totally.innerText = `Total: ¥${total}`;
  });
  console.log(sum);
  console.log(tax);
  console.log(total);
});
let exit2 = document.querySelector(".exit2");
exit2.innerText = "Keep Shopping";
exit2.addEventListener("click", () => {
  popup.classList.add("hide");
  checkoutContainer.classList.add("hide");
  checkoutBox.classList.remove("hide");
});
