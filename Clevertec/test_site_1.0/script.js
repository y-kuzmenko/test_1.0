let tasks = document.getElementById('myDiv').children,
        i = tasks.length + 1;

        function addCheckbox() {
            let elem = document.getElementById('text').value;            
            let myDiv = document.getElementById("myDiv");

            let task = document.createElement('div');
            task.classList.add('task');

            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";

            let label = document.createElement('label');
            label.htmlFor = "id";
            label.appendChild(document.createTextNode(elem));

            task.appendChild(checkbox);
            task.appendChild(label);
            myDiv.appendChild(task);
        }
        addCheck.addEventListener("click", addCheckbox);


        function hideCheckbox() {
            let tasks = document.getElementById('id');
            let hidden = document.querySelectorAll('input:checked');
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].parentNode.style.display = 'none';
                //hidden[i].checked = false;
            }
        }
        hideCheck.addEventListener("click", hideCheckbox);


        function showCheckbox() {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].style.display === 'none') {
                    tasks[i].style.display = 'block';
                }
            }
        }
        showCheck.addEventListener("click", showCheckbox);


        function removeCheckbox() {
            let checkboxList = document.getElementById('myDiv');
            let deleted = document.querySelectorAll('input:checked');
            for (let i = 0; i < deleted.length; i++) {
                checkboxList.removeChild(deleted[i].parentNode);
            }
        }
        removeCheck.addEventListener("click", removeCheckbox);