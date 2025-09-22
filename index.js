const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addtask() {
    // ถ้าไม่ใช่ข้อความ จะมีแจ้งเตือนให้ใส่ข้อความ
    if (inputBox.value === '') {
        alert("your put massage");
    }
    
    else {
        
        let li = document.createElement("li"); // create li 
        li.innerHTML = inputBox.value; // add input text inside <li></li>
        listContainer.appendChild(li); // add <li></li> into list
        

        let span = document.createElement("span"); //create <span>❌</span>
        span.innerHTML = "❌";
        li.appendChild(span); // add <span>❌</span> inside <li></li>
    }
    inputBox.value = ""; // Clear the input field
    saveData(); // save data to localstorage
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark task as done/undone
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Delete the whole <li>
        saveData();
    }
}, false);

//save data to localstorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Loads the saved tasks from localStorage and shows them again when the page reloads
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask()