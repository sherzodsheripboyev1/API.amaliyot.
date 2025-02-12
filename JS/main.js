let addclaslist = document.querySelector("#addclaslist")
let addclaslist2 = document.querySelector("#addclaslist2")
let menu_24 = document.querySelector("#menu_24");
let malumotler = document.querySelector("#malumotler");
let close_malumotler = document.querySelector("#close_malumotler");

menu_24.addEventListener("click", function () {
    malumotler.classList.remove("hidden");
    console.log("salomat");

});

close_malumotler.addEventListener("click", function () {
    malumotler.classList.add("hidden");
    console.log("");

});




function getaddlist() {
    fetch(`https://asadbek6035.pythonanywhere.com/blog/list/`, { method: "GET" })
        .then(response => response.json())
        .then(response => {
            addclaslisted(response)
            addclaslistaa(response)
            console.log(response);


        })

}
getaddlist()


function addclaslisted(rendr){
    rendr.forEach(element => {
        let div = document.createElement("div")
        box = `
            <div class="flex gap-3 items-center m-3">
            <img class="w-[50%] h-[300px]" src="${element.image}" alt="${element.title}">
            <div class="w-[46%] p-4 ">
                <button onclick="batafsilblog('${element.id}')"><h2 class="text-[22px] font-bold text-bleck hover:text-[#dc3545]">${element.title}</h2></button>
                <p class="text-[12px] my-3 font-bold">${element.date_created}</p>
                <p class="font-bold text-[#6c757d]">${element.description}</p>
            </div>
        </div>`
        div.innerHTML = box
        addclaslist.appendChild(div);


    });
}
function addclaslistaa(rendr) {
    rendr.forEach(element => {
        let div = document.createElement("div")
        box = `
            <div class="flex gap-3 items-center m-3">
            <img class="w-[30%] rounded-[50%]" src="${element.image}" alt="${element.title}">
            <div class="w-[68%] p-4 ">
                <button"><h2 class="text-[14px] font-bold text-bleck hover:text-[#dc3545]">${element.title}</h2></button>
                <p class="text-[10px] text-[#6c757d] my-3 font-bold">${element.date_created}</p>
                <!-- <p class="font-bold text-[#6c757d]">${element.description}</p> -->
            </div>
        </div>`
        div.innerHTML = box
        addclaslist2.appendChild(div);
        
    });
}

function batafsilblog(blogId) {
    window.location.href = `html/blogss.html?id=${blogId}`;
    console.log(element.id);
    
}

