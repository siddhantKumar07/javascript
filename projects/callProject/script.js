let add = document.querySelector("#add");
let close = document.querySelector(".close");
let formContainer = document.querySelector(".form-container");
let createBtn = document.querySelector(".create");
const container = document.getElementById("cards-container");

let newer = document.querySelector("#newer");
let older = document.querySelector("#older");

let blackDot = document.querySelector(".black");
let purple = document.querySelector(".purple");
let brown = document.querySelector(".brown");
let teal = document.querySelector(".teal");

let currentCardIndex = 0;

// default data to show when localStorage is empty
const defaultData = [
  {
    img: "",
    name: "Rahul Sharma",
    town: "Lucknow",
    purpose: "Looking for a frontend developer job",
    category: "Job",
    color: "black",
  },
  {
    img: "",
    name: "Anjali Verma",
    town: "Delhi",
    purpose: "Need help with React project",
    category: "Help",
    color: "black",
  },
];

// show form
add.addEventListener("click", () => {
  formContainer.style.display = "block";
});

// hide form
close.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// it will create a card element based on the provided data and index, and append it to the container
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.style.backgroundColor = data.color || "black"; // ✅ default black
  card.style.zIndex = 1000 - index;

  card.innerHTML = `
    <div class="profile">
        <img src="${data.img || "https://i.pravatar.cc/100"}" alt="">
        <div>
            <h3>${data.name}</h3>
            <p>${data.town}</p>
        </div>
    </div>

    <div class="info">
        <div>
            <p>${data.purpose}</p>
            <span>${data.category}</span>
        </div>
        <div>
            <p>${index + 1} time</p>
        </div>
    </div>

    <div class="actions">
        <button class="call">📞 Call</button>
        <button class="msg">Message</button>
    </div>
  `;

  container.append(card);
}

// it will save the new card data to localStorage
function saveToLocalStorage(obj) {
  const oldData = JSON.parse(localStorage.getItem("tasks")) || [];
  oldData.unshift(obj);
  localStorage.setItem("tasks", JSON.stringify(oldData));
}

// it will update the card display based on the currentCardIndex and data in localStorage
function updateCardDisplay() {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  container.innerHTML = "";

  data.forEach((item, index) => {
    createCard(item, index);
  });

  const cards = container.querySelectorAll(".card");

  cards.forEach((card, index) => {
    if (index < currentCardIndex) {
      card.style.opacity = "0";
    } else if (index === currentCardIndex) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0px) scale(1)";
    } else {
      card.style.opacity = "0.6";
      card.style.transform = `translateY(${(index - currentCardIndex) * 8}px) scale(0.98)`;
    }
  });
}

// it will load data from localStorage and display the first card
function loadFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("tasks"));

  if (!data || data.length === 0) {
    localStorage.setItem("tasks", JSON.stringify(defaultData));
  }

  currentCardIndex = 0;
  updateCardDisplay();
}

// it will create a new card and save it to localStorage
createBtn.addEventListener("click", () => {
  const img = document.getElementById("img-url").value;
  const name = document.getElementById("full-name").value;
  const town = document.getElementById("home-town").value;
  const purpose = document.getElementById("purpose").value;
  const category = document.querySelector(
    'input[name="category"]:checked'
  )?.value;

  if (!name || !town || !purpose || !category) {
    alert("Please fill all fields!");
    return;
  }

  const newData = {
    img,
    name,
    town,
    purpose,
    category,
    color: "black", // default black
  };

  saveToLocalStorage(newData);
  loadFromLocalStorage();

  // clear form
  document.getElementById("img-url").value = "";
  document.getElementById("full-name").value = "";
  document.getElementById("home-town").value = "";
  document.getElementById("purpose").value = "";
  document
    .querySelectorAll('input[name="category"]')
    .forEach((r) => (r.checked = false));

  formContainer.style.display = "none";
});

// navigation buttons
newer.addEventListener("click", () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCardDisplay();
  }
});

older.addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  if (currentCardIndex < data.length - 1) {
    currentCardIndex++;
    updateCardDisplay();
  }
});

// it will change the color of the current card and save it to localStorage
function changeColor(color) {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];

  if (data[currentCardIndex]) {
    data[currentCardIndex].color = color;
    localStorage.setItem("tasks", JSON.stringify(data));
    updateCardDisplay();
  }
}

// color buttons
blackDot.onclick = () => changeColor("black");
purple.onclick = () => changeColor("purple");
brown.onclick = () => changeColor("brown");
teal.onclick = () => changeColor("teal");

// load on start
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);