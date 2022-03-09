import './less/index.less'

// Your code goes here!
//Nav
const NavElem = document.querySelectorAll("nav a");
console.log(NavElem)

//1. onload
window.onload = function(evt){
const header = document.querySelector(".logo-heading")
header.textContent = "Get Ready To Go!"

}



const mainImage = document.querySelector(".intro img")
console.log(mainImage)
//content Section
const contentSection = document.querySelectorAll(".img-content")
console.log(contentSection)

const contentSectionH2 = document.querySelectorAll(".content-section h2")
console.log(contentSectionH2)


//Destination Content
const destinationImg = document.querySelector(".content-destination img")
console.log(destinationImg)
const contentDestination = document.querySelector(".content-destination h2")
console.log(contentDestination)

const destination = document.querySelectorAll(".destination h4")
console.log(destination)


const destinationBtn = document.querySelectorAll(".btn")


//2.click button update

destinationBtn[0].addEventListener("click", e =>{
    e.target.textContent = "I'm signing up!"
    e.stopPropagation()
    console.log("Sign up was started!")
})
 
destinationBtn[1].addEventListener('click', e =>{
    e.target.textContent = "I'm signing up!"
    e.stopPropagation()
    console.log("Sign up was started!")
})
destinationBtn[2].addEventListener('click', e =>{
    e.target.textContent = "I'm signing up!"
    e.stopPropagation()
    console.log("Sign up was started!")
})

//3. scroll event

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scroll1= window.scrollY;
    if (Math.ceil(scroll1) === scrollable){
        alert('You have reach the bottom!');
    }

});
 




