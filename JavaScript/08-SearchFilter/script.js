// *********** Products **************

let products = {
  data: [
    {
      productName: "Regular White T-shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  //  Card should have category
  card.classList.add("card", "i.category");

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

  //   place products inside card
  document.getElementById("products").appendChild(card);
}
