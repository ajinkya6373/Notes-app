console.log("welcome");
showNotes();
Important()
// If user add note add to its in local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    let today = new Date();
    let year = today.getFullYear();
    let mon = today.getMonth()+1;
    let date = today.getDate();
    let fetch =date+"-"+mon+"-"+year;
    // console.log(fecha);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    myObj = {
        title: addTitle.value,
        text: addTxt.value,
        important: "noImp",
        time: fetch,

    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    // console.log(notesObj);
    showNotes();
    Important()

});


let addBtn1 = document.getElementById("addBtn1");
addBtn1.style.background="MediumSeaGreen";
addBtn1.style.color="white";
addBtn1.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let today = new Date();
    let year = today.getFullYear();
    let mon = today.getMonth()+1;
    let date = today.getDate();
    let fetch =date+"-"+mon+"-"+year;
    addTitle.style.color = "green";
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    myObj = {
        title: addTitle.value,
        text: addTxt.value,
        important: "Imp",
        time: fetch,

    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    // console.log(notesObj);
    showNotes();
    Important()

});

let addBtn3 = document.getElementById("addBtn3");
addBtn3.style.background="Tomato"
addBtn3.style.color="white";
addBtn3.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    addTitle.style.color = "green";
    let today = new Date();
    let year = today.getFullYear();
    let mon = today.getMonth()+1;
    let date = today.getDate();
    let fetch =date+"-"+mon+"-"+year;
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    myObj = {
        title: addTitle.value,
        text: addTxt.value,
        important: "dead",
        time: fetch,

    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    // console.log(notesObj);
    showNotes();
    Important()

});

// This function show element from localStorage 

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` 
        <div class="noteCard my-2 mx-2 card  ${element.important}" style="width: 18rem;" >
        <div class="card-body">
        <span class="badge rounded-pill bg-secondary">${element.time}</span>
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete
             Note</button>
        </div>
    </div> `

    });

    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `You haven't add any note `
    }

}
function Important() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.forEach(function (element) {
        // console.log(element)
        let impo = element.important;
        let text = element.text;
        // console.log(impo)
        // console.log(text)

        let important = document.getElementsByClassName("Imp")

        Array.from(important).forEach(function (element) {
            if (impo == "Imp") {
                // console.log(element)
                element.style.background = "MediumSeaGreen"
                element.style.color = "white"
            }
        })

        let notImportant = document.getElementsByClassName("noImp");
        Array.from(notImportant).forEach(function (element) {
            if (impo == "noImp") {
                // console.log(element)
                element.style.background = "DodgerBlue"
                element.style.color = "black"
            }
        })

        let deadline = document.getElementsByClassName("dead");
        Array.from(deadline).forEach(function (element) {
            if (impo == "dead") {
                // console.log(element)
                element.style.background = "Tomato"
                element.style.color = "black"
            }
        })
    });

}

// Function to delete note
function deleteNote(index) {
    // console.log("deleting",index,"node")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    Important()

}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log("Input",inputVal);
    let noteCard = document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";

        }
        //  console.log(cardTxt);
    })
    Important()

})

