let expenses=[]
fetch('document.json')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        expenses=data;
        display(expenses);
        update();
    })
    .catch((error)=>{
        console.log("error:",error);
    })
function display(expenseList){
    const expenseBody = document.getElementById("expenseBody");
    expenseBody.innerHTML="";
    expenseList.forEach(list =>{
        expenseBody.innerHTML +=`
        <tr>
            <td>${list.id}</td>
            <td>${list.title}</td>
            <td>${list.category}</td>
            <td>₹${list.amount}</td>
            <td><button class="delete-btn" onclick="deleteExpense(${list.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}
function update(){
    const total =expenses.reduce((sum,expense)=>{
        return sum + expense.amount;
    },0);
    const highest =expenses.reduce((max,expense)=>{
        return expense.amount > max ? expense.amount :max;
    },0);
    document.getElementById("totalexpense").innerText=`₹${total}`;
    document.getElementById("totaltransactions").innerText=expenses.length;
    document.getElementById("highestexpense").innerText=`₹${highest}`;
}
function addExpenses(...newExpenses){
    expenses.push(...newExpenses);
    display(expenses);
    update();
}
document.getElementById("addbtn").addEventListener("click",()=>{
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const amount = Number(document.getElementById("amt").value);
    if(title === "" || amount === 0){

        alert("Please enter valid data");

        return;
    }
    const newExpense = {
        id : expenses.length+1,
        title,
        category,
        amount
    };
    addExpenses(newExpense);
    document.getElementById("title").value="";
    document.getElementById("amt").value="";
});
document.getElementById("filtercategory").addEventListener("change",function(){
    const selectedcategory = this.value;
    if(selectedcategory==="All"){
        display(expenses);
    }
    else{
        const filteredExpenses = expenses.filter(expense =>{

            return expense.category === selectedcategory;
        });
        display(filteredExpenses);
    }
    
});
function deleteExpense(id){
    expenses = expenses.filter(expense => {
        return expense.id !== id;
    });
    display(expenses);
    update();
}
function generateReport(message){
    console.log(message);
    console.log("report generated");
}
const reportFunction =  generateReport.bind(
    null,
    "expense report"
);
reportFunction();

