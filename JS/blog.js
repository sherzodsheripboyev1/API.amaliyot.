let title = document.querySelector("#title");
let category = document.querySelector("#category");
let description = document.querySelector("#description");
let image = document.querySelector("#image");
let tocin = localStorage.getItem("acccessTocin");

async function addbloglist() {
    try {
        if (!tocin) throw new Error("Ro'yxatdan o'tmagansiz!");
        if (!title.value.trim() || !category.value.trim() || !description.value.trim()) {
            throw new Error("Barcha maydonlarni to‘ldiring!");
        }
        if (!image.files[0]) throw new Error("Rasm tanlanmagan!");

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
           console.log(res)
        if (result.success) {
            alert("Blog muvaffaqiyatli qo‘shildi!");
        } else {
            alert("Xatolik: " + (result.message || "Noma'lum xatolik"));
        }

    } catch (error) {
        alert(error.message);
    }
}
