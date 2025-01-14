function removeFunction(){
    let myform=document.getElementById("form_container");
    myform.style.display="none"
}

const images = [
    '/assets/bg1.jpg',
    '/assets/bg2.jpg',
    '/assets/bg3.jpg'
];
let currentIndex = 0;
function changeBackgroundImage() {
    let header = document.getElementById("header_container")
    header.style.backgroundImage = `url(${images[currentIndex]})`;
    header.style.backgroundSize= '100% 100%';
    header.style.backgroundRepeat='no-repeat';
    header.style.zIndex='-1';
    currentIndex = (currentIndex + 1) % images.length; 
}
changeBackgroundImage();
setInterval(changeBackgroundImage, 20000);

let index=0;
const bgImages=[
    'https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionRoad.jpg',
    'https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionValley.webp'
];
let nav = document.getElementById("nav3");
let myform=document.getElementById("form_container");
let leftDiv=document.getElementById("left_form")
nav.addEventListener("click",()=>{
    myform.style.display="flex"
    let image = document.getElementById("fc_img_left")
    image.src="";
    image.src = `${bgImages[index]}`;
    index = (index + 1) % bgImages.length;
    image.style.transition="0.5s linear"
})
setInterval(() => {
    if (myform.style.display === "flex") { // Check if the form is visible
        let image = document.getElementById("fc_img_left");
        image.src = `${bgImages[index]}`;
        index = (index + 1) % bgImages.length;
    }
}, 3000);

let temp=0;
let login = document.getElementById("nav4_para")

    login.addEventListener("click",()=>{
        myform.style.display="flex"
        let image = document.getElementById("fc_img_left")
        image.src="";
        image.src = `${bgImages[index]}`;
        index = (index + 1) % bgImages.length;
        image.style.transition="0.5s linear"
    })

bgChange();
setInterval(bgChange, 3000);

