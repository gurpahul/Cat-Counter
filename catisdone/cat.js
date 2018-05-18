document.addEventListener("DOMContentLoaded", () => {

    const cat1 = document.querySelector('#catimg1')
    const cat2 = document.querySelector('#catimg2')
    const cat3 = document.querySelector('#catimg3')
    const cat4 = document.querySelector('#catimg4')

    cat = [cat1, cat2, cat3, cat4]
    counts = [0,0,0,0]
    for (cat of cats){
     cat.addEventListener('click' ,function(){
       for (count of counts){
           count.innerHTML++
       }
     })
    }

    const count1 = document.querySelector('#click1')
    const count2 = document.querySelector('#click2')

    const catname2 = document.querySelector('.catname2')
    const catname1 = document.querySelector('.catname1')
    
    cat1.addEventListener('click', function () {
        count1.innerHTML++
    })
    
    cat2.addEventListener('click', function () {
        count2.innerHTML++
    })
    
    catname1.textContent = "CAT1";
    catname2.textContent = "CAT2";

})