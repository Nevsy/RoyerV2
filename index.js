const element = document.querySelector("body")
const r = document.querySelector(':root')

function toggleColor(){
    if(!element.classList.contains("lightMode")){
        r.style.setProperty('--light', '#fffef0')
        r.style.setProperty('--dark', '#292929')
    }
    else{
        r.style.setProperty('--light', '#292929')
        r.style.setProperty('--dark', '#fffef0')
    }

    element.classList.toggle("lightMode")
}

const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
})