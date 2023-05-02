let names = [
  "Mary Valdez",
  "Alexis Davis",
  "Emma Stewart",
  "Roberto Spencer",
  "Daniel Lawson",
  "Toni Jones",
  "Keith Kline",
  "Steven Mcdowell II",
  "John Drake",
  "Mr. Jaime Baker MD",
  "Candice Turner",
  "Christopher Ellis",
  "Christopher Ray",
  "Melissa Wilson",
  "Mr. James Walker MD",
  "Reginald Gray",
  "Brittany Turner",
  "Richard Rice",
  "Ariana Morgan",
  "Tracey Pacheco",
];

// sort names in ascending order
let sortedName = names.sort();
// console.log(sortedName);

// reference
let input = document.getElementById("input");

// Initially remove all elements (so if user erases a letter or adds new letter then clean previous outputs)
removeElements();

// Execute function on keyup
input.addEventListener("keyup", (e) => {
  // loop through above array
  for (let i of sortedName) {
    // convert input to lowerCase and compare with each string
    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      // create li element
      let listItem = document.createElement("li");
      //   one common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      // Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";

      word = word + i.substr(input.value.length);
      //   console.log(word);

      // Display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  // clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
