let add = document.querySelector("#add");
let close = document.querySelector(".close");
let formContainer = document.querySelector(".form-container");
let createBtn = document.querySelector(".create");
const container = document.getElementById("cards-container");
let newer = document.querySelector("#newer");
let older = document.querySelector("#older");

// Track current card index
let currentCardIndex = 0;

// ✅ DEFAULT DATA
const defaultData = [
  {
    img: "",
    name: "Rahul Sharma",
    town: "Lucknow",
    purpose: "Looking for a frontend developer job",
    category: "Job",
  },
  {
    img: "",
    name: "Anjali Verma",
    town: "Delhi",
    purpose: "Need help with React project",
    category: "Help",
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

// ✅ CREATE CARD FUNCTION
function createCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.zIndex = index + 1;
  card.style.transform = `translateY(${index * -12}px)`;

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

// to update card display based on current index
function updateCardDisplay() {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  container.innerHTML = "";
  
  data.forEach((item, index) => {
    createCard(item, index);
  });

  // Show cards with stacking effect
  const cards = container.querySelectorAll(".card");
  cards.forEach((card, index) => {
    if (index < currentCardIndex) {
      // Cards before current: hidden
      card.style.opacity = "0";
      card.style.pointerEvents = "none";
    } else if (index === currentCardIndex) {
      // Current card: fully visible on top
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";
      card.style.transform = `translateY(0px) scale(1)`;
      card.style.zIndex = 1000 - index;
    } else {
      // Cards after current: slightly visible behind with offset
      card.style.opacity = "0.6";
      card.style.pointerEvents = "none";
      card.style.transform = `translateY(${(index - currentCardIndex) * 8}px) scale(0.98)`;
      card.style.zIndex = 1000 - index;
    }
  });
}

// to save the data at the local storage (new card at top)
function saveToLocalStorage(obj) {
  const oldData = JSON.parse(localStorage.getItem("tasks")) || [];
  oldData.unshift(obj); // Add new card at the beginning
  localStorage.setItem("tasks", JSON.stringify(oldData));
}

// to load data from local storage and display cards
function loadFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("tasks"));

  // if empty → use default
  if (!data || data.length === 0) {
    data = defaultData;
    localStorage.setItem("tasks", JSON.stringify(defaultData));
  }

  currentCardIndex = 0; // Reset to first card
  updateCardDisplay();
}

// to show the previous card
newer.addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCardDisplay();
  }
});

// to show the next card
older.addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("tasks")) || [];
  if (currentCardIndex < data.length - 1) {
    currentCardIndex++;
    updateCardDisplay();
  }
});

// to create a new card
createBtn.addEventListener("click", function () {
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

  const newData = { img, name, town, purpose, category };

  // save (new card at top)
  saveToLocalStorage(newData);

  // reload UI
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

// to load data on page start
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);