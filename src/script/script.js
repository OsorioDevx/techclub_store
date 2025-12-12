


const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')


let active = 0;
const total = items.length  
let timer; //pra trocar os items que aparecem na tela automaticamente


function update(direction){
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(direction > 0){
        active = active + 1

        if(active === total){
            active = 0 
        }

    } 
    
    else if(direction < 0){
        active = active -1
        
        if(active < 0){
            active = total -1
        }

    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String (active + 1).padStart(2,'0') /* padStart adiciona um elemento antes e o padEnd
    depois, nesse caso só quero adicionar o 0 pra ficar 01, 02, 03, etc */

 

}

    clearInterval(timer)
   timer = setInterval(() => {
        update(1)
    }, 5000); //uma ação em um determinado tempo, no caso 5000 milisegundos = 5 segundos



prevButton.addEventListener('click', (event)=>{
    event.stopPropagation();
    update(-1);
}); // toda vez que o botão for clicado, ele executa a função update

nextButton.addEventListener('click', (event)=>{
    event.stopPropagation();
    update(+1);
});