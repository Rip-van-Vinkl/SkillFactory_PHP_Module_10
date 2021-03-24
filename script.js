let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


/* цифры с 1 до 9 и 0 */

document.getElementById('btn_1').addEventListener('click', function () {
      inputWindow.value += '1';
  })

document.getElementById('btn_2').addEventListener('click', function () {
      inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
      inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
      inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
      inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
      inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
      inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
      inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
      inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
      inputWindow.value += '0';
})


/* очистка */

document.getElementById('btn_clr').addEventListener('click', function () {
      lastOperand = 0;
      operation = null;
      inputWindow.value = '';
  })


/* разделитель */

document.getElementById('btn_sep').addEventListener('click', function () {
      inputWindow.value += '.';
  })

/* изментить +/- */

document.getElementById('btn_pm').addEventListener('click', function () {
      /*
      if(inputWindow.value === NaN) {
            inputWindow.value = 0
      }
      */
      inputWindow.value = '-' + parseFloat(inputWindow.value);
  })-


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

})