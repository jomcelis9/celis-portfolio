const state = {
  file: null,
  pages: 1,
  copies: 1,
  color: "bw",
};

// Upload Document Logid

const uploadDoc = document.getElementById("uploadDoc");
const filename = document.getElementById("filename");

uploadDoc.addEventListener("change", () => {
  state.file = uploadDoc.files[0];
  filename.textContent = state.file ? state.file.name : "";
});

// Select print options

const pages = document.getElementById("pages");
const copies = document.getElementById("copies");
const color = document.getElementById("color");

pages.addEventListener("input", updateState());
copies.addEventListener("input", updateState());
color.addEventListener("change", updateState());

function updateState() {
  state.pages = +pages.value;
  state.copies = +copies.value;
  state.color = color.value;
  console.log(state);
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
e.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  let valid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name reqiured";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (!password.contains("@")) {
    document.getElementById("passwordError").textContent =
      "It should contain @";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (valid) submitOrder();
});

const status = document.getElementById("status");

function submitOrder() {
  status.textContent = "Submitting";

  setTimeout(() => {
    status.textContent = "Order Successfull!";
  }, 1500);
}


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "Karen", age: 40 },
  { name: "Karen", age: 35 },
];

// const namesOver25 = users
//   .filter((user) => user.age > 25)
//   .map((user) => user.name);


console.log(users.filter((user) => user.age > 25).map((user) => user.name));