let title = document.querySelector("#title");
let category = document.querySelector("#category");
let description = document.querySelector("#description");
let image = document.querySelector("#image");
let tocin = localStorage.getItem("acccessTocin");

async function addbloglist() {
    try {
        if (!tocin) throw new Error("ro'yhatdan o'tmagansiz");

        const bloc_add = new FormData();
        bloc_add.append("title", title.value);
        bloc_add.append("category", category.value);
        bloc_add.append("description", description.value);
        bloc_add.append("image", image.files[0]);

        //`FormData` ma'lumotlarini tekshirish
        for (let pair of bloc_add.entries()) {
            console.log(pair[0], pair[1]); 
        }

        let res = await fetch(
            'https://asadbek6035.pythonanywhere.com/blog/create/',
            {
             method: 'POST',
             headers: {
              "Authorization": `Bearer ${tocin}`,
             },
             body: bloc_add,
            }
           )
           res = await res.json()
           alert("Blog muvaffaqiyatli qo‘shildi!");
           console.log(res)
           
        

    } catch (error) {
        alert(error.message);
    }
}
