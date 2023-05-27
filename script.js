const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

// Modal Open Function

const openModal=()=>{
    console.log("Modal in Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal Close Function

const closeModal=()=>{
    console.log("Modal in closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};