
import bootstrap from "bootstrap";

const sumRange = document.getElementById('sum__range');
// const mountRange = document.getElementById('mount__range');
const inputField = document.getElementById('count');

inputField.addEventListener('input',()=>{
    sumRange.value = inputField.value
});

sumRange.addEventListener('input',()=>{
    inputField.value = sumRange.value
})


