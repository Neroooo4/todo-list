const inputElement = document.querySelector(".new-task-input")
const addTaskButton = document.querySelector(".add-task")


const validateInput = () => {
    return inputElement.value.trim().length > 0
}

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid){

        return inputElement.classList.add ('error');
    }

}

addTaskButton.addEventListener('click', () => handleAddTask())