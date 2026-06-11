let student = [];
const attendanceStorageKey = "attendanceData";

fetch('docment.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        student = data;
        display(student);
        const total = student.length;
        document.getElementById("total").innerHTML = total;
        localStorage.setItem("totalStudents", total);
    })
    .catch((error) => {
        console.log("error");
    });

function display(student) {
    const list = document.getElementById("list");
    list.innerHTML = "";
    student.forEach(function (stud) {
        list.innerHTML += `
        <div class="card" onclick="details(${stud.id})">
            <h3>${stud.name}</h3>
            <p>${stud.course}</p>
        </div>
        `;
    });
}

function details(id) {
    const studentData = student.find((stud) => {
        return stud.id === id;
    });
    const details = document.getElementById("details");
    details.innerHTML = `
    <h1> ${studentData.name}</h1>
    <h3>Course : ${studentData.course}</h3>
    <h3>Roll Number : ${studentData.rollno}</h3>
    <h3>Email : ${studentData.email}</h3>
    <h3>Phone : ${studentData.phone}</h3>
    `;
}

const username = localStorage.getItem("username");
document.getElementById("user").innerHTML = "Hello! " + username;

function renderSummary() {
    const attendanceData = JSON.parse(localStorage.getItem(attendanceStorageKey) || "{}");
    const presentCount = Object.values(attendanceData).filter((status) => status === "present").length;
    const absentCount = Object.values(attendanceData).filter((status) => status === "absent").length;
    const total = localStorage.getItem("totalStudents") || "0";
    document.getElementById("total").innerHTML = total;
    document.getElementById("present").innerHTML = presentCount;
    document.getElementById("absent").innerHTML = absentCount;
}

renderSummary();
