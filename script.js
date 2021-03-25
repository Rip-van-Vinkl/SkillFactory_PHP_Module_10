

let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const Memory1 = document.getElementById('Memory1');
const Memory2 = document.getElementById('Memory2');

document.addEventListener("DOMContentLoaded", ready);
function ready(event) {
    console.log("превед!!!");
    inputWindow.value = '0';
}



/* цифры с 1 до 9 и 0 */

document.getElementById('btn_1').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '1';
  })

  

document.getElementById('btn_2').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
      if (inputWindow.value === '0') {
            inputWindow.value = '';
      } 
      inputWindow.value += '0';
})


/* очистка */

document.getElementById('btn_clr').addEventListener('click', function () {
      lastOperand = 0;
      operation = null;
      inputWindow.value = '0';
      Memory1.innerHTML = '';
      Memory2.innerHTML = '';
  })

/* удаление последнего символа */

document.getElementById('btn_lastClr').addEventListener('click', function () {
      let string = inputWindow.value;
      if (string.length === 0) {
            inputWindow.value = '0';
      } else {
            let exp = string.slice(0, -1);
            inputWindow.value = exp;
      }
  })

/* разделитель */

document.getElementById('btn_sep').addEventListener('click', function () {
      let string = inputWindow.value;
      if (string.indexOf(".") != -1) {
            ;
      } else {
            inputWindow.value += '.';
      }
})


/* изментить +/- */

document.getElementById('btn_pm').addEventListener('click', function () {
      
      if(parseFloat(inputWindow.value) == 0) {
            inputWindow.value = 0
      } else if(parseFloat(inputWindow.value) > 0) {
            inputWindow.value = '-' + parseFloat(inputWindow.value);
      } else {
            inputWindow.value = parseFloat(inputWindow.value)*(-1);
      }
  })


/* математические операции */

document.getElementById('btn_sum').addEventListener('click', function () {
      lastOperand = parseFloat(inputWindow.value);
      operation = 'sum';
      inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
      lastOperand = parseFloat(inputWindow.value);
      operation = 'def';
      inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
      lastOperand = parseFloat(inputWindow.value);
      operation = 'mult';
      inputWindow.value = '';
})

document.getElementById('btn_divis').addEventListener('click', function () {
      lastOperand = parseFloat(inputWindow.value);
      operation = 'divis';
      inputWindow.value = '';
})

document.getElementById('btn_root').addEventListener('click', function () {
      inputWindow.value = parseFloat(inputWindow.value)**0.5;
})

document.getElementById('btn_degr').addEventListener('click', function () {
      lastOperand = parseFloat(inputWindow.value);
      operation = 'degree';
      inputWindow.value = '';
})



/* обработчик вычислений = */

document.getElementById('btn_calc').addEventListener('click', function () {
      if (operation === 'sum'){
            const result = lastOperand + parseFloat(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
      }  

      if (operation === 'def'){
            const result = lastOperand - parseFloat(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
      }  

      if (operation === 'mult'){
            const result = lastOperand * parseFloat(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
      }  

      if (operation === 'divis'){
            const result = lastOperand / parseFloat(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
      }

      if (operation === 'degree'){
            const result = lastOperand**parseFloat(inputWindow.value);
            operation = null;
            lastOperand = 0;
            inputWindow.value = result;
      }

            /* память */

            if (Memory1.innerHTML === '') {
                  Memory1.innerHTML = inputWindow.value;
            } else if(Memory2.innerHTML === ''){
                  Memory2.innerHTML = inputWindow.value;
            } else {
                  let localMemory = Memory2.innerHTML;
                  Memory1.innerHTML = Memory2.innerHTML;
                  Memory2.innerHTML = inputWindow.value;
            }

            document.getElementById('btn_М1').addEventListener('click', function () {
                  inputWindow.value = parseFloat(Memory1.innerHTML);
            })

            document.getElementById('btn_М2').addEventListener('click', function () {
                  inputWindow.value = parseFloat(Memory2.innerHTML);
            })

})


/* память */



