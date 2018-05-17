document.addEventListener("DOMContentLoaded", () => {

    const cat1 = document.querySelector('#catimg1')
    const count1 = document.querySelector('#click1')
    const count2 = document.querySelector('#click2')

    const box1 =document.querySelector('#boxcat1')
    const box2 =document.querySelector('#boxcat2')
    const catname2 =document.querySelector('.catname2')
    const cat2 = document.querySelector('#catimg2')
    const catname1 =document.querySelector('.catname1')
    cat1.addEventListener('click', function () {
        count1.innerHTML++
    })
    cat2.addEventListener('click', function () {
        count2.innerHTML++
    })
    catname1.textContent = "CAT1";
    catname2.textContent = "CAT2";

})