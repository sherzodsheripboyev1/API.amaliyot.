let full_name = document.querySelector("#full_name");
let phone_number = document.querySelector("#phone_number");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let avatar = document.querySelector("#avatar");
// console.log("salomat....");







async function regestratsiya() {

    try {


        if (password.value !== password2.value) throw new Error("Parolni qayta kiriting...")


        const form_data = new FormData(); {
            form_data.append('full_name', full_name.value);
            form_data.append('phone_number', phone_number.value);
            form_data.append('password', password.value);
            form_data.append('password2', password2.value);
            form_data.append('avatar', avatar.files[0]);



            let data = await fetch(`https://asadbek6035.pythonanywhere.com/account/register/`,
                { method: "POST", 
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${tocin}`
                    },
                    body: form_data,
                })
                let res = await data.json();
                console.log(data);
                if(res.success){
                    alert("Ro'yxatdan o'tdingiz!");
                    full_name.value = "";
                    phone_number.value = "";
                    password.value = "";
                    password2.value = "";
                    avatar.value = "";
                    window.location.assign("http://127.0.0.1:5500/html/cantactss.html");
                }
        }

    }
    catch (error) {
        alert(error.message)


    }






    // let body = {
    //     full_name: full_name.value,
    //     phone_number: phone_number.value,
    //     password: password.value, 
    //     password2:  password2.value,
    //     avatar:  avatar
    // };
    // console.log(body);

}