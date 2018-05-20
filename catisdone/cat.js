document.addEventListener("DOMContentLoaded", () => {

    const cat1 = document.querySelector('#catimg1')
    const cat2 = document.querySelector('#catimg2')
    const cat3 = document.querySelector('#catimg3')
    const cat4 = document.querySelector('#catimg4')
    const cat5 = document.querySelector('#catimg5')
    const box1 = document.querySelector('.box1')

    const p1 = document.querySelector('.one')
    const p2 = document.querySelector('.two')
    const p3 = document.querySelector('.three')
    const p4 = document.querySelector('.four')
    const p5 = document.querySelector('.five')
    // cat = [cat1, cat2, cat3, cat4]
    // counts = [0,0,0,0]
    // for (cat of cats){
    //  cat.addEventListener('click' ,function(){
    //    for (count of counts){
    //        count.innerHTML++
    //    }
    //  })
    // }

    const count1 = document.querySelector('#click1')
    const count2 = document.querySelector('#click2')

    const catname2 = document.querySelector('.catname2')
    const catname1 = document.querySelector('.catname1')

    cat3.addEventListener('click', function () {
        count1.innerHTML++
    })
    cat1.addEventListener('click', function () {
        count1.innerHTML++
    })

    cat2.addEventListener('click', function () {
        count1.innerHTML++
    })
    cat4.addEventListener('click', function () {
        count1.innerHTML++
    })
    cat5.addEventListener('click', function () {
        count1.innerHTML++
    })

    p1.textContent = "CAT1";
    p2.textContent = "CAT2";
    p3.textContent = "CAT3";
    p4.textContent = "CAT4";
    p5.textContent = "CAT5";

 p1.addEventListener('click', function(e){
     document.addEventListener('.bigimg1 img').src = e.target,parentElement.querySelector('img').src;
     head.innerHTML=""
     head.textContent ++
 })





})

