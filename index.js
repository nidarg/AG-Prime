


// open/close sidebar

const sidebar = document.querySelector("#sidebar")
const openSidebarButton = document.querySelector("#nav-btn")
const closeButton = document.querySelector("#close-btn")

openSidebarButton.addEventListener("click",function(){
    sidebar.classList.add("show-sidebar")
})

closeButton.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar")
})

// close sidebar menu on screen resizing
const screenWidth = window.outerWidth
window.addEventListener("resize",function(){
    if (screenWidth > 768){
        sidebar.classList.remove("show-sidebar")
    }
})

    // scale gris elements on click
    const allGridBlocks = document.querySelectorAll('.grid-element')
    
    function scaleElem(arr,elem){
        arr.forEach(function(item){
            if (item !== elem && item.classList.contains('toggle')){
                item.classList.remove('toggle')
            }
        })
    }
    allGridBlocks.forEach(function(elem){
       
        elem.addEventListener('click',function(){
            scaleElem(allGridBlocks,elem)
            if(elem.classList.contains("toggle")){
                elem.classList.remove('toggle')

            }else{
                elem.classList.add('toggle')
               
            }
        })
    })