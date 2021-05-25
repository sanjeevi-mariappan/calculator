//container div
var container;
(function createContainer(){
    container=document.createElement('div');
    container.classList.add('container','w-25','bg-dark','border','border-dark','justify-content-center');
})();

//Calculator text
(function createCalculatorText(){
    let calculatorTextSpan=document.createElement('span');
    calculatorTextSpan.classList.add('fw-bolder', 'display-6','text-light');
    calculatorTextSpan.textContent='Calculator';
    container.appendChild(calculatorTextSpan);
})();

//line break
(function createLineBreak(){
    let hr=document.createElement('hr');
    container.appendChild(hr);
})();

//input div
(function createInputDiv(){
    let inputDivRow=document.createElement('div');
    inputDivRow.classList.add('row');
    let inputDivCol=document.createElement('div');
    inputDivCol.classList.add('col');
    let inputDiv=document.createElement('div');
    inputDiv.classList.add('bg-light','border-0','fs-2');
    inputDiv.setAttribute('id','input');
    inputDiv.setAttribute('style','min-height: 80px;overflow: hidden;');
    inputDivCol.appendChild(inputDiv);
    inputDivRow.appendChild(inputDivCol);
    container.appendChild(inputDivRow);
})();

//output div
(function createOutputDiv(){
    let inputDivRow=document.createElement('div');
    inputDivRow.classList.add('row');
    let inputDivCol=document.createElement('div');
    inputDivCol.classList.add('col');
    let inputDiv=document.createElement('div');
    inputDiv.classList.add('bg-light','border-0','fs-2','fw-bolder');
    inputDiv.setAttribute('id','output');
    inputDiv.setAttribute('onclick','copyOutputToInput()');
    inputDiv.setAttribute('style','min-height: 50px;overflow: hidden;');
    inputDivCol.appendChild(inputDiv);
    inputDivRow.appendChild(inputDivCol);
    container.appendChild(inputDivRow);
})();

var div=document.createElement('div');
div.classList.add('bg-transparent','p-1','h2');
container.appendChild(div);

//create button rows
function createButtonRows(symbols,ids){
    let [symbol1,symbol2,symbol3,symbol4]=symbols;
    let [id1,id2,id3,id4]=ids;
    let row1=document.createElement('div');
    row1.classList.add('row');
    let col1=document.createElement('div');
    let col2=document.createElement('div');
    let col3=document.createElement('div');
    let col4=document.createElement('div');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    let btn3=document.createElement('button');
    let btn4=document.createElement('button');
    btn1.classList.add('btn','btn-outline-success','border-0','w-100','btn-light','fw-bolder','text-dark');
    btn2.classList.add('btn','btn-outline-success','border-0','w-100','btn-light','fw-bolder','text-dark');
    btn3.classList.add('btn','btn-outline-success','border-0','w-100','btn-light','fw-bolder','text-dark');
    btn4.classList.add('btn','btn-outline-success','border-0','w-100','btn-light','fw-bolder','text-dark');
    btn1.innerHTML=symbol1;
    btn2.innerHTML=symbol2;
    btn3.innerHTML=symbol3;
    btn4.innerHTML=symbol4;
    btn1.setAttribute('id',id1);
    btn2.setAttribute('id',id2);
    btn3.setAttribute('id',id3);
    btn4.setAttribute('id',id4);
    col1.appendChild(btn1);
    col2.appendChild(btn2);
    col3.appendChild(btn3);
    col4.appendChild(btn4);
    row1.appendChild(col1);
    row1.appendChild(col2);
    row1.appendChild(col3);
    row1.appendChild(col4);
    col1.classList.add('col');
    col2.classList.add('col');
    col3.classList.add('col');
    col4.classList.add('col');
    div.appendChild(row1);
}

//create Button rows
createButtonRows(['MS','MR','M+','M-'],['store','read','mem_add','mem_sub']);
createButtonRows(['C','(',')','&lt--'],['clear','openBr','closeBr','backspace']);
createButtonRows(['1/x','x<sup>2</sup>','<sup>2</sup> &radic;x','/'],['inverse','squared','root','divide']);
createButtonRows(['7','8','9','*'],['seven','eight','nine','multiply']);
createButtonRows(['4','5','6','-'],['four','five','six','subtract']);
createButtonRows(['1','2','3','+'],['one','two','three','add']);
createButtonRows(['+/-','0','&#9679','='],['plusOrMinus','zero','dot','equals']);

document.body.append(container);

//add functions and event listeners
document.getElementById('clear').setAttribute('onclick',"clearEntry()");
document.getElementById('openBr').setAttribute('onclick',"appendInput('(')");
document.getElementById('closeBr').setAttribute('onclick',"appendInput(')')");
document.getElementById('backspace').setAttribute('onclick',"backspace()");

