let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        function displayTasks() {
            let list = document.getElementById("taskList");
            list.innerHTML = "";

            tasks.forEach((task, index) => {
                let li = document.createElement("li");
                li.innerText = task;

                let editBtn = document.createElement("button");
                editBtn.innerText = "Edit";
                editBtn.onclick = () => editTask(index);

                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
                deleteBtn.onclick = () => deleteTask(index);

                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                list.appendChild(li);
            });
        }

        function addTask() {
            let input = document.getElementById("taskInput");
            if (input.value !== "") {
                tasks.push(input.value);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                input.value = "";
                displayTasks();
            }
        }

        function editTask(index) {
            let newTask = prompt("Edit task:", tasks[index]);
            if (newTask !== null) {
                tasks[index] = newTask;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                displayTasks();
            }
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }

        displayTasks();