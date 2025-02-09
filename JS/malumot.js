let isid = document.getElementById("isid");
let fish = document.getElementById("fish");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let citi = document.getElementById("citi");
let brith = document.getElementById("brith");

let tocin = localStorage.getItem("acccessTocin")


if(tocin){
    matchMediaType()
}else{
    alert("Ro'yxatdan o'tmagansiz")
    // window.location.href = "http://127.0.0.1:5500/html/login.html"
}
  async function  matchMediaType(){
    let data = await fetch(`https://asadbek6035.pythonanywhere.com/account/me/`,
        {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tocin}`
            }
        }
    );
    data = await data.json();
    console.log(data);
    isid.textContent = data.id
    fish.textContent = data.full_name
    tel.textContent = data.phone_number
    email.textContent = data.email
    citi.textContent = data.town_city
    brith.textContent = data.date_birth
  }
  