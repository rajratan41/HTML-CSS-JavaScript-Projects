// *********** Products **************

let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "topwear",
      price: "30",
      image: "./assets/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "bottomwear",
      price: "49",
      image: "./assets/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "watch",
      price: "99",
      image: "./assets/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "topwear",
      price: "29",
      image: "./assets/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "jacket",
      price: "129",
      image: "./assets/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "bottomwear",
      price: "89",
      image: "./assets/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "jacket",
      price: "189",
      image: "./assets/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "bottomwear",
      price: "49",
      image: "./assets/comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  //  Card should have category and should stay hidden initally
  card.classList.add("card", i.category, "hide");

  //  Create Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //   img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  //   place image element inside imgContainer div (element)
  imgContainer.appendChild(image);

  //   place imgContainer inside card element (div)
  card.appendChild(imgContainer);

  // Create Container
  let container = document.createElement("div");
  container.classList.add("container");

  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();

  // append name to container
  container.appendChild(name);

  // Price
  let price = document.createElement("h6");
  price.innerText = `$ ${i.price}`;
  // place price inside container
  container.appendChild(price);

  //   place products inside card
  document.getElementById("products").appendChild(card);
  // place container inside card
  card.appendChild(container);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

// initially display all products
window.onload = () => {
  filterProduct("all");
};
