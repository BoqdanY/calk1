let a,b,end,inp1;

let p = document.getElementById('out');

function sum(){
	a = document.getElementById('num1').value;
	a = parseInt(a);
	b = document.getElementById('num2').value;
	b = parseInt(b);
	end = a + b;
 
	p.innerHTML ='Сума = ' + end;
}

function riz(){
	a = document.getElementById('num1').value;
	a = parseInt(a);
	b = document.getElementById('num2').value;
	b = parseInt(b);
	end = a - b;
 
	p.innerHTML ='Різниця = ' + end;
}

function mno(){
	a = document.getElementById('num1').value;
	a = parseInt(a);
	b = document.getElementById('num2').value;
	b = parseInt(b);
	end = a * b;
 
	p.innerHTML = 'Добуток = ' + end;
}

function dil(){
	a = document.getElementById('num1').value;
	a = parseInt(a);
	b = document.getElementById('num2').value;
	b = parseInt(b);
	if (b == 0) {
		alert('Ділить на 0 не можна');
	}
	end = a / b;
 
	p.innerHTML = 'Ділення = ' + end;
}


function fun1(){
	let inp = document.getElementById('in1')
	inp.innerHTML = '1';
}