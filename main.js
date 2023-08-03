window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task) {
            alert("Please enter some task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        
        // task_input_el.localStorage.setItem(value);
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
      
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";
        
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() === "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_input_el.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });
//- added this functionality too so that I can not change text field while the user opt to edit something :p
//- later even changed it to asaving whatever we have at that point, lmao am a genius, Woohooo!
        task_input_el.addEventListener('focusout', () => {
            if (task_edit_el.innerText.toLowerCase() === "save") {
                // alert("Please complete editing the task.");
                // task_input_el.focus();
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        // task_delete_el.addEventListener('click', () => {
        //     list_el.removeChild(task_el);
        // });

        // - Showing a confirmation dialogue box before deleting the task
        task_delete_el.addEventListener('click', () => {
            // Show a confirmation dialog before deleting the task
            const isConfirmed = confirm("Are you sure you want to delete this task?");
            if (isConfirmed) {
                list_el.removeChild(task_el);
            }
        });
    });
});
//
//- adding a confirmation button for delete  ✅
// was also thinking about adding icons instead of edit and delete buttons but I think that part is for html and css and I dont really need to do that

