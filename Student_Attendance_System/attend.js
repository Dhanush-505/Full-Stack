let students = [];
const attendanceStorageKey = "attendanceData";
const attendanceData = JSON.parse(localStorage.getItem(attendanceStorageKey) || "{}");

fetch("docment.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        students = data;
        localStorage.setItem("totalStudents", students.length);
        display(students);
    })
    .catch((error) => {
        console.log("error", error);
    });

function display(students) {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    students.forEach(function (stu) {
        const savedStatus = attendanceData[String(stu.id)] || "";
        studentList.innerHTML += `
        <tr>
            <td>${stu.id}</td>
            <td>${stu.name}</td>
            <td>${stu.course}</td>
            <td>
                <select onchange="attend(this.value, ${stu.id})">
                    <option value="" ${savedStatus === "" ? "selected" : ""}>Select</option>
                    <option value="present" ${savedStatus === "present" ? "selected" : ""}>Present</option>
                    <option value="absent" ${savedStatus === "absent" ? "selected" : ""}>Absent</option>
                </select>
            </td>
        </tr>`;
    });
}

function attend(status, id) {
    if (status === "") {
        delete attendanceData[id];
    } else {
        attendanceData[id] = status;
    }

    localStorage.setItem(attendanceStorageKey, JSON.stringify(attendanceData));
    localStorage.setItem("pre", Object.values(attendanceData).filter((s) => s === "present").length);
    localStorage.setItem("abs", Object.values(attendanceData).filter((s) => s === "absent").length);
}