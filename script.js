const fruits = [
  "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew",
  "Indian Fig", "Jackfruit", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange",
  "Papaya", "Quince", "Raspberry", "Strawberry", "Tangerine", "Ugli Fruit",
  "Vanilla", "Watermelon", "Xigua", "Yellow Passion Fruit", "Zucchini", "Pineapple",
  "Blueberry", "Cantaloupe", "Dragon Fruit", "Grapefruit", "Guava", "Lychee", 
  "Mandarin", "Passionfruit", "Peach", "Pear", "Plum", "Pomegranate"
];
let fruitlist = document.querySelector("#fruitlist");

let fruitsPerPage = 10;

let totalPages = Math.ceil(fruits.length / fruitsPerPage);

const showfruits = (start, end) => {
  fruitslist.innerHTML = "";
  for (let i = start; i < end; i++) {
    if (fruits[i]) {
      let fruitsItem = document.createElement("li");
      fruitsItem.textContent = fruits[i];
      fruitslist.appendChild(fruitsItem);
    }
  }
};

for (let i = 0; i < totalPages; i++) {
  let button = document.createElement("button");
  button.classList.add("page");
  button.textContent = i + 1;
  button.addEventListener("click", () => {
    let start = i * fruitsPerPage;
    let end = start + fruitsPerPage;
    showfruits(start, end);
  });
  document.querySelector("#pagination-container").appendChild(button);
}

showfruits(0, fruitsPerPage);