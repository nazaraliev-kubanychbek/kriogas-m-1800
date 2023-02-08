


let btn = document.querySelector(`.burger-btn`)

const burgerFunc = (menuClassName, showClassName) =>{
    let menu = document.querySelector(`.${menuClassName}`)

    if(menu.className.includes(showClassName)){
        menu.className = menuClassName
    } else{
        menu.className += ` ${showClassName}`
    }

}

btn.addEventListener("click", ()=>{
  burgerFunc('header-menu', 'header-menu-show')
})
