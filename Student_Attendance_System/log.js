let login=[];
fetch('login-details.json')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        return login=data;
    })
    .catch((error)=>{
        console.console.log("error");
    })
function display(){
    const logbox = document.getElementById("logbox");
    logbox.innerHTML+=`
    <div class=logincard>
        <h1>LOGIN</h1>
        <input type="text" id ="Username" placeholder="Username"><br>
        <input type="password" id ="Password" placeholder="Password"><br>
        <button id="loginbtn">LOGIN</button>
        <p id="message"></p>
    </div>
    <img class="login-img" src="assets/Login-img.jpg" alt="image" style="width=20px,height=10px">
        `;
        document.getElementById("loginbtn").addEventListener("click",check)
}
display();
function check(){
    const username=document.getElementById("Username").value;
    const password=document.getElementById("Password").value;
    console.log(username);
    console.log(password);
    const user=login.find((item)=>{
        return item.username===username &&
         item.password===password;
    });
    console.log(user);
    if(user){
        localStorage.setItem("username",username);
        window.location.href="stu.html";
    }
    else{
        document.getElementById("message").innerHTML="Invalid username or password"
    }
}