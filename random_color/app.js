// click
// change the color
// random color
// display that color
    // text color
    // rgb color


      


const color = document.querySelector('.btn')
color.addEventListener('click', changeColor)


function changeColor(){
    document.querySelector('body').style.background = rgb()
    const p =document.querySelector('p') 
    p.innerText = rgb ()
    p.style.color = "white"
}


function rgb(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g}, ${b}`;
}