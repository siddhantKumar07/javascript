let add = document.querySelector("#add");
let close = document.querySelector(".close");
let formContainer = document.querySelector(".form-container");
let createBtn = document.querySelector(".create");
const container = document.getElementById("cards-container");

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

// ✅ SAVE DATA
function saveToLocalStorage(obj) {
  const oldData = JSON.parse(localStorage.getItem("tasks")) || [];
  oldData.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldData));
}

// ✅ LOAD DATA (WITH DEFAULT)
function loadFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("tasks"));

  // if empty → use default
  if (!data || data.length === 0) {
    data = defaultData;
    localStorage.setItem("tasks", JSON.stringify(defaultData));
  }

  container.innerHTML = "";

  data.forEach((item, index) => {
    createCard(item, index);
  });
}

// ✅ CREATE BUTTON
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

  // save
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

// ✅ LOAD ON PAGE START
window.addEventListener("DOMContentLoaded", loadFromLocalStorage);