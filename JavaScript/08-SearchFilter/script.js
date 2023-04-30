// *********** Products **************

let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "Topwear",
      price: "30",
      image: "./assets/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./assets/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "./assets/sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "./assets/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "./assets/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "./assets/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "./assets/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./assets/comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  //  Card should have category and should stay hidden initally
  card.classList.add("card", "i.category", "hide");

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
