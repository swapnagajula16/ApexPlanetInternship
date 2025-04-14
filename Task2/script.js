const form = document.getElementById("myForm");
const errorMsg = document.getElementById("errorMsg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      errorMsg.textContent = "All fields are required.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Please enter a valid email.";
      return;
    }

    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
  });
}

// To-Do List
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTask(this)">Delete</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
