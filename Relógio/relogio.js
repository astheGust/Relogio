let h = () =>{
    let horas = new Date();
    return horas.getHours();
};
setInterval(() => {
    document.querySelector('[data-valor="horas"]').innerText = h();
}, 1000);

let m = () =>{
    let minutos = new Date();
    return minutos.getMinutes();
};
setInterval(() => {
    document.querySelector('[data-valor="minutos"]').innerText = m();
}, 1000);

let s = () =>{
    let segundos = new Date();
    return segundos.getSeconds();
};
setInterval(() => {
    document.querySelector('[data-valor="segundos"]').innerText = s();
}, 1000);

function primeiroExecute(){
    document.querySelector('[data-valor="horas"]').innerText = h();
    document.querySelector('[data-valor="minutos"]').innerText = m();
    document.querySelector('[data-valor="segundos"]').innerText = s();
}