const toggle = document.getElementById('dark');
const body =document.querySelector('body');

toggle.addEventListener('click',function(){
    this.classList.toggle('ri-sun-fill');
    if(this.classList.toggle('ri-moon-fill')){
        body.style.background='f0f4f9';
        body.style.color='black';
        body.style.transition='1s';
    }else{
        body.style.background='black';
        body.style.color='#fff';
        body.style.transition='1s';
    }
})