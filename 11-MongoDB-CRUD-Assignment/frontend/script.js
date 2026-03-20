const API = "http://localhost:5000/students";

const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");

// Load students
async function loadStudents() {
  const res = await fetch(API);
  const data = await res.json();

  list.innerHTML = "";

  data.forEach(student => {
    list.innerHTML += `
      <div class="student">
        <h3>${student.name}</h3>
        <p>${student.email}</p>
        <p>${student.batch}</p>
        <button onclick="deleteStudent('${student._id}')">Delete</button>
      </div>
    `;
  });
}

// Add student
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const student = {
    name: name.value,
    email: email.value,
    batch: batch.value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  form.reset();
  loadStudents();
});

// Delete student
async function deleteStudent(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadStudents();
}

// Initial load
loadStudents();