document.addEventListener("DOMContentLoaded", () => {

    const cat = document.querySelector('#catimg')
    const count = document.querySelector('#click')
    
    cat.addEventListener('click', function(){
    count.innerHTML++
    })
})
