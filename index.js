const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addtask() {
    // ถ้าไม่ใช่ข้อความ จะมีแจ้งเตือนให้ใส่ข้อความ
    if (inputBox.value === '') {
        alert("your put massage");
    }
    
    else {
        
        let li = document.createElement("li"); // create li สร้าว li
        li.innerHTML = inputBox.value; // add input text inside <li></li>   ใส่ข้อความใน li
        listContainer.appendChild(li); // add <li></li> into list ให้ li     อยู่ใน list
        

        let span = document.createElement("span"); //create <span>❌</span>   สร้างปุ่ม ❌
        span.innerHTML = "❌";
        li.appendChild(span); // add <span>❌</span> inside <li></li>        ปุ่ม ❌ อยู่ใน li
    }
    inputBox.value = ""; // Clear the input field  ทำให้ช่องใส่ข้อความว่าง
    saveData(); // save data to localstorage    เก็บข้อมูลบนคอมตัวเอง
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark task as done/undone  ทำเครื่องหมาย เช็ค/ไม่เช็ค
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Delete the whole <li> ลบข้อมูล li
        saveData();
    }
}, false);

//save data to localstorage เก็บข้อมูลบนคอม
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Loads the saved tasks from localStorage and shows them again when the page reloads ทำให้ข้อมูลที่เก็บไว้บนคอม นำมาแสดงใหม่ตอนเปิดหน้าเว็บไฃส์
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask()


inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addtask();
    }
});