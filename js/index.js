function createDivs(number = 64){
    number *= number;
    for(let i = 0; i < number; i++){
        let divs = document.createElement(`div`);
        divs.classList = `block`;
        container.appendChild(divs);
        console.log(`loops ${i}`);
    }
}
const container = document.querySelector(`.container`);