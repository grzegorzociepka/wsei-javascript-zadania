document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#taskInput');
    const submitButton = document.querySelector('#addTaskButton');
    const deleteAllTaskButton = document.querySelector('#removeFinishedTasksButton');
    const taskList = document.querySelector('#taskList');
    const counter = document.querySelector('#counter');

    const createTaskElement = (value) => {
        const singleTask = document.createElement('li');

        const completeTaskButton = createButton('complete');
        const deleteSingleTaskButton = createButton('delete');
        const text = document.createElement('h4');
        text.textContent = value;
        singleTask.append(text, completeTaskButton, deleteSingleTaskButton);

        completeTaskButton.addEventListener('click', (e) => {
            addTaskToComplete(e.currentTarget);
        });
        deleteSingleTaskButton.addEventListener('click', (e) => {
            removeTask(e.currentTarget);
        });

        return singleTask;
    };
    const addTaskToComplete = (currentTarget) => {
        const taskText = currentTarget.parentElement.querySelector('h4');
        taskText.classList.toggle('complete');
        updateCounter();
    };

    const removeTask = (currentTarget) => {
        currentTarget.parentElement.remove();
        updateCounter();
    };

    const updateCounter = () => {
        counter.textContent = document.querySelectorAll('h4:not(.complete)').length;
    };

    const createButton = (text) => {
        const el = document.createElement('button');
        el.id = text;
        el.textContent = text;
        return el;
    };


    submitButton.addEventListener('click', (e) => {
        if (input.value && input.value.length >= 5 && input.value.length <= 100) {
            const element = createTaskElement(input.value);
            taskList.appendChild(element);
            input.value = '';
            updateCounter();
        }
    });

    deleteAllTaskButton.addEventListener('click', (e) => {
        document.querySelectorAll('.complete').forEach(task => task.parentElement.remove());
        updateCounter();
    });
});