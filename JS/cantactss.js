let phone_number = document.querySelector("#phone_number");
let password = document.querySelector("#password");
let tokinaccess = localStorage.getItem("acccessTocin") 
console.log(tokinaccess);




async function login() {
    try {

        let body ={
            phone_number: phone_number.value,
            password: password.value,
        }
        let data = await fetch("https://asadbek6035.pythonanywhere.com/account/login/",
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'  
            },
            body: JSON.stringify(body)
          }
        )
        let res = await data.json();
        console.log(phone_number.value);
        console.log( password.value);
        
        
         console.log(res);
        if (res.success) {
          localStorage.setItem("acccessTocin", res.data.token.access);
          localStorage.setItem("refreshTocin", res.data.token.refresh);
          alert("Tizimga kirdingiz");
          window.location.pathname = `html/blog.html`;
      } else {
          alert("Login yoki parol noto‘g‘ri!");
      }
        
        // console.log();
        
        
    } catch (error) {
        alert("xatolik aniqlandi...")
        
    }
    
}