document.getElementById('inverse').setAttribute('onclick',"inverse()");
document.getElementById('squared').setAttribute('onclick',"square()");
document.getElementById('root').setAttribute('onclick',"squareRoot()");
document.getElementById('equals').setAttribute('onclick',"evalStr()");
document.getElementById('plusOrMinus').setAttribute('onclick',"plusOrMinus()");

document.getElementById('divide').setAttribute('onclick',"appendInput('/')");
document.getElementById('add').setAttribute('onclick',"appendInput('+')");
document.getElementById('subtract').setAttribute('onclick',"appendInput('-')");
document.getElementById('multiply').setAttribute('onclick',"appendInput('*')");

document.getElementById('one').setAttribute('onclick',"appendInput('1')");
document.getElementById('two').setAttribute('onclick',"appendInput('2')");
document.getElementById('three').setAttribute('onclick',"appendInput('3')");
document.getElementById('four').setAttribute('onclick',"appendInput('4')");
document.getElementById('five').setAttribute('onclick',"appendInput('5')");
document.getElementById('six').setAttribute('onclick',"appendInput('6')");
document.getElementById('seven').setAttribute('onclick',"appendInput('7')");
document.getElementById('eight').setAttribute('onclick',"appendInput('8')");
document.getElementById('nine').setAttribute('onclick',"appendInput('9')");
document.getElementById('zero').setAttribute('onclick',"appendInput('0')");
document.getElementById('dot').setAttribute('onclick',"appendInput('.')");

document.getElementById('store').setAttribute('onclick',"mem_save()");
document.getElementById('read').setAttribute('onclick',"mem_read()");
document.getElementById('mem_add').setAttribute('onclick',"mem_add()");
document.getElementById('mem_sub').setAttribute('onclick',"mem_minus()");


document.addEventListener('keypress', (event) => {
    let key = event.key==='1' || event.key==='2' || event.key==='3' || event.key==='4'
            || event.key==='5' || event.key==='6' || event.key==='7' || event.key==='8'
            || event.key==='9' || event.key==='0' || event.key===')' || event.key==='('
            || event.key==='+' || event.key==='-' || event.key==='*' || event.key==='/';
    let evals=event.key==='=';
    evals && evalStr();
    key && appendInput(event.key);
    !evals && !key && alert('only numbers and +, -, /, *, (, ) are allowed');
  }, false);

  document.addEventListener('keydown', (event) => {
    let bckspce=event.key==='Backspace';
    bckspce && backspace();
  }, false);


function getInputExpression() {
    return val = document.getElementById("input").innerText;
  }

  function getOutputExpression() {
    return document.getElementById("output").innerText;
  }
  
  function writeToInput(inExpression) {
    document.getElementById("input").innerText = inExpression;
  }
  
  function writeToOutput(outExpression) {
    if (outExpression === undefined || isNaN(parseFloat(outExpression)))
      document.getElementById("output").innerText = "0";
    else document.getElementById("output").innerText = outExpression;
  }
  
  function copyOutputToInput(){
    let val=document.getElementById("output").innerText;
    writeToInput(val);
  }
  
  function clearEntry() {
    writeToInput("");
    writeToOutput("");
  }
  
  function backspace() {
    var str = getInputExpression();
    writeToInput(str.substring(0, str.length - 1));
  }
  
  function evaluate() {
    var input = getInputExpression();
    if(input === '') 
       return 0;
    try {
      return eval(input);
    } catch {
        return 0;
    }
  }
  
  function inverse() {
    let num = parseFloat(evaluate());
    writeToInput(`(1/${num})`);
    writeToOutput(1 / num);
  }
  
  function square() {
    let num = parseFloat(evaluate());
    writeToInput(`${num}*${num}`);
    writeToOutput(num * num);
  }
  
  function appendInput(character) {
    writeToInput(getInputExpression() + character);
  }
  
  function evalStr() {
    writeToOutput(evaluate());
  }
  
  function squareRoot() {
    let num = parseFloat(evaluate());
    writeToInput(`(Math.sqrt(${num}))`);
    writeToOutput(Math.sqrt(num));
  }
  
  function plusOrMinus() {
  let val=parseFloat(evaluate());
    writeToInput(eval(-val));
    writeToOutput(eval(-val));
  }

  function mem_save(){
    sessionStorage.setItem("last_value", getOutputExpression());
  }

  function mem_read(){
      appendInput(sessionStorage.getItem("last_value"));
 }

function mem_add(){
      writeToOutput(parseFloat(sessionStorage.getItem("last_value"))+parseFloat(getOutputExpression()));
}
function mem_minus(){
    writeToOutput(parseFloat(getOutputExpression())-parseFloat(sessionStorage.getItem("last_value")));
}
  
