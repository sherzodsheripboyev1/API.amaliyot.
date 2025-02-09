let addblog = document.querySelector("#assblog")
 let tocin = localStorage.getItem("acccessTocin")
 let img = document.querySelector("#img")
 let title = document.querySelector("#title")
 let data = document.querySelector("#data")
 let discription = document.querySelector("#discription")
 let commetid = document.querySelector("#commetid")
 let commentdata = document.querySelector("#commentdata")
 let comment = document.querySelector("#comment")
let id = new URLSearchParams(window.location.search)
id= id.get("id")
// console.log(id);





async function addblogess() {
    let data = await fetch(`https://asadbek6035.pythonanywhere.com/blog/retrieve/${id}`,
        {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tocin}`

            }
        }
    )
    let res = await data.json();
    // console.log(res);
    
    img.src = res.image;  // Rasmingizni to'g'ri ko'rsatish
    title.textContent = res.title;
    data.textContent = res.date_created;
    discription.textContent = res.description;

}

addblogess()
  


async function getByCommit(){
    commetid.innerHTML = ""
    let res = await fetch(`https://asadbek6035.pythonanywhere.com/blog/comment/list?blog_id=${id}`,
        {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tocin}`
            }
        }
    );
    res = await res?.json();
    console.log(res);
    

    res.forEach(element => {

        let div = document.createElement("div")
         body = `
        <p id="comment1" class="text-sm flex flex-col gap-5 font-bold   border-2 border-[#6c757d] px-4 py-2 m-6 rounded-xl">${element.description}
        <span id="commentdata" class="text-sm text-[#6c757d] text-right">${element.date_created}</span>
        </p>`
        div.innerHTML = body;
        commetid.appendChild(div)
        
    });


    
}

getByCommit()
async function addCommit(){
     body = {
        description: comment.value,
        blog: id
     }

     let res = await fetch(`https://asadbek6035.pythonanywhere.com/blog/comment/post/?=${id}`,
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${tocin}`
            },
            body: JSON.stringify(body)
        }
    )
    res = await res.json();
    getByCommit()
    comment.value = "" 

}