const binary = document.getElementById('binary');
const btn = document.querySelector('.btn');
const decimal = document.querySelector('.result');


const convert = () => {
    const other = [2,3,4,5,6,7,8,9]
    const val = binary.value;
    const len = val.length;
    let des = 0;
    for (let i = 0; i < len; i++) {
        des = des + val[i] * (2**((len - 1) - i))
    }
     decimal.textContent = `Decimal No : ${des}`
}
btn.addEventListener('click', function(e){
    e.preventDefault();
    convert()
